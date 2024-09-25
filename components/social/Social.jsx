import {
  FaTelegram,
  FaDiscord,
  FaGithub
} from "react-icons/fa";

const Social = () => {
  const socialContent = [
    {
      link: "https://github.com/BTC415",
      icon: <FaGithub />,
      iconClass: "text-[#0072b1]",
    },
    {
      link: "https://t.me/crypto_0614",
      icon: <FaTelegram />,
      iconClass: "text-[#0072b1]",
    },
    {
      link: "https://discord.com/crypto_0614",
      icon: <FaDiscord />,
      iconClass: "text-[#0072b1]",
    },
  ];

  return (
    <>
      {socialContent.map((item, key) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={key}
        >
          <span className={`socialbtn ${item.iconClass}`}>{item.icon}</span>
        </a>
      ))}
    </>
  );
};

export default Social;
