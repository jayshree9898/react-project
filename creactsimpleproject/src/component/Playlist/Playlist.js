import React from "react";

import "./Playlist.css";

import Tracklist from "../Tracklist/Tracklist";


class Playlist extends React.Component {

    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
    }
    render() {
        return (
            <div className="Playlist">
                <input onChange={this.handleNameChange} defaultValue={'New Playlist'} />
                <Tracklist track={this.props.PlaylistTracks}
                    isRemove={true}
                    noRemove={this.props.noRemove} />
           <button className="Playlist-save" onClick={this.props.onSave}>Save to Spotify</button>
            </div>
        )
    }


}



export default Playlist