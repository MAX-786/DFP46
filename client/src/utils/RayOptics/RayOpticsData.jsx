
import { BlockMath, InlineMath } from "react-katex";
import refraction from "../../assets/RayOptics/refraction.png";
import Refraction from "./labs/Refraction";
import RayOptics from "../../components/RayOptics/RayOptics";
const RayOpticsData = [
  {
    id: 1,
    name: "Introduction",
    slug: "introduction",
    subtopic: [
      {
        id: 0,
        title: "",
        text: (
          <>
            When we talk about light, we often imagine it as a beam moving
            in a straight line. This simplified way of understanding light's
            behavior is what we call ray optics. <br />
            <br /> In ray optics, we study how light travels through
            different materials and interacts with various objects. Imagine
            you're standing in a room with sunlight streaming through a
            window. Have you ever noticed how the sunlight seems to travel
            in straight lines until it hits something, like a wall or a
            mirror? That's exactly what we explore in ray optics. We want to
            understand why light behaves this way and how we can predict its
            path.
            <br />
            <br /> Ray optics is like drawing a map for light. By studying
            how light rays move and interact, we can explain many phenomena,
            from how a magnifying glass focuses light to how rainbows form.
            It's an essential part of understanding the world around us and
            how we see things.
            <h2>Particle Model of Light</h2>
            <br />
            Sir Isaac Newton, known for his groundbreaking work in
            mathematics and physics, also made significant contributions to
            the study of light. He built upon the ideas of French
            philosopher René Descartes, who proposed that light is made up
            of tiny particles called corpuscles. Newton expanded on this
            corpuscular model, suggesting that these particles have no mass
            and behave like tiny elastic balls. <br />
            Newton used his
            understanding of mechanics to explain how light behaves when it
            hits surfaces. He likened the reflection of light from a smooth
            surface, like a mirror, to the way a ball bounces off a flat
            surface. Just as a bouncing ball retains its velocity after
            hitting the ground, Newton proposed that light particles reflect
            off smooth surfaces with the same speed and direction, except
            for the component perpendicular to the surface.<br />
             To explain
            refraction, the bending of light when it passes from one medium
            to another, Newton suggested that light particles move faster in
            materials like water or glass compared to air. However, later
            experiments showed that the speed of light is actually slower in
            these materials.<br />
             While Newton's particle model explained some
            phenomena well, it struggled to account for others. For example,
            the colors seen in thin films of oil on water or the partial
            reflection of light in ponds presented challenges. Newton
            proposed that some light particles are reflected while others
            are transmitted, but he struggled to explain why some are
            reflected and others are not. This unpredictability in behavior
            posed a dilemma for the particle model of light, unlike the more
            consistent explanations provided by the wave theory of light.
          </>
        ),
        image: [],
      },
    ],
  },
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
            <RayOptics />
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
 