import React from 'react'
import VideoURL from "../../../assets/Nuclie/DeltaNT.mp4";
import ReactPlayer from "react-player";

const Derivation = () => {
    return (
        <div> {
            <ReactPlayer
                url={VideoURL}
                controls
                playing
                width={"100%"}
                height={"100%"}
            />
        }</div>
    )
}

export default Derivation;