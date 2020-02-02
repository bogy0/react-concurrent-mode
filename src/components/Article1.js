import React from "react";
import { Tile } from "carbon-components-react";

export const ArticleOne = ({ resource }) => {
  const article = resource.article.read();
  return <p>{article}</p>;
};