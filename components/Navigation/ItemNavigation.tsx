import Link from "next/link";
import { useState } from "react";
import { VariantsTypography } from "../../enums";
import { Typography } from "../../ui";
import {
  HoverLinkSC,
  LinkSC,
  SubcategorydLinkSC,
  SubNavigation,
} from "./styles";
import { ILink } from "./types";

export const ItemNavigation = ({ link }: ILink) => {
  const [isOpen, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };
  const handleMouseLeave = () => {
    setOpen(false);
  };
  return (
    <>
      <LinkSC
        onMouseLeave={link.subcategories && handleMouseLeave}
        onMouseEnter={link.subcategories && handleMouseEnter}
      >
        <Link href={link.href}>
          <HoverLinkSC>
            <Typography variant={VariantsTypography.subtitle}>
              {link.title}
            </Typography>

            {link.subcategories && link.iconOpen}
          </HoverLinkSC>
        </Link>
        {isOpen && (
          <SubNavigation isOpen={isOpen}>
            {link.subcategories?.map((item, index) => (
              <Link href={item.link} key={index}>
                <SubcategorydLinkSC>{item.name}</SubcategorydLinkSC>
              </Link>
            ))}
          </SubNavigation>
        )}
      </LinkSC>
    </>
  );
};
