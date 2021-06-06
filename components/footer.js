import SocialMediaIcons from './social-media-icons';

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="container mx-auto">
        <div className="mb-4">
          <SocialMediaIcons />
        </div>
        <p className="mb-2 text-sm font-medium">
          Site designed and developed my me 🙂
        </p>
        <p className="text-sm">© 2021 Imsety Taylor. All rights reserved.</p>
      </div>
    </footer>
  );
}
