"use client";

type Props = {
  src: string;
};

export const WeatherVideo = ({ src }: Props) => {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support video.
    </video>
  );
};
