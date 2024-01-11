"use client";
import Link from "next/link";
import Logo from "../ui/logo";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col bg-color-dark-1 min-h text-center p-6">
        <Logo type="centerLogo" />
        <nav className="max-w-60 mx-auto mb-12">
          <ul className="flex bg-color-dark-2 rounded-xl">
            <li
              className={clsx("rounded-xl transition-all", {
                "bg-color-dark-0": pathName === "/application/cities",
              })}
            >
              <Link
                href="/application/cities"
                className="uppercase block py-1 px-4 text-xs"
              >
                cities
              </Link>
            </li>
            <li
              className={clsx("rounded-xl", {
                "bg-color-dark-0": pathName === "/application/countries",
              })}
            >
              <Link
                href="/application/countries"
                className="uppercase block text-xs py-1 px-4 font-medium rounded-xl"
              >
                countries
              </Link>
            </li>
          </ul>
        </nav>

        {children}
        <footer className="mt-auto">
          <p className="text-color-light-1 text-sm">
            &copy;CopyRight 2024 by Worldwise Inc.
          </p>
        </footer>
      </div>
      <div className="bg-gray-500">Map</div>
    </div>
  );
}
