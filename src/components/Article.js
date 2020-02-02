import React from "react";

export const Article = ({ resource }) => {
  const article = resource.article.read();
  return <p>{article}</p>;
};