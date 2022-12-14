import styled from "@emotion/styled";
import { Colors, media } from "../../ui";
import { IStylesProps } from "./types";

export const StyledBurger = styled.button<IStylesProps>`
  display: none;
  ${media.LAPTOP} {
    position: absolute;
    top: 30%;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 2;

    &:focus {
      outline: none;
    }

    div {
      width: 2rem;
      height: 0.25rem;
      border-radius: 10px;
      transition: transform 0.3s linear, opacity 0.3s linear;
      background-color: ${Colors.WHITE};
      position: relative;
      transform-origin: 1px;

      :first-child {
        transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
      }

      :nth-child(2) {
        opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
        transform: ${({ isOpen }) =>
          isOpen ? "translateX(20px)" : "translateX(0)"};
      }

      :nth-child(3) {
        transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;
