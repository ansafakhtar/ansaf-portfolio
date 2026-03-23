import * as SiIcons from "react-icons/si";
import { IconType } from "react-icons";

export const getSkillIcon = (skill: string): IconType => {
  const skillLower = skill.toLowerCase();

  switch (skillLower) {
    case "html":
      return SiIcons.SiHtml5;
    case "css":
      return SiIcons.SiCss3;
    case "javascript":
      return SiIcons.SiJavascript;
    case "js":
      return SiIcons.SiJavascript;
    case "typescript":
      return SiIcons.SiTypescript;
    case "ts":
      return SiIcons.SiTypescript;
    case "react":
      return SiIcons.SiReact;
    case "next js":
    case "nextjs":
    case "next.js":
      return SiIcons.SiNextdotjs;
    case "tailwind":
    case "tailwindcss":
      return SiIcons.SiTailwindcss;
    case "node js":
    case "nodejs":
    case "node.js":
      return SiIcons.SiNodedotjs;
    case "mongodb":
      return SiIcons.SiMongodb;
    case "mysql":
      return SiIcons.SiMysql;
    case "aws":
      return SiIcons.SiAwslambda;
    case "firebase":
      return SiIcons.SiFirebase;
    case "git":
      return SiIcons.SiGit;
    case "figma":
      return SiIcons.SiFigma;
    case "bootstrap":
      return SiIcons.SiBootstrap;
    case "materialui":
    case "mui":
      return SiIcons.SiMui;
    case "canva":
      return SiIcons.SiCanva;
    case "illustrator":
      return SiIcons.SiAdobeillustrator;
    case "photoshop":
      return SiIcons.SiAdobephotoshop;
    default:
      return SiIcons.SiFreelancer; // Fallback icon
  }
};

export const getSkillColor = (skill: string): string => {
  const skillLower = skill.toLowerCase();
  switch (skillLower) {
    case "html":
      return "#ef4444"; // Red-500
    case "css":
      return "#dc2626"; // Red-600
    case "javascript":
      return "#b91c1c"; // Red-700
    case "typescript":
      return "#ef4444"; // Red-500
    case "react":
      return "#dc2626"; // Red-600
    case "next js":
    case "nextjs":
    case "next.js":
      return "#ef4444"; // Keep white for contrast
    case "tailwind":
      return "#991b1b"; // Red-800
    case "node js":
    case "nodejs":
      return "#b91c1c"; // Red-700
    case "mongodb":
      return "#7f1d1d"; // Red-900
    case "mysql":
      return "#991b1b"; // Red-800
      case "aws":
      return "#ef4444"; // Red-500
    case "firebase":
      return "#ef4444"; // Red-500
    case "git":
      return "#dc2626"; // Red-600
    case "figma":
      return "#b91c1c"; // Red-700
    case "bootstrap":
      return "#991b1b"; // Red-800
    case "materialui":
    case "mui":
      return "#ef4444"; // Red-500
    default:
      return "#ef4444"; // Default Red
  }
};
