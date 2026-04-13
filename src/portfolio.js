/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Swati's Portfolio",
  description:
    "I’m an Sr. AI/ML engineer with a strong applied research background, combining engineering and scientific thinking. I build end to end systems and focus on scalable, reliable solutions that create real impact.",
  og: {
    title: "Swati Thapa Portfolio",
    type: "website",
    url: "http://SwatiThapa.com/",
  },
};

//Home Page
const greeting = {
  title: "Swati Thapa",
  logo_name: "SwatiThapa",
  subTitle:
    "I’m an AI/ML engineer with a strong applied research background, combining engineering and scientific thinking. I build end to end systems and focus on scalable, reliable solutions that create real impact.",
  resumeLink:
    "https://drive.google.com/file/d/1j8gfPO_y-rdT1CPcS_mnOaxLo1xMPKAr/view?usp=sharing",
  // portfolio_repository: "https://github.com/Swati1919/masterPortfolio",
  githubProfile: "https://github.com/swati-thapa",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Swati1919",
  // linkedin: "https://www.linkedin.com/in/swati-t-296606a0/",
  // gmail: "SwatiThapa98@gmail.com",
  // gitlab: "https://gitlab.com/SwatiThapa98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/Swati_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/swati-thapa",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/swati-t-296606a0/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:swatithapa019@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      imagePath: "data_science.svg",
      skills: [
        "⚡ Building end-to-end AI systems that translate data into real-world impact",
        "⚡ Designing LLM-powered applications with a focus on reliability, retrieval quality, and grounded responses",
        "⚡ Creating scalable systems that balance performance, cost, and production constraints",
        "⚡ Embedding trust into AI through safety, bias evaluation, and data privacy practices",
        "⚡ Turning complex machine learning concepts into simple, usable products",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    // {
    //   title: "Full Stack Development",
    //   fileName: "FullStackImg",
    //   skills: [
    //     "⚡ Building responsive website front end using React-Redux",
    //     "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
    //     "⚡ Creating application backend in Node, Express & Flask",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "HTML5",
    //       fontAwesomeClassname: "simple-icons:html5",
    //       style: {
    //         color: "#E34F26",
    //       },
    //     },
    //     {
    //       skillName: "CSS3",
    //       fontAwesomeClassname: "fa-css3",
    //       style: {
    //         color: "#1572B6",
    //       },
    //     },
    //     {
    //       skillName: "Sass",
    //       fontAwesomeClassname: "simple-icons:sass",
    //       style: {
    //         color: "#CC6699",
    //       },
    //     },
    //     {
    //       skillName: "JavaScript",
    //       fontAwesomeClassname: "simple-icons:javascript",
    //       style: {
    //         backgroundColor: "#000000",
    //         color: "#F7DF1E",
    //       },
    //     },
    //     {
    //       skillName: "ReactJS",
    //       fontAwesomeClassname: "simple-icons:react",
    //       style: {
    //         color: "#61DAFB",
    //       },
    //     },
    //     {
    //       skillName: "NodeJS",
    //       fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
    //       style: {
    //         color: "#339933",
    //       },
    //     },
    //     {
    //       skillName: "NPM",
    //       fontAwesomeClassname: "simple-icons:npm",
    //       style: {
    //         color: "#CB3837",
    //       },
    //     },
    //     {
    //       skillName: "Yarn",
    //       fontAwesomeClassname: "simple-icons:yarn",
    //       style: {
    //         color: "#2C8EBB",
    //       },
    //     },
    //     {
    //       skillName: "Gatsby",
    //       fontAwesomeClassname: "simple-icons:gatsby",
    //       style: {
    //         color: "#663399",
    //       },
    //     },
    //     {
    //       skillName: "Flutter",
    //       fontAwesomeClassname: "simple-icons:flutter",
    //       style: {
    //         color: "#02569B",
    //       },
    //     },
    //   ],
    // },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      imagePath: "cloud_infrastructure.svg",
      skills: [
        "⚡ Architecting cloud-native systems to support large-scale AI and LLM applications",
        "⚡ Building distributed pipelines for data ingestion, processing, and model evaluation",
        "⚡ Designing infrastructure that enables low-latency, scalable inference in production",
        "⚡ Managing containerized services and orchestration for resilient deployments",
        "⚡ Integrating storage, compute, and messaging systems for end-to-end AI workflows",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
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
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
      techStackTitle: "My Tech Stack",
      techStack: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "carbon:sql",
        },
        {
          skillName: "HTML",
          fontAwesomeClassname: "logos-html-5",
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "logos-css-3",
        },
        {
          skillName: "LangGraph",
          fontAwesomeClassname: "simple-icons:langgraph",
        },
        {
          skillName: "LangChain",
          fontAwesomeClassname: "simple-icons:langchain",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "logos:kubernetes",
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "mdi:github",
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos:tableau-icon",
        },
        {
          skillName: "AWS Cloud",
          fontAwesomeClassname: "simple-icons:amazonaws",
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "logos:heroku",
        },
        {
          skillName: "OpenAI",
          fontAwesomeClassname: "simple-icons:openai",
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
        },
        {
          skillName: "SciPy",
          fontAwesomeClassname: "simple-icons:scipy",
        },
        {
          skillName: "scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
        },
        {
          skillName: "Databricks",
          fontAwesomeClassname: "simple-icons:databricks",
        },
        {
          skillName: "Airflow",
          fontAwesomeClassname: "simple-icons:apacheairflow",
        },
        {
          skillName: "MLflow",
          fontAwesomeClassname: "simple-icons:mlflow",
        },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/Swati_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@Swati391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Queen Mary University of London",
      subtitle: "M.S in Big Data Science",
      logo_path: "qmul.png",
      alt_name: "QMUL",
      duration: "2021 - 2022",
      descriptions: [],
      //website_link: "http://iiitk.ac.in",
    },
    {
      title: "Ghousia College of Engineering (VTU)",
      subtitle: "B.E in Electronic and Communications",
      logo_path: "VTU.png",
      alt_name: "Ghousia College of Engineering (VTU)",
      duration: "2012 - 2016",
      descriptions: [],
      //website_link: "https://www.indiana.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description:
    "Worked across evolving startups and established companies as an AI and machine learning engineer and scientist, contributing to development, design, and system architecture. Experience includes building scalable solutions from early-stage ideas to production systems with real-world impact, guided by a strong research-driven approach. Also volunteer with open-source communities, supporting events and collaborative initiatives.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "AI/ML Engineer",
          company: "eBS Minds IT Inc ",
          // company_url: "https://www.tiktok.com/en/",
          logo_path: "ebs.jpeg",
          duration: "April 2025 - Present",
          location: "Remote, USA",
          description:
            "Worked on building production-grade LLM systems using RAG architectures with hybrid retrieval and re-ranking over vector databases like FAISS and Pinecone. Designed context engineering pipelines with advanced chunking, metadata-aware retrieval, and query rewriting to improve retrieval quality. Developed a scalable LLM evaluation framework for bias, safety, and hallucination detection, along with a distributed scoring engine using SQS, S3, and API orchestration to process model telemetry and generate governance-ready outputs.",
          color: "#000000",
        },
        {
          title: "Machine Learning Scientist - II",
          company: "Expedia Group",
          // company_url: "https://legatohealthtech.com/",
          logo_path: "Expedia_Group_Logo.png",
          duration: "Sep 2022 - Oct 2024",
          location: "London, UK",
          description:
            "Worked on machine learning systems for pricing and customer segmentation using behavioral and market signals, including building clustering models to enable targeted strategies. Designed A/B experiments to measure impact and guide decisions, and developed a custom LLM system on private enterprise data deployed on AWS for internal knowledge retrieval, supported by real-time ETL pipelines for analytics and reporting.",
          color: "#0879bf",
        },
        {
          title: "Machine Learning Engineer",
          company: "Apsis Solutions",
          // company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "apsis_solutions_logo.jpeg",
          duration: "Feb 2020 - Feb 2021",
          location: "Bengaluru, IN",
          description:
            "Built a clustering-based machine learning model for driving analytics, predicting vehicle behavior patterns to reduce maintenance costs. Designed a telematics data pipeline processing signals from 500+ vehicles, transforming raw sensor data into structured features to identify key cost drivers and improve fleet efficiency.",
          color: "#9b1578",
        },
        {
          title: "Data Science Consultant",
          company: "Rubixe",
          // company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "rubixe_logo.jpeg",
          duration: "Nov 2016 - Feb 2020",
          location: "Bengaluru, IN",
          description:
            "Worked on end-to-end data science workflows including exploratory analysis, feature engineering, and predictive modeling. Built classification models for lead scoring and developed systems to analyze ITSM data for incident prediction, volume forecasting, and automated ticket tagging using SQL-driven data pipelines.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Machine Learning Engineer",
          company: "Omdena",
          // company_url: "https://about.google/",
          logo_path: "omdena.png",
          duration: "Feb 2025 - April 2025",
          location: "Remote,USA",
          description:
            "Built an AI-powered route optimization system using geospatial data, combining road network modeling with constraint-based optimization to improve travel efficiency for field agents. Designed geocoding pipelines to clean and enrich location data, and applied clustering techniques to balance workloads across regions. Also developed a scalable distance computation framework that incorporated real-world constraints like traffic and schedules to enable more reliable route planning.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I enjoy building end-to-end AI-powered systems and turning them into real-world applications using modern tools, scalable systems, and cloud platforms.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "swati.png",
    description:
      "Pretty active across platforms, so feel free to reach out anytime. Happy to chat about AI, ML, cloud systems, or anything tech. Always open to helping or collaborating.",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "Documenting experiences and sharing technical learnings",
    link: "https://medium.com/@swatithapa019",
    avatar_image_path: "blogs_images.png",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
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
