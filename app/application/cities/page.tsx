import City from "@/app/components/city";
import Message from "@/app/components/message";
import Spinner from "@/app/components/spinner";
import { Suspense } from "react";

export const dynamic = "force-dynamic";
const BASE_URL = "http://localhost:8000";

async function Cities() {
  const data = await fetch(`${BASE_URL}/cities`);
  const cities = await data.json();

  if (!cities.length)
    return (
      <Message text="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className="flex flex-col space-y-3">
      {cities.map((element) => (
        <City city={element} key={element.id} />
      ))}
    </ul>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<Spinner />}>
      <Cities />
    </Suspense>
  );
}
