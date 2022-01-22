export default function PreviewAlert() {
  return (
    <div className="fixed bottom-0 z-30 py-3 w-full bg-gray-300 dark:bg-gray-700 text-sm text-center opacity-75 hover:opacity-100 transition">
      This page is a preview.{' '}
      <a href="/api/exit-preview" className="underline">
        Click here
      </a>{' '}
      to exit preview mode.
    </div>
  );
}
