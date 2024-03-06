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
  rayCasting,
  commandChanger,
  grass,
  italy,
  champlogo,
  youtube,
  calcs,
  anna,
  tshirt,
  shareme,
  mouse,
  excel,
  manager,
  guards,
  webster,
  crop,
  background,
  schedule,
  webrevit,
  analytical,
  calcus,
  rebar,
  dynamoui,
  rebardyn,
  shafts,
  wow,
  ifcweb,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
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
      "bg-house-card bg-cover bg-no-repeat bg-center bg-navy hover:bg-house-back-card rounded-[20px] py-5 px-12  h-[370px] flex justify-evenly items-center flex-col",
  },
  {
    title: "BIM Specialist",
    icon: backend,
    className:
      "bg-mouse-card bg-cover bg-no-repeat bg-center bg-navy hover:bg-mouse-back-card rounded-[20px] py-5 px-12 h-[370px] flex justify-evenly items-center flex-col",
  },
  {
    title: "Web Enthusiast",
    icon: web,
    className:
      "bg-web-card bg-cover bg-no-repeat bg-center bg-navy hover:bg-web-back-card rounded-[20px] py-5 px-12 h-[370px] flex justify-evenly items-center flex-col",
  },
  {
    title: "Structural Engineer",
    icon: creator,
    className:
      "bg-hummer-card bg-cover bg-no-repeat bg-center bg-navy hover:bg-hummer-back-card rounded-[20px] py-5 px-12 h-[370px] flex justify-evenly items-center flex-col",
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
    iconBg: "white",
    date: "July 2022 - Present",
    points: [
      "Developed Revit plugins with WPF, using advanced tools of Revit API.",
      "Built projects using React.js, TypeScript, JavaScript,THREE.js, and IFC.js, focusing on IFC models in web.",
      "Created Dynamo scripts for automation and modeling.",
      "Created custom zero nodes in C#, enhancing Dynamo's visual scripting environment.",
      "Acted as an instructor, teaching Python in Dynamo.",
      "Shared innovative solutions and professional insights on complex technical issues in articles and videos of Research and Development department.",
    ],
  },
  /* {
    title: "Moving to Italy",
    company_name: "Strategie Digitali",
    icon: italy,
    iconBg: "#f0ebeb",
    date: "July 2022-February 2023",
    points: [
      "To find a job in European Union while making a dimploma project in Russia? In 2022? Handling any bureaucratic obstacle while remotely working in 5 different countries?",
      "It was such a big deal - I was invited as a guest to the professional podcast by my student-time professional idol!",
    ],
  }, */
  {
    title: "Revit: Structure Teacher",
    company_name:
      "St Petersburg State University of Architecture and Civil Engineering. Part-time.",
    icon: gasu,
    iconBg: "white",
    date: "January 2022 - May 2022",
    points: [
      "As the best student structural BIM engineer in Russia and a national BIM champion, I was invited to teach a course on Revit structures at my university while pursuing my studies. In this role, I instructed fellow student engineers on using Revit for structural and civil engineering, including integration with calculation programs and working with analytical models.",
    ],
  },
  {
    title: "BIM Engineer Intern",
    company_name: "Renaissance Construction",
    icon: RC,
    iconBg: "white",
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
    title: "Winning National BIM championship!",
    company_name:
      "St Petersburg State University of Architecture and Civil Engineering",
    icon: champlogo,
    iconBg: "white",
    date: "October 2021",
    points: [
      "In a team with the brightest specialists of 8 other departments, we created a BIM project that won the 1 first place in the national championship.",
      "The first place between copmetitors of my department was also taken by me!",
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
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Nikita Pavin",
    designation: "Lead BIM Specialist",
    company: "Renaissance construction",
    image:
      "https://media.licdn.com/dms/image/C4D03AQGO1vxqh1_pUw/profile-displayphoto-shrink_100_100/0/1580232624137?e=1714003200&v=beta&t=-FD0ER5q2q0Qyq5dwHZSidDnjvgYQUc83PXlngSNbQM",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial: "Many thanks to Anna for this nice piece of work!",
    name: "Jeremy Tammik",
    designation: "Consulting Analyst",
    company: "Autodesk",
    image:
      "https://thebuildingcoder.typepad.com/2014-06-12_jeremy_bjoerkoe_cropped_150.png",
  },
];

