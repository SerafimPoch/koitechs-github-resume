"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  HomeContainer,
  HomeContent,
  HomeDescription,
  HomeFormWrapper,
  HomeImageWrapper,
  HomeTitle,
} from "./styles";
import { useGitHubUser } from "./api";

const FormField = dynamic(
  () => import("./ui/FormField").then((mod) => mod.FormField),
  {
    ssr: false,
  }
);

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const { data, isLoading, refetch, isError } = useGitHubUser(username);

  const handleSubmit = (values: any) => {
    const githubUsername = values.githubUsername;

    router.push(`/${githubUsername}`);
  };

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
        <FormField handleSubmit={handleSubmit} isLoading={isLoading} />
      </HomeFormWrapper>
    </HomeContainer>
  );
}
