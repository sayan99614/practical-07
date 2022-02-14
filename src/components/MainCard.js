import React, { useEffect, useState } from "react";
import "./maincard.css";
import UserProfile from "./UserProfile";
import { data } from "./data";
import Avatar from "react-avatar";
function MainCard(props) {
  const [hover, setHover] = useState(false);
  const [showId, setShowId] = useState(null);
  const [user, setUser] = useState({});

  useEffect(() => {
    const singledata = data.find((item) => showId === item.id);
    setUser(singledata);
    console.log(user);
  });

  return (
    <div className="row">
      <div className="col-sm-8 offset-sm-2">
        <div className="card card-body shadow-sm p-5 mt-5">
          <table className="table table-borderless padding-table-columns">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
                <th scope="col">Access</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <UserProfile
                    isOwner={item.id === 1 ? true : false}
                    key={item.id}
                    first_name={item.first_name}
                    email={item.email}
                    last_name={item.last_name}
                    avatar={item.avatar}
                    id={item.id}
                    hover={hover}
                    setHover={setHover}
                    setShowId={setShowId}
                  />
                );
              })}
            </tbody>
          </table>

          {hover && (
            <div className="card shadow-lg p-3 hovercard text-center">
              <Avatar round size="100" src={user.avatar} />
              <h6 className="mt-2">{`${user.first_name} ${user.last_name}`}</h6>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainCard;
