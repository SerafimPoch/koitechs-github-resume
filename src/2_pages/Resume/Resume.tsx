"use client";

import { usePathname } from "next/navigation";
import { format } from "date-fns";
import { useMemo } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useGitHubUser } from "../Home";
import WrongUsername from "./ui/WrongUsername";
import LoaderSpinner from "@/6_shared/Loader";
import {
  ResumeContainer,
  ResumeBasicInfoWrapper,
  ResumeNameText,
  ResumeGithubCardsWrapper,
  ResumeChartWrapper,
  ResumeChartMobileWrapper,
} from "./styles";
import { useGitHubRepos } from "./api";
import { transformReposToChartData } from "./model";
import RepositoryCard from "./ui/RepositoryCard";

const LangChart = dynamic(
  () => import("@/5_entities/LangChart").then((mod) => mod.LangChart),
  { ssr: false }
);

export default function Resume() {
  const pathname = usePathname();
  const username = pathname.substring(1);

  const {
    data: account,
    isLoading: accountLoading,
    isError: accountError,
  } = useGitHubUser(username);

  const { data: repos, isLoading: reposLoading } = useGitHubRepos(username);

  const isLoading = useMemo(
    () => accountLoading && reposLoading,
    [accountLoading, reposLoading]
  );

  const avatarUrl = useMemo(
    () => account?.avatarUrl || "/default-avatar.png",
    [account?.avatarUrl]
  );

  const membershipDate = useMemo(
    () =>
      format(
        account?.createdAt ? new Date(account?.createdAt) : new Date(),
        "MMMM dd, yyyy "
      ),
    [account?.createdAt]
  );

  const chartData = useMemo(
    () => transformReposToChartData(repos || []),
    [repos]
  );

  const reposCardsData = useMemo(
    () =>
      repos?.map(({ name, htmlUrl, description, updatedAt }) => ({
        name,
        htmlUrl,
        description,
        updatedAt,
      })),
    [repos]
  );

  console.log(chartData);

  return (
    <ResumeContainer>
      {accountError ? (
        <WrongUsername />
      ) : isLoading ? (
        <LoaderSpinner />
      ) : (
        <>
          <ResumeBasicInfoWrapper>
            <Image src={avatarUrl} height={100} width={100} alt="avatar" />
            <ResumeNameText>
              {account?.name} <br />
              Member since: {membershipDate} <br />
              Public repositories: {account?.publicRepos || 0}
              <br />
              Location: {account?.location}
            </ResumeNameText>
          </ResumeBasicInfoWrapper>
          <ResumeChartWrapper>
            <LangChart data={chartData} />
          </ResumeChartWrapper>
          <ResumeChartMobileWrapper>
            {chartData.map(({ name, value }) => (
              <p key={name}>
                {name} repositories: {value}
              </p>
            ))}
          </ResumeChartMobileWrapper>
          <ResumeGithubCardsWrapper>
            {reposCardsData?.map((e) => (
              <RepositoryCard key={e.name} data={e} />
            ))}
          </ResumeGithubCardsWrapper>
        </>
      )}
    </ResumeContainer>
  );
}
