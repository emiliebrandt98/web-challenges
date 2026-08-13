import { introduction } from "@/resources/lib/data";
import { volumes } from "@/resources/lib/data";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Volumes: Lord of the Rings</h1>
      <Link href={"/volumes"}>All Volumes</Link>
    </div>
  );
}
