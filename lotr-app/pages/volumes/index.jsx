import Link from "next/link";
import Image from "next/image";
import { introduction } from "@/resources/lib/data";
import { volumes } from "@/resources/lib/data";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function AllVolumes() {
  const router = useRouter();

  const selectRandowVoulme = () => {
    const randomIndex = Math.floor(Math.random() * volumes.length);
    const volume = volumes[randomIndex];
    router.push(`/volumes/${volume.slug}`);
  };

  return (
    <StyledDiv>
      <StyledContainer>
        <StyledHeadline1>
          The Lord of <br />
          the Rings
        </StyledHeadline1>
        <StyledCaption>{introduction}</StyledCaption>
      </StyledContainer>

      <StyledContainer>
        <StyledHeadline2>All Volumes</StyledHeadline2>
        <StyledList>
          {volumes.map((volume) => (
            <StyledListItem key={volume.slug}>
              <StyledLink href={`/volumes/${volume.slug}`}>
                <StyledImage
                  src={volume.cover}
                  alt={`Cover image of ${volume.title}`}
                  width={80}
                  height={130}
                />
                {volume.title}
              </StyledLink>
            </StyledListItem>
          ))}
        </StyledList>
      </StyledContainer>

      <StyledSupriseButton onClick={selectRandowVoulme}>
        Suprise Me
      </StyledSupriseButton>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 30px;

  color: var(--color-smoke);
`;

const StyledContainer = styled.div``;

const StyledHeadline1 = styled.h1`
  font: var(--font-headline-1);
`;

const StyledCaption = styled.p`
  font: var(--font-body);
`;

const StyledHeadline2 = styled.h2`
  font: var(--font-headline-2);
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0;
  list-style: none;
`;

const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 80px;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 10px;

  font: var(--font-caption);
  color: var(--color-smoke);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledSupriseButton = styled.button`
  padding: 10px;
  font: var(--font-body);
  color: var(--color-smoke);
  background-color: transparent;
  border: 2px solid var(--color-smoke);
  border-radius: 4px;
  box-shadow: var(--box-shadow-book);

  &:hover {
    background-color: var(--color-smoke);
    color: var(--color-earth);
    box-shadow: var(--box-shadow-book--hover);
  }
`;

const StyledImage = styled(Image)`
  box-shadow: var(--box-shadow-book);

  &:hover {
    box-shadow: var(--box-shadow-book--hover);
  }
`;
