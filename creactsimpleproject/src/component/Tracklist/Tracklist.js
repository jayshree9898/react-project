import React from "react";

import "./Tracklist.css";

import Track from "../Track/Track";


class Tracklist extends React.Component{
    render(){
        return(
            <div className="Tracklist">
                {this.props.Tracks.map(track =>{
                    return(
                        <Track
                         track = {track}
                         key={track.id}
                         onAdd = {this.props.onAdd}
                         IsRemoval = {this.props.IsRemoval}
                         onRemove = {this.props.onRemove}
                         />
                    )
                })}
            </div>
        )
    }

    
}



export default Tracklist