import Logo from "./components/Logo";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Video from "./components/Video";

export default async function Home() {
  return (
    <div className="relative bg-zinc-900 overflow-hidden">
      <Video />
      <div className="hidden sm:flex fixed h-full bg-zinc-900/40 backdrop-blur-lg flex-col justify-between items-center w-20 p-6 gap-6 text-zinc-600">
        <div className="shrink-0">
          <Logo width={48} height={48} />
        </div>
        <div className="w-[1px] h-full bg-zinc-700/50" />
        <p className="rotate-180 whitespace-nowrap text-sm [writing-mode:vertical-lr]">
          saw that band
        </p>
      </div>
      <main className="flex relative">
        <div className="flex items-center px-4 sm:px-12 bg-zinc-800/50 border-r border-r-zinc-500/30 shadow-2xl w-full sm:w-[500px] backdrop-blur-lg text-white sm:ml-20 gap-12 h-screen">
          <div className="flex flex-col">
            <h1 className="text-3xl leading-8 sm:text-4xl sm:leading-9 font-bold pb-10">
              Turn your concert memories into an immersive and shareable
              experience
            </h1>
            <div className="space-y-4">
              <a
                href="https://app.sawthat.band/signup?utm_source=website"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br flex items-center justify-center gap-1 from-emerald-400 to-green-400 hover:from-green-400 hover:to-green-400 text-zinc-900 text-sm font-semibold p-4 rounded-lg"
              >
                Create your profile now <span className="text-lg">🤘</span>
              </a>

              <a
                href="https://app.sawthat.band/login"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-lg border border-zinc-700/60 p-4 text-sm font-medium text-zinc-300 shadow-sm transition-colors duration-75 hover:border-zinc-600 hover:bg-zinc-700/50 hover:text-white"
              >
                Login
              </a>
              <a
                href="https://victor.sawthat.band"
                target="_blank"
                className="text-sm justify-center font-medium flex items-center gap-2 p-4 group"
                rel="noopener noreferrer"
              >
                <span className="group-hover:underline decoration-2 underline-offset-8 decoration-emerald-400">
                  See a live example
                </span>
                <ArrowRightIcon className="h-4 w-4 group-hover:ml-2 transition-all group-hover:text-emerald-400" />
              </a>
            </div>
          </div>
          <div className="absolute bottom-6 left-12 flex items-center gap-8 text-sm text-zinc-400">
            <a
              href="/privacy/index.html"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white hover:underline underline-offset-2"
            >
              Privacy policy
            </a>
            <a
              href="/terms-and-conditions/index.html"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white hover:underline underline-offset-2"
            >
              Terms and conditions
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
