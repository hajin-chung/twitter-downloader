export type Video = {
  tweet: string;
  url: string;
}

export const fetchVideoUrl = async (tweet: string) => {
  const res = await fetch(`/api/download?tweet=${tweet}`);
  const data: {url: string} = await res.json();
  return data;
}