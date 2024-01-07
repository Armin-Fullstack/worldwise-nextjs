import Logo from "./logo";

export default function Sidebar() {
  return (
    <div className="flex flex-col bg-color-dark-1 min-h text-center p-6">
      <Logo type="centerLogo" />
      <p>App Navigation</p>
      <p>List of cities</p>
      <footer className="mt-auto">
        <p>&copy;CopyRight 2024 by Worldwise Inc.</p>
      </footer>
    </div>
  );
}
