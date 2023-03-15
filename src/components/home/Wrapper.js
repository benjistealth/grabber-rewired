import React from "react";
import "../../css/wrapper.css"

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;
