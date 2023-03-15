import "../../css/card.css"
// import { useNavigate } from "react-router-dom";

function RecipeCardDisplay(props) {

  

    // const navigate = useNavigate();
    
    // function GoToProject(page) {

    //     navigate(page);

    //     console.log('Page chosen ', page);
    //     //when the project is selected, the chosen project page will be shown 
    //     //where you can click through to the project itself
    //     //the project page will have some text talking about the project
    // }
 
    // handleCardClick={() => { GoToProject(props.page) }}
  return (
    <div className="card-container" style={{background: `rgba(0,0,0,0.5)`}} onClick={props.onClick}>
      <div className="card"  > 
        <div className="img-container">
          <img alt={props.id} src={props.image} />
        </div>
        <div className="content">
          <br></br>
          <h2>{props.name}</h2>
        </div>
        

      </div>
    </div>
  );
}

export default RecipeCardDisplay;
