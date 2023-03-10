import Head from "../components/Head.tsx";
import Download from "../islands/Download.tsx";

export default function Home() {
  return (
    <>
      <Head />
      <body class="bg-gray-900 flex justify-center h-screen">
        <main class="md:max-w-5xl w-full px-6 pt-5">
          <div class="flex w-full mb-10 items-end flex-wrap">
            <a class="text-2xl text-white font-bold" href="/">
              Twitter Video Downloader
            </a>
            <div class="flex gap-4 ml-auto">
              <a
                class="text-xl text-gray-400 hover:text-white font-bold"
                href="/ranking"
              >
                Ranking
              </a>
              <p class="text-xl text-white">•</p>
              <a
                class="text-xl text-gray-400 hover:text-white font-bold"
                href="/live"
              >
                Live
              </a>
            </div>
          </div>
          <Download />
        </main>
      </body>
    </>
  );
}
