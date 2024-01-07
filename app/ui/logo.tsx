import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Image src="/logo.png" width={150} height={100} alt="logo" />
    </Link>
  );
}
