import { getAuth, signOut } from "firebase/auth";
import router from "next/router";
import { ButtonVariants, LinkVariants } from "../../enums";
import { app } from "../../utils/firebase";
import { Button } from "../Button";
import { Link } from "../Link";
import { ItemMobileNavigation } from "./";
import {
  ContainerButtonsSC,
  ContainerLinks,
  StyledRightNavigation,
} from "./styles";
import { IRightNavigationProps } from "./types";

export const RightNavigation = ({ isOpen, data }: IRightNavigationProps) => {
  const handleClick = () => {
    const auth = getAuth(app);
    signOut(auth)
      .then(async () => {
        localStorage.removeItem("authUser");
        await router.push("/signin");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <StyledRightNavigation isOpen={isOpen}>
      <ContainerLinks>
        {data.map((link, index) => (
          <ItemMobileNavigation link={link} key={index} />
        ))}
      </ContainerLinks>
      <ContainerButtonsSC>
        <Button
          handleClick={handleClick}
          type="submit"
          variant={ButtonVariants.primary}
        >
          Logout
        </Button>

        <Link
          href="/whitepacefree"
          text="Try Whitepace free"
          variant={LinkVariants.linkMedium}
        />
      </ContainerButtonsSC>
    </StyledRightNavigation>
  );
};
