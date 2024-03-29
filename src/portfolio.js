/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Po-Hsuan Huang",
  title: "",
  subTitle: emoji(
    "I'm Po-Hsuan Huang, a Machine Learning Engineer with a deep-seated passion for advancing artificial intelligence and learning human cognitive functions. With a rich background in computer vision, neuroscience, and physics, my career is dedicated to bridging the gap between AI and humanity. I love camping and back-packing."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1sljmMYY7NEuTxb17L1qsvMBKVMB1vbgc/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Po-Hsuan-Huang",
  linkedin: "https://www.linkedin.com/in/pohsuanhuang/",
  gmail: "pohsuanh@usc.edu",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title:" My Contribution to Science",
  subTitle:
    "Proposed an Semi-supervised Learning Algorithm for Early Screening of Neurological Conditions ",
  skills: [
    emoji(
      "RANSAC_SVM, inspired by the computer vision algorithm Random Sampling Consensus (RANSAC), \
      is an iterative method for robust parameter estimation using a subset of inliers from the complete dataset.\
       The RANSAC process begins with a randomly sampled dataset, followed by model evaluation using a validation set.\
        If the model's score—considered as prediction accuracy—exceeds random chance, the predictions on the validation\
         set and the high-confidence, unlabeled dataset are treated as true labels for the next iteration. Consequently,\
          a well-performing model sees progressively improved scores, whereas a poor model is discarded for low performance.\
           This process iteratively labels all data with strong consensus. The algorithm boosts the reliability of pseudo-labels\
            and propagates labels to unlabeled data, proving invaluable in medical fields where early disease detection is costly.\
             Potential applications include early screening for neurodegenerative diseases like mild cognitive impairment, \
             Alzheimer's Disease, and others.\
      "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Pytorch",
      fontAwesomeClassname: "fab fa-css3-alt",
      path: "https://yumo-test.s3.amazonaws.com/PyTorch_logo_icon.svg"
    },
    {
      skillName: "Tensorflow",
      fontAwesomeClassname: "fab fa-sass",
      path: "https://yumo-test.s3.amazonaws.com/fi-snsuxl-tensorflow.svg"
    },
    {
      skillName: "OpenCV",
      fontAwesomeClassname: "fab fa-js",
      path: "https://yumo-test.s3.amazonaws.com/opencv.svg"
    },
    {
      skillName: "Scikit-learn",
      fontAwesomeClassname: "fab fa-react",
      path: "https://yumo-test.s3.amazonaws.com/scikit-learn.svg"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Hugging Face",
      fontAwesomeClassname: "fab fa-swift",
      path: "https://yumo-test.s3.amazonaws.com/hugging-face-icon.svg"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fab fa-network",
      path: "https://yumo-test.s3.amazonaws.com/machine-learning-03-svgrepo-com.svg"
    },
    {
      skillName: "Neuroscience",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Biology",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Physics",
      fontAwesomeClassname: "fab fa-python",
      path: "https://yumo-test.s3.amazonaws.com/physics-icon.svg"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Project Highlight

const projectHighlight = {
  title:"GitHub Project Highlight",
  subTitle:
    "High Throughput, Realistic Data-Augmentation Toolkit for Opitical Digit Detection on Fabrics in Outdoors Enviroment",
  highlight: [
    emoji(
      "The toolkit allows you to generate image data and annotations(bounding boxes) necessary for number detection for tags of \
      various textures, colors, and geometry. For example, you can generate car plates, marathon tag cloths in simulated \
      environments.The data then can be cropped to comply with the data format of PASCAL Object Dectection Competition\
       (http://host.robots.ox.ac.uk/pascal/VOC/). You can use this toolkit to generate millions of photos for model fine-tuning.\
      "
    )
  ],
  display: true // Set false to hide this section, defaults to true
};

  


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Southern California, USA",
      logo: require("./assets/images/USC.png"),
      subHeader:
        "Ph.D of Computational Neuroscence and artificial intelligence",
      duration: "July 2017 - December 2024",
      desc: "RANSAC inspired semisupervised learning with application to early-stage detection of rare neurological conditions",
      descBullets: [
        "Innovated a robust semi-supervised algorithm, notable for its resilience to incorrect annotations and outliers, and capable of delivering optimal results in real-world data \n",
        " Our approach provided 20% better classification accuracy than 4 baseline algorithms in detection of Parkinson’s Diseas",
        "Designed and Implemented a low cost, high through-put machine learning pipeline with visual-based features and computer vision pipeline. Achieved optimal results with limited low-quality real-world human annotations.\n",
        "Contributed to a Generative AI project, focusing on shared-knowledge lifelong learning and continual learning using a multi-head transformer model.\n"
      ]
    },
    {
      schoolName:
        "Max Plank International School of Neural Information Processing, Germany",
      logo: require("./assets/images/max_plank.jpeg"),
      subHeader: "M.S. of Neural Information Processing",
      duration: "August 2014 - August 2016",
      desc: "",
      descBullets: ["Thesis: Exploration of event segmentation using LSTM."]
    },

    {
      schoolName: "National Tsing Hua University, Taiwan",
      logo: require("./assets/images/NTHU.png"),
      subHeader: "B.S. of Physics",
      duration: "August 2008 - August 2012",
      desc: ""
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Artificial Intelligence and Machine learning", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Brain-Computer Interface",
      progressPercentage: "90%"
    },
    {
      Stack: "Secience and Research",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI Research Engineer",
      company: "Acer",
      companylogo: require("./assets/images/acer.jpg"),
      date: "Feb 2017 – Aug 2017",
      desc: "Achieved Great Accuracy with FASTER-RCNN for Digit Recognition",
      descBullets: [
        "Utilized Faster R-CNN with TensorFlow for advanced object detection, demonstrating expertise in machine learning algorithms.\n",

        "Led a critical project focused on digit recognition on marathon bibs, applying the model to a real-world photo dataset with high accuracy.\n",

        "Pioneered a data augmentation strategy using synthesized marathon bibs, creatively manipulating distortions, contamination, shading, and noise to enhance model training.\n",

        "Achieved significant improvements in model performance after training with the synthesized data, showcasing ability to overcome challenging real-world data issues.\n",

        "Demonstrated strong problem-solving and technical skills in adapting machine learning models to practical, real-world applications.\n"
      ]
    },
    {
      role: "Rotation Intern",
      company: "Werner Reichardt Centre for Integrative Neuroscience",
      companylogo: require("./assets/images/Werner.png"),
      date: "Oct 2015 – Jan 2016",
      desc: "Simulated neural networks of various complexities using the Python-based NEST environment.",
      descBullets: [
        "Demonstrated reproducibility of results in NEST, originally developed in MATLAB.",
        "Exploited multi-threading and cluster-computing features of NEST for enhanced modeling speed."
      ]
    },
    {
      role: "Rotation Intern",
      company: "NMI TT Pharmaservices",
      companylogo: require("./assets/images/nmi_tt_pharmaservices_logo.jpeg"),
      date: "Sep 2015 – Oct 2015",
      desc: "Theoretical Analysis of the Safety Threshold of Retina Implant",
      descBullets: [
        "Evaluated the threshold of electroporation and electrostimulation in retina implants.",
        "Investigated the safe working zone of electrostimulation for retina implants."
      ]
    },

    {
      role: "Research Assistant",
      company: "Academia Sinica",
      companylogo: require("./assets/images/academia_sinica.png"),
      date: "Oct 2013 – Oct 2014",
      desc: "Raman-Sepectrascopics | Nanotechnology | Laboratory Equipment Design",
      descBullets: [
        "Assisted in founding a nanotechnology lab from the ground up. Coordinated with vendors and suppliers for the procurement of lab equipment and materials",
        "Contributed to the development of research protocols and experimental designs",
        "Gained extensive training in fiber optics, laboratory equipment design, and prototyping with software such as SolidWorks",
        "Gained hands-on experience in operating precision machinery, acquired skills in reading and interpreting technical blueprints and drawings to execute complex machining tasks"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Computer Science Courses Taken",
  subtitle:
    "Grauduate Level Courses I took in Computer Science and Machine Learning",
  projects: [
    {
      // image: require("./assets/images/USC.png"),
      projectName: "SCI 567 Machine Learning",
      projectSubtitle:
        "Summer Semester 2018, University of Southern California",
      projectDesc:
        "Mastery in machine learning fundamentals, statistical modeling, data preprocessing, algorithm optimization, predictive modeling, and use of ML tools and libraries."
    },
    {
      // image: require("./assets/images/USC.png"),
      projectName: "CSCI 677 Advanced Computer Vision",
      projectSubtitle: "Fall Semester 2018, University of Southern California",
      projectDesc:
        "Developed expertise in advanced image processing, machine learning integration, computer vision algorithms, 3D vision, neural networks, and research skills in computer vision."
    },
    {
      // image: require("./assets/images/USC.png"),
      projectName: "CSCI 570 Analysis of Algorithm",
      projectSubtitle:
        "Spring Semester 2019, University of Southern California",
      projectDesc:
        "Gained proficiency in algorithm design and analysis, complexity analysis, problem-solving, data structures, critical thinking, and mathematical skills."
    },
    {
      // image: require("./assets/images/USC.png"),
      projectName:
        "CSCI 699 Mathematical Tools in Theoretical Machine Learning",
      projectSubtitle: "Fall Semester 2019, University of Southern California",
      projectDesc:
        "Acquired knowledge in theoretical ML foundations, advanced statistical methods, \
       optimization algorithms, mathematical modeling, algorithmic complexity, and research methodology."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji(" Publications 🏆 "),
  subtitle: " Publications, Dissertation, Research Reports,Thesis",

  achievementsCards: [
    {
      title:
        "RANSAC-based semi-supervised learning algorithms for partially \
      labeled data, with application to neurological screening from \
      eye-tracking data",
      subtitle: "Created 101 Image Datasets with Diverse Topics.",
      image: require("./assets/images/dissertation_image.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Dissertation",
          url: "https://drive.google.com/file/d/1oTa0MRq9ZyUZ988Gsowyy6vieWmaVoxV/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Lightweight Learner for Shared Knowledge Lifelong Learning",
      subtitle: "Created 101 Image Datasets with Diverse Topics.",
      image: require("./assets/images/LifeLongLearning.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Publication",
          url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=d8wWX90AAAAJ&citation_for_view=d8wWX90AAAAJ:u-x6o8ySG0sC"
        }
      ]
    },
    {
      title: "USC-DCT: A Collection of Diverse Classification Tasks",
      subtitle: "Created 101 Image Datasets with Diverse Topics.",
      image: require("./assets/images/USC-DCT.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Publication",
          url: "https://www.mdpi.com/2306-5729/8/10/153"
        },
        {
          name: "Github",
          url: "https://github.com/iLab-USC/USC-DCT"
        }
      ]
    },

    {
      title:
        "Application of Domain Feature Disentanglement to Map Registration Problem",
      subtitle: "CSCI-699 Advanced Deep Learning Final Project: ",
      image: require("./assets/images/CSCI699.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Final Project",
          url: "https://www.researchgate.net/profile/Pohsuan-Huang/publication/372311710_Application_of_Domain_Feature_Disentanglement_to_Map_Registration_Problem/links/64af519a8de7ed28ba93c6da/Application-of-Domain-Feature-Disentanglement-to-Map-Registration-Problem.pdf"
        },
        {
          name: "Opensource GitHub",
          url: "TBD"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "pohsuanh@usc.edu"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  projectHighlight,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
  isHireable
};
