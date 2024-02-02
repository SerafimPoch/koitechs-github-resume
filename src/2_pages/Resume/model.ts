import { GitHubRepo } from "./types";

export function transformReposToChartData(data: GitHubRepo[]) {
  const languageStats = data?.reduce((acc, { language }) => {
    if (!language) return acc;
    acc[language] = (acc[language] || 0) + 1;
    return acc;
  }, {} as any);

  const dataForChart = Object.keys(languageStats || {}).map((language) => ({
    name: language,
    value: languageStats[language],
  }));

  return dataForChart;
}
