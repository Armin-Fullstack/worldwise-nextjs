import CountryItems from "@/app/components/countryItems";
import Message from "@/app/components/message";
import Spinner from "@/app/components/spinner";
import { Suspense } from "react";

export const dynamic = "force-dynamic";
const BASE_URL = "http://localhost:8000";

async function CountryLists() {
  const data = await fetch(`${BASE_URL}/cities`);
  const cities = await data.json();

  if (!cities.length)
    return (
      <Message text="Add your first city by clicking on a city on the map" />
    );

  // [Portugal , Spain , Germany ]
  const countries = cities.reduce((acc, curr) => {
    if (!acc.map((el) => el.country).includes(curr.country)) {
      return [...acc, { country: curr.country, emoji: curr.emoji }];
    } else return acc;
  }, []);

  return (
    <ul className="flex space-x-7 flex-wrap">
      {countries.map((element) => (
        <CountryItems key={element.country} country={element} />
      ))}
    </ul>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<Spinner />}>
      <CountryLists />
    </Suspense>
  );
}
