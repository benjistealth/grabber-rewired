import "../../css/card.css"


function RecipeCardDisplay(props) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
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
