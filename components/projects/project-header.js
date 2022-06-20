function Tooltip({ label, text }) {
  return (
    <div>
      <div className="text-gray-400 font-medium uppercase">{label}</div>
      <div>{text}</div>
    </div>
  );
}

export default function ProjectHeader({
  title,
  summary,
  year,
  timeline,
  tools
}) {
  return (
    <header className="mb-12 md:mb-24">
      <div className="flex flex-col gap-6 md:gap-10 mb-6 md:mb-10">
        <div className="flex-1">
          <div className="w-16 h-2 bg-gray-500 mb-4 md:mb-6" />
          <h1 className="text-3xl md:text-6xl font-bold md:leading-snug">
            {title}
          </h1>
        </div>
        {summary && (
          <div className="flex-1">
            <Tooltip label="Summary" text={summary} />
          </div>
        )}
      </div>

      <div className="flex gap-8">
        {year && <Tooltip label="Year" text={year} />}
        {timeline && <Tooltip label="Timeline" text={timeline} />}
        {tools && <Tooltip label="Tools" text={tools} />}
      </div>
    </header>
  );
}
