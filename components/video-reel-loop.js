export default function VideoReelLoop() {
  return (
    <>
      {' '}
      <div className="absolute z-20 bg-imsetyWhite bg-opacity-25 min-w-full min-h-full" />
      <video
        autoPlay
        loop
        muted
        className="absolute z-10 object-cover w-auto min-w-full min-h-full"
      >
        <source src="/setymedia-2020-reel-loop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
}
