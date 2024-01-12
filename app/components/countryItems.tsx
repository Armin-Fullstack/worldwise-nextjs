export default function CountryItems({ country }) {
  return (
    <li className="flex flex-col items-center justify-center space-x-3 before:content-[''] before:h-full before:bg-orange-500 before:w-2 before:absolute rounded-md before:rounded-l-md before:left-0 bg-color-dark-2 relative basis-60 mb-8 py-6 ">
      <span>{country.emoji}</span>
      <p>{country.country}</p>
    </li>
  );
}
