import PageNav from "../ui/pageNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-color-dark-1">
      <div className="container max-w-[1440px] px-8 ">
        <PageNav />
        {children}
      </div>
    </section>
  );
}
