import Head from "../components/Head.tsx";
import LiveList from "../islands/LiveList.tsx";

export default function Live() {
  return (
    <>
      <Head title="Twitter Live Video Downloads" />
      <body class="bg-gray-900 flex justify-center h-screen">
        <main class="md:max-w-5xl w-full px-6 pt-5">
          <div class="flex w-full flex-wrap mb-10 items-end">
            <a class="text-2xl text-white font-bold" href="/live">
              Twitter Live Downloads
            </a>
            <div class="flex gap-4 ml-auto">
              <a
                class="text-xl text-gray-400 hover:text-white font-bold"
                href="/"
              >
                Downloader
              </a>
              <p class="text-xl text-white">•</p>
              <a
                class="text-xl text-gray-400 hover:text-white font-bold"
                href="/ranking"
              >
                Ranking
              </a>
            </div>
            <LiveList />
          </div>
        </main>
      </body>
    </>
  );
}
