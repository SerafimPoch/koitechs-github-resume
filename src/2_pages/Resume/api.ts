import { useQuery } from "react-query";
import axios from "redaxios";
import humps from "humps";
import { GitHubRepo, repoSchema } from "./types";
import { z } from "zod";

export const useGitHubRepos = (username: string | null) => {
  return useQuery<GitHubRepo[], Error>( // Обратите внимание на GitHubRepo[]
    ["githubRepos", username],
    async () => {
      if (!username) return [];

      const { data } = await axios.get(
        `https://api.github.com/users/${username}/repos`
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
