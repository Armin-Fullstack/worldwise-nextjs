import Link from "next/link";
import Logo from "./logo";

export default function PageNav() {
  return (
    <nav className="md:flex justify-between items-center text-color-light-3 font-bold uppercase hidden pt-5 mb-24">
      <Logo />
      <ul className="flex items-center space-x-9 text-xs">
        <li>
          <Link href={"/product"}>product</Link>
        </li>
        <li>
          <Link href={"/pricing"}>pricing</Link>
        </li>
        <li>
          <Link className="cta rounded-md" href={"/login"}>
            login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
