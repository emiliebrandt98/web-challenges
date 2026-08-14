import Link from "next/link";
import Image from "next/image";
import { volumes } from "@/resources/lib/data";
import { useRouter } from "next/router";
import Head from "next/head";
import { NextButton } from "@/Components/Buttons/NextButton/NextButton";
import { PreviousButton } from "@/Components/Buttons/PreviousButton/PreviousButton";

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

  const { title, description, cover, books } = currentVolume;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Link href="/volumes"> ← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />

      <PreviousButton currentIndex={currentIndex} />
      <NextButton currentIndex={currentIndex} />
    </>
  );
}
