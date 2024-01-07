import Link from "next/link";
import PageNav from "./ui/pageNav";

export default function Home() {
  return (
    <main className="background-main">
      <div className="container max-w-[1440px] px-8">
        <PageNav />
        <section className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 text-center w-full px-8">
          <h1 className=" text-white text-2xl md:text-3xl mb-5">
            You travel the world. <br /> WorldWise keeps track of your
            adventures.
          </h1>
          <h2 className="text-color-light-1 mb-7 text-sm md:xs">
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful experiences, and show your friends
            how you have wandered the world.
          </h2>
          <Link className="cta" href={"/application"}>
            Start tracking now
          </Link>
        </section>
      </div>
    </main>
  );
}
