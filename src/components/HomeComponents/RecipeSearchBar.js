import React from "react";

function RecipeSearchBar(props) {

  return (
    <div id="search-form">
      <div className="content">
        <form
          id="search-bar"
          className="field is-clearfix is-mobile is-in-search"
        >
          <div className="field has-addons">
            <div className="control is-expanded has-icons-left">
              <input
                id="search-text"
                className="input is-medium is-rounded search-text"
                type="text"
                placeholder="Search for a recipe..."
                value={props.value}
                onChange={props.onChange}
              />
              <span className="icon is-small is-left">
                <i className="fa fa-search"></i>
              </span>
            </div>
            <div className="control">
              <button
                onClick={props.onClick}
                type="submit"
                id="search-button"
                className="button btn-primary is-pulled-right is-medium is-rounded"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RecipeSearchBar;
