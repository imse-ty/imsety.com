import {
  FaBehance,
  FaDribbble,
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
      className="hover:text-gray-700 dark:hover:text-gray-300 hover:scale-125 transform transition duration-300"
    >
      {props.children}
    </a>
  );
}

export default function SocialMediaIcons() {
  return (
    <div className="flex text-3xl justify-between max-w-sm">
      <SocialMediaLink href="https://twitter.com/imse_ty">
        <FaTwitter />
      </SocialMediaLink>
      <SocialMediaLink href="https://www.instagram.com/imse.ty">
        <FaInstagram />
      </SocialMediaLink>
      <SocialMediaLink href="https://www.behance.net/imsety">
        <FaBehance />
      </SocialMediaLink>
      <SocialMediaLink href="https://www.linkedin.com/in/imsety">
        <FaLinkedin />
      </SocialMediaLink>
      <SocialMediaLink href="https://dribbble.com/Imsety">
        <FaDribbble />
      </SocialMediaLink>
      <SocialMediaLink href="https://vimeo.com/imsety">
        <FaVimeo />
      </SocialMediaLink>
      <SocialMediaLink href="https://www.youtube.com/channel/UCVptL5EXU-Rd8lvuQvzDK3A">
        <FaYoutube />
      </SocialMediaLink>
    </div>
  );
}
