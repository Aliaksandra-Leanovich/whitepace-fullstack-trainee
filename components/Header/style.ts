import styled from "@emotion/styled";
import { Colors } from "../../ui";
import { media } from "../../ui";

export const StyledHeaderSC = styled.header`
  width: 100%;
  z-index: 2;
  top: 0;
  left: 0;
  position: fixed;
  background-color: ${Colors.BLUE};
`;
export const WrapperSC = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
`;
export const ContainerSC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 220px;
  ${media.DESKTOP} {
    padding: 16px 34px;
  }
`;

export const LogoContainerSC = styled.a`
  max-width: 192px;
  cursor: pointer;
`;
