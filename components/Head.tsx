import { Head } from "$fresh/runtime.ts";

export default function HeadComponent() {
  return (
    <Head>
      <title>Twitter Video Downloader</title>
      <link rel="icon" href="favicon.svg"></link>
      <link rel="stylesheet" href="spinner.css"></link>
    </Head>
  );
}
