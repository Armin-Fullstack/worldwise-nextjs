export default function Page() {
  return (
    <section className="min-h">
      <form className="bg-color-dark-2 w-1/3 p-5 mx-auto">
        <label className="block">Email address</label>
        <input
          type="text"
          className="w-full mb-6 outline-none p-1 text-color-dark-2"
        />

        <label className="block">Password</label>
        <input
          type="text"
          className="w-full mb-6 outline-none p-1 text-color-dark-2"
        />

        <button className="cta">Login</button>
      </form>
    </section>
  );
}
