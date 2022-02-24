import React, { useMemo } from "react";
import Avatar from "react-avatar";
import { Line } from "rc-progress";
import styles from "./hovercard.module.css";
import { useSelector } from "react-redux";
function HovreCard({ user }) {
  let len = useSelector((state) => state.listReducer.length);
  let usage = [35, 45, 65, 55, 75, 89];
  let clicks = [2500, 3000, 3500, 4000, 5000];
  let monthlyClicks = [5000, 6000, 7000, 8000, 9000, 10000];
  const data = useMemo(() => {
    return {
      usagep: usage[Math.floor(Math.random() * usage.length)],
      mClick: monthlyClicks[Math.floor(Math.random() * monthlyClicks.length)],
      clk: clicks[Math.floor(Math.random() * clicks.length)],
    };
  }, []);
  return (
    <div
      className={`card shadow-lg p-3 ${styles.hovercard} ${
        len <= 2 ? styles["top-0"] : ``
      } usercard`}
    >
      <div className="text-center">
        <Avatar round size="100" src={user.avatar} />
        <h6 className="mt-2">{`${user.first_name} ${user.last_name}`}</h6>
        <p className="userp">{user.email}</p>
        <p className="mt-1">Your Plan: Standard</p>
        <button className="btn btn-warning w-75 text-white">Active User</button>
        <div className="mt-3">
          <p>Plan Uses</p>
          <Line
            percent={data.usagep}
            strokeWidth="2"
            strokeColor="#feb23f"
            className="mt-3 w-75 mx-2"
          />
        </div>

        <div className="d-flex justify-content-center mt-3">
          <div className="d-flex flex-column line-height">
            <p className="times">{data.clk}</p>
            <p className="desc">clicks reviewed</p>
          </div>
          <div className="d-flex flex-column devider"></div>
          <div className="d-flex flex-column line-height">
            <p className="times">{data.mClick}</p>
            <p className="desc">monthly clicks</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HovreCard;
