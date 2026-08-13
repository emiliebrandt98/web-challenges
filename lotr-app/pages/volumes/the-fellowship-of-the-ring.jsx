import { Buttons } from "@/Components/Buttons.jsx/Buttons";
import { volumes } from "@/resources/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function theFellowshipOfTheRings() {
  const volume1 = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  return (
    <>
      <Link href="/"> ← All Volumes</Link>
      <h1>{volume1.title}</h1>
      <p>{volume1.description}</p>
      <ul>
        <li>
          {volume1.books[0].ordinal} {volume1.books[0].title}
        </li>
        <li>
          {volume1.books[1].ordinal} {volume1.books[1].title}
        </li>
      </ul>
      <Image src={volume1.cover} alt={volume1.title} width={140} height={230} />

      <Buttons slug={volume1.slug} />
    </>
  );
}
