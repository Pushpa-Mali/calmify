import { useState } from "react";
import ReactHowler from "react-howler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRainbow } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

function SoundCard({ name, logo, soundUrl, isPlaying, onPlay }) {
  return (
    <div className={classNames("sound-card", { "sound-card--active": isPlaying })} onClick={onPlay}>
      <FontAwesomeIcon icon={logo} />

      <p className="sound-name">{name}</p>
      <ReactHowler src={soundUrl} playing={isPlaying} loop = {true}/>
    </div>
  );
}

export default SoundCard;
