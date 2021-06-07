import Link from 'next/link';
import SocialMediaIcons from './social-media-icons';

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="container mx-auto">
        <div className="mb-4">
          <SocialMediaIcons />
        </div>
        <p className="mb-2 text-sm font-medium">
          <a
            href="https://github.com/imse-ty/imsety.com"
            target="_blank"
            rel="noopener"
            className="hover:text-gray-500 dark:hover:text-gray-300 transition duration-300"
          >
            Site designed and developed my me 🙂
          </a>
        </p>
        <p className="text-sm">© 2021 Imsety Taylor. All rights reserved.</p>
      </div>
    </footer>
  );
}
