import "./maincard.css";
import UserProfile from "./UserProfile";
import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers, setList } from "../Actions/actions";
import { SpinnerCircularFixed } from "spinners-react";
import Pagination from "./Pagination";
import HovreCard from "./HovreCard";
function MainCard(props) {
  const { card, user, data, loading, error } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div className="row">
      <div className="col-sm-8 offset-sm-2">
        <div className="card card-body shadow-sm p-3 my-3 maincard">
          {loading || !data ? (
            <SpinnerCircularFixed
              size={90}
              thickness={111}
              speed={173}
              color="#36ad47"
              secondaryColor="rgba(172, 57, 57, 0)"
            />
          ) : error ? (
            <h1 className="text-danger">{error}</h1>
          ) : (
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
                    />
                  );
                })}
              </tbody>
            </table>
          )}

          {card && user && <HovreCard user={user} />}
          <Pagination page={props.page} total_pages={props.total_pages} />
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { card } = state.showReducer;
  const { user } = state.userReducer;
  const { loading } = state.users;
  const { error } = state.users;
  const { page, total_pages } = state.users.list;
  const data = state.listReducer;
  return {
    card,
    user,
    data,
    loading,
    error,
    page,
    total_pages,
  };
}

export default connect(mapStateToProps)(MainCard);
