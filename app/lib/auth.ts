// src/lib/auth.ts
import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"

const scopes = [
  "user-read-email",
  "user-read-private",
  "user-top-read",
  "user-read-recently-played",
  "user-library-read",
  "playlist-read-private",
  "playlist-modify-public",
  "playlist-modify-private",
  "streaming",
  "user-read-playback-state",
  "user-modify-playback-state"
].join(" ")

const authOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID!,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
      authorization: {
        params: { scope: scopes }
      }
    })
  ],
  callbacks: {
    async jwt({ token, account }: any) {
      if (account) {
        token.accessToken = account.access_token
        token.refreshToken = account.refresh_token
        token.expiresAt = account.expires_at
      }
      return token
    },
    async session({ session, token }: any) {
      session.accessToken = token.accessToken
      session.error = token.error
      return session
    }
  },
  pages: {
    signIn: "/auth/signin",
  }
}

export default NextAuth(authOptions)