export default function Footer() {
  return (
    <footer className="pt-12 text-gray-500 text-sm">

      <p>
        &copy;
        {' '}
        {new Date().getFullYear()}
        {' '}
        FaradayDev
      </p>

      <p className="mt-2">
        Built with Astro + React
      </p>

    </footer>
  );
}
