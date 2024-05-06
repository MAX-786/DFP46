import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";
import Bocce from "../assets/Bocce.png";
import RadioWave from "../assets/RadioWaves.png";
import ReactImage from "../assets/React.png";
import Searchlight from "../assets/Searchlight.png";
import Swap from "../assets/Swap.png";
import Transistor from "../assets/Transistor.png";
import SemiconductorData from "./Semiconductor/data.jsx";
import NuclieData from "./Nuclie/data.jsx"

// Required imports for WaveOptics
import React from "react";
import gifImage from "../assets/WaveOptics/ripples.webp";
import PlanetoSlantWavefront from "../assets/WaveOptics/PlanetoSlantWavefront.mp4";
import sphericalWavefront from "../assets/WaveOptics/sphericalWavefront.png";
import planeWavefront from "../assets/WaveOptics/planeWavefront.png";
import Refraction_of_a_plane_wave from "../assets/WaveOptics/Refraction_of_a_plane_wave.png";
import SnellsLawDerivation from "../assets/WaveOptics/SnellsLawDerivation.mp4";
// import "./Style.css";
import ReactPlayer from "react-player";
import YoungExperiment from "../assets/WaveOptics/YoungsExperiment.mp4";
import PathandPhaseDifference from "../assets/WaveOptics/PathandPhaseDifference.mp4";
import young from "../assets/WaveOptics/young.png";
// Required imports for WaveOptics
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
        subtopic: [
          {
            id: 0,
            title: "",
            text: (
              <>
                In the 17th century, Descartes proposed the corpuscular model of
                light, which explained reflection and refraction by predicting
                that light bends towards the normal when it enters a denser
                medium. Newton further developed this model in his book
                "OPTICKS," making it widely known. However, in 1678, Huygens
                introduced the wave theory of light, which contradicted the
                corpuscular model by suggesting that light bends towards the
                normal when entering a denser medium, indicating a decrease in
                speed. This was later confirmed by experiments showing light
                travels slower in denser mediums. Despite resistance due to
                Newton's influence and the belief that waves require a medium,
                Young's interference experiment in 1801 provided strong evidence
                for the wave nature of light. This led to the establishment of
                the wave theory, supported by experiments on interference and
                diffraction. Maxwell's electromagnetic theory further reinforced
                this by predicting electromagnetic waves, explaining how light
                propagates through vacuum. This theory suggests that light waves
                are associated with changing electric and magnetic fields. In
                this chapter, we will discuss Huygens' principle, reflection,
                refraction, interference, diffraction, and polarization, which
                collectively form the foundation of understanding light as a
                wave phenomenon.
              </>
            ),
            image: [gifImage],
          },
        ],
        isLab: false,
        lab: "",
      },
      {
        id: 2,
        name: "Huygens Principle",
        slug: "huygens-principle",
        subtopic: [
          {
            id: 0,
            title: "Hugens Principle ",
            text: (
              <>
                <p>
                  Imagine dropping a pebble into a calm pond. When it hits the
                  water, ripples spread out from the point of impact. These
                  ripples form circular patterns on the surface of the water. If
                  you took a picture of the water's surface at any moment, you'd
                  see these circular patterns where the ripples are strongest.
                  These circular patterns are called wavefronts. A wavefront is
                  like a snapshot of the wave at a particular moment in time.
                  The speed at which these wavefronts move outward from the
                  point of impact is called the wave's speed. The energy of the
                  wave travels perpendicular to the wavefront.
                </p>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <img
                    src={sphericalWavefront}
                    alt="Your GIF"
                    style={{ width: "700px", height: "350px" }}
                  />
                  <img
                    src={planeWavefront}
                    alt="Your GIF"
                    style={{ width: "400px", height: "350px" }}
                  />
                </div>
                <p>
                  If we have a point source emitting waves in all directions,
                  the wavefronts will be spherical. Think of it like blowing up
                  a balloon inside the pond – the ripples would spread out
                  evenly in all directions. But when you're far away from the
                  source, only a small part of the spherical wavefront looks
                  flat, like a plane. This is called a plane wave.
                </p>
                <p>
                  Now, Huygens' principle helps us understand how these
                  wavefronts change over time. Imagine the spherical wavefront
                  at the beginning (t = 0). According to Huygens' principle,
                  each point on the wavefront acts as a mini source of new
                  waves. These new waves spread out in all directions at the
                  speed of the wave. We call these new waves secondary wavelets.
                  If we draw a line that touches all these secondary wavelets,
                  we can figure out where the wavefront will be at a later time
                  (t = τ). We do this by drawing spheres around each point on
                  the original wavefront, with a radius determined by the wave's
                  speed and the time elapsed. Then, we draw a line that touches
                  all these spheres. This line gives us the new position of the
                  wavefront at t = τ.
                </p>
                <p>
                  But there's a problem: Huygens' principle doesn't account for
                  waves that move backwards. Huygens suggested that the waves
                  moving backwards have zero strength, but this assumption isn't
                  entirely satisfactory. However, for now, we'll stick with this
                  simpler explanation.
                </p>
                <p>
                  We can also use Huygens' principle to understand how plane
                  waves travel through a medium, but the concept is similar:
                  each point on the wavefront acts as a mini source of new
                  waves, and we can use these new waves to figure out how the
                  wavefront changes over time.
                </p>
              </>
            ),
            image: [],
          },
        ],
        isLab: false,
        lab: "",
      },
      {
        id: 3,
        name: "Refraction and Reflection of Plane Waves using Huygens Principle",
        slug: "refraction-and-reflection-of-plane-waves-using-huygens-principle",
        subtopic: [
          {
            id: 0,
            title: "Refraction of a plane wave: ",
            text: (
              <>
                <p>
                  Let's break down Huygens' principle and the derivation of the
                  laws of refraction into simpler terms:
                </p>
                <p>
                  We will now use Huygens principle to derive the laws of
                  refraction. Let PP′ represent the surface separating medium 1
                  and medium 2, as shown in figure. Let{" "}
                  <InlineMath math="\nu_1 " /> and <InlineMath math="\nu_2" />{" "}
                  represent the speed of light in medium 1 and medium 2,
                  respectively. We assume a plane wavefront AB propagating in
                  the direction A′A incident on the interface at an angle i as
                  shown in the figure. Let τ be the time taken by the wavefront
                  to travel the distance BC. Thus, BC ={" "}
                  <InlineMath math="\nu_1 \tau" />
                </p>
                <img src={Refraction_of_a_plane_wave} alt="Your GIF" />
                <p>
                  In order to determine the shape of the refracted wavefront, we
                  draw a sphere of radius <InlineMath math="\nu_2" />
                  τ from the point A in the second medium (the speed of the wave
                  in the second medium is <InlineMath math="\nu_2" />
                  ). Let CE represent a tangent plane drawn from the point C on
                  to the sphere. Then, AE = <InlineMath math="\nu_1 \tau" /> and
                  CE would represent the refracted wavefront. If we now consider
                  the triangles ABC and AEC, we readily obtain
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <BlockMath math="sin(i)= \frac{BC}{AC} = \frac{\nu_1 \tau}{AC}   " />
                    <span style={{ margin: "1.5rem 0" }}>Eq.(10.1)</span>
                  </div>
                  and
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <BlockMath math="sin(r)= \frac{AE}{AC} = \frac{\nu_2 \tau}{AC}   " />
                    <span style={{ margin: "1.5rem 0" }}>Eq.(10.2)</span>
                  </div>
                  angles of incidence and refraction, respectively
                </p>
                <p>
                  Thus we obtain
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <BlockMath math=" \frac{sin(i)}{sin(r)} = \frac{\nu_1 }{\nu_2}   " />
                    <span style={{ margin: "1.5rem 0" }}>Eq.(10.3)</span>
                  </div>
                  From the above equation, we get the important result that if r{" "}
                  {"<"} i (i.e., if the ray bends toward the normal), the speed
                  of the light wave in the second medium (
                  <InlineMath math="\nu_2" />) will be less then the speed of
                  the light wave in the first medium (
                  <InlineMath math="\nu_1" />
                  ). This prediction is opposite to the prediction from the
                  corpuscular model of light and as later experiments showed,
                  the prediction of the wave theory is correct. Now, if c
                  represents the speed of light in vacuum, then,
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <BlockMath math="n_1= \frac{c}{\nu_1}" />
                    <span style={{ margin: "1.5rem 0" }}>Eq.(10.4)</span>
                  </div>
                  and
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <BlockMath math="n_2= \frac{c}{\nu_2}" />
                    <span style={{ margin: "1.5rem 0" }}>Eq.(10.5)</span>
                  </div>
                  are known as the refractive indices of medium 1 and medium 2,
                  respectively. In terms of the refractive indices, Eq. (10.3)
                  can be written as
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <BlockMath math="n_1sin(i)=n_2sin(r)" />
                    <span style={{ margin: "1.5rem 0" }}>Eq.(10.6)</span>
                  </div>
                </p>
                <p>
                  <ReactPlayer
                    url={SnellsLawDerivation}
                    controls
                    style={{ margin: "auto" }}
                  />
                </p>

                <p>
                  This is the Snell’s law of refraction. Further, if{" "}
                  <InlineMath math="\lambda_1"></InlineMath>
                  and <InlineMath math="\lambda_2"></InlineMath> denote the
                  wavelengths of light in medium 1 and medium 2, respectively
                  and if the distance BC is equal to{" "}
                  <InlineMath math="\lambda_1"></InlineMath> then the distance
                  AE will be equal to <InlineMath math="\lambda_2"></InlineMath>{" "}
                  (because if the crest from B has reached C in time{" "}
                  <InlineMath math="\tau"></InlineMath>, then the crest from A
                  should have also reached E in time{" "}
                  <InlineMath math="\tau"></InlineMath> ); thus
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <BlockMath math=" \frac{\nu_1}{λ_1} =   \frac{\nu_2}{λ_2} " />
                    <span style={{ margin: "1.5rem 0" }}>Eq.(10.7)</span>
                  </div>
                </p>

                <p>
                  In simple terms, Huygens' principle helps us understand how
                  light bends when it moves from one medium to another. By
                  drawing imaginary spheres around each point on the original
                  wavefront, we can figure out where the new wavefront will be.
                  This helps us derive the laws of refraction, which tell us how
                  light bends when it travels through different materials.
                  <ReactPlayer
                    url={PlanetoSlantWavefront}
                    controls
                    style={{ margin: "auto" }}
                  />
                </p>
              </>
            ),
            image: [],
          },
          {
            id: 1,
            title: "Reflection of a plane wave by a plane surface ",
            text: (
              <>
                <ul>
                  <li>
                    <strong>Reflection</strong>: Imagine a wavefront hitting a
                    mirror at an angle. We call this angle the angle of
                    incidence. The wavefront bounces off the mirror, forming a
                    new wavefront. If we draw a sphere around each point on the
                    original wavefront and connect the points where these
                    spheres touch the mirror, we get the new wavefront. The law
                    of reflection tells us that the angle of incidence is equal
                    to the angle of reflection. This means that the incoming and
                    outgoing waves have the same angle.
                  </li>
                  <li>
                    <strong>Refraction</strong>: When a wavefront passes through
                    a material, like glass or water, it can bend. We call this
                    bending refraction. If we have a wavefront passing through a
                    prism, for example, the bottom part of the wavefront travels
                    through more material, so it gets delayed. This delay causes
                    the wavefront to tilt when it emerges from the prism.
                    Similarly, if a wavefront passes through a lens, the central
                    part of the wavefront travels through more material, causing
                    it to be delayed the most. This creates a depression in the
                    emerging wavefront, forming a spherical shape that converges
                    at a point called the focus.
                  </li>
                  <li>
                    <strong>Understanding Images</strong>: When light passes
                    through lenses, it can form images. The total time taken for
                    light to travel from an object point to its corresponding
                    point in the image is the same, regardless of the path it
                    takes. Even though light passing through the center of a
                    lens travels a shorter distance, it takes longer due to the
                    slower speed in the lens. This ensures that all rays
                    converge to form a sharp image.
                  </li>
                </ul>
                <p>
                  In simple terms, reflection occurs when a wavefront bounces
                  off a surface, and refraction occurs when it passes through a
                  material and bends. These principles help us understand how
                  light behaves when it interacts with mirrors, lenses, prisms,
                  and other optical devices.
                </p>
              </>
            ),
            image: [],
          },
          {
            id: 2,
            title: "The doppler effect",
            text: (
              <>
                <p>
                  When constructing wavefronts, it's important to consider the
                  motion of the source or observer. If the source moves away
                  from the observer, the later wavefronts have to travel a
                  greater distance to reach the observer, taking a longer time.
                  This means that the time between the arrival of successive
                  wavefronts is longer for the observer compared to the source.
                </p>
                <p>
                  This change in frequency due to the motion of the source or
                  observer is known as the Doppler effect. For example, when a
                  source moves away from the observer, the frequency measured by
                  the source appears smaller. This results in a shift towards
                  longer wavelengths, which astronomers refer to as redshift.
                  Conversely, when a source moves towards the observer, there is
                  an apparent decrease in wavelength, known as blueshift.
                </p>
                <p>
                  For small velocities compared to the speed of light, we can
                  use formulas similar to those used for sound waves to
                  calculate the Doppler shift. The fractional change in
                  frequency
                  <BlockMath math="\frac{\Delta v}{v} = - \frac{\nu_{radial}}{c}" />{" "}
                  where <InlineMath math="\nu_{radial}"></InlineMath> is the
                  component of the source velocity along the line joining the
                  observer to the source, relative to the observer. It's
                  considered positive when the source moves away from the
                  observer.
                </p>
                <p>
                  However, when dealing with speeds close to that of light, we
                  need to use Einstein's special theory of relativity for a more
                  accurate calculation of the Doppler effect. This Doppler
                  effect for light is crucial in astronomy, as it helps measure
                  the radial velocities of distant galaxies.
                </p>
              </>
            ),
            image: [],
          },
        ],
        isLab: false,
        lab: "",
      },
      {
        id: 4,
        name: "Coherent and Incoherent Addition of Waves",
        slug: "coherent-and-incoherent-addition-of-waves",
        subtopic: [
          {
            id: 0,
            title: "",
            text: (
              <>
                <ul>
                  <li>
                    <strong>Superposition Principle</strong>: Just like we
                    discussed in Chapter 15, the interference phenomenon relies
                    on the superposition principle. This principle states that
                    at any point in a medium, the resulting displacement caused
                    by multiple waves is the sum of the displacements caused by
                    each individual wave.
                  </li>
                  <li>
                    <strong>Coherent Sources</strong>: Consider two needles
                    moving up and down in water, creating waves. If these
                    needles move in sync, meaning their movements are perfectly
                    aligned, the waves they produce are said to be coherent. At
                    a specific point in the water, if the distances from each
                    needle to that point are equal, the waves from both needles
                    will arrive at that point in phase, meaning their peaks and
                    troughs align perfectly.
                  </li>
                  <li>
                    <strong>Constructive Interference</strong>: When waves
                    arrive at a point in phase, they interfere constructively,
                    meaning their amplitudes add up. This results in a stronger
                    wave at that point. Mathematically, if the path difference
                    between the two waves is a whole number multiple of the
                    wavelength, we observe constructive interference.
                  </li>
                  <li>
                    <strong>Destructive Interference</strong>: Conversely, when
                    waves arrive at a point out of phase, they interfere
                    destructively, canceling each other out. This results in a
                    weaker or even zero amplitude at that point. If the path
                    difference between the waves is a half-integer multiple of
                    the wavelength, we observe destructive interference.
                  </li>
                  <li>
                    <strong>Stable Interference Pattern</strong>: If the two
                    sources maintain a constant phase difference over time, we
                    see a stable interference pattern. This means the positions
                    of maximum and minimum intensities remain fixed over time.
                  </li>
                  <li>
                    <strong>Incoherent Sources</strong>: If the phase difference
                    between the sources changes rapidly with time, the sources
                    are said to be incoherent. In this case, the interference
                    pattern also changes rapidly over time. The resulting
                    intensity at any point is simply the sum of the intensities
                    of the individual waves.
                  </li>
                </ul>
                <ReactPlayer
                  url={PathandPhaseDifference}
                  controls
                  style={{ margin: "auto" }}
                />

                <p>
                  Understanding interference helps us predict how waves interact
                  with each other, leading to phenomena like the bright and dark
                  fringes observed in double-slit experiments and the colors
                  seen in thin film interference
                </p>
              </>
            ),
            image: [],
          },
        ],
        isLab: false,
        lab: "",
      },
      {
        id: 5,
        name: "Interference of Light Waves and Young's Experiment",
        slug: "interference-of-light-waves-and-youngs-experiment",
        subtopic: [
          {
            id: 0,
            title: "",
            text: (
              <>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <div>
                    <p>
                      Interference with light waves is a fascinating phenomenon
                      that demonstrates the wave nature of light. It occurs when
                      two or more coherent light waves superimpose on each
                      other, resulting in a pattern of alternating bright and
                      dark regions known as interference fringes. These fringes
                      are a consequence of constructive and destructive
                      interference, where waves either reinforce or cancel each
                      other out.
                    </p>
                    <p>
                      Coherence is a crucial concept in interference. Coherent
                      sources emit waves with a fixed phase relationship,
                      meaning that their wavefronts maintain a consistent
                      alignment over time. In Thomas Young's famous double-slit
                      experiment, coherence was achieved by using a single
                      source of light to illuminate two closely spaced pinholes.
                      This ensured that the waves emanating from the two
                      pinholes were in phase with each other, allowing
                      interference to occur.
                    </p>
                    <p>
                      When coherent light waves from the two pinholes reach a
                      screen, they interfere with each other. At certain points
                      on the screen, the waves arrive in phase and reinforce
                      each other, producing bright fringes. At other points, the
                      waves arrive out of phase and cancel each other, resulting
                      in dark fringes. The positions of these fringes are
                      determined by the path difference, which is the
                      discrepancy in the distances traveled by the waves from
                      the two pinholes to a specific point on the screen.
                    </p>
                  </div>
                  <img
                    src={young}
                    style={{ width: "500px", height: "350px" }}
                  />
                </div>
                <p>
                  Thus spherical waves emanating from S1 and S2 will produce
                  interference fringes on the screen GG′, as shown in Fig. The
                  positions of maximum and minimum intensities can be calculated
                  by using the analysis given in Section where we had shown that
                  for anarbitrary point P on the line GG′ Fig to correspond to a
                  maximum, we must have
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <BlockMath math="S_2P-S_1P;  n=0,1,2..." />

                    <span style={{ margin: "1.5rem 0" }}>10.15</span>
                  </div>
                  Now,
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <BlockMath math="(S_2P)^2-(S_1P)^2=D^2 +x+\frac{d^2}{2}-D^2 +x-\frac{d^2}{2}=2xd" />
                  </div>
                  where <InlineMath math="S_1S_2" />
                  =d and OP=x. Thus
                  <span style={{ margin: "1.5rem 0" }}>10.15</span>
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <BlockMath math="S_1P - S_2P = \frac{2xd}{S_1P + S_2P}" />
                    <span style={{ margin: "1.5rem 0" }}>10.16</span>
                  </div>
                  If x, d{"<<"}D then negligible error will be introduced if{" "}
                  <InlineMath math="S_1P+S_2P" />
                  (in the denominator) is replaced by 2D. For example, for d =
                  0.1 cm, D = 100 cm, OP = 1 cm (which correspond to typical
                  values for an interference experiment using light waves), we
                  have
                  <BlockMath math="S_1P + S_2P = [100^2 + 1.05^2]^{1/2} + [100^2 + .95^2]^{1/2}\approx 200.01 cm" />
                  Thus if we replace S2P + S1P by 2 D, the error involved is
                  about 0.005%. Hence we will have constructive interference
                  resulting in a bright region when
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <BlockMath math="x = x_n=\frac{n\lambda D}{d} \quad n=0,\pm1,\pm2,\pm3...." />
                    <span style={{ margin: "1.5rem 0" }}>10.18</span>
                  </div>
                  On the other hand, we will have a dark region near
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <BlockMath math="x = x_n=(n+\frac{1}{2})\frac{\lambda D}{d} \quad n=0,\pm1,\pm2,\pm3...." />
                    <span style={{ margin: "1.5rem 0" }}>10.19</span>
                  </div>
                  Thus dark and bright bands appear on the screen, Such bands
                  are called fringes. Equations (10.18) and (10.19) show that
                  dark and bright fringes are equally spaced and the distance
                  between two consecutive bright and dark fringes is given by
                  <BlockMath math="\beta= x_{n+1} -x_{n}" />
                  or
                  <BlockMath math="\beta= \frac{\lambda D}{d}" />
                  which is the expression for the fringe width{"."}
                </p>

                <strong>
                  The interference pattern exhibits several characteristics:
                </strong>

                <ul>
                  <li>
                    <strong>Fringe Width</strong>: The distance between adjacent
                    bright or dark fringes, known as the fringe width, depends
                    on the wavelength of light and the experimental setup. Wider
                    separations between the pinholes or longer wavelengths
                    result in broader fringes, while narrower separations or
                    shorter wavelengths produce narrower fringes.
                  </li>
                  <li>
                    <strong>Central Maximum</strong>: The central fringe,
                    located at the midpoint between the two pinholes on the
                    screen, is usually the brightest. This occurs when the path
                    difference is zero, leading to constructive interference.
                  </li>
                  <li>
                    <strong>Angular Distribution</strong>: The interference
                    pattern may exhibit angular variation if the source is not
                    positioned symmetrically between the pinholes. In such
                    cases, the central maximum may be shifted, and the fringes
                    may no longer be straight lines.
                  </li>
                  <li>
                    <strong>Effect of Light Source</strong>: When white light is
                    used instead of monochromatic light, interference patterns
                    due to different colors overlap. This results in a central
                    white fringe, with colors appearing on either side based on
                    their wavelengths.
                  </li>
                </ul>
                <ReactPlayer
                  url={YoungExperiment}
                  controls
                  style={{ margin: "auto" }}
                />
                <p>
                  Interference phenomena have profound implications for optics,
                  astronomy, and technology. They provide valuable insights into
                  the wave nature of light and are utilized in various
                  applications, including interferometry, spectroscopy, and
                  optical coatings. By studying interference patterns,
                  scientists can extract information about the properties of
                  light and the objects that interact with it, leading to
                  advancements in diverse fields.
                </p>
              </>
            ),
            image: [],
          },
        ],
        isLab: false,
        lab: "",
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
        subtopic: [
          {
            id: 0,
            title: "",
            text: (
              <>
                By the nineteenth century, enough evidence had accumulated in
                favour of atomic hypothesis of matter. In 1897, the experiments
                on electric discharge through gases carried out by the English
                physicist J. J. Thomson (1856 – 1940) revealed that atoms of
                different elements contain negatively charged constituents
                (electrons) that are identical for all atoms. However, atoms on
                a whole are electrically neutral. Therefore, an atom must also
                contain some positive charge to neutralise the negative charge
                of the electrons. But what is the arrangement of the positive
                charge and the electrons inside the atom? In other words, what
                is the structure of an atom? <br />
                <br />
                The first model of atom was proposed by J. J. Thomson in 1898.
                According to this model, the positive charge of the atom is
                uniformly distributed throughout the volume of the atom and the
                negatively charged electrons are embedded in it like seeds in a
                watermelon. This model was picturesquely called plum pudding
                model of the atom. However subsequent studies on atoms, as
                described in this chapter, showed that the distribution of the
                electrons and positive charges are very different from that
                proposed in this model. <br />
                <br />
                We know that condensed matter (solids and liquids) and dense
                gases at all temperatures emit electromagnetic radiation in
                which a continuous distribution of several wavelengths is
                present, though with different intensities. This radiation is
                considered to be due to oscillations of atoms and molecules,
                governed by the interaction of each atom or molecule with its
                neighbours. In contrast, light emitted from rarefied gases
                heated in a flame, or excited electrically in a glow tube such
                as the familiar neon sign or mercury vapour light has only
                certain discrete wavelengths. The spectrum appears as a series
                of bright lines. In such gases, the average spacing between
                atoms is large. Hence, the radiation emitted can be considered
                due to individual atoms rather than because of interactions
                between atoms or molecules. <br />
                <br />
                In the early nineteenth century it was also established that
                each element is associated with a characteristic spectrum of
                radiation, for example, hydrogen always gives a set of lines
                with fixed relative position between the lines. This fact
                suggested an intimate relationship between the internal
                structure of an atom and the spectrum of radiation emitted by
                it. In 1885, Johann Jakob Balmer (1825 – 1898) obtained a simple
                empirical formula which gave the wavelengths of a group of lines
                emitted by atomic hydrogen. Since hydrogen is simplest of the
                elements known, we shall consider its spectrum in detail in this
                chapter. <br />
                <br />
                Ernst Rutherford (1871–1937), a former research student of J. J.
                Thomson, was engaged in experiments on{" "}
                <InlineMath math="\alpha" />
                -particles emitted by some radioactive elements. In 1906, he
                proposed a classic experiment of scattering of these{" "}
                <InlineMath math="\alpha" />
                -particles by atoms to investigate the atomic structure. This
                experiment was later performed around 1911 by Hans Geiger
                (1882–1945) and Ernst Marsden (1889–1970, who was 20 year-old
                student and had not yet earned his bachelor’s degree). The
                details are discussed in Section 12.2. The explanation of the
                results led to the birth of Rutherford’s planetary model of atom
                (also called the nuclear model of the atom). According to this
                the entire positive charge and most of the mass of the atom is
                concentrated in a small volume called the nucleus with electrons
                revolving around the nucleus just as planets revolve around the
                sun. <br />
                <br />
                Rutherford’s nuclear model was a major step towards how we see
                the atom today. However, it could not explain why atoms emit
                light of only discrete wavelengths. How could an atom as simple
                as hydrogen, consisting of a single electron and a single
                proton, emit a complex spectrum of specific wavelengths? In the
                classical picture of an atom, the electron revolves round the
                nucleus much like the way a planet revolves round the sun.
                However, we shall see that there are some serious difficulties
                in accepting such a model.
              </>
            ),
            image: [],
          },
        ],
        isLab: false,
        lab: "",
      },
      {
        id: 2,
        name: "Alpha-particle Scattering and Rutherford's Nuclear Model of Atom",
        slug: "alpha-particle-scattering-and-rutherfords-nuclear-model-of-atom",
        subtopic: [
          {
            id: 0,
            title: "",
            text: (
              <>
                At the suggestion of Ernst Rutherford, in 1911, H. Geiger and E.
                Marsden performed some experiments. In one of their experiments,
                as shown in Fig. 12.1, they directed a beam of 5.5 MeV{" "}
                <InlineMath math="\alpha" />
                -particles emitted from a{" "}
                <InlineMath math="^{214}_{83}\mathrm{Bi}" /> radioactive source
                at a thin metal foil made of gold. Figure 12.2 shows a schematic
                diagram of this experiment. Alpha-particles emitted by a{" "}
                <InlineMath math="^{214}_{83}\mathrm{Bi}" /> radioactive source
                were collimated into a narrow beam by their passage through lead
                bricks. The beam was allowed to fall on a thin foil of gold of
                thickness <InlineMath math="2.1 \times 10^{–7}" /> m. The
                scattered alpha-particles were observed through a rotatable
                detector consisting of zinc sulphide screen and a microscope.
                The scattered alpha-particles on striking the screen produced
                brief light flashes or scintillations. These flashes may be
                viewed through a microscope and the distribution of the number
                of scattered particles may be studied as a function of angle of
                scattering. <br />
                <br />A typical graph of the total number of{" "}
                <InlineMath math="\alpha" />
                -particles scattered at different angles, in a given interval of
                time, is shown in Fig. 12.3. The dots in this figure represent
                the data points and the solid curve is the theoretical
                prediction based on the assumption that the target atom has a
                small, dense, positively charged nucleus. Many of the{" "}
                <InlineMath math="\alpha" />
                -particles pass through the foil. It means that they do not
                suffer any collisions. Only about 0.14% of the incident{" "}
                <InlineMath math="\alpha" />
                -particles scatter by more than 1°; and about 1 in 8000 deflect
                by more than 90°. Rutherford argued that, to deflect the{" "}
                <InlineMath math="\alpha" />
                -particle backwards, it must experience a large repulsive force.
                This force could be provided if the greater part of the mass of
                the atom and its positive charge were concentrated tightly at
                its centre. Then the incoming <InlineMath math="\alpha" />
                -particle could get very close to the positive charge without
                penetrating it, and such a close encounter would result in a
                large deflection. This agreement supported the hypothesis of the
                nuclear atom. This is why Rutherford is credited with the
                discovery of the nucleus. <br />
                <br />
                In Rutherford’s nuclear model of the atom, the entire positive
                charge and most of the mass of the atom are concentrated in the
                nucleus with the electrons some distance away. The electrons
                would be moving in orbits about the nucleus just as the planets
                do around the sun. Rutherford’s experiments suggested the size
                of the nucleus to be about <InlineMath math="10^{–15}" /> m to{" "}
                <InlineMath math="10^{–14}" /> m. From kinetic theory, the size
                of an atom was known to be <InlineMath math="10^{–10}" /> m,
                about 10,000 to 100,000 times larger than the size of the
                nucleus (see Chapter 10, Section 10.6 in Class XI Physics
                textbook). Thus, the electrons would seem to be at a distance
                from the nucleus of about 10,000 to 100,000 times the size of
                the nucleus itself. Thus, most of an atom is empty space. With
                the atom being largely empty space, it is easy to see why most{" "}
                <InlineMath math="\alpha" />
                -particles go right through a thin metal foil. However, when{" "}
                <InlineMath math="\alpha" />
                -particle happens to come near a nucleus, the intense electric
                field there scatters it through a large angle. The atomic
                electrons, being so light, do not appreciably affect the{" "}
                <InlineMath math="\alpha" />
                -particles. <br />
                <br />
                The scattering data shown in Fig. 12.3 can be analysed by
                employing Rutherford’s nuclear model of the atom. As the gold
                foil is very thin, it can be assumed that{" "}
                <InlineMath math="\alpha" />
                -particles will suffer not more than one scattering during their
                passage through it. Therefore, computation of the trajectory of
                an alpha-particle scattered by a single nucleus is enough.
                Alphaparticles are nuclei of helium atoms and, therefore, carry
                two units, 2e, of positive charge and have the mass of the
                helium atom. The charge of the gold nucleus is Ze, where Z is
                the atomic number of the atom; for gold Z = 79. Since the
                nucleus of gold is about 50 times heavier than an{" "}
                <InlineMath math="\alpha" />
                -particle, it is reasonable to assume that it remains stationary
                throughout the scattering process. Under these assumptions, the
                trajectory of an alpha-particle can be computed employing
                Newton’s second law of motion and the Coulomb’s law for
                electrostatic force of repulsion between the alpha-particle and
                the positively charged nucleus. The magnitude of this force is{" "}
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <BlockMath math="F = \frac{1}{4\pi\epsilon_0} \cdot \frac{2e \cdot Ze}{r^2}" />{" "}
                  <span style={{ margin: "1.5rem 0" }}>(12.1)</span>
                </div>
                where r is the distance between the <InlineMath math="\alpha" />
                -particle and the nucleus. The force is directed along the line
                joining the
                <InlineMath math="\alpha" />
                -particle and the nucleus. The magnitude and direction of the
                force on an <InlineMath math="\alpha" />
                -particle continuously changes as it approaches the nucleus and
                recedes away from it.
              </>
            ),
            image: [],
          },
          {
            id: 1,
            title: "Alpha-particle trajectory",
            text: (
              <>
                The trajectory traced by an <InlineMath math="\alpha" />
                -particle depends on the impact parameter, b of collision. The
                impact parameter is the perpendicular distance of the initial
                velocity vector of the <InlineMath math="\alpha" />
                -particle from the centre of the nucleus (Fig. 12.4). A given
                beam of <InlineMath math="\alpha" />
                -particles has a distribution of impact parameters b, so that
                the beam is scattered in various directions with different
                probabilities (Fig. 12.4). (In a beam, all particles have nearly
                same kinetic energy.) It is seen that an{" "}
                <InlineMath math="\alpha" />
                -particle close to the nucleus (small impact parameter) suffers
                large scattering. In case of head-on collision, the impact
                parameter is minimum and the <InlineMath math="\alpha" />
                -particle rebounds back (
                <InlineMath math="\theta \approx \pi" /> ). For a large impact
                parameter, the <InlineMath math="\alpha" />
                -particle goes nearly undeviated and has a small deflection (
                <InlineMath math="\theta \approx 0" />
                ). <br />
                <br />
                The fact that only a small fraction of the number of incident
                particles rebound back indicates that the number of{" "}
                <InlineMath math="\alpha" />
                -particles undergoing head on collision is small. This, in turn,
                implies that the mass and positive charge of the atom is
                concentrated in a small volume. Rutherford scattering therefore,
                is a powerful way to determine an upper limit to the size of the
                nucleus.
              </>
            ),
            image: [],
          },
          {
            id: 2,
            title: "Electron orbits",
            text: (
              <>
                The Rutherford nuclear model of the atom which involves
                classical concepts, pictures the atom as an electrically neutral
                sphere consisting of a very small, massive and positively
                charged nucleus at the centre surrounded by the revolving
                electrons in their respective dynamically stable orbits. The
                electrostatic force of attraction, Fe between the revolving
                electrons and the nucleus provides the requisite centripetal
                force (<InlineMath math="F_c" /> ) to keep them in their orbits.
                Thus, for a dynamically stable orbit in a hydrogen atom{" "}
                <InlineMath math="F_e" /> = <InlineMath math="F_c" />{" "}
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <BlockMath math="\frac{1}{4\pi\epsilon_0} \frac{e^2}{r^2} = \frac{mv^2}{r^2}" />{" "}
                  <span style={{ margin: "1.5rem 0" }}>(12.2)</span>
                </div>
                Thus the relation between the orbit radius and the electron
                velocity is{" "}
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <BlockMath math="r = \frac{e^2}{4\pi\epsilon_0mv^2}" />{" "}
                  <span style={{ margin: "1.5rem 0" }}>(12.3)</span>
                </div>
                The kinetic energy (K ) and electrostatic potential energy (U)
                of the electron in hydrogen atom are
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <BlockMath math="K = \frac{1}{2}{mv^2} = \frac{e^2}{8\pi\epsilon_0r}" />
                  <span style={{ margin: "1.5rem 0" }}>and </span>
                  <BlockMath math="U = -\frac{e^2}{4\pi\epsilon_0r}" />
                </div>
                (The negative sign in U signifies that the electrostatic force
                is in the –r direction.) Thus the total energy E of the electron
                in a hydrogen atom is
                <BlockMath math="E = K + U = \frac{e^2}{8\pi\epsilon_0r} - \frac{e^2}{4\pi\epsilon_0r}" />
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <BlockMath math="= -\frac{e^2}{8\pi\epsilon_0r}" />{" "}
                  <span style={{ margin: "1.5rem 0" }}>(12.4)</span>
                </div>
                The total energy of the electron is negative. This implies the
                fact that the electron is bound to the nucleus. If E were
                positive, an electron will not follow a closed orbit around the
                nucleus.
              </>
            ),
            image: [],
          },
        ],
        isLab: false,
        lab: "",
      },
      {
        id: 3,
        name: "Atomic Spectra",
        slug: "atomic-spectra",
        subtopic: [
          {
            id: 1,
            title: "",
            text: (
              <>
                As mentioned in Section 12.1, each element has a characteristic
                spectrum of radiation, which it emits. When an atomic gas or
                vapour is excited at low pressure, usually by passing an
                electric current through it, the emitted radiation has a
                spectrum which contains certain specific wavelengths only. A
                spectrum of this kind is termed as emission line spectrum and it
                consists of bright lines on a dark background. The spectrum
                emitted by atomic hydrogen is shown in Fig. 12.5. Study of
                emission line spectra of a material can therefore serve as a
                type of “fingerprint” for identification of the gas. When white
                light passes through a gas and we analyse the transmitted light
                using a spectrometer we find some dark lines in the spectrum.
                These dark lines correspond precisely to those wavelengths which
                were found in the emission line spectrum of the gas. This is
                called the absorption spectrum of the material of the gas.
              </>
            ),
            image: [],
          },
        ],
        isLab: false,
        lab: "",
      },
      {
        id: 4,
        name: "Bohr Model of the Hydrogen Atom",
        slug: "bohr-model-of-the-hydrogen-atom",
        subtopic: [
          {
            id: 0,
            title: "",
            text: (
              <>
                The model of the atom proposed by Rutherford assumes that the
                atom, consisting of a central nucleus and revolving electron is
                stable much like sun-planet system which the model imitates.
                However, there are some fundamental differences between the two
                situations. While the planetary system is held by gravitational
                force, the nucleus-electron system being charged objects,
                interact by Coulomb’s Law of force. We know that an object which
                moves in a circle is being constantly accelerated – the
                acceleration being centripetal in nature. According to classical
                electromagnetic theory, an accelerating charged particle emits
                radiation in the form of electromagnetic waves. The energy of an
                accelerating electron should therefore, continuously decrease.
                The electron would spiral inward and eventually fall into the
                nucleus (Fig. 12.6). Thus, such an atom can not be stable.
                Further, according to the classical electromagnetic theory, the
                frequency of the electromagnetic waves emitted by the revolving
                electrons is equal to the frequency of revolution. As the
                electrons spiral inwards, their angular velocities and hence
                their frequencies would change continuously, and so will the
                frequency of the light emitted. Thus, they would emit a
                continuous spectrum, in contradiction to the line spectrum
                actually observed. Clearly Rutherford model tells only a part of
                the story implying that the classical ideas are not sufficient
                to explain the atomic structure. <br />
                <br />
                It was Niels Bohr (1885 – 1962) who made certain modifications
                in this model by adding the ideas of the newly developing
                quantum hypothesis. Niels Bohr studied in Rutherford’s
                laboratory for several months in 1912 and he was convinced about
                the validity of Rutherford nuclear model. Faced with the dilemma
                as discussed above, Bohr, in 1913, concluded that in spite of
                the success of electromagnetic theory in explaining large-scale
                phenomena, it could not be applied to the processes at the
                atomic scale. It became clear that a fairly radical departure
                from the established principles of classical mechanics and
                electromagnetism would be needed to understand the structure of
                atoms and the relation of atomic structure to atomic spectra.
                Bohr combined classical and early quantum concepts and gave his
                theory in the form of three postulates. These are :
                <br />
                <br /> (i) Bohr’s first postulate was that{" "}
                <i>
                  an electron in an atom could revolve in certain stable orbits
                  without the emission of radiant energy
                </i>
                , contrary to the predictions of electromagnetic theory.
                According to this postulate, each atom has certain definite
                stable states in which it can exist, and each possible state has
                definite total energy. These are called the stationary states of
                the atom.
                <br />
                <br /> (ii) Bohr’s second postulate defines these stable orbits.
                This postulate states that{" "}
                <i>
                  the electron revolves around the nucleus only in those orbits
                  for which the angular momentum is some integral multiple of
                </i>{" "}
                h/2
                <InlineMath math="\pi" /> where h is the Planck’s constant (={" "}
                <InlineMath math="6.6 \times 10^{-34}" /> J s). Thus the angular
                momentum (L) of the orbiting electron is quantised. That is
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <BlockMath math="L = \frac{nh}{2\pi}" />
                  <span style={{ margin: "1.5rem 0" }}>(12.5)</span>
                </div>
                <br />
                <br />
                (iii) Bohr’s third postulate incorporated into atomic theory the
                early quantum concepts that had been developed by Planck and
                Einstein. It states that{" "}
                <i>
                  an electron might make a transition from one of its specified
                  non-radiating orbits to another of lower energy. When it does
                  so, a photon is emitted having energy equal to the energy
                  difference between the initial and final states. The frequency
                  of the emitted photon is then given by
                </i>{" "}
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <BlockMath math="h\nu = E_i - E_f" />
                  <span style={{ margin: "1.5rem 0" }}>(12.6)</span>
                </div>
                where <InlineMath math="E_i" /> and <InlineMath math="E_f" />{" "}
                are the energies of the initial and final states and{" "}
                <InlineMath math="E_i > E_f" />. For a hydrogen atom, Eq. (12.4)
                gives the expression to determine the energies of different
                energy states. But then this equation requires the radius r of
                the electron orbit. To calculate r, Bohr’s second postulate
                about the angular momentum of the electron–the quantisation
                condition – is used. The radius of nth possible orbit thus found
                is
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <BlockMath math="r_n = \frac{n^2}{m} \frac{h^2}{2\pi} \frac{4\pi\epsilon_0}{e^2}" />
                  <span style={{ margin: "1.5rem 0" }}>(12.7)</span>
                </div>
                The total energy of the electron in the stationary states of the
                hydrogen atom can be obtained by substituting the value of
                orbital radius in Eq. (12.4) as
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <BlockMath math="E_n = -\frac{e^2}{8\pi\epsilon_0} \frac{m}{n^2} \frac{2\pi^2}{h} \frac{e^2}{4\pi\epsilon_0}" />
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <span style={{ margin: "1.5rem 0" }}>or</span>
                  <BlockMath math="E_n = -\frac{me^4}{8n^2\epsilon_0^2h^2}" />
                  <span style={{ margin: "1.5rem 0" }}>(12.8)</span>
                </div>
                Substituting values, Eq. (12.8) yields
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <BlockMath math="E_n = -\frac{2.18 \times 10^{-18}}{n^2}J" />
                  <span style={{ margin: "1.5rem 0" }}>(12.9)</span>
                </div>
                Atomic energies are often expressed in electron volts (eV)
                rather than joules. Since 1 eV ={" "}
                <InlineMath math="1.6 \times 10^{-19}" /> J, Eq. (12.9) can be
                rewritten as
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <BlockMath math="E_n = -\frac{13.6}{n^2}eV" />
                  <span style={{ margin: "1.5rem 0" }}>(12.10)</span>
                </div>
                The negative sign of the total energy of an electron moving in
                an orbit means that the electron is bound with the nucleus.
                Energy will thus be required to remove the electron from the
                hydrogen atom to a distance infinitely far away from its nucleus
                (or proton in hydrogen atom).
              </>
            ),
            image: [],
          },
          {
            id: 1,
            title: "Energy levels",
            text: (
              <>
                The energy of an atom is the least (largest negative value) when
                its electron is revolving in an orbit closest to the nucleus
                i.e., the one for which n = 1. For n = 2, 3, ... the absolute
                value of the energy E is smaller, hence the energy is
                progressively larger in the outer orbits. The lowest state of
                the atom, called the ground state, is that of the lowest energy,
                with the electron revolving in the orbit of smallest radius, the
                Bohr radius, a0 . The energy of this state (n = 1), E1 is –13.6
                eV. Therefore, the minimum energy required to free the electron
                from the ground state of the hydrogen atom is 13.6 eV. It is
                called the ionisation energy of the hydrogen atom. This
                prediction of the Bohr’s model is in excellent agreement with
                the experimental value of ionisation energy. <br />
                <br />
                At room temperature, most of the hydrogen atoms are in ground
                state. When a hydrogen atom receives energy by processes such as
                electron collisions, the atom may acquire sufficient energy to
                raise the electron to higher energy states. The atom is then
                said to be in an excited state. From Eq. (12.10), for n = 2; the
                energy E2 is –3.40 eV. It means that the energy required to
                excite an electron in hydrogen atom to its first excited state,
                is an energy equal to E2 – E1 = –3.40 eV – (–13.6) eV = 10.2 eV.
                Similarly, E3 = –1.51 eV and E3 – E1 = 12.09 eV, or to excite
                the hydrogen atom from its ground state (n = 1) to second
                excited state (n = 3), 12.09 eV energy is required, and so on.
                From these excited states the electron can then fall back to a
                state of lower energy, emitting a photon in the process. Thus,
                as the excitation of hydrogen atom increases (that is as n
                increases) the value of minimum energy required to free the
                electron from the excited atom decreases. <br />
                <br />
                The energy level diagram* for the stationary states of a
                hydrogen atom, computed from Eq. (12.10), is given in Fig. 12.7.
                The principal quantum number n labels the stationary states in
                the ascending order of energy. In this diagram, the highest
                energy state corresponds to n = <InlineMath math="\infty" /> in
                Eq, (12.10) and has an energy of 0 eV. This is the energy of the
                atom when the electron is completely removed (r =
                <InlineMath math="\infty" />) from the nucleus and is at rest.
                Observe how the energies of the excited states come closer and
                closer together as n increases.
              </>
            ),
            image: [],
          },
        ],
        isLab: false,
        lab: "",
      },
      {
        id: 5,
        name: "The Line Spectra of the Hydrogen Atom",
        slug: "the-line-spectra-of-the-hydrogen-atom",
        subtopic: [
          {
            id: 0,
            title: "",
            text: (
              <>
                According to the third postulate of Bohr’s model, when an atom
                makes a transition from the higher energy state with quantum
                number <InlineMath math="n_i" /> to the lower energy state with
                quantum number <InlineMath math="n_f(n_f < n_i)" /> , the
                difference of energy is carried away by a photon of frequency{" "}
                <InlineMath math="\nu_if" /> such that
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <BlockMath math="h\nu_if = E_ni - E_nf" />
                  <span style={{ margin: "1.5rem 0" }}>(12.11)</span>
                </div>
                <InlineMath math="n_i" /> and <InlineMath math="n_i" /> are
                integers, this immediately shows that in transitions between
                different atomic levels, light is radiated in various discrete
                frequencies. <br />
                <br />
                The various lines in the atomic spectra are produced when
                electrons jump from higher energy state to a lower energy state
                and photons are emitted. These spectral lines are called
                emission lines. But when an atom absorbs a photon that has
                precisely the same energy needed by the electron in a lower
                energy state to make transitions to a higher energy state, the
                process is called absorption. Thus if photons with a continuous
                range of frequencies pass through a rarefied gas and then are
                analysed with a spectrometer, a series of dark spectral
                absorption lines appear in the continuous spectrum. The dark
                lines indicate the frequencies that have been absorbed by the
                atoms of the gas. <br />
                <br />
                The explanation of the hydrogen atom spectrum provided by Bohr’s
                model was a brilliant achievement, which greatly stimulated
                progress towards the modern quantum theory. In 1922, Bohr was
                awarded Nobel Prize in Physics.
              </>
            ),
            image: [],
          },
        ],
        isLab: false,
        lab: "",
      },
      {
        id: 6,
        name: "DE Broglie's Explanation of Bohr's Second Postulate of Quantisation",
        slug: "de-broglies-explanation-of-bohrs-second-postulate-of-quantisation",
        subtopic: [
          {
            id: 0,
            title: "",
            text: (
              <>
                Of all the postulates, Bohr made in his model of the atom,
                perhaps the most puzzling is his second postulate. It states
                that the angular momentum of the electron orbiting around the
                nucleus is quantised (that is,{" "}
                <InlineMath math="L_n = \frac{nh}{2\pi}" /> ; n = 1, 2, 3 …).
                Why should the angular momentum have only those values that are
                integral multiples of <InlineMath math="\frac{h}{2\pi}" /> ? The
                French physicist Louis de Broglie explained this puzzle in 1923,
                ten years after Bohr proposed his model. <br />
                <br />
                We studied, in Chapter 11, about the de Broglie’s hypothesis
                that material particles, such as electrons, also have a wave
                nature. C. J. Davisson and L. H. Germer later experimentally
                verified the wave nature of electrons in 1927. Louis de Broglie
                argued that the electron in its circular orbit, as proposed by
                Bohr, must be seen as a particle wave. In analogy to waves
                travelling on a string, particle waves too can lead to standing
                waves under resonant conditions. From Chapter 14 of Class XI
                Physics textbook, we know that when a string is plucked, a vast
                number of wavelengths are excited. However only those
                wavelengths survive which have nodes at the ends and form the
                standing wave in the string. It means that in a string, standing
                waves are formed when the total distance travelled by a wave
                down the string and back is one wavelength, two wavelengths, or
                any integral number of wavelengths. Waves with other wavelengths
                interfere with themselves upon reflection and their amplitudes
                quickly drop to zero. For an electron moving in{" "}
                <InlineMath math="n^{th}" /> circular orbit of radius r n , the
                total distance is the circumference of the orbit,{" "}
                <InlineMath math="2\pi r_n" /> . Thus
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <BlockMath math="2\pi r_n = n\lambda" />
                  <span style={{ margin: "1.5rem 0" }}>n = 1, 2, 3...</span>
                  <span style={{ margin: "1.5rem 0" }}>(12.12)</span>
                </div>
                Figure 12.8 illustrates a standing particle wave on a circular
                orbit for n = 4, i.e., <InlineMath math="2\pi r_n = n\lambda" />{" "}
                , where <InlineMath math="\lambda" /> is the de Broglie
                wavelength of the electron moving in{" "}
                <InlineMath math="n^{th}" /> orbit. From Chapter 11, we have{" "}
                <InlineMath math="\lambda = h/p" /> , where p is the magnitude
                of the electron’s momentum. If the speed of the electron is much
                less than the speed of light, the momentum is{" "}
                <InlineMath math="mv_n" /> . Thus,{" "}
                <InlineMath math="\lambda = h/mv_n" /> . From Eq. (12.12), we
                have
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <BlockMath math="2\pi r_n = \frac{nh}{mv_n}" />
                  <span style={{ margin: "1.5rem 0" }}>or</span>
                  <BlockMath math="mv_nr_n = \frac{nh}{2\pi}" />
                </div>
                This is the quantum condition proposed by Bohr for the angular
                momentum of the electron [Eq. (12.15)]. In Section 12.5, we saw
                that this equation is the basis of explaining the discrete
                orbits and energy levels in hydrogen atom. Thus de Broglie
                hypothesis provided an explanation for Bohr’s second postulate
                for the quantisation of angular momentum of the orbiting
                electron. The quantised electron orbits and energy states are
                due to the wave nature of the electron and only resonant
                standing waves can persist. Bohr’s model, involving classical
                trajectory picture (planet-like electron orbiting the nucleus),
                correctly predicts the gross features of the hydrogenic atoms*,
                in particular, the frequencies of the radiation emitted or
                selectively absorbed. This model however has many limitations.
                Some are: <br />
                <br />
                (i) The Bohr model is applicable to hydrogenic atoms. It cannot
                be extended even to mere two electron atoms such as helium. The
                analysis of atoms with more than one electron was attempted on
                the lines of Bohr’s model for hydrogenic atoms but did not meet
                with any success. Difficulty lies in the fact that each electron
                interacts not only with the positively charged nucleus but also
                with all other electrons. The formulation of Bohr model involves
                electrical force between positively charged nucleus and
                electron. It does not include the electrical forces between
                electrons which necessarily appear in multi-electron atoms.{" "}
                <br />
                <br />
                (ii) While the Bohr’s model correctly predicts the frequencies
                of the light emitted by hydrogenic atoms, the model is unable to
                explain the relative intensities of the frequencies in the
                spectrum. In emission spectrum of hydrogen, some of the visible
                frequencies have weak intensity, others strong. Why?
                Experimental observations depict that some transitions are more
                favoured than others. Bohr’s model is unable to account for the
                intensity variations. <br />
                Bohr’s model presents an elegant picture of an atom and cannot
                be generalised to complex atoms. For complex atoms we have to
                use a new and radical theory based on Quantum Mechanics, which
                provides a more complete picture of the atomic structure.
              </>
            ),
            image: [],
          },
        ],
        isLab: false,
        lab: "",
      },
    ],
  },
  {
    id: 13,
    title: "Nuclie",
    src: ReactImage,
    slug: "nuclie",
    name: "Nuclie",
    sections: NuclieData
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
