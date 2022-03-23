import {
  FaBehance,
  FaDribbble,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaVimeo,
  FaYoutube
} from 'react-icons/fa';

function SocialMediaLink(props) {
  return (
    <a
      {...props}
      target="_blank"
      rel="noopener"
      className="hover:text-gray-700 dark:hover:text-gray-300 hover:scale-125 transform transition duration-300"
    >
      {props.children}
    </a>
  );
}

export default function SocialMediaIcons() {
  return (
    <div className="flex text-2xl md:text-3xl justify-between max-w-sm">
      <SocialMediaLink href="https://twitter.com/imse_ty" alt="Twitter">
        <FaTwitter />
      </SocialMediaLink>
      <SocialMediaLink href="https://www.instagram.com/imse_ty" alt="Instagram">
        <FaInstagram />
      </SocialMediaLink>
      <SocialMediaLink href="https://www.youtube.com/imsety" alt="YouTube">
        <FaYoutube />
      </SocialMediaLink>
      <SocialMediaLink href="https://www.linkedin.com/in/imsety" alt="LinkedIn">
        <FaLinkedin />
      </SocialMediaLink>
      <SocialMediaLink href="https://vimeo.com/imsety" alt="Vimeo">
        <FaVimeo />
      </SocialMediaLink>
      <SocialMediaLink href="https://www.behance.net/imsety" alt="Behance">
        <FaBehance />
      </SocialMediaLink>
      <SocialMediaLink href="https://dribbble.com/Imsety" alt="Dribble">
        <FaDribbble />
      </SocialMediaLink>
      <SocialMediaLink href="mailto:hello@imsety.com" alt="Email">
        <FaEnvelope />
      </SocialMediaLink>
    </div>
  );
}
