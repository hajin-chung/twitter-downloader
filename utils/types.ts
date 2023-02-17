export type Video = {
  id: number;
  tweet: string;
  video: string;
};

export type VideoWithCount = Video& {
  count: number; 
}