import axios from "redaxios";
import { useQuery } from "react-query";
import humps from "humps";
import { GitHubUser, githubUserSchema } from "./types";
import { BASIC_API_PATH } from "@/6_shared/constants";

export const useGitHubUser = (username: string | null) => {
  return useQuery<GitHubUser>(
    ["githubUser", username],
    async () => {
      if (!username) return {} as GitHubUser;

      const { data } = await axios.get(`${BASIC_API_PATH}/users/${username}`);
      const camelizedData = humps.camelizeKeys(data) as GitHubUser;
      const response = githubUserSchema.safeParse(camelizedData);

      if (!response.success) {
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
