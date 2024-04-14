import NextAuth from "next-auth/next";

import Cognito from "next-auth/providers/cognito";
import { NextAuthOptions } from "next-auth";

const authOptions: NextAuthOptions = {
  providers: [
    Cognito({
      clientId: process.env.COGNITO_CLIENT_ID || "",
      clientSecret: process.env.COGNITO_CLIENT_SECRET || "",
      issuer: process.env.COGNITO_ISSUER,
      authorization: {
        params: {
          scope: "openid",
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user, account, profile }) {
      return { ...token, ...user, ...account, ...profile };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }; // authOptions
