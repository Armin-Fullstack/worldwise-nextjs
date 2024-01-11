function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export default function City({ city }) {
  const { emoji, cityName, date } = city;
  return (
    <li className="relative flex items-center justify-between bg-color-dark-2 rounded-md px-4 py-2 before:content-[''] before:w-2 before:bg-green-400 before:h-full before:absolute before:rounded-l-md before:left-0">
      <div className="flex items-center space-x-3">
        <span>{emoji}</span>
        <p>{cityName}</p>
      </div>
      <div className="flex space-x-3 items-center">
        <time>({formatDate(date)})</time>
        <button className="hover:bg-primary-color transition-all hover:text-color-dark-1 text-color-light-1 border-none bg-color-dark-0 rounded-full text-lg w-5 h-5 flex items-center justify-center aspect-square">
          &times;
        </button>
      </div>
    </li>
  );
}
