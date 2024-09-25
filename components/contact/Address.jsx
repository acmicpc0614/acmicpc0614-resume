import { useTheme } from "next-themes";
import Image from "next/image";
import {
  FaTelegram,
  FaDiscord,
  FaGithub
} from "react-icons/fa";

const Address = () => {
  const { theme } = useTheme();

  const addressData = [

    {
      id: "02",
      icon: "/images/contact/email 1.png",
      title: "Email ",
      info: (
        <>
          <p>
            <a
              href="mailto:pleasebugmenot.dev@gmail.com"
              className="text-gray-lite text-lg dark:text-[#A6A6A6] "
            >
              pleasebugmenot.dev
            </a>
          </p>
        </>
      ),
      bg: "#EEFBFF",
    },
    {
      id: "03",
      icon: "/images/contact/map 1.png",
      title: "Address ",
      info: (
        <p className="text-gray-lite text-lg dark:text-[#A6A6A6] ">
          Houston, TX
        </p>
      ),
      bg: "#F2F4FF",
    },
  
  ];

  return (
    <>
      {addressData.map((item, i) => (
        <div
          key={i}
          style={{
            background: `${theme === "dark" ? "#212425" : item?.bg}`,
          }}
          className="flex flex-wrap dark:bg-transparent p-[30px]  border-[#A6A6A6] gap-2 rounded-xl "
        >
          <span className="w-8 mt-2">
            <Image
              src={item.icon}
              width={30}
              height={20}
              alt="icon"
              className="text-4xl dark:text-white"
            />
          </span>
          <div className="space-y-2">
            <p className="text-xl font-semibold dark:text-white">
              {item?.title} :
            </p>
            {item?.info}
          </div>
        </div>
      ))}
    </>
  );
};

export default Address;
