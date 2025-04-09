import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/kipkoechke" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/kipkoechke/",
  },
  // { icon: <FaTwitter />, path: "https://x.com/kipkoechke" },
  {
    icon: <IoMdMail />,
    path: "https://mail.google.com/",
  },
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