const projects = [
  {
    name: "Capital bar reinforcement scripts with UI",
    description: "",
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
    source_code_link: "https://youtu.be/772KN7DDoj8",
    src: "https://www.youtube.com/embed/772KN7DDoj8?si=-WOEJb89N5oBhC_3",
    video: true,
    github: false,
  },
  {
    name: "Automatization of Revit Reinforcement with DXF",
    description: "",
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
    source_code_link: "https://youtu.be/cFs-5w-FYgQ",
    src: "https://www.youtube.com/embed/cFs-5w-FYgQ?si=LfX5W0Wjv752PIkW",
    video: true,
    github: false,
  },
  {
    name: "Reinforcement of openings in slab shafts",
    description: "",
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
    source_code_link: "https://youtu.be/ECcn3_cnxdE",
    src: "https://www.youtube.com/embed/ECcn3_cnxdE?si=nMIm3X1Dueh3EkPt",
    video: true,
    github: false,
  },

  {
    name: "Revit Plugin: Style Crop Region",
    description: "",
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
    source_code_link: "https://github.com/",
    src: "https://www.youtube.com/embed/wEYd5oMvrXA?si=GCup6IWfgrVycygf",
    video: true,
    github: false,
  },

  {
    name: "IFCjs React application 🔇",
    description: "",
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
    source_code_link: "https://github.com/",
    src: "https://www.youtube.com/embed/63Sm2AdSNVo?si=Q81unfFy_QxswB2z",
    video: true,
    github: true,
  },
];

const talks = [
  {
    name: "Lesson: 'Sections By Curve' 🔊",
    description:
      "Oh, the drama of curve-based sections in Revit…. Ever found yourself in a Revit trap, trying to create sections for a curved element and hitting a brick wall? Drawing straight sections manually is a headache, especially for projects with non-linear architecture like tunnels or dams. Well, I've been there, and I've got a solution for you.",
    tags: [
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
      {
        name: "Dynamo",
        color: "blue-text-gradient",
      },
      {
        name: "Revit",
        color: "blue-text-gradient",
      },
    ],
    source_code_link: "https://github.com/",
    src: "https://www.youtube.com/embed/Fic5BD-s3A8?si=rl5QDNFRjU3XqxKs",
    video: true,
    github: false,
  },
  {
    name: "Article: 'Selection by Ray Casting'",
    description:
      "It's common knowledge how selecting elements works in Revit. We have our trusty tools for manual selection and the beloved Filtered Elements Collector, which automatically gathers elements based on their parameter values and properties. Sounds great, what else could we need? 🤔",
    tags: [
      {
        name: "C#",
        color: "yellow-text-gradient",
      },
      {
        name: "RevitAPI",
        color: "blue-text-gradient",
      },
      {
        name: "Revit",
        color: "blue-text-gradient",
      },
    ],
    image: rayCasting,
    src: "",
    source_code_link:
      "https://www.linkedin.com/pulse/selection-ray-casting-when-you-only-know-direction-anna-baranova/?trackingId=pEb7k4VxSvOlLRM3zRTffw%3D%3D",
    video: false,
    github: false,
  },
  {
    name: "Article: 'Revit API: Command Binding'",
    description:
      "It’s been a while since I’ve found “AddInCommandBinding” and has been dreaming to play with it… But why would you want to mess around with default commands, you might ask? Well, it's not about being an evil developer who likes to play pranks on colleagues.",
    tags: [
      {
        name: "C#",
        color: "yellow-text-gradient",
      },
      {
        name: "RevitAPI",
        color: "blue-text-gradient",
      },
      {
        name: "Revit",
        color: "blue-text-gradient",
      },
    ],
    image: commandChanger,
    src: "",
    source_code_link:
      "https://www.linkedin.com/pulse/command-binding-why-would-you-mess-around-default-revit-anna-baranova/",
    video: false,
    github: false,
  },
  {
    name: "Article: 'Exporting Elements as a family'",
    description:
      "Grasshopper and Revit API: Exporting Elements – A Family Drama or a Code Symphony? Oh, boy... That's something else!",
    tags: [
      {
        name: "C#",
        color: "yellow-text-gradient",
      },
      {
        name: "Grasshoppes",
        color: "blue-text-gradient",
      },
      {
        name: "Rhino",
        color: "blue-text-gradient",
      },
      {
        name: "RevitAPI",
        color: "blue-text-gradient",
      },
      {
        name: "DWG",
        color: "blue-text-gradient",
      },
    ],
    image: grass,
    src: "",
    source_code_link:
      "https://www.linkedin.com/pulse/grasshopper-revit-api-exporting-elements-family-drama-anna-baranova/",
    video: false,
    github: false,
  },
];

