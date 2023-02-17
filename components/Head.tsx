import { Head } from "$fresh/runtime.ts";
import { FunctionalComponent } from "preact";

type HeadProps = {
  title?: string;
};

const HeadComponent: FunctionalComponent<HeadProps> = ({ title }) => {
  return (
    <Head>
      <title>{title ?? "Twitter Video Downloader"}</title>
      <meta name="title" content="Download Twitter Videos!" />
      <meta
        name="description"
        content="twitter video downloader, with Ranking and live downloads. Find out what videos are trending on twitter right now."
      />
      <meta name="robots" content="all" />
      <meta name="googlebot" content="all"></meta>
      <link rel="icon" href="favicon.svg"></link>
      <link rel="stylesheet" href="spinner.css"></link>
      <link rel="stylesheet" href="main.css"></link>
    </Head>
  );
};

export default HeadComponent;
