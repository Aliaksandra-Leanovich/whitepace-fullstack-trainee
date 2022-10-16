import Link from "next/link";
import React from "react";
import ArrowRightIcon from "public/icons/arrow-right.svg";
import { Arrow, LinkSC } from "./styles";

export enum LinkVariants {
  linkSmall = "linkSmall",
  linkMedium = "linkMedium",
  linkLarge = "linkLarge",
}

export interface ILink {
  href: string;
  text: string;
  variant: LinkVariants;
}

export const LinkTemplate = ({ href, text, variant }: ILink) => {
  return (
    <Link href={href}>
      <LinkSC variant={variant}>
        {text} <Arrow src={ArrowRightIcon.src} alt={"arrow"} />
      </LinkSC>
    </Link>
  );
};
