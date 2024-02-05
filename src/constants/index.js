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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Revit API Developer",
    icon: mobile,
  },
  {
    title: "BIM Specialist",
    icon: backend,
  },
  {
    title: "Structural Engineer",
    icon: creator,
  },
];

const technologies = [
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "BIM Specialist → BIM Developer",
    company_name: "Strategie Digitali",
    icon: starbucks,
    iconBg: "#383E56",
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
    icon: tesla,
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
    icon: meta,
    iconBg: "#E6DEDD",
    date: "January 2022 - May 2022",
    points: [
      "As the best student structural BIM engineer in Russia and a national BIM champion, I was invited to teach a course on Revit structures at my university while pursuing my studies. In this role, I instructed fellow student engineers on using Revit for structural and civil engineering, including integration with calculation programs and working with analytical models.",
    ],
  },
  {
    title: "Junior Civil Engineer",
    company_name: "A.M. Шендеровича. Part-time.",
    icon: meta,
    iconBg: "#E6DEDD",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
