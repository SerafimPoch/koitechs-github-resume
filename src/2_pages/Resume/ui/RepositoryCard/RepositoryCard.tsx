import { format } from "date-fns";
import { RepositoryCardLink, RepositoryCardWrapper } from "./styles";

interface TRepositoryCard {
  data: {
    name: string;
    htmlUrl: string;
    description: string | null;
    updatedAt: string;
  };
}

export function RepositoryCard({ data }: TRepositoryCard) {
  const { name, htmlUrl, description, updatedAt } = data;
  return (
    <RepositoryCardWrapper>
      <RepositoryCardLink
        href={htmlUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
      </RepositoryCardLink>
      <p>
        <strong>Description:</strong> {description}
      </p>
      <p>
        <strong>Last updated</strong>:{" "}
        {format(new Date(updatedAt), "MMMM dd, yyyy")}
      </p>
    </RepositoryCardWrapper>
  );
}
