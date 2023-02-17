import { useEffect, useState } from "preact/hooks";
import { Player } from "../components/Player.tsx";
import { Video } from "../utils/types.ts";

export default function LiveList() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchList = async () => {
      const res = await fetch("/api/live?offset=0");
      const videos: Video[] = await res.json();
      setVideos(videos);
    };
    fetchList().catch((e) => console.error(e));
  }, []);

  return (
    <div className="w-full grid gap-4 grid-flow-row-dense grid-cols-3 mt-8">
      {videos.map(({ tweet, video }) => (
        <div className="flex flex-col gap-1">
          <a href={tweet} class="text-gray-500 hover:text-white underline">
            tweet
          </a>
          <Player src={video} />
        </div>
      ))}
    </div>
  );
}
