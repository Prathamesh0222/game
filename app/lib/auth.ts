import CredentialsProvider from "next-auth/providers/credentials";
import { SigninSchema } from "./schema";
import { prisma } from "@/config/prisma";
import bcrypt from "bcryptjs";
import { JWT } from "next-auth/jwt";
import { Session, User } from "next-auth";

export const authOptions = {
  session: {
    strategy: "jwt" as const,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          type: "string",
          placeholder: "abc@example.com",
          label: "Email",
        },
        password: {
          type: "password",
          placeholder: "12345678",
          label: "Password",
        },
      },
      async authorize(credentials) {
        const parsedData = SigninSchema.safeParse(credentials);

        if (!parsedData.success) {
          return null;
        }

        const { email, password } = parsedData.data;

        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        if (!user) {
          return null;
        }

        const comparePassword = await bcrypt.compare(password, user.password);

        if (!comparePassword) {
          throw new Error("Password is incorrect");
        }

        return {
          id: user.id,
          email: user.email,
          username: user.username,
        };
      },
    }),
  ],
  pages: {
    signIn: "/api/signin",
  },
  secrets: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.username = token.username;
      return session;
    },
  },
};
