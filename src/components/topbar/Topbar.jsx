import React from "react";
import "./topbar.css";
import NotificationsNoneIcon from "@mui/icons-material ";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Okular Admin </span>
        </div>
        <div className="topRight">
          <div className="topbarIcons">
            <NotificationsNoneIcon></NotificationsNoneIcon>
          </div>
        </div>
      </div>
    </div>
  );
}
