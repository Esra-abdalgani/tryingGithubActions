import React from "react";
import { Avatar } from "primereact/avatar";
import { AvatarGroup } from "primereact/avatargroup";
import avatarimg from "../../../assets/avatarimg.jpg";

function AvatarGroupe() {
  return (
    <AvatarGroup id="avatar-group">
      <Avatar image={avatarimg} shape="circle" />
      <Avatar image={avatarimg} shape="circle" />
      <Avatar image={avatarimg} shape="circle" />
      <Avatar image={avatarimg} shape="circle" />
      <Avatar id="numberOfusers" label="100+" />
    </AvatarGroup>
  );
}

export default AvatarGroupe;
