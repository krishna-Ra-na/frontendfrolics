import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/sidebar";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (

    <>
      <div className="flex  max-w-none p-5 mx-auto">
        <BackgroundBeams />
        <Sidebar />
        <div className="main-content w-full ml-10 pt-5 relative">
          <main className="flex min-h-screen flex-col items-center justify-between p-24 h-[1200px]">




            <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
              <a
                href="#"
                className="group rounded-lg border bg-yellow-50 border-slate-400 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="mb-3 text-2xl font-semibold">
                  Html/css
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>

              </a>

              <a
                href="#"
                className="group rounded-lg border bg-yellow-50 border-slate-400 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="mb-3 text-2xl font-semibold">
                  Learn{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>

              </a>

              <a
                href="#"
                className="group rounded-lg border bg-yellow-50 border-slate-400 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="mb-3 text-2xl font-semibold">
                  Templates{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>

              </a>

              <a
                href="#"
                className="group rounded-lg border bg-yellow-50 border-slate-400 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="mb-3 text-2xl font-semibold">
                  Deploy{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>

              </a>
            </div>
          </main>
        </div>
      </div>

    </>
  );
}
