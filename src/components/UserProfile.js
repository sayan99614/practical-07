import React from "react";
import Avatar from "react-avatar";
import "./userprofile.css";
function UserProfile({ isOwner }) {
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
            <div className="email text-secondary">george.bluth@reqres.in</div>
          </div>
        </div>
      </th>
      <td>
        <select className="form-select w-75 form-control-sm" id="example1">
          <option>1</option>
          <option>2</option>
        </select>
      </td>
      <td>
        <select className="form-select w-75 form-control-sm">
          <option>1</option>
          <option>2</option>
        </select>
      </td>
      <td>
        {isOwner ? (
          <i class="fa-solid fa-lock fa-lg text-secondary" />
        ) : (
          <i class="fa-solid fa-trash-can fa-lg text-secondary"></i>
        )}
      </td>
    </tr>
  );
}

export default UserProfile;
