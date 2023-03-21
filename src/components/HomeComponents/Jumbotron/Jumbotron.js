import JumbotronTitle from "./JumbotronTitle";
import JumbotronImage from "./JumbotronImage";
import Toggle from "./Toggle";
import "./Jumbotron.css"

function Jumbotron() {
  
  return (
    <section className="hero jumbo is-medium is-link">
      <div className="hero-body">
        <JumbotronImage />
        <JumbotronTitle />
        <Toggle />
      </div>
    </section>
  );
}

export default Jumbotron;