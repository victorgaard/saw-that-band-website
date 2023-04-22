import Image from "next/image";
import Logo from "./components/Logo";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import FormWrapper from "./components/FormWrapper";

export default function Home() {
  return (
    <div className="bg-zinc-900 min-h-screen overflow-hidden">
      <Image
        src="/bg.png"
        width={2000}
        height={2000}
        alt="Background image"
        className="absolute -top-[60px] z-0 w-full h-[1200px] pointer-events-none [mask-image:linear-gradient(to_top,transparent_25%,#18181B_35%)]"
      />
      <div className="hidden sm:flex fixed h-full flex-col justify-between items-center w-20 p-6 gap-6 text-zinc-600">
        <div className="shrink-0">
          <Logo width={48} height={48} />
        </div>
        <div className="w-[1px] h-full bg-zinc-700/50" />
        <p className="rotate-180 whitespace-nowrap text-sm [writing-mode:vertical-lr]">
          saw that band
        </p>
      </div>
      <main className="flex max-w-[1400px] mx-auto relative">
        <div className="flex flex-wrap sm:flex-nowrap items-center p-6 text-white sm:ml-20 gap-12 mt-12">
          <div className="flex flex-col gap-10">
            <h1 className="text-4xl leading-9 font-bold">
              Turn your concert memories into an immersive and shareable
              experience
            </h1>
            <FormWrapper />
            <a
              href="https://victor.sawthat.band"
              target="_blank"
              className="text-sm self-center font-medium flex items-center gap-2 group"
              rel="noreferrer"
            >
              <span className="group-hover:underline decoration-2 underline-offset-8 decoration-emerald-400">
                See a live example
              </span>
              <ArrowRightIcon className="h-4 w-4 group-hover:ml-2 transition-all group-hover:text-emerald-400" />
            </a>
          </div>
          <div className="hidden sm:block sm:-mr-[400px] md:-mr-[300px] lg:-mr-[200px] pointer-events-none w-[882px] h-[569px] shrink-0">
            <Image
              src="/preview.png"
              width={882}
              height={569}
              alt="Preview of the app"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
