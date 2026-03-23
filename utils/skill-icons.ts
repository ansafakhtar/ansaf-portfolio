import dynamic from "next/dynamic";
import { ComponentType } from "react";
import type { IconBaseProps } from "react-icons";

// Map skill keys to react-icons names
const ICON_NAME_MAP: Record<string, string> = {
  html: "SiHtml5",
  css: "SiCss3",
  javascript: "SiJavascript",
  js: "SiJavascript",
  typescript: "SiTypescript",
  ts: "SiTypescript",
  react: "SiReact",
  "next js": "SiNextdotjs",
  nextjs: "SiNextdotjs",
  "next.js": "SiNextdotjs",
  tailwind: "SiTailwindcss",
  tailwindcss: "SiTailwindcss",
  "node js": "SiNodedotjs",
  nodejs: "SiNodedotjs",
  "node.js": "SiNodedotjs",
  mongodb: "SiMongodb",
  mysql: "SiMysql",
  aws: "SiAwslambda",
  firebase: "SiFirebase",
  git: "SiGit",
  figma: "SiFigma",
  bootstrap: "SiBootstrap",
  materialui: "SiMui",
  mui: "SiMui",
  canva: "SiCanva",
  illustrator: "SiAdobeillustrator",
  photoshop: "SiAdobephotoshop",
  // fallback key will be handled separately
};

// Return a dynamically loaded icon component. This avoids static named imports
// that some bundlers (Netlify) optimize in a way that breaks builds.
export const getSkillIcon = (skill: string): ComponentType<IconBaseProps> => {
  const key = skill.toLowerCase();
  const iconName = ICON_NAME_MAP[key] || "SiFreelancer";

  const DynamicIcon = dynamic(() =>
    import("react-icons/si").then((mod) => {
      // cast module to a lookup of icon components
      const m = mod as unknown as Record<string, ComponentType<IconBaseProps>>;
      const IconComp = m[iconName] || m.SiFreelancer;
      return { default: IconComp };
    }),
    { ssr: false },
  );

  return DynamicIcon as ComponentType<IconBaseProps>;
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
