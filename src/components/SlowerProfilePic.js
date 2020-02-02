import React from "react";

export const SlowerProfilePic = ({ resource }) => {
  const profileImage = resource.slowerAvatar.read();

  return (
    <div className="avatar">
      <img alt="User pic" src={profileImage.picture.large} />
    </div>
  )
};
