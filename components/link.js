export default function Link({ ...rest }) {
  return (
    <a
      className="underline hover:text-gray-500 dark:hover:text-gray-300 transition duration-300"
      {...rest}
    />
  );
}
