import { Copyright } from "@/components/Copyright";
import { EmptyMemories } from "@/components/EmptyMemories";
import { Hero } from "@/components/Hero";
import { SignIn } from "@/components/SignIn";
export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/* left */}
      <div className=" bg-[url(../assets/bg-stars.svg)] bg-cover relative px-28 py-16 flex flex-col items-start justify-between overflow-hidden border-r border-white/10">
        {/* blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 opacity-50 -translate-y-1/2 translate-x-1/2 rounded-full blur-full" />
        {/* stripes */}
        <div className="absolute bottom-0 right-1 top-0 w-2 bg-stripes" />
        <SignIn />
        <Hero />
        <Copyright />
      </div>

      {/* right */}
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover p16">
        <EmptyMemories />
      </div>
    </main>
  );
}