const scripts = [
  {
    name: "Capital bar reinforcement scripts with UI",
    description:
      "WinForm-RevitAPI-IronPython-based magic of reinforcing capitals!",
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
    source_code_link: "https://youtu.be/772KN7DDoj8",
    image: rebardyn,
    video: false,
    github: false,
  },

  {
    name: "Capital bar reinforcement scripts with UI",
    description:
      "WinForm-RevitAPI-IronPython-based magic of reinforcing capitals!",
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
    source_code_link: "https://youtu.be/772KN7DDoj8",
    image: dynamoui,
    video: false,
    github: false,
  },
  {
    name: "What was behind?",
    description:
      "Background of WinForm-RevitAPI-IronPython-based magic of reinforcing capitals!",
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
    source_code_link: "https://youtu.be/772KN7DDoj8",
    image: wow,
    video: false,
    github: false,
  },
  {
    name: "Automatization of Revit Reinforcement with DXF",
    description: "Automation of area reinforcement",
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
    source_code_link: "https://youtu.be/cFs-5w-FYgQ",
    src: "https://www.youtube.com/embed/cFs-5w-FYgQ?si=LfX5W0Wjv752PIkW",
    video: true,
    github: false,
  },
  {
    name: "Lesson: Sections By Curve part 1 🔊",
    description:
      "Oh, the drama of curve-based sections in Revit…. Ever found yourself in a Revit trap, trying to create sections for a curved element and hitting a brick wall? Drawing straight sections manually is a headache, especially for projects with non-linear architecture like tunnels or dams. Well, I've been there, and I've got a solution for you.",
    tags: [
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
      {
        name: "Dynamo",
        color: "blue-text-gradient",
      },
      {
        name: "Revit",
        color: "blue-text-gradient",
      },
    ],
    source_code_link: "https://youtu.be/Fic5BD-s3A8?si=bg0BzFeuXwcN7qX5",
    src: "https://www.youtube.com/embed/Fic5BD-s3A8?si=rl5QDNFRjU3XqxKs",
    video: true,
    github: false,
  },
  {
    name: "Lesson: Sections By Curve part 2🔊",
    description:
      "Oh, the drama of curve-based sections in Revit…. Ever found yourself in a Revit trap, trying to create sections for a curved element and hitting a brick wall? Drawing straight sections manually is a headache, especially for projects with non-linear architecture like tunnels or dams. Well, I've been there, and I've got a solution for you.",
    tags: [
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
      {
        name: "Dynamo",
        color: "blue-text-gradient",
      },
      {
        name: "Revit",
        color: "blue-text-gradient",
      },
    ],
    source_code_link: "https://youtu.be/GMzoIS703FA?si=zzvoGAXIbbQ4GEn1",
    src: "https://www.youtube.com/embed/GMzoIS703FA?si=Hsv78-AE2NUh9YfU",
    video: true,
    github: false,
  },
  /* {
    name: "Reinforcement of openings in slab shafts",
    description:
      "Yes, that's also based on Dynamo, IronPython, WinForms and (a little bit of) RevitAPI",
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
    source_code_link: "https://youtu.be/ECcn3_cnxdE",
    image: shafts,
    video: false,
    github: false,
  }, */
  /*  {
    name: "Capital bar reinforcement scripts with UI",
    description:
      "WinForm-RevitAPI-IronPython-based magic of reinforcing capitals!",
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
    source_code_link: "https://youtu.be/772KN7DDoj8",
    src: "https://www.youtube.com/embed/772KN7DDoj8?si=-WOEJb89N5oBhC_3",
    video: true,
    github: false,
  }, */
];

