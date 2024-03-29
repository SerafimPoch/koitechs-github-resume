"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FormField } from "./ui/FormField";
import {
  HomeContainer,
  HomeContent,
  HomeDescription,
  HomeFormWrapper,
  HomeImageWrapper,
  HomeTitle,
  HomeErrorText,
} from "./styles";
import { useGitHubUser } from "./api";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const { isLoading, isError, isFetching } = useGitHubUser(username);

  const handleSubmit = (values: any) => {
    const githubUsername = values.githubUsername;
    setUsername(githubUsername);
  };

  useEffect(() => {
    if (!isLoading && !isError) {
      router.push(`/${username}`);
    }
  }, [isLoading, isError, username, router]);

  return (
    <HomeContainer>
      <HomeImageWrapper>
        <Image
          src="/employee.png"
          height={256}
          width={256}
          priority
          alt="employee"
        />
      </HomeImageWrapper>
      <HomeContent>
        <HomeTitle>Welcome to GitHub Resume Creator!</HomeTitle>
        <HomeDescription>
          GitHub Resume Creator is a tool that helps you create a professional
          resume based on your GitHub profile and repositories.
          <br /> Simply input your GitHub username in the field below and click
          &quot;Create&quot; to get started.
        </HomeDescription>
      </HomeContent>
      <HomeFormWrapper>
        <FormField
          handleSubmit={handleSubmit}
          isLoading={isLoading || isFetching}
        />
        <HomeErrorText>{isError && "Wrong username"}</HomeErrorText>
      </HomeFormWrapper>
    </HomeContainer>
  );
}
