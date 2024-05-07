import Bocce from "../assets/Bocce2.png";
import RadioWave from "../assets/RadioWaves3.png";
import ReactImage from "../assets/React2.png";
import Searchlight from "../assets/Searchlight3.png";
import Swap from "../assets/Swap2.png";
import Transistor from "../assets/Transistor2.png";
import RayOpticsData from "./RayOptics/RayOpticsData.jsx";
import AtomsData from "./Atoms/AtomsData.jsx";
import DualNatureData from "./DualNature/DualNatureData.jsx";
import SemiconductorData from "./Semiconductor/data.jsx";
import NuclieData from "./Nuclie/data.jsx";
import WaveOpticsData from "./WaveOptics/data.jsx";

const chaptersData = [
  {
    id: 9,
    title: "Ray Optics and Optical Instruments",
    src: Searchlight,
    slug: "ray-optics",
    name: "Ray Optics and Optical Instruments",
    sections: RayOpticsData,
  },
  {
    id: 10,
    title: "Wave Optics",
    src: RadioWave,
    slug: "wave-optics",
    name: "Wave Optics",
    sections: WaveOpticsData,
  },
  {
    id: 11,
    title: "Dual Nature of Radiation and Matter",
    src: Swap,
    slug: "dual-nature-of-radiation-and-matter",
    name: "Dual Nature of Radiation and Matter",
    sections: DualNatureData,
  },
  {
    id: 12,
    title: "Atoms",
    src: Bocce,
    slug: "atoms",
    name: "Atoms",
    sections: AtomsData,
  },
  {
    id: 13,
    title: "Nuclie",
    src: ReactImage,
    slug: "nuclie",
    name: "Nuclie",
    sections: NuclieData,
  },
  {
    id: 14,
    title: "Semiconductors Electronics",
    src: Transistor,
    slug: "semiconductors",
    name: "Semiconductors Electronics",
    sections: SemiconductorData,
  },
];

export default chaptersData;
