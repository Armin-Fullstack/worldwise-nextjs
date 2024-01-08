import Image from "next/image";
import Link from "next/link";

export default function Logo({ type }) {
  if (type === "centerLogo")
    return (
      <Link href={"/"} className="w-40 mx-auto mb-7">
        <Image src="/logo.png" width={150} height={100} alt="logo" />
      </Link>
    );

  return (
    <Link href={"/"}>
      <Image src="/logo.png" width={150} height={100} alt="logo" />
    </Link>
  );
}
