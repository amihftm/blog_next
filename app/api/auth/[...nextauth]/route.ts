import { authOptions } from "@/utils/auth";
import prisma from "@/utils/connect";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth"
import { Adapter } from "next-auth/adapters";

const handler = NextAuth({
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: authOptions,
  callbacks: {
    session: async({session, token}) => {
      if (session?.user) {
        session.user.email = token.sub
      }
      return session
    }, jwt: async({account, token, user}) =>{
      if(account) {
        token.userID = user.id
      }
      return token
    }
  }, session: {
    strategy: 'jwt'
  }
});

export { handler as GET, handler as POST }