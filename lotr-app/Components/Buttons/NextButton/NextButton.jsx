import Link from "next/link";
import { volumes } from "@/resources/lib/data";

export function NextButton({ currentIndex }) {
  const nextVolume = volumes[currentIndex + 1];

  return nextVolume ? (
    <div>
      <Link href={`/volumes/${nextVolume.slug}`}>
        Next Volume: {nextVolume.title} →
      </Link>
    </div>
  ) : null;
}
