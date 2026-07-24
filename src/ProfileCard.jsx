const ProfileCard = (props) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
        width: "200px",
      }}
    >
      <h2>{props.name}</h2>
      <p>趣味：{props.hobby}</p>
    </div>
  );
};

export default ProfileCard;