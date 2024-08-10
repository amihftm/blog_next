import GithubProvider from "next-auth/providers/github";
export const authOptions = [
  GithubProvider({
    clientId: process.env.GITHUB_ID as string,
    clientSecret: process.env.GITHUB_SECRET as string,
  }),
];
