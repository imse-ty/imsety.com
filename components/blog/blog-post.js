export default function BlogPost() {
  return (
    <div className="mb-8">
      <img
        alt="Blog post card cover image"
        src="https://source.unsplash.com/user/erondu/640x320"
        width={640}
        height={320}
        className="mb-2"
      />
      <div className="mb-2 text-xs tracking-widest text-gray-400">
        June 19, 2021 • 2 min read
      </div>
      <h2 className="mb-2 text-2xl font-bold">Lorem Ipsum</h2>
      <p>Subtitle</p>
    </div>
  );
}
