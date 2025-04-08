import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/kipkoechke" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/kipkoechke/",
  },
  { icon: <FaTwitter />, path: "https://x.com/kipkoechke" },
];

function Social({
  containerStyles,
  iconStyles,
}: {
  containerStyles?: string;
  iconStyles?: string;
}) {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.path}
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyles}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
}

export default Social;
