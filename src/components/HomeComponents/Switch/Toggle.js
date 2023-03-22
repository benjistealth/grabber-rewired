import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../Theme/Theme";
import "./Toggle.css";

function Toggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isToggled, setIsToggled] = useState(theme);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <label className="toggle-switch">
      <input type="checkbox" defaultChecked={true} onChange={onToggle} />
      <span className="switch" />
    </label>
  );
}

export default Toggle;
