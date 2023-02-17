import { useState, useEffect } from "preact/hooks";
import { Player } from "../components/Player.tsx";
import { VideoWithCount } from "../utils/types.ts";

const dayInMS = 1000 * 60 * 60 * 24;

type Option = {
  name: string;
  value: number;
};

const options: Option[] = [
  { name: "today", value: dayInMS },
  { name: "week", value: dayInMS * 7 },
  { name: "month", value: dayInMS * 30 },
];

export default function RankList() {
  const [videos, setVideos] = useState<VideoWithCount[]>([]);
  const [last, setLast] = useState(options[0].value);

  useEffect(() => {
    const fetchList = async () => {
      const res = await fetch(`/api/ranking?offset=0&last=${last}`);
      const videos: VideoWithCount[] = await res.json();
      setVideos(videos);
    };
    fetchList().catch((e) => console.error(e));
  }, [last]);

  return (
    <div class="w-full flex flex-col gap-2">
      <select
        onChange={(e) => setLast(parseInt(e.currentTarget.value))}
        class="border-gray-400 hover:border-gray-300 focus:border-gray-200 border-4 rounded-md outline-none p-2 bg-gray-900 text-white font-bold self-end mt-8"
      >
        {options.map(({ name, value }) => (
          <option value={value} name={name}>
            {name}
          </option>
        ))}
      </select>
      <div class="w-full grid gap-4 grid-cols-[repeat(auto-fill,300px)] flex-wrap justify-center">
        {videos.map(({ tweet, video }) => (
          <div class="flex flex-col gap-1">
            <a href={tweet} class="text-gray-500 hover:text-white underline">
              tweet
            </a>
            <Player src={video} />
          </div>
        ))}
      </div>
    </div>
  );
}
