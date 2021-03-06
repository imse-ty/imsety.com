export default function VideoReelLoop() {
  return (
    <>
      <a href="https://vimeo.com/496109106" target="_blank" rel="noopener">
        <div className="absolute z-10 bg-imsetyBlack dark:bg-imsetyWhite bg-opacity-25 min-w-full min-h-full transition-colors duration-300 hover:bg-opacity-0" />
        <video
          autoPlay
          loop
          muted
          poster="/setymedia-2020-reel-loop-poster.jpg"
          className="absolute object-cover w-auto min-w-full min-h-full"
        >
          <source src="/setymedia-2020-reel-loop.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </a>
    </>
  );
}
