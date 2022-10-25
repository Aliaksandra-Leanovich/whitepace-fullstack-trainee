import styled from "@emotion/styled";
import { Colors } from "../../ui/colors";
import { media } from "../../ui/media";
import { Swiper } from "swiper/react";

export const ContainerSC = styled.div`
  display: flex;
  margin-top: 60px;
  width: 100%;
  ${media.TABLET} {
    display: none;
  }
`;
export const ContainerReviewsSC = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
  justify-content: center;
  align-items: center;

  margin-bottom: 60px;
`;
export const BlockReviewSC = styled.div`
  border-bottom: 1px solid ${Colors.WHITE};
  margin-bottom: 60px;
`;
export const TextConteinerCommentSC = styled.div`
  margin-bottom: 40px;
`;

export const QuotesImageSC = styled.div`
  width: 86px;
  margin-bottom: 32px;
  fill: ${Colors.WHITE};
`;

export const ReviewSC = styled.div`
  max-width: 424px;
  padding: 60px 40px;
  background-color: ${Colors.LIGHTBLUE};
  border-radius: 10px;

  ${media.PHONE} {
    padding: 20px;
  }

  transition: background-color 0.5s ease-out, box-shadow 0.5s ease-out,
    color 0.5s ease-out;
  &:hover {
    background-color: ${Colors.WHITE};
    box-shadow: 15px 10px 50px rgba(0, 0, 0, 0.1);
    p {
      color: ${Colors.BLACK};
    }
    ${BlockReviewSC} {
      border-bottom-color: ${Colors.BLACK};
    }
    ${QuotesImageSC} {
      fill: ${Colors.BLUE};
    }
  }
`;

export const ReviewerBlockSC = styled.div`
  display: flex;
  ${media.TABLET} {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const ReviewerImageSC = styled.div`
  width: 96px;
  height: 96px;
  margin-right: 42px;
  ${media.TABLET} {
    margin-right: 0px;
    margin-bottom: 24px;
  }
`;
export const ReviewerInformationSC = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const ContainerMobileSC = styled.div`
  display: none;
  width: 100%;
  ${media.TABLET} {
    display: flex;
  }
`;
export const ContainerMobileReviewSC = styled.div`
  margin-bottom: 60px;
`;

export const SwiperCustomSC = styled(Swiper)`
  .swiper-pagination-bullet {
    background-color: ${Colors.LIGHTBLUE};
    opacity: 1;
    display: inline-block;
    width: 12px;
    height: 12px;

    margin-right: 12px;

    &-active {
      background-color: ${Colors.BLUE};
    }
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
