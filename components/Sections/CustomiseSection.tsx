import React from "react";
import { LinkTemplate } from "../LinkTemplate/LinkTemplate";
import ImageWork from "/public/icons/team-work.webp";
import {
  ContainerSC,
  ImageContainerSC,
  DescriptionContainerSC,
  SectionContainerSC,
  TextContainer,
} from "./styles";
import { Colors } from "../../ui/colors";
import { H2, ParagraphSmall } from "../../ui/typography";

export const CustomiseSection = () => {
  return (
    <SectionContainerSC
      padding="140px 220px"
      mobilePadding="100px 16px"
      tabletPadding="140px 34px"
    >
      <ContainerSC id="resources">
        <ImageContainerSC src={ImageWork.src} alt={"work together"} />
        <DescriptionContainerSC>
          <H2 color={Colors.BLACK}>Customise it to your needs</H2>
          <TextContainer margin="24px 0 60px 0">
            <ParagraphSmall color={Colors.BLACK}>
              Customise the app with plugins, custom themes and multiple text
              editors (Rich Text or Markdown). Or create your own scripts and
              plugins using the Extension API.
            </ParagraphSmall>
          </TextContainer>

          <LinkTemplate href="/whitepacefree" text="Lets Go" />
        </DescriptionContainerSC>
      </ContainerSC>
    </SectionContainerSC>
  );
};
