import { useRef } from "preact/hooks";
import { FunctionalComponent } from "preact";

type VideoProps = {
  src: string;
};

export const Player: FunctionalComponent<VideoProps> = ({ src }) => {
  const ref = useRef<HTMLVideoElement>(null);

  const onMouseEnter = () => {
    if (!ref.current) return;
    ref.current?.play();
  };

  const onMouseLeave = () => {
    if (!ref.current) return;
    ref.current.pause();
  };

  return (
    <video
      src={src}
      ref={ref}
      controls
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      class="blur-lg"
    />
  );
};