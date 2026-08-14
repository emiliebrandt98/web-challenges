import Link from "next/link";
import { volumes } from "@/resources/lib/data";
import styled from "styled-components";
import ArrowRight from "@/public/icons/arrow-right.svg";
import ArrowLeft from "@/public/icons/arrow-left.svg";

export function Button({ currentIndex }) {
  const nextVolume = volumes[currentIndex + 1];
  const previousVolume = volumes[currentIndex - 1];

  return (
    <StyledContainer>
      {previousVolume && (
        <SytledLink
          $textLeft
          $alignLeft
          href={`/volumes/${previousVolume.slug}`}
        >
          <ArrowLeft />
          <StyleTextLink>
            <StyledLinkDirection>Previous Volume:</StyledLinkDirection>
            <StyledLinkTitle>{previousVolume.title}</StyledLinkTitle>
          </StyleTextLink>
        </SytledLink>
      )}

      {nextVolume && (
        <SytledLink href={`/volumes/${nextVolume.slug}`}>
          <StyleTextLink>
            <StyledLinkDirection>Next Volume:</StyledLinkDirection>
            <StyledLinkTitle>{nextVolume.title}</StyledLinkTitle>
          </StyleTextLink>
          <ArrowRight />
        </SytledLink>
      )}
    </StyledContainer>
  );
}

// Container
const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

// Link
const SytledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 100%;
  justify-content: ${(props) => (props.$alignLeft ? "flex-start" : "flex-end")};

  font: var(--font-body);
  color: var(--color-smoke);
  text-decoration: none;
  text-align: ${(props) => (props.$textLeft ? "left" : "right")};

  &:hover {
    text-decoration: underline;
  }
`;

// Link Text
const StyleTextLink = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLinkDirection = styled.span`
  font: var(--font-caption--italic);
`;

const StyledLinkTitle = styled.span`
  font: var(--font-caption);
`;
