import React from "react";

// import ".";

import Tracklist from "../Tracklist/Tracklist";


class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <Tracklist tracks={this.props.SearchResults} onAdd={this.props.onAdd} />
            </div>
        )
    }


}



export default SearchResults