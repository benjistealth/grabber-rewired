import JumbotronTitle from "./JumbotronTitle";
import JumbotronImage from "./JumbotronImage";
import "./Jumbotron.css"

function Jumbotron() {
  
  return (
    <section className="hero is-medium is-link">
      <div className="hero-body">
        <JumbotronImage />
        <JumbotronTitle />
      </div>
    </section>
  );
}

export default Jumbotron;