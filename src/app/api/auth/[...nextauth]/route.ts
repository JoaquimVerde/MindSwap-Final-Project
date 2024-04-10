import NextAuth from "next-auth/next";

import Cognito from "next-auth/providers/cognito";

const handler = NextAuth({
    providers: [
        Cognito({
          clientId: "3qn4vfitu65korf49pnrp1pt24",
          clientSecret: "1hv8omvqphcucpn2nc3nt78fkk59n70qg375ef39rbkjr5irki58",
          issuer: "https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_X3fg9Dyu0",
        })
      ]

})

export { handler as GET, handler as POST}