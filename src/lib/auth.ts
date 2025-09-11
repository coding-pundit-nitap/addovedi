import GoogleProvider from "next-auth/providers/google";
import type  {AuthOptions} from "next-auth";
import { Session } from "inspector/promises";

export const authOptions:AuthOptions={
        providers:[
            GoogleProvider({
                clientId:process.env.GOOGLE_CLIENT_ID!,
                clientSecret:process.env.GOOGLE_CLIENT_SECRET!,
            }),
        ],
        session:{
            strategy:"jwt",
        },
        pages:{
            signIn:"/login",
        },
}