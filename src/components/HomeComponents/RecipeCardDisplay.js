import "./card.css"

function RecipeCardDisplay(props) {
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
