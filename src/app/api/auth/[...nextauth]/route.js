import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Hardcoded admin login (you can replace with DB check)
        if (
          credentials.email === "admin@example.com" &&
          credentials.password === "admin123"
        ) {
          return { id: "1", name: "Admin User", email: "admin@example.com", role: "admin" };
        }
        return null;
      }
    })
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    }
  },
  pages: {
    signIn: "/login"
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
