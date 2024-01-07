import Image from "next/image";

export default function Pricing() {
  return (
    <section className="min-h">
      <div className="grid grid-cols-2 items-center">
        <div className="text-center">
          <h1 className="text-3xl mb-6">
            Simple pricing. <br /> Just $9/month.
          </h1>
          <p className="text-xs font-extralight mx-14">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            quaerat odio nemo dolores repudiandae eum quae quam maxime, tempore
            eius impedit voluptates facilis adipisci neque id alias aliquid.
            Cum, tempore.
          </p>
        </div>
        <div>
          <Image
            src="/img-2.jpg"
            alt="pricing picture"
            className="w-full"
            width={1000}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
