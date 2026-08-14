import Link from "next/link";
import { introduction } from "@/resources/lib/data";
import { volumes } from "@/resources/lib/data";
import { useRouter } from "next/router";

export default function AllVolumes() {
  const router = useRouter();

  const selectRandowVoulme = () => {
    const randomIndex = Math.floor(Math.random() * volumes.length);
    const volume = volumes[randomIndex];
    router.push(`/volumes/${volume.slug}`);
  };

  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={selectRandowVoulme}>Suprise Me</button>
    </div>
  );
}
