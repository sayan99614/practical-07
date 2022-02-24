import Avatar from "react-avatar";
import { useDispatch, useSelector } from "react-redux";
import "./userprofile.css";
import {
  hideCard,
  showCard,
  setUser,
  removeUser,
  deleteUser,
} from "../Actions/actions";
import { useMemo } from "react";
function UserProfile({ isOwner, email, first_name, last_name, avatar, id }) {
  const data = useSelector((state) => state.listReducer);
  const dispatch = useDispatch();
  function mouseEnter(id) {
    const user = data.find((item) => item.id === id);
    dispatch(setUser(user));
    dispatch(showCard(true));
  }
  function mouseOut() {
    dispatch(removeUser());
    dispatch(hideCard(false));
  }
  let access = ["Manager", "Read", "View"];
  const accessType = useMemo(() => {
    return access[Math.floor(Math.random() * access.length)];
  }, []);
  return (
    <tr>
      <th>
        <div className="d-flex">
          <div
            className="avatar"
            onMouseEnter={() => mouseEnter(id)}
            onMouseLeave={mouseOut}
          >
            <Avatar round size="35" src={avatar} />
          </div>
          <div className="d-flex flex-column">
            <div className="name">{`${first_name} ${last_name}`}</div>
            <div className="email text-secondary">{email}</div>
          </div>
        </div>
      </th>
      <td>
        {isOwner ? (
          <p className="text-success">Active</p>
        ) : (
          <select className="form-select form-control-sm">
            <option>Inactive</option>
          </select>
        )}
      </td>
      <td>
        {isOwner ? (
          <p className="text-secondary">Owner</p>
        ) : (
          <select className="form-select form-control-sm">
            <option>{accessType}</option>
          </select>
        )}
      </td>
      <td>
        {isOwner ? (
          <i className="fa-solid fa-lock fa-lg text-secondary" />
        ) : (
          <i
            onClick={() => dispatch(deleteUser(id))}
            className="fa-solid fa-trash-can fa-lg text-secondary pointer"
          ></i>
        )}
      </td>
    </tr>
  );
}

export default UserProfile;
