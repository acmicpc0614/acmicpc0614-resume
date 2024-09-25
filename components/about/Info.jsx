import {
  FaEnvelopeOpenText,
  FaMapMarkerAlt,
  FaSkype,
} from "react-icons/fa";

const Info = () => {
  const personalContent = [
    {
      border: "border-b border-[#E3E3E3] dark:border-[#3D3A3A]",
      icon: <FaEnvelopeOpenText />,
      iconColor: "text-[#FD7590]",
      name: "Email",
      meta: (
        <>
          
          <a
            className="hover:text-[#FA5252] duration-300 transition"
            href="mailto:eugenegarrett.dev0614@gmail.com"
          >
            eugenegarrett.dev0614
          </a>
        </>
      ),
    },
    {
      border: "border-b border-[#E3E3E3] dark:border-[#3D3A3A]",
      icon: <FaMapMarkerAlt />,
      iconColor: "text-[#6AB5B9] ",
      name: "Location",
      meta: <>Houston, TX</>,
    }
  ];

  return (
    <>
      {personalContent.map((item, key) => (
        <div className={`flex py-2.5 ${item.border}`} key={key}>
          <span
            className={`flex-shrink-0 socialbtn bg-white dark:bg-black ${item.iconColor} shadow-md`}
          >
            {item.icon}
          </span>
          <div className="text-left ml-2.5">
            <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
              {item.name}
            </p>
            <p className="dark:text-white break-all">{item.meta}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Info;
