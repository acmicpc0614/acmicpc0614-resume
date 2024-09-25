import { useTheme } from "next-themes";
import { MdOutlineBusinessCenter, MdOutlineSchool } from "react-icons/md";

const ResumeCard = () => {
  const { theme } = useTheme();

  const resumeData = [
    {
      title: "Education",
      icon: <MdOutlineBusinessCenter />,
      items: [
        {
          id: 1,
          date: "APR 2012 - AUG 2016",
          title: "Bachelor of Computer Science",
          place: "Technological Institute of the Philippines",
          bg: "#FFF4F4",
        },
      ],
    },
    {
      title: "Experience",
      icon: <MdOutlineSchool />,
      items: [
        {
          date: "OCT 2021 - MAY 2024",
          title: "Senior Blockchain Developer",
          place: "Venngage",
          bg: "#F2F4FF",
        },
        {
          date: "MAY 2018 - OCT 2021",
          title: "Senior Fullstack Developer",
          place: "Worka",
          bg: "#EEF5FA",
        },
        {
          date: "NOV 2016 - APR 2018",
          title: "Web Developer",
          place: "EACOMM",
          bg: "#F2F4FF",
        },
      ],
    }
  ];

  return (
    <>
      {resumeData.map((item, key) => (
        <div key={key}>
          <div className="flex items-center space-x-2 mb-4">
            <div className="text-6xl text-[#F95054]">{item.icon}</div>
            <h4 className="text-5xl dark:text-white font-medium">
              {item.title}
            </h4>
          </div>

          {item.items.map((singleItem, singleKey) => (
            <div
              className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg  dark:border-[#212425] dark:border-2"
              style={{
                background: `${
                  theme === "dark" ? "transparent" : singleItem?.bg
                }`,
              }}
              key={singleKey}
            >
              <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                {singleItem.date}
              </span>
              <h3 className="text-xl dark:text-white"> {singleItem.title} </h3>
              <p className="dark:text-[#b7b7b7]">{singleItem.place}</p>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default ResumeCard;
