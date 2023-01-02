import { Key } from "react";
import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles";

export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  route: string;
};

const categories: DirectoryCategory[] = [
  {
    id: 1,
    title: "walk",
    imageUrl:
      "https://images.unsplash.com/photo-1610317872270-05b211340e22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
    route: "shop/walk",
  },
  {
    id: 2,
    title: "adventure",
    imageUrl:
      "https://images.unsplash.com/photo-1600354279787-0a726615ef44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    route: "shop/adventure",
  },
  {
    id: 3,
    title: "training",
    imageUrl:
      "https://images.unsplash.com/photo-1617994683620-273ed0d58628?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2302&q=80",
    route: "shop/training",
  },
  {
    id: 4,
    title: "enrichment",
    imageUrl:
      "https://images.unsplash.com/photo-1589924749359-9697080c3577?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    route: "shop/enrichment",
  },
  {
    id: 5,
    title: "home",
    imageUrl:
      "https://images.unsplash.com/photo-1628195787435-4d64a0db4d0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
    route: "shop/home",
  },
  {
    id: 6,
    title: "apparel",
    imageUrl:
      "https://images.unsplash.com/photo-1630359494609-8920f8e38989?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
    route: "shop/apparel",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
