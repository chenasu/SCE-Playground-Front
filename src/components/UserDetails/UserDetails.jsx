import React from 'react';
import PropTypes from 'prop-types';
import "./UserDetails.css";

function UserInfo({ userInfo ,setUserInfo}) {
  const handleLogout = () => {
    setUserInfo({ username: "", id: "" });
  };

  return (
    <div className="user-info">
      <label>Username:</label>
      <p>{userInfo.username}</p>
      <label>ID:</label>
      <p>{userInfo.id}</p>
    </div>
  );
}
UserInfo.propTypes = {
  userInfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  setUserInfo: PropTypes.func.isRequired,
};

export default UserInfo;