const webProjects = [
  {
    name: "IFCjs React application",
    description:
      "IFC models placed on the 3D map with a possibility to check properties of every element even on mobile phone? Yes, yes, already done.",
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
    source_code_link: "https://github.com/AnnaAntonovna/my-first-app",
    image: ifcweb,
    video: false,
    github: true,
  },

  {
    name: "First steps with THREE.js and openAI API",
    description:
      "Why not to create a 3D T-shirt customizer with AI generating prints? I know it's impressive, but actually it has nothing to do with me. (I simply followed step-by step guide of amazing Adrian from JS Mastery).",
    tags: [
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "OpenAI API",
        color: "blue-text-gradient",
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
    ],
    source_code_link: "https://github.com/AnnaAntonovna/ThreeJs-OpenAI-React",
    //src: "https://www.youtube.com/embed/znNPC5e0NMk?si=MBp-gjvcWjRRpKJ8",
    image: tshirt,
    video: false,
    github: true,
  },
  {
    name: "Pinterest-gallery",
    description:
      "Based on sanity backend, web-gallery-application created wth JavaScript and React.js.",
    tags: [
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "Sanity",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "Google Oauth",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
    ],
    source_code_link: "https://github.com/AnnaAntonovna/ShareMe-React",
    image: shareme,
    video: false,
    github: true,
  },

  {
    name: "annabaranova.com",
    description:
      "I just really wanted the best project of my parents to get recognized and get a job of her dreams",
    tags: [
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "OpenAI API",
        color: "blue-text-gradient",
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
    ],
    source_code_link: "https://github.com/AnnaAntonovna/threejs-react",
    image: anna,
    video: false,
    github: true,
  },
];

