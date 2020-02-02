import React from "react";

export const ProfilePic = ({ resource }) => {
  const avatar = resource.avatar.read();

  return (
    <div className="avatar">
      <img src={avatar.avatars[1].url} />
    </div>
)};