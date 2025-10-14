# ---- Stage 1: Builder ----

# This stage installs dependencies and builds the Next.js app.

FROM node:20-alpine AS builder



# Set working directory

WORKDIR /app



RUN apk add --no-cache libc6-compat openssl curl dumb-init && \

    apk upgrade && \

    rm -rf /var/cache/apk/*



RUN corepack enable && corepack prepare pnpm@latest --activate



# Copy dependency definition files

COPY package.json pnpm-lock.yaml ./



# Install dependencies. The postinstall script `prisma generate` will run here.

RUN pnpm install --frozen-lockfile --ignore-scripts



# Copy the rest of the application source code

COPY . .



# Accept build arguments for Next.js public environment variables.

ARG NEXT_PUBLIC_API_URL

ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL



# Build the Next.js application for production

RUN pnpm prisma generate

RUN pnpm build



RUN pnpm prune --prod --ignore-scripts



# ---- Stage 2: Runner ----

# This stage creates the final, lightweight image to run the app.

FROM node:20-alpine AS runner

WORKDIR /app



RUN apk add --no-cache libc6-compat openssl curl dumb-init && \

    apk upgrade && \

    rm -rf /var/cache/apk/*



ENV NODE_ENV=production

ENV NEXT_TELEMETRY_DISABLED=1



# Create a non-root system user and group for security.

RUN addgroup --system --gid 1001 nodejs && \

    adduser --system --uid 1001 --ingroup nodejs --home /home/nextjs --shell /bin/false nextjs



# Create corepack cache directory with proper permissions for the non-root user.

RUN mkdir -p /home/nextjs/.cache/node/corepack && \

    chown -R nextjs:nodejs /home/nextjs/.cache



# Copy built app artifacts from the builder stage

COPY --from=builder --chown=nextjs:nodejs /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next

COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules

COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json

COPY --from=builder --chown=nextjs:nodejs /app/prisma ./prisma





# RUN chmod -R u=rwX,go=rX /app





# RUN chmod 555 chmod +x /app/node_modules/.bin/* && \

#     find /app/node_modules/.prisma/client -name "query_engine-*" -exec chmod +x {} \;





# Switch to the non-root user

USER nextjs



EXPOSE 3000



ENTRYPOINT ["dumb-init", "--"]



CMD ["node_modules/.bin/next", "start"]

