import { Buttons } from "@/Components/Buttons.jsx/Buttons";
import { volumes } from "@/resources/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function theReturnOfTheKing() {
  const volume3 = volumes.find(({ slug }) => slug === "the-return-of-the-king");

  return (
    <>
      <Link href="/"> ← All Volumes</Link>
      <h1>{volume3.title}</h1>
      <p>{volume3.description}</p>
      <ul>
        <li>
          {volume3.books[0].ordinal} {volume3.books[0].title}
        </li>
        <li>
          {volume3.books[1].ordinal} {volume3.books[1].title}
        </li>
      </ul>
      <Image src={volume3.cover} alt={volume3.title} width={140} height={230} />

      <Buttons slug={volume3.slug} />
    </>
  );
}
