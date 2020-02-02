import React from "react";

export const Person = ({ resource }) => {
  const person = resource.person.read();

  return <h1>{person.name.first}</h1>;
};