import React from "react";
import Avatar from "react-avatar";
import "./userprofile.css";
function UserProfile(props) {
  return (
    <tr>
      <th>
        <div className="d-flex">
          <div className="avatar">
            <Avatar
              round
              size="35"
              src="https://reqres.in/img/faces/2-image.jpg"
            />
          </div>
          <div className="d-flex flex-column">
            <div className="name">George Bluth</div>
            <div className="email">george.bluth@reqres.in</div>
          </div>
        </div>
      </th>
      <td>Active</td>
      <td>Owner</td>
      <td>🥇 </td>
    </tr>
  );
}

export default UserProfile;
