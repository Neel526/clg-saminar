import React from "react";
import Menu from "./Menu";
import "../styles.css";
const Base = ({
  title = "My Title",
  description = "My desription",
  className = "bg-white p-4",
  children
}) => (
    <div>
      <Menu /> 
    <div className="container-fluid">
      <div className="jumbotron bg-grey text-black text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
    <footer className="footer mt-auto py-3">
      <div className="container-fluid bg-success text-center py-3">
        <h4>If you got any questions, feel free to reach out!</h4>
        <button className="btn btn-warning btn-lg">Contact Us</button>
      </div>
      <div className="container">
        <span className="text-muted">
          Copyright 2020 @<span className="">LEARNWAY</span>
        </span>
      </div>
    </footer>
  </div>
);

export default Base;