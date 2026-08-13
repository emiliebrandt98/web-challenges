import { Buttons } from "@/Components/Buttons.jsx/Buttons";
import { volumes } from "@/resources/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function theTwoTowers() {
  const volume2 = volumes.find(({ slug }) => slug === "the-two-towers");

  return (
    <>
      <Link href="/"> ← All Volumes</Link>
      <h1>{volume2.title}</h1>
      <p>{volume2.description}</p>
      <ul>
        <li>
          {volume2.books[0].ordinal} {volume2.books[0].title}
        </li>
        <li>
          {volume2.books[1].ordinal} {volume2.books[1].title}
        </li>
      </ul>
      <Image src={volume2.cover} alt={volume2.title} width={140} height={230} />

      <Buttons slug={volume2.slug} />
    </>
  );
}
