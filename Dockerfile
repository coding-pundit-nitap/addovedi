# ==============================================================================
# ---- Base (BUILD ONLY) ----
# ==============================================================================
FROM node:24-alpine AS base
WORKDIR /app

# Build-time packages ONLY (curl allowed here, NOT in runtime)
RUN apk add --no-cache libc6-compat openssl curl dumb-init

# Enable and activate pnpm.
RUN corepack enable && corepack prepare pnpm@latest --activate


# ==============================================================================
# ---- Dependencies Stage ----
# ==============================================================================
# This stage installs all dependencies (prod and dev).
FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --ignore-scripts


# ==============================================================================
# ---- Builder ----
# ==============================================================================
# This stage builds the Next.js application for production.
FROM base AS builder
ENV NODE_ENV=production

# Copy dependencies from the 'deps' stage.
COPY --from=deps /app/node_modules ./node_modules
# Copy the rest of the application source code.
COPY . .

# Accept build arguments for Next.js public environment variables.
ARG NEXT_PUBLIC_API_URL
ARG DATABASE_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV DATABASE_URL=$DATABASE_URL

# Build the application.
RUN pnpm prisma generate
RUN pnpm build
# Remove development dependencies to reduce image size.
RUN pnpm prune --prod --ignore-scripts


# ==============================================================================
# ---- Runner Stage ----
# ==============================================================================
FROM node:24-alpine AS runner
WORKDIR /app

# Runtime packages ONLY (NO curl, NO wget)
RUN apk add --no-cache libc6-compat openssl dumb-init

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Non-root user
RUN addgroup -S app && adduser -S app -G app -h /home/app -s /sbin/nologin

# Copy built output
COPY --from=builder --chown=app:app /app/public ./public
COPY --from=builder --chown=app:app /app/.next ./.next
COPY --from=builder --chown=app:app /app/node_modules ./node_modules
COPY --from=builder --chown=app:app /app/package.json ./package.json
COPY --from=builder --chown=app:app /app/prisma ./prisma
COPY --chown=app:app ./scripts/entrypoint.sh ./scripts/entrypoint.sh

RUN chmod 555 ./scripts/entrypoint.sh && \
    find node_modules/.prisma/client -type f -name "query_engine-*" -exec chmod +x {} \;

USER app
EXPOSE 3000

ENTRYPOINT ["dumb-init", "--", "./scripts/entrypoint.sh"]
CMD ["node_modules/.bin/next", "start"]
