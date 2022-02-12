import React from "react";
import "./maincard.css";
import UserProfile from "./UserProfile";
function MainCard(props) {
  return (
    <div className="row">
      <div className="col-sm-8 offset-sm-2">
        <div className="card card-body shadow-sm p-5 mt-5">
          <table class="table table-borderless padding-table-columns">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
                <th scope="col">Access</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <UserProfile isOwner={true} />
              <UserProfile />
              <UserProfile />
              <UserProfile />
              <UserProfile />
              <UserProfile />
              <UserProfile />
              <UserProfile />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
