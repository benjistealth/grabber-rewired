import React, { useContext } from 'react';
import { ThemeContext } from '../../../Theme/Theme';

function Toggle() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <button onClick={() => { toggleTheme()}}>{theme}</button>
    )
}

export default Toggle;