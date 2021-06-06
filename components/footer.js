import SocialMediaIcons from './social-media-icons';

export default function Footer() {
  return (
    <footer className="py-4">
      <div className="container mx-auto">
        <div className="my-3">
          <SocialMediaIcons />
        </div>
        <p className="my-3 text-sm font-medium">
          Site designed and developed my me 🙂
        </p>
        <p className="my-3 text-sm">
          © 2021 Imsety Taylor. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
