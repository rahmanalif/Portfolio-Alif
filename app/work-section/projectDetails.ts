export type ProjectProps = {
    id: number;
    name: string;
    description: string;
    technologies: string[];
    image: string;
    available: boolean;
  };
  
  export const devProjects = [
    {
      id: 0,
      name: "Bounce On Stack",
      description:
        "A thrilling platformer where players control a cube that jumps on platforms, aiming to achieve high scores and unlock new models.",
      technologies: ["Unity 3D", "C#", "Blender"],
      github: "https://github.com/rahmanalif/JumpsOn",
      playstore: "https://play.google.com/store/apps/details?id=com.Alif.BounceOnStack&hl=en",
      image: require(".//../../public/projects/1.png"),
      available: true,
    },
    {
      id: 1,
      name: "Casio App",
      description:
        "An Android app built with Flutter, specifically designed to showcase and sell Casio watches.",
      technologies: ["Flutter", "Dart", "Canva"],
      github: "https://github.com/rahmanalif/CASIO-WATCH-E-COMMERCE-ANDROID-APP",
      demo: "https://www.youtube.com/@frontendadvance",
      image: require(".//../../public/projects/casio.png"),
      available: true,
    },
    {
      id: 2,
      name: "2D Shooter Game",
      description:
        "A fast-paced 2D top-down shooter where players engage in action-packed levels with multiple enemies and strategic obstacles.",
      technologies: ["Unity 2D", "C#", "Canva"],
      github: "https://github.com/rahmanalif/TopDownActionAndroidGame",
      demo: "https://www.youtube.com/@frontendadvance",
      image: require(".//../../public/projects/game.png"),
      available: true,
    },
    {
      id: 3,
      name: "2D RPG Game",
      description:
        "Efficient A* pathfinding algorithm, smooth player movement, and interactive environment with layered obstacles.",
      technologies: ["Unity 2D", "C#", "Canva"],
      github: "https://github.com/",
      demo: "https://www.youtube.com/@frontendadvance",
      image: require(".//../../public/projects/A.png"),
      available: true,
    },
  ];
  
  