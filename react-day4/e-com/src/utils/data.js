import { v4 } from "uuid";

export const products = [
  {
    id: v4(),
    name: "nike shoes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor officiis eos impedit numquam repellendus quos ea autem quia laudantium aperiam? Reiciendis sunt id sit vero alias obcaecati quo, dolorum reprehenderit!",
    price: 500,
    discount: 10,
    isAvailable: true,
    image_url: "../assets/p1.webp",
  },
  {
    id: v4(),
    name: "reebok shoes",
    description:
      "P2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor officiis eos impedit numquam repellendus quos ea autem quia laudantium aperiam? Reiciendis sunt id sit vero alias obcaecati quo, dolorum reprehenderit!",
    price: 800,
    discount: 15,
    isAvailable: true,
    image_url: "../assets/p2.webp",
  },
  {
    id: v4(),
    name: "sparx shoes",
    description:
      "P3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor officiis eos impedit numquam repellendus quos ea autem quia laudantium aperiam? Reiciendis sunt id sit vero alias obcaecati quo, dolorum reprehenderit!",
    price: 650,
    discount: 20,
    isAvailable: true,
    image_url: "../assets/p3.webp",
  },
  {
    id: v4(),
    name: "woodland shoes",
    description:
      "P4 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor officiis eos impedit numquam repellendus quos ea autem quia laudantium aperiam? Reiciendis sunt id sit vero alias obcaecati quo, dolorum reprehenderit!",
    price: 1000,
    discount: 5,
    isAvailable: false,
    image_url: "../assets/p4.webp",
  },
];
