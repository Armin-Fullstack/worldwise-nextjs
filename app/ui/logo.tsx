import Image from "next/image";
import Link from "next/link";

export default function Logo({ type }) {
  if (type === "centerLogo")
    return (
      <Link href={"/"}>
        <Image
          src="/logo.png"
          width={150}
          height={100}
          alt="logo"
          className="mx-auto mb-7"
        />
      </Link>
    );

  return (
    <Link href={"/"}>
      <Image src="/logo.png" width={150} height={100} alt="logo" />
    </Link>
  );
}
