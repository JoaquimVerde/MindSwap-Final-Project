import NextAuth from "next-auth/next";

import Cognito from "next-auth/providers/cognito";

const handler = NextAuth({
  providers: [
    Cognito({
      clientId: process.env.COGNITO_CLIENT_ID as string,
      clientSecret: process.env.COGNITO_CLIENT_SECRET as string,
      issuer: process.env.COGNITO_ISSUER,
    }),
  ],
  secret: process.env.NEXT_PUBLIC_SECRET,
});

export { handler as GET, handler as POST };
