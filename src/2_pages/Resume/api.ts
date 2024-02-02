import { useQuery } from "react-query";
import axios from "redaxios";
import humps from "humps";
import { z } from "zod";
import { GitHubRepo, repoSchema } from "./types";

export const useGitHubRepos = (username: string | null) => {
  return useQuery<GitHubRepo[], Error>(
    ["githubRepos", username],
    async () => {
      if (!username) return [];

      const { data } = await axios.get(
        `https://api.github.com/users/${username}/repos?sort=updated`
      );
      const camelizedData = humps.camelizeKeys(data);

      const result = z.array(repoSchema).safeParse(camelizedData);

      if (!result.success) {
        throw new Error("Invalid response structure");
      }

      return result.data;
    },
    {
      enabled: !!username,
      retry: false,
    }
  );
};
