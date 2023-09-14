/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Kay's Portfolio",
  description:
    "A passionate developer looking for new opportunities. Slowly learning and dissecting the world of software.",
  og: {
    title: "Kay Zhang's Portfolio",
    type: "website",
    url: "https://KayZhang52.github.io",
  },
};

//Home Page
const greeting = {
  title: "Kay Zhang",
  logo_name: "KayZhang",
  nickname: "KayZhang52",
  subTitle:
    "A passionate developer looking for new opportunities. Slowly learning and dissecting the world of software.",
  resumeLink:
    "https://entuedu-my.sharepoint.com/:b:/g/personal/c200234_e_ntu_edu_sg/EQ3WSr-pg_FBowv_lIos4SUBOz0W2RQBgKOciX0juJyJLQ?e=b4BKrk",
  portfolio_repository: "https://github.com/KayZhang52/My-Portfolio-Website  ",
  githubProfile: "https://github.com/KayZhang52",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/KayZhang52",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kay-zhang-939278217/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:zhangchaofan9627@gmail.com@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Software Development",
      fileName: "DataScienceImg",
      skills: [
        "Develop applications on desktop and mobile devices",
        "Experience with both web development and software development",
      ],
      softwareSkills: [
        {
          skillName: "Spring",
          fontAwesomeClassname: "devicon:spring",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "cib:java",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "cib:react",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "skill-icons:javascript",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "cib:flask",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Android Studio",
          fontAwesomeClassname: "skill-icons:androidstudio-light",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "logos:kotlin-icon",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Deployment",
      fileName: "CloudInfraImg",
      skills: [
        "Experience assisting in cloud deployment in Alibaba Cloud during my internship.",
        "Afterwards I also attained an AWS Cloud certification.",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "AWS S3",
          fontAwesomeClassname: "logos:aws-s3",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "AWS Cloudfront",
          fontAwesomeClassname: "logos:aws-cloudfront",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "skill-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "I design UIs that are clean and functional, also responsive. Includs Android and web application designs.",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Android Studio",
          fontAwesomeClassname: "skill-icons:androidstudio-light",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Nanyang Technological University",
      subtitle: "BA in Computer Science",
      logo_path: "ntu_logo.webp",
      alt_name: "NTU",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ I have studied computer science subjects including data structures and algorithms, OS, OOP, COA",
        "⚡ On top of this, I have took up modules in AI, NLP, DL to boaden my perspectives.",
        "⚡ I try to learn new things as much as possible, for my FYP project, I developed a decentralized application using blockchain technology.",
      ],
      website_link: "https://www.ntu.edu.sg/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Amazon Cloud Practitioner",
      subtitle: "AWS Cloud",
      logo_path: "AWS_cloud_certificate.jpg",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Amazon Cloud",
      color_code: "#121B38",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internships and work I have been through",
  description:
    "Here are some of the work and internships I have done while studying",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: false,
      experiences: [
        {
          title: "Coding Instructor",
          company: "Champ Code Academy",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "November 2021 - January 2022",
          location: "Singapore",
          description: "Teaching children Scratch and Python",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Engineering Intern",
          company: "Weaver Technology",
          company_url: "https://weaver.com.sg/",
          logo_path: "weaver_logo.png",
          duration: "July 2022 - January 2023",
          location: "Singapore",
          description:
            "Developed features using Sping, and components using React. Assisted in cloud deployments.",
          color: "#000000",
        },
        {
          title: "Software Developer",
          company: "Angsana Solutions",
          company_url: "https://www.delhivery.com/",
          logo_path: "angsana_logo.png",
          duration: "May 2022 - September 2022",
          location: "Singapore",
          description:
            "Developed a web application that helps maritime company keep track of their bunkering records.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: "Some of my Github Projects.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "photo.png",
    description:
      "You can connect with me on LinkedIn, Github, or just send me an email.",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "Coming soon.",
    // link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "photo.png",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    locality: "Kanodar",
    country: "IN",
    region: "Gujarat",
    postalCode: "385520",
    streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
