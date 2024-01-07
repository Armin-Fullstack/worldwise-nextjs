import Sidebar from "../ui/sidebar";

export default function Page() {
  return (
    <div className="grid grid-cols-2">
      <Sidebar />
      <div className="bg-gray-500">Map</div>
    </div>
  );
}
