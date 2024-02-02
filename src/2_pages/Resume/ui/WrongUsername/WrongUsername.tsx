import Image from "next/image";
import { WrongUsernameContainer, WrongUsernameText } from "./styles";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export function WrongUsername() {
  const router = useRouter();

  const handleHomePageClick = () => router.push("/");

  return (
    <WrongUsernameContainer>
      <Image src="/robot.png" height={256} width={256} alt="robot" priority />
      <WrongUsernameText>
        The username you have entered does not exist.
      </WrongUsernameText>
      <Button variant="contained" onClick={handleHomePageClick} sx={{ mt: 2 }}>
        Home page
      </Button>
    </WrongUsernameContainer>
  );
}
