import Image from "next/image";

export default function Page() {
  return (
    <section className="min-h">
      <div className="grid grid-cols-2 items-center">
        <div>
          <Image
            src="/img-1.jpg"
            alt="product picture"
            className="w-full"
            width={1000}
            height={300}
          />
        </div>
        <div className="text-center">
          <h1 className="text-3xl mb-16">About Worldwide.</h1>
          <p className="mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            inventore possimus. Dolorum, aliquam eligendi maxime praesentium
            esse, totam perferendis nulla iure, corporis quam similique
            consectetur tempore beatae adipisci? Eligendi, nesciunt?
          </p>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            inventore possimus.
          </p>
        </div>
      </div>
    </section>
  );
}
