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
    sections: [
      {
        id: 1,
        name: "Introduction",
        slug: "introduction",
      },
      {
        id: 2,
        name: "Reflection of Light by Spherical Mirrors",
        slug: "reflection-of-light-by-spherical-mirrors",
      },
      {
        id: 3,
        name: "Refraction",
        slug: "refraction",
      },
      {
        id: 4,
        name: "Total Internal Reflection",
        slug: "total-internal-reflection",
      },
      {
        id: 5,
        name: "Refraction at Spherical Surfaces and by Lenses",
        slug: "refraction-at-spherical-surfaces-and-by-lenses",
      },
      {
        id: 6,
        name: "Refraction through a Prism",
        slug: "refraction-through-a-prism",
      },
      {
        id: 7,
        name: "Optical Instruments",
        slug: "optical-instruments",
      },
    ],
  },
  {
    id: 10,
    title: "Wave Optics",
    src: RadioWave,
    slug: "wave-optics",
    name: "Wave Optics",
    sections: [
      {
        id: 1,
        name: "Introduction",
        slug: "introduction",
      },
      {
        id: 2,
        name: "Huygens Principle",
        slug: "huygens-principle",
      },
      {
        id: 3,
        name: "Refraction and Reflection of Plane Waves using Huygens Principle",
        slug: "refraction-and-reflection-of-plane-waves-using-huygens-principle",
      },
      {
        id: 4,
        name: "Coherent and Incoherent Addition of Waves",
        slug: "coherent-and-incoherent-addition-of-waves",
      },
      {
        id: 5,
        name: "Interference of Light Waves and Young's Experiment",
        slug: "interference-of-light-waves-and-youngs-experiment",
      },
      {
        id: 6,
        name: "Diffraction",
        slug: "diffraction",
      },
      {
        id: 7,
        name: "Polarisation",
        slug: "polarisation",
      },
    ],
  },
  {
    id: 11,
    title: "Dual Nature of Radiation and Matter",
    src: Swap,
    slug: "dual-nature-of-radiation-and-matter",
    name: "Dual Nature of Radiation and Matter",
    sections: [
      {
        id: 1,
        name: "Introduction",
        slug: "introduction",
      },
      {
        id: 2,
        name: "Electron Emission",
        slug: "electron-emission",
      },
      {
        id: 3,
        name: "Photoelectric Effect",
        slug: "photoelectric-effect",
      },
      {
        id: 4,
        name: "Experimental Study of Photoelectric Effect",
        slug: "experimental-study-of-photoelectric-effect",
      },
      {
        id: 5,
        name: "Photoelectric Effect and Wave Theory of Light",
        slug: "photoelectric-effect-and-wave-theory-of-light",
      },
      {
        id: 6,
        name: "Einstein's Photoelectric Equation: Energy Quantum of Radiation",
        slug: "einsteins-photoelectric-equation-energy-quantum-of-radiation",
      },
      {
        id: 7,
        name: "Particle Nature of Light: The Photon",
        slug: "particle-nature-of-light-the-photon",
      },
      {
        id: 8,
        name: "Wave Nature of Matter",
        slug: "wave-nature-of-matter",
      },
    ],
  },
  {
    id: 12,
    title: "Atoms",
    src: Bocce,
    slug: "atoms",
    name: "Atoms",
    sections: [
      {
        id: 1,
        name: "Introduction",
        slug: "introduction",
      },
      {
        id: 2,
        name: "Alpha-particle Scattering and Rutherford's Nuclear Model of Atom",
        slug: "alpha-particle-scattering-and-rutherfords-nuclear-model-of-atom",
      },
      {
        id: 3,
        name: "Atomic Spectra",
        slug: "atomic-spectra",
      },
      {
        id: 4,
        name: "Bohr Model of the Hydrogen Atom",
        slug: "bohr-model-of-the-hydrogen-atom",
      },
      {
        id: 5,
        name: "The Line Spectra of the Hydrogen Atom",
        slug: "the-line-spectra-of-the-hydrogen-atom",
      },
      {
        id: 6,
        name: "DE Broglie's Explanation of Bohr's Second Postulate of Quantisation",
        slug: "de-broglies-explanation-of-bohrs-second-postulate-of-quantisation",
      },
    ],
  },
  {
    id: 13,
    title: "Nuclie",
    src: ReactImage,
    slug: "nuclie",
    name: "Nuclie",
    sections: [
      {
        id: 1,
        name: "Introduction",
        slug: "introduction",
      },
      {
        id: 2,
        name: "Atomic Masses and Composition of Nucleus",
        slug: "atomic-masses-and-composition-of-nucleus",
      },
      {
        id: 3,
        name: "Size of the Nucleus",
        slug: "size-of-the-nucleus",
      },
      {
        id: 4,
        name: "Mass-Energy and Nuclear Binding Energy",
        slug: "mass-energy-and-nuclear-binding-energy",
      },
      {
        id: 5,
        name: "Nuclear Force",
        slug: "nuclear-force",
      },
      {
        id: 6,
        name: "Radioactivity",
        slug: "radioactivity",
      },
      {
        id: 7,
        name: "Nuclear Energy",
        slug: "nuclear-energy",
      },
    ],
  },
  {
    id: 14,
    title: "Semiconductors Electronics",
    src: Transistor,
    slug: "semiconductors",
    name: "Semiconductors Electronics",
    sections: [
      {
        id: 1,
        name: "Introduction",
        slug: "introduction",
      },
      {
        id: 2,
        name: "Classification of Metals, Conductors and Semiconductors",
        slug: "classification-of-metals-conductors-and-semiconductors",
      },
      {
        id: 3,
        name: "Intrinsic Semiconductor",
        slug: "intrinsic-semiconductor",
      },
      {
        id: 4,
        name: "Extrinsic Semiconductor",
        slug: "extrinsic-semiconductor",
      },
      {
        id: 5,
        name: "p-n Junction",
        slug: "p-n-junction",
      },
      {
        id: 6,
        name: "Semiconductor Diode",
        slug: "semiconductor-diode",
      },
      {
        id: 7,
        name: "Application of Junction Diode as a Rectifier",
        slug: "application-of-junction-diode-as-a-rectifier",
      },
    ],
  },
];

export default chaptersData;
