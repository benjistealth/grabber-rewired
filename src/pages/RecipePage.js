import React from "react";
import { useNavigate } from 'react-router-dom';



function RecipePage() {
  const navigate = useNavigate();

	const GoBack = () => {
		navigate(-1);
	}

  return (
    <div>
 
      <button className="btn btn-back" onClick={GoBack}></button>
   
      <button className="btn btn-back" onClick={GoBack}></button>
    </div>
  );
}

export default RecipePage;