import React from 'react';

function UserProfile() {
  return (
    <div className="user-profile">
      <img src="profile-icon.png" alt="Profile" />
      {/* Add user profile functionality here */}
      <div className="user-details">
        <h3>User Profile</h3>
        <p>Name: John Doe</p>
        <p>Email: john@example.com</p>
        {/* Add more user details as needed */}
      </div>
    </div>
  );
}

export default UserProfile;

