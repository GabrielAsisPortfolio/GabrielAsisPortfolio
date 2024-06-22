
import {
  gow1,
  gow2,
  sm1,
  sm2,
  manila1,
  manila2,
  taskmaster1,
  taskmaster2,
  taskmaster3,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "About",
    url: "#about",
  },
  {
    id: "1",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "2",
    title: "Contact",
    url: "#contact",
  },
];

export const projectDetails = [
  {
    id: "0",
    title: "God of War Website",
    urlTitle: "My_First_Website",
    img1: gow1,
    img2: gow2,
    createdWhen: "Created on 1st yr of College",
    url: "https://gabrielasis.github.io/",
    categories: ["html", "css", "js"],
    flex: "col",
  },
  {
    id: "1",
    title: "TaskMaster App",
    urlTitle: "Todo_List_Android_App",
    img1: taskmaster1,
    img2: taskmaster2,
    img3: taskmaster3,
    createdWhen: "Created on 2nd yr of College",
    url: "https://gabrielgonoasis.github.io/",
    categories: ["figma", "android", "js", "responsive"],
    flex: "row",

  },
  {
    id: "2",
    title: "Spider-Man 2 Website",
    urlTitle: "Responsive_Website",
    img1: sm1,
    img2: sm2,
    createdWhen: "Created on 2nd yr of College",
    url: "https://gabrielgonoasis.github.io/",
    categories: ["html", "css", "js", "responsive"],
    flex: "col",
  },
  {
    id: "3",
    title: "Manila Brothers Website",
    urlTitle: "Group_Project_Website",
    img1: manila1,
    img2: manila2,
    createdWhen: "Created on 2nd yr of College",
    url: "https://gabrielasis.github.io/",
    categories: ["react", "tailwind"],
    flex: "col",
  },
];