const cSharp = [
  {
    name: "Crop region by mouse",
    description: "Crops a view by mouse rectangle selection",
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
    source_code_link: "https://github.com/",
    image: mouse,
    video: false,
    github: false,
  },
  {
    name: "Selected parameters to Excel",
    description:
      "Ever wanted to get some specific parameters only of a view elements of a certain category? You are heard.",
    tags: [
      {
        name: "C#",
        color: "yellow-text-gradient",
      },
      {
        name: "Revit API",
        color: "blue-text-gradient",
      },
      {
        name: "WPF",
        color: "blue-text-gradient",
      },
      {
        name: ".NET",
        color: "blue-text-gradient",
      },
    ],
    source_code_link: "https://github.com/",
    image: excel,
    video: false,
    github: false,
  },
  {
    name: "Joint Manager",
    description:
      "Manage joint relarionship between two selected categories on the active view, in the whole project or by a smart manual selection: cut, unjoin, switch, join!",
    tags: [
      {
        name: "C#",
        color: "yellow-text-gradient",
      },
      {
        name: "Revit API",
        color: "blue-text-gradient",
      },
      {
        name: "WPF",
        color: "blue-text-gradient",
      },
      {
        name: ".NET",
        color: "blue-text-gradient",
      },
    ],
    source_code_link: "https://github.com/",
    image: manager,
    video: false,
    github: false,
  },
  {
    name: "Guards",
    description:
      "Carefully watching after new elements created by a user. Forbids the creation of new model-in-place elements. (Based on Revit API Updaters).",
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
    source_code_link: "https://github.com/",
    image: guards,
    video: false,
    github: false,
  },
  {
    name: "Web inside of Revit",
    description:
      "You have a reason not to use Autodesk Forge? Yes, I've made it possible to put web browser inside of Revit. Is it a good idea? Ask me on the interview",
    tags: [
      {
        name: "C#",
        color: "yellow-text-gradient",
      },
      {
        name: "Revit API",
        color: "blue-text-gradient",
      },
      {
        name: "WPF",
        color: "blue-text-gradient",
      },
      {
        name: ".NET",
        color: "blue-text-gradient",
      },
      {
        name: "WebView2",
        color: "blue-text-gradient",
      },
    ],
    source_code_link: "https://github.com/",
    image: webster,
    video: false,
    github: false,
  },
  {
    name: "Automize Crop Region",
    description: "Set crop region color and line style",
    tags: [
      {
        name: "C#",
        color: "yellow-text-gradient",
      },
      {
        name: "Revit API",
        color: "blue-text-gradient",
      },
      {
        name: "WPF",
        color: "blue-text-gradient",
      },
      {
        name: ".NET",
        color: "blue-text-gradient",
      },
    ],
    source_code_link: "https://github.com/",
    image: crop,
    video: false,
    github: false,
  },
  {
    name: "Lost&Found: Background color",
    description:
      "Select a custom color for a background that would safe your eyes healthy",
    tags: [
      {
        name: "C#",
        color: "yellow-text-gradient",
      },
      {
        name: "Revit API",
        color: "blue-text-gradient",
      },
      {
        name: "WPF",
        color: "blue-text-gradient",
      },
      {
        name: ".NET",
        color: "blue-text-gradient",
      },
    ],
    source_code_link: "https://github.com/",
    image: background,
    video: false,
    github: false,
  },
  {
    name: "Schedule of a family type  by selected element",
    description:
      "The schedule department ready to make a schedule of all the elements of a family type by one element selected on a view",
    tags: [
      {
        name: "C#",
        color: "yellow-text-gradient",
      },
      {
        name: "Revit API",
        color: "blue-text-gradient",
      },
      {
        name: "WPF",
        color: "blue-text-gradient",
      },
      {
        name: ".NET",
        color: "blue-text-gradient",
      },
    ],
    source_code_link: "https://github.com/",
    image: schedule,
    video: false,
    github: false,
  },
  /* {
    name: "Beatiful banch of tools 🔇",
    description: "Shortly, silently, an assorty of one-conept Revit tools",
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
    source_code_link: "https://github.com/",
    src: "https://www.youtube.com/embed/99G8M0cRpsA?si=_nC9iv1lStNQOFOu",
    video: true,
    github: false,
  }, */
  {
    name: "DEMO: Revit Families in a Web Library with IFC.js",
    description:
      "A little experiment of Web implementation into revit without using Forge.",
    tags: [
      {
        name: "C#",
        color: "yellow-text-gradient",
      },
      {
        name: "Revit API",
        color: "blue-text-gradient",
      },
      {
        name: "WebView2",
        color: "blue-text-gradient",
      },
      {
        name: "WPF",
        color: "blue-text-gradient",
      },
      {
        name: "IFC.js",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
    ],
    source_code_link: "https://github.com/",
    image: webrevit,
    video: false,
    github: false,
  },
];

const BIMprojects = [
  {
    name: "National BIM Championship full-cycle🔇",
    description:
      "Starting from architectural draft to a model with structures fully calculated. The whole project was done by me in 5 working days, this was possible due to pre-made templates and scripts.",
    tags: [
      {
        name: "Revit",
        color: "blue-text-gradient",
      },
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
        name: "LIRA",
        color: "blue-text-gradient",
      },
    ],
    source_code_link: "https://youtu.be/Ii-BvNykBV4?si=yNLqOV2f_kT8FkFN",
    src: "https://www.youtube.com/embed/Ii-BvNykBV4?si=t_mSCaRsakZ8rDUv",
    video: true,
    github: false,
  },
  {
    name: "Qualifying BIM Championship full-cycle",
    description:
      "Qualifying BIM Championship full-cycle: modeling, calculations, modeling according to calculations",
    tags: [
      {
        name: "Revit",
        color: "blue-text-gradient",
      },
      {
        name: "Dynamo",
        color: "blue-text-gradient",
      },
      {
        name: "LIRA",
        color: "blue-text-gradient",
      },
      {
        name: "AutoCAD",
        color: "blue-text-gradient",
      },
    ],
    source_code_link: "https://youtu.be/PTK3IIjiKeA",
    src: "https://www.youtube.com/embed/PTK3IIjiKeA?si=dctMGu4cjdnx5opK",
    video: true,
    github: false,
  },
  {
    name: "Automatization of Revit Reinforcement with DXF",
    description: "",
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
    source_code_link: "https://github.com/",
    src: "https://www.youtube.com/embed/cFs-5w-FYgQ?si=LfX5W0Wjv752PIkW",
    video: true,
  },
];

