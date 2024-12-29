import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SoundCard from "./components/SoundCard";
import rainSound from "./assets/sounds/rain.mp3";
import oceanSound from "./assets/sounds/ocean.mp3";
import forestSound from "./assets/sounds/forest.mp3";
import riverSound from "./assets/sounds/river.mp3";
import birdsSound from "./assets/sounds/birds.mp3";
import fireSound from "./assets/sounds/fire.mp3";
import thunderSound from "./assets/sounds/thunder.mp3";
import chimeSound from "./assets/sounds/chime.mp3";
import horseSound from "./assets/sounds/horse.mp3";
import waterfallSound from "./assets/sounds/waterfall.mp3";
import citySound from "./assets/sounds/city.mp3";
import cricketSound from "./assets/sounds/cricket.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRainbow,
  faWater,
  faTree,
  faBridgeWater,
  faFeather,
  faFire,
  faCloud,
  faCloudBolt,
  faWind,
  faHorse,
  faHorseHead,
  faCity,
  faBug,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

const sounds = [
  {
    id: 1,
    name: "Rain",
    logo: faRainbow,
    soundUrl: rainSound,
  },
  {
    id: 2,
    name: "Ocean Waves",
    logo: faWater,
    soundUrl: oceanSound,
  },
  {
    id: 3,
    name: "Forest",
    logo: faTree,
    soundUrl: forestSound,
  },
  {
    id: 4,
    name: "River",
    logo: faBridgeWater,
    soundUrl: riverSound,
  },
  {
    id: 5,
    name: "Birds",
    logo: faFeather,
    soundUrl: birdsSound,
  },
  {
    id: 6,
    name: "Fire",
    logo: faFire,
    soundUrl: fireSound,
  },
  {
    id: 7,
    name: "Thunder",
    logo: faCloudBolt,
    soundUrl: thunderSound,
  },
  {
    id: 8,
    name: "Wind chime",
    logo: faWind,
    soundUrl: chimeSound,
  },
  {
    id: 9,
    name: "Horse",
    logo: faHorseHead,
    soundUrl: horseSound,
  },
  {
    id: 10,
    name: "Waterfall",
    logo: faWater,
    soundUrl: waterfallSound,
  },
  {
    id: 11,
    name: "City",
    logo: faCity,
    soundUrl: citySound,
  },
  {
    id: 12,
    name: "Night",
    logo: faMoon,
    soundUrl: cricketSound,
  },
];

function App() {
  const [currentPlayingId, setCurrentPlayingId] = useState(null);
  const handlePlay = (id) => {
    setCurrentPlayingId((prevId) => (prevId === id ? null : id));
  }
  return (
    <div className="App">
      <p className="title">Calmify</p>
      <div className="sound-grid">
        {sounds.map((sound) => (
          <SoundCard key={sound.id} {...sound} isPlaying={currentPlayingId === sound.id} onPlay = {()=> handlePlay(sound.id)}/>
        ))}
      </div>
    </div>
  );
}

export default App;
