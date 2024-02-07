import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  RC,
  AM,
  sd,
  gasu,
  carrent,
  jobit,
  tripguide,
  threejs,
  revit,
  python,
  csharp,
  ifcjs,
  dotnet,
  rebarUI,
  autoCAD,
  shaftsUI,
  cropRegion,
  ifcjsProject,
  houseCard,
  mouseCard,
  hummerCard,
  webCard,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Revit API Developer",
    icon: mobile,
    className:
      "bg-house-card bg-cover bg-no-repeat bg-center hover:bg-house-back-card rounded-[20px] py-5 px-12 min-w-[248px] h-[370px] flex justify-evenly items-center flex-col",
  },
  {
    title: "BIM Specialist",
    icon: backend,
    className:
      "bg-mouse-card bg-cover bg-no-repeat bg-center hover:bg-mouse-back-card rounded-[20px] py-5 px-12 h-[370px] flex justify-evenly items-center flex-col",
  },
  {
    title: "Web Developer",
    icon: web,
    className:
      "bg-web-card bg-cover bg-no-repeat bg-center hover:bg-web-back-card rounded-[20px] py-5 px-12 h-[370px] flex justify-evenly items-center flex-col",
  },
  {
    title: "Structural Engineer",
    icon: creator,
    className:
      "bg-hummer-card bg-cover bg-no-repeat bg-center hover:bg-hummer-back-card rounded-[20px] py-5 px-12 h-[370px] flex justify-evenly items-center flex-col",
  },
];

const technologies = [
  {
    name: "Revit",
    icon: revit,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: ".Net",
    icon: dotnet,
  },
  {
    name: "IFC.js",
    icon: ifcjs,
  },
];

const experiences = [
  {
    title: "BIM Specialist → BIM Developer",
    company_name: "Strategie Digitali",
    icon: sd,
    iconBg: "#f0ebeb",
    date: "July 2022 - Present",
    points: [
      "Developed Revit plugins with WPF, tackling complex challenges using advanced tools of Revit API.",
      "Built and managed digital twin projects using ReactJS, TypeScript, JavaScript, 3JS, and IFCJS, focusing on web-based interactive experiences for IFC models.",
      "Specialized in Dynamo scripting for automation, streamlining workflows and improving project efficiency.",
      "Created custom zero nodes in C Sharp, enhancing Dynamo's visual scripting environment.",
      "Acted as an instructor, teaching Python in Dynamo, sharing expertise through courses and educational content.",
      "Shared innovative solutions and professional insights on complex technical issues in articles of Research and Development department.",
    ],
  },
  {
    title: "BIM Engineer Intern",
    company_name: "Renaissance Construction",
    icon: RC,
    iconBg: "#E6DEDD",
    date: "May 2021 - June 2022",
    points: [
      "Initiated and managed an independent project focused on automating rebar reinforcement processes.",
      "Created blueprints, models, and Revit families.",
      "Developed Python scripts in Dynamo, designed user-friendly interfaces, and prepared templates.",
      "Produced instructional videos to assist colleagues in the reinforcement concrete department.",
      "Developed and researched DXF-based solutions to automate integration of calculation program results into Revit.",
    ],
  },
  {
    title: "Revit: Structure Teacher",
    company_name:
      "St Petersburg State University of Architecture and Civil Engineering. Part-time.",
    icon: gasu,
    iconBg: "#E6DEDD",
    date: "January 2022 - May 2022",
    points: [
      "As the best student structural BIM engineer in Russia and a national BIM champion, I was invited to teach a course on Revit structures at my university while pursuing my studies. In this role, I instructed fellow student engineers on using Revit for structural and civil engineering, including integration with calculation programs and working with analytical models.",
    ],
  },
  {
    title: "Junior Civil Engineer",
    company_name: "A.M. Шендеровича. Part-time.",
    icon: AM,
    iconBg: "#404040",
    date: "Nov 2019 - Feb 2020",
    points: [
      "Gained hands-on experience with real projects in AutoCAD and Revit.",
      "Created practical blueprints and conducted 3D modeling.",
      "Calculated material quantity schedules.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Capital bar reinforcement scripts with UI",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
      {
        name: "Revit API",
        color: "blue-text-gradient",
      },
      {
        name: "Dynamo",
        color: "blue-text-gradient",
      },
      {
        name: "WinForms",
        color: "blue-text-gradient",
      },
    ],
    image: rebarUI,
    source_code_link: "https://github.com/",
    src: "https://www.youtube.com/embed/772KN7DDoj8?si=-WOEJb89N5oBhC_3",
  },
  {
    name: "Automatization of Revit Reinforcement with DXF",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
      {
        name: "Revit API",
        color: "blue-text-gradient",
      },
      {
        name: "Dynamo",
        color: "blue-text-gradient",
      },
      {
        name: "AutoCAD",
        color: "blue-text-gradient",
      },
    ],
    image: autoCAD,
    source_code_link: "https://github.com/",
    src: "https://www.youtube.com/embed/cFs-5w-FYgQ?si=LfX5W0Wjv752PIkW",
  },
  {
    name: "Reinforcement of openings in slab shafts",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
      {
        name: "Revit API",
        color: "blue-text-gradient",
      },
      {
        name: "Dynamo",
        color: "blue-text-gradient",
      },
      {
        name: "WinForms",
        color: "blue-text-gradient",
      },
    ],
    image: shaftsUI,
    source_code_link: "https://github.com/",
    src: "https://www.youtube.com/embed/ls9d5RRJHcY?si=FX4t6zj071jjewlS",
  },

  {
    name: "Revit Plugin: Style Crop Region",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "C#",
        color: "yellow-text-gradient",
      },
      {
        name: "Revit API",
        color: "blue-text-gradient",
      },
    ],
    image: cropRegion,
    source_code_link: "https://github.com/",
    src: "https://www.youtube.com/embed/wEYd5oMvrXA?si=GCup6IWfgrVycygf",
  },

  {
    name: "IFCjs React application",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "TypeScript",
        color: "yellow-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "THREE.js",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
    ],
    image: ifcjsProject,
    source_code_link: "https://github.com/",
    src: "https://www.youtube.com/embed/63Sm2AdSNVo?si=Q81unfFy_QxswB2z",
  },
];

export { services, technologies, experiences, testimonials, projects };
