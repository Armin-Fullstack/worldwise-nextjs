import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="background-main">
      <nav className="md:flex justify-between items-center text-color-light-3 font-bold uppercase p-8 hidden">
        <Link href={"/"}>
          <Image src="/logo.png" width={150} height={100} alt="logo" />
        </Link>
        <ul className="flex items-center space-x-9 text-xs ">
          <li>
            <Link href={"/"}>product</Link>
          </li>
          <li>
            <Link href={"/"}>pricing</Link>
          </li>
          <li>
            <Link className="cta rounded-md" href={"/"}>
              login
            </Link>
          </li>
        </ul>
      </nav>
      <section className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 text-center w-full px-8">
        <h1 className=" text-white text-2xl md:text-3xl mb-5">
          You travel the world. <br /> WorldWise keeps track of your adventures.
        </h1>
        <h2 className="text-color-light-1 mb-7 text-sm md:xs">
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link className="cta" href={"/"}>
          Start tracking now
        </Link>
      </section>
    </main>
  );
}
