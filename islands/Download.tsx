import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { Input } from "../components/Input.tsx";
import { fetchVideoUrl } from "../utils/api.ts";

export default function Download() {
  const [tweet, setTweet] = useState("");
  const [video, setVideo] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const { url } = await fetchVideoUrl(tweet);
    setVideo(url);
    setLoading(false);
  };

  return (
    <div class="w-full flex flex-col gap-2">
      <p class="font-bold text-white">Enter tweet url</p>
      <Input
        value={tweet}
        onChange={(e) => setTweet(e.currentTarget.value)}
        onKeyDown={(e) => e.key === "enter" && handleClick()}
        placeholder="https://twitter.com/xxxx/status/xxxx"
      />
      <div class="flex justify-center">
        <Button onClick={handleClick}>Download!</Button>
      </div>
      <div class="flex flex-col items-center text-white gap-2">
        {video && <a href={video}>{video}</a>}
        {video && <video src={video} controls class="h-[500px]" />}
      </div>
    </div>
  );
}
