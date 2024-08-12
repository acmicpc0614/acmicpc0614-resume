import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Resume',
  description: 'This is my Resume',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  // Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Eugene Garrett.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Full Stack & Blockchain Software Engineer</strong>, with over 8 years
        of experience in this field.
      </p>
      {/* <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>.
      </p> */}
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I have been working primarily as a blockchain developer for the past 8 years.
My primary skills are React, Next.js, Node.js, and I have gained great experience with the EVM, Solana ecosystem, etc. `,
  aboutItems: [
    {label: 'Location', text: 'Houston, TX, USA', Icon: MapIcon},
    {label: 'Age', text: '30', Icon: CalendarIcon},
    {label: 'Nationality', text: 'United states', Icon: FlagIcon},
    {label: 'Interests', text: 'Sports, Music, Piano', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Calgary', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'WizardsDev, PayrLink', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Skills',
    skills: [
      {
        name: 'Jira',
      },
      {
        name: 'Git',
      },

      {
        name: 'React',
      },

      {
        name: 'Next.js',
      },

      {
        name: 'Typescript',
      },

      {
        name: 'Express.js',
      },

      {
        name: 'Node.js',
      },

      {
        name: 'Solidity',
      },

      {
        name: 'Rust',
      },

      {
        name: 'Web3.js',
      },

      {
        name: 'Ether.js',
      },

      {
        name: 'Hardhat',
      },

      {
        name: 'Truffle',
      },

      {
        name: 'ERC20 / ERC721 / ERC1155',
      },

      {
        name: 'Telegram Bot',
      },
      {
        name: 'TailwindCSS',
      },

      {
        name: 'MUI',
      },
      {
        name: 'Figma',
      },
      {
        name: 'MongoDB',
      },
      {
        name: 'Java',
      },
      {
        name: 'JavaScript',
      },
      {
        name: 'C++',
      },
      {
        name: 'Mobile',
      },
      {
        name: 'React Natie',
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'React.js, Next.js, Node.js, AWS, MongoDB, tailwind CSS',
    url: 'https://www.realtor.com/',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'React.js, Next.js, Node.js, AWS, Java, MongoDB, tailwind CSS',
    url: 'https://www.zillow.com/',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Next.js + Tailwind CSS + GraphQL + Prisma + AWS',
    url: 'https://chroniclehq.com/',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Next.js + MUI + GraphQL + Prisma + Supabase',
    url: 'https://rolldeep.co/',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Next.js + Tailwind CSS + GraphQL + MongoDB + Firebase',
    url: 'https://je-portfolioo.netlify.app/',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'React.js + Node.js + MUI + RESTful API + MongoDB + AWS',
    url: 'https://www.onerare.io/',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Next.js + Tailwind CSS + GraphQL + Prisma',
    url: 'https://leastsquares.io/',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'React + TailwindCSS + Node.js + AWS',
    url: 'https://managehelps.netlify.app/',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'React + MUI + Node.js + RESTful API + MongoDB',
    url: 'https://adminis.netlify.app/',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'React + MUI + Node.js + RESTful API + MongoDB',
    url: 'https://lamaadmin.netlify.app/',
    image: porfolioImage10,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2012 ~ August 2016',
    location: 'Clown college',
    title: 'Bachelor of Software Engineering,  Software Engineering',
    content: <p>University of Calgary, Canada</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '10/2021 - 05/2024',
    location: 'PayrLink',
    title: 'Senior Full Stack Developer',
    content: (
      <p>
        PayrLink is a decentralized application powered by Blockchain technology that works as a decentralized
        third-party arbitrates transactions in a private manner from very simple and highly complex ones.
      </p>
    ),
  },
  {
    date: '05/2018 - 10/2021',
    location: 'WizardsDev',
    title: 'Senior Full Stack Developer',
    content: (
      <p>
        WizardsDev is a software development company that provides clients with technical I've been working with modern
        front-end frameworks using React, Next.js.
      </p>
    ),
  },
  {
    date: '11/2016 - 04/2018',
    location: 'Benevity',
    title: 'Junior Web Developer',
    content: (
      <p>
        Benevity is a technology company that specializes in corporate social responsibility (CSR) and employee
        engagement solutions. They provide a platform that helps businesses manage their charitable giving, volunteer
        programs, and other social impact initiatives
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'PleaseBugMeNot.dev@gamil.com',
      href: 'mailto:PleaseBugMeNot.dev@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Houston, TX, USA',
      href: 'http://localhost:3000/#about',
    },
    {
      type: ContactType.Github,
      text: 'acmicpc0614',
      href: 'https://github.com/acmicpc0614',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  // {label: 'Github', Icon: GithubIcon, href: 'https://github.com/acmicpc0514'},
  // {label: 'Mail', Icon: GithubIcon, href: 'PleaseBugMeNot.dev@gamil.com'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'http://localhost:3000/#contact'},
  // {label: 'LinkedIn', Icon: LinkedInIcon, href: 'http://localhost:3000/#contact'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'http://localhost:3000/#contact'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'http://localhost:3000/#contact'},
];
