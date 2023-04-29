import Avatar from "@mui/material/Avatar";


const AvatarDisplay = ({ user }) => {
  return (
    <Avatar
      alt="Profile Image"
      src={`https://robohash.org/${user?.email}.png`}
    />
  );
};

export default AvatarDisplay;
