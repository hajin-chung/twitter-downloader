import { Head } from "$fresh/runtime.ts";
import { FunctionalComponent } from "preact";

type HeadProps = {
  title?: string;
};

const HeadComponent: FunctionalComponent<HeadProps> = ({ title }) => {
  return (
    <Head>
      <title>{title ?? "Twitter Video Downloader"}</title>
      <link rel="icon" href="favicon.svg"></link>
      <link rel="stylesheet" href="spinner.css"></link>
    </Head>
  );
};

export default HeadComponent;
