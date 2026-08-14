import Link from "next/link";
import { volumes } from "@/resources/lib/data";

export function PreviousButton({ currentIndex }) {
  const previousVolume = volumes[currentIndex - 1];

  return previousVolume ? (
    <div>
      <Link href={`/volumes/${previousVolume.slug}`}>
        ← Previous Volume: {previousVolume.title}
      </Link>
    </div>
  ) : null;
}
