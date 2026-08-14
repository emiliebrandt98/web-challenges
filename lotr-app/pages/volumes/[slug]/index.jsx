import Link from "next/link";
import Image from "next/image";
import { volumes } from "@/resources/lib/data";
import { useRouter } from "next/router";
import Head from "next/head";

import styled from "styled-components";
import Chevron from "@/public/icons/chevron-left.svg";
import { Button } from "@/Components/Navigation/LinkNavigation";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const currentIndex = volumes.findIndex((volume) => volume.slug === slug);
  const currentVolume = volumes[currentIndex];

  // temporäre Zustand gehandelt, wo slug initial undefined ist, wenn ma Seite komplett neu lädt
  if (!slug) {
    return null;
  }

  // Zustand, wo Volume gar nicht existiert
  if (!currentVolume) {
    return (
      <>
        <h2>Could not found this movie</h2>
        <Link href="/volumes">← Back to all Volumes</Link>
      </>
    );
  }

  const { title, description, cover, books, color } = currentVolume;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <StyledPage>
        <StyledTextContent>
          <StyledBackLink>
            <Chevron />
            <StyledLink href="/volumes">All Volumes</StyledLink>
          </StyledBackLink>

          <div>
            <StyledHeadline1>{title}</StyledHeadline1>
            <StyledCaption>{description}</StyledCaption>
          </div>
        </StyledTextContent>

        <StyledBookHighlight $color={color}>
          <StyledBookList>
            {books.map(({ ordinal, title }) => (
              <SytledBookListItems key={title}>
                <StyledOrdinal>{ordinal}:</StyledOrdinal>
                <StyledTitel>{title}</StyledTitel>
              </SytledBookListItems>
            ))}
          </StyledBookList>
          <Image
            src={cover}
            alt={`Cover image of ${title}`}
            width={140}
            height={230}
          />
        </StyledBookHighlight>

        <Button currentIndex={currentIndex} />
      </StyledPage>
    </>
  );
}

// ------- Page
const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 30px;

  color: var(--color-smoke);
`;

// Back Link
const StyledBackLink = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 10px;

  font: var(--font-body);
  color: var(--color-smoke);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// ------- TextContent
const StyledTextContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
`;

// Text
const StyledHeadline1 = styled.h1`
  font: var(--font-headline-1);
`;

const StyledCaption = styled.p`
  font: var(--font-body);
`;

// ------- Books
const StyledBookHighlight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 30px;

  background: linear-gradient(120deg, ${(props) => props.$color}, #282828);
`;

const StyledBookList = styled.ul`
  display: flex;
  flex-direction: column;

  list-style: none;
  padding: 0;
  gap: 24px;
`;

const SytledBookListItems = styled.li`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const StyledOrdinal = styled.span`
  font: var(--font-caption--italic);
  color: var(--color-smoke);
`;

const StyledTitel = styled.strong`
  font: var(--font-title);
  color: var(--color-clouds);
`;
