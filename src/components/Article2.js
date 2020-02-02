import React from "react";
import { Tile } from "carbon-components-react";

export const ArticleTwo = ({ resource }) => {
  const article = resource.article_two.read();
  return <p>{article}</p>;
};