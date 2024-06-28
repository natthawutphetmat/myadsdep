import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "admin" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          throw new Error('Credentials are missing');
        }
        
        try {
          const res = await fetch('https://bilapi.ads-webapp.com/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              number: credentials.username,
              password: credentials.password,
            }),
          });

          if (!res.ok) {
            throw new Error('Failed to login');
          }

          const data = await res.json();

          if (data.accessToken) {
            return { id: data.userId, name: data.name, email: data.email, token: data.accessToken };
          } else {
            return null;
          }
        } catch (error) {
          console.error('Authorize error:', error);
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
