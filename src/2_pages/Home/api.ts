import { z } from "zod";
import axios from "redaxios";
import { useQuery } from "react-query";
import humps from "humps";

const githubUserSchema = z.object({
  login: z.string(),
  id: z.number(),
  nodeId: z.string(),
  avatarUrl: z.string().url(),
  gravatarId: z.string(),
  url: z.string().url(),
  htmlUrl: z.string().url(),
  followersUrl: z.string().url(),
  followingUrl: z.string().url(),
  gistsUrl: z.string().url(),
  starredUrl: z.string().url(),
  subscriptionsUrl: z.string().url(),
  organizationsUrl: z.string().url(),
  reposUrl: z.string().url(),
  eventsUrl: z.string().url(),
  receivedEventsUrl: z.string().url(),
  type: z.string(),
  siteAdmin: z.boolean(),
  name: z.string().nullable(),
  company: z.string().nullable(),
  blog: z.string().url().nullable(),
  location: z.string().nullable(),
  email: z.string().nullable(),
  hireable: z.boolean().nullable(),
  bio: z.string().nullable(),
  twitterUsername: z.string().nullable(),
  publicRepos: z.number(),
  publicGists: z.number(),
  followers: z.number(),
  following: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

type GitHubUser = z.infer<typeof githubUserSchema>;

export const useGitHubUser = (username: string | null) => {
  return useQuery<GitHubUser>(
    ["githubUser", username],
    async () => {
      if (!username) return {} as GitHubUser;

      const { data } = await axios.get(
        `https://api.github.com/users/${username}`
      );
      const camelizedData = humps.camelizeKeys(data) as GitHubUser;

      if (!githubUserSchema.safeParse(camelizedData).success) {
        console.log("Invalid GitHub user api response structure");
        return {} as GitHubUser;
      }

      return camelizedData;
    },
    {
      enabled: !!username,
      retry: false,
    }
  );
};