const Calculations = [
  /* {
    name: "ETABS Calculations",
    description: "",
    tags: [
      {
        name: "ETABS",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
      {
        name: "Dynamo",
        color: "blue-text-gradient",
      },
      {
        name: "Revit",
        color: "blue-text-gradient",
      },
      {
        name: "Revit API",
        color: "blue-text-gradient",
      },
      {
        name: "AutoCAD",
        color: "blue-text-gradient",
      },
    ],
    source_code_link:
      "https://622e12a76c242.site123.me/portfolio-1/calculation-projects",
    src: calcs,
    video: false,
    github: false,
  }, */
  {
    name: "Calculation and modeling of large-span wooden roof",
    description: "Something I made during BIM Championship",
    tags: [
      {
        name: "Revit",
        color: "blue-text-gradient",
      },
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
        name: "LIRA",
        color: "blue-text-gradient",
      },
    ],
    image: analytical,
    video: false,
    github: false,
  },
  {
    name: "Calculation of all the bearing structures",
    description: "Something I made during BIM Championship",
    tags: [
      {
        name: "Revit",
        color: "blue-text-gradient",
      },
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
        name: "LIRA",
        color: "blue-text-gradient",
      },
    ],
    image: calcus,
    video: false,
    github: false,
  },
  {
    name: "Applying calculation results into the model",
    description: "Something I made during BIM Championship",
    tags: [
      {
        name: "Revit",
        color: "blue-text-gradient",
      },
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
        name: "LIRA",
        color: "blue-text-gradient",
      },
    ],
    image: rebar,
    video: false,
    github: false,
  },
  {
    name: "Calculations of a skyscraper",
    description: "Meet a little piece of my diploma project!",
    tags: [
      {
        name: "Revit",
        color: "blue-text-gradient",
      },
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
        name: "LIRA",
        color: "blue-text-gradient",
      },
    ],
    image: calcs,
    video: false,
    github: false,
  },
  /* {
    name: "National BIM Championship full-cycle🔇",
    description:
      "Starting from architectural draft to a model with structures fully calculated. The whole project was done by me in 5 working days, this was possible due to pre-made templates and scripts.",
    tags: [
      {
        name: "Revit",
        color: "blue-text-gradient",
      },
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
        name: "LIRA",
        color: "blue-text-gradient",
      },
    ],
    source_code_link: "https://youtu.be/Ii-BvNykBV4?si=yNLqOV2f_kT8FkFN",
    src: "https://www.youtube.com/embed/Ii-BvNykBV4?si=t_mSCaRsakZ8rDUv",
    video: true,
    github: false,
  }, */
  /* {
    name: "Qualifying BIM Championship full-cycle",
    description:
      "Qualifying BIM Championship full-cycle: modeling, calculations, modeling according to calculations",
    tags: [
      {
        name: "Revit",
        color: "blue-text-gradient",
      },
      {
        name: "Dynamo",
        color: "blue-text-gradient",
      },
      {
        name: "LIRA",
        color: "blue-text-gradient",
      },
      {
        name: "AutoCAD",
        color: "blue-text-gradient",
      },
    ],
    source_code_link: "https://youtu.be/PTK3IIjiKeA",
    src: "https://www.youtube.com/embed/PTK3IIjiKeA?si=dctMGu4cjdnx5opK",
    video: true,
    github: false,
  }, */
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  talks,
  webProjects,
  scripts,
  cSharp,
  BIMprojects,
  Calculations,
};
