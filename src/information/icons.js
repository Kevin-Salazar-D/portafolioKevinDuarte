import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaJsSquare,
  FaEnvelope,
  FaLinkedin
} from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiCplusplus } from "react-icons/si";
import { FaJava } from "react-icons/fa";

import { FiDownload } from "react-icons/fi";


import {
  SiMysql,
  SiFirebase,
  SiPhp,
  SiTypescript,
  SiC,
  SiPython,
  SiHtml5,
  SiRedux,
  SiMui,
  SiExpress,
  SiSqlite,
  SiSwagger,
  SiDocker,
  SiPostman,
  SiGit,
  SiLinux,
  
} from "react-icons/si";

const icons = {
  // Lenguajes
  js: FaJsSquare,
  ts: SiTypescript,
  java: FaJava,
  cpp: SiCplusplus,
  c: SiC,
  python: SiPython,
  php: SiPhp,

  // Frontend
  html: SiHtml5,
  css: FaCss3Alt,
  react: FaReact,
  redux: SiRedux,
  material: SiMui,

  // Backend
  node: FaNodeJs,
  express: SiExpress,
  mysql: SiMysql,
  firebase: SiFirebase,
  sqlite: SiSqlite,

  // Herramientas
  git: SiGit,
  github: FaGithub,
  swagger: SiSwagger,
  docker: SiDocker,
  linux: SiLinux,
  postman: SiPostman,

  // Extras
  link: FaExternalLinkAlt,
  close: FaTimes,
  x: FaXTwitter,
  dowloand: FiDownload,
  linkedin: FaLinkedin,
  envelpo :FaEnvelope
};

export default icons;
