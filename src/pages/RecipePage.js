import React from "react";
import { useNavigate } from 'react-router-dom';



function RecipePage() {
  const navigate = useNavigate();

	const GoBack = () => {
		navigate(-1);
	}

  return (
    <div>
 
      <button className="btn btn-back" onClick={GoBack}>Go Back</button>
   
      <button className="btn btn-back" onClick={GoBack}>Go back again!</button>
    </div>
  );
}

export default RecipePage;