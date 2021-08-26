import "./Sidebar.css";
import React, {useState, useEffect} from "react";

const Sidebar = ({ width, height, children }) => {
  const [axisX, setAxisX] = useState(-width);
  const toggleMenu = () => {
    if (axisX < 0) {
      setAxisX(0);
    } else {
      setAxisX(-width);
    }
  };
  useEffect(() => {
    setAxisX(0);
  }, []);
  return (
    <>
      <div className="sidebar" style={{transform: `translatex(${axisX}px)`,width: width, minHeight: height}}>
        <button onClick={() => toggleMenu()} className="toggle-sidebar" style={{transform: `translate(${width}px, 10vh)` }}></button>
        <div className="content">{children}</div>
      </div>
    </>
  );
};
export default Sidebar;