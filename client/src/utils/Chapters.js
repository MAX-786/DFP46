import Bocce from "../assets/Bocce.png";
import RadioWave from "../assets/RadioWaves.png";
import ReactImage from "../assets/React.png";
import Searchlight from "../assets/Searchlight.png";
import Swap from "../assets/Swap.png";
import Transistor from "../assets/Transistor.png";

const chaptersData = [
    {
        id: 9,
        title: "Ray Optics and Optical Instruments",
        src: Searchlight,
        slug: "ray-optics",
        name: "Ray Optics and Optical Instruments",
        sections: ["Section 9.1", "Section 9.2", "Section 9.3"],
    },
    {
        id: 10,
        title: "Wave Optics",
        src: RadioWave,
        slug: "wave-optics",
        name: "Wave Optics",
        sections: ["Section 10.1", "Section 10.2"],
    },
    {
        id: 11,
        title: "Dual Nature of Radiation and Matter",
        src: Swap,
        slug: "dual-nature-of-radiation-and-matter",
        name: "Dual Nature of Radiation and Matter",
        sections: ["Section 11.1", "Section 11.2", "Section 11.3", "Section 11.4"],
    },
    {
        id: 12,
        title: "Atoms",
        src: Bocce,
        slug: "atoms",
        name: "Atoms",
        sections: ["Section 12.1", "Section 12.2", "Section 12.3", "Section 12.4"],
    },
    {
        id: 13,
        title: "Nuclie",
        src: ReactImage,
        slug: "nuclie",
        name: "Nuclie",
        sections: ["Section 13.1", "Section 13.2", "Section 13.3", "Section 13.4"],
    },
    {
        id: 14,
        title: "Semiconductors Electronics",
        src: Transistor,
        slug: "semiconductors",
        name: "Semiconductors Electronics",
        sections: ["Section 14.1", "Section 14.2", "Section 14.3", "Section 14.4"],
    },
];

export default chaptersData;
