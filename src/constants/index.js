import gow1 from "../assets/god of war website 1.png"
import gow2 from "../assets/god of war website 2.png"

import sm1 from "../assets/sm1.png"
import sm2 from "../assets/sm2.png"

import manila1 from "../assets/manila brothers 1.png"
import manila2 from "../assets/manila brothers 2.png"

import taskmaster1 from "../assets/taskmaster 1.png"
import taskmaster2 from "../assets/taskmaster 2.png"
import taskmaster3 from "../assets/taskmaster 3.png"

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