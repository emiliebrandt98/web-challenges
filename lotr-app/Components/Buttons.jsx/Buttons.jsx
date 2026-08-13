import Link from "next/link";
import { volumes } from "@/resources/lib/data";

export function Buttons({ slug }) {
  const currentIndex = volumes.findIndex((volume) => volume.slug === slug);

  const previousVolume = volumes[currentIndex - 1];
  const nextVolume = volumes[currentIndex + 1];

  return (
    <nav>
      {previousVolume && (
        <Link href={`/volumes/${previousVolume.slug}`}>
          ← {previousVolume.title}
        </Link>
      )}{" "}
      {nextVolume && (
        <Link href={`/volumes/${nextVolume.slug}`}>{nextVolume.title} →</Link>
      )}
    </nav>
  );
}
