import ReactPlayer from "react-player";

type Props = {
  url: string;
};

export function VideoPlayer({ url }: Props) {
  return (
    <div className="flex h-full w-full max-h-full max-w-full items-center justify-center">
      <ReactPlayer
        src={url}
        controls
        playsInline
        width="100%"
        height="100%"
        className="max-h-full max-w-full [&>video]:max-h-full [&>video]:max-w-full [&>video]:object-contain"
      />
    </div>
  );
}