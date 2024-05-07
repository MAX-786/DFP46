import { BlockMath, InlineMath } from "react-katex";
import refraction from "../../assets/RayOptics/refraction.png";
import Refraction from "./labs/Refraction";

const RayOpticsData = [
  // {
  // id: 1,
  // name: "Introduction",
  // slug: "introduction",
  // },
  // {
  // id: 2,
  // name: "Reflection of Light by Spherical Mirrors",
  // slug: "reflection-of-light-by-spherical-mirrors",
  // },
  {
    id: 3,
    name: "Refraction",
    slug: "refraction",
    subtopic: [
      {
        id: 0,
        title: "",
        text: (
          <>
            When a beam of light encounters another transparent medium, a part
            of light gets reflected back into the first medium while the rest
            enters the other. The direction of propagation of an obliquely
            incident (0° {"<"} i {"<"} 90°) ray of light that enters the other
            medium, changes at the interface of the two media. This phenomenon
            is called <strong>refraction of light.</strong>
          </>
        ),
        image: [refraction],
      },
      {
        id: 1,
        title: "Snell's Laws of Refraction",
        text: (
          <>
            Snell's laws of refraction state that:
            <p>
              <strong>1.</strong> The incident ray, refracted ray, and normal at
              the point of incidence all lie in the same plane.
              <br />
              <strong>2.</strong> The ratio of the sine of the angle of incidence to the sine of the
              angle of refraction is a constant, known as the refractive index
              (n<sub>21</sub>​).
            </p>
            <p>
              The refractive index is a characteristic of the pair of media and
              depends on the light's wavelength but is independent of the angle
              of incidence. If <InlineMath>{"n_{21} > 1"}</InlineMath>, the
              refracted ray bends towards the normal, and medium 2 is denser
              than medium 1. If <InlineMath>{"n_{21} < 1"}</InlineMath>, the
              refracted ray bends away from the normal, indicating the incident
              ray is in a denser medium refracting into a rarer medium.
            </p>
            <p>
              Optical density, the ratio of the speed of light in two media,
              should not be confused with mass density. For example, turpentine
              has a higher optical density but lower mass density than water.
            </p>
            <p>
              The refractive index of medium 2 with respect to medium 1 (
              <InlineMath>{"n_{21}"}</InlineMath>) is the reciprocal of the
              refractive index of medium 1 with respect to medium 2 (
              <InlineMath>{"n_{12}"}</InlineMath>). If{" "}
              <InlineMath>{"n_{32}"}</InlineMath> is the refractive index of
              medium 3 with respect to medium 2, then{" "}
              <BlockMath>{"n_{32} = n_{31} \\times n_{12}"}</BlockMath>.
            </p>
            <p>
              In a rectangular slab, refraction occurs at two interfaces. The
              emergent ray is parallel to the incident ray, with a lateral
              shift. The bottom of a water-filled tank appears raised due to
              refraction. The apparent depth is the real depth divided by the
              refractive index of the medium.
            </p>
          </>
        ),
        image: [],
      },
    ],
    isLab: true,
    lab: Refraction,
  },
  //   {
  //     id: 4,
  //     name: "Total Internal Reflection",
  //     slug: "total-internal-reflection",
  //   },
  //   {
  //     id: 5,
  //     name: "Refraction at Spherical Surfaces and by Lenses",
  //     slug: "refraction-at-spherical-surfaces-and-by-lenses",
  //   },
  //   {
  //     id: 6,
  //     name: "Refraction through a Prism",
  //     slug: "refraction-through-a-prism",
  //   },
  //   {
  //     id: 7,
  //     name: "Optical Instruments",
  //     slug: "optical-instruments",
  //   },
];

export default RayOpticsData;
