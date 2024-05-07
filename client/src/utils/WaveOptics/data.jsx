import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";
import React from "react";
import gifImage from "../../assets/WaveOptics/ripples.webp";
import PlanetoSlantWavefront from "../../assets/WaveOptics/PlanetoSlantWavefront.mp4";
import sphericalWavefront from "../../assets/WaveOptics/sphericalWavefront.png";
import planeWavefront from "../../assets/WaveOptics/planeWavefront.png";
import Refraction_of_a_plane_wave from "../../assets/WaveOptics/Refraction_of_a_plane_wave.png";
import SnellsLawDerivation from "../../assets/WaveOptics/SnellsLawDerivation.mp4";
// import "./Style.css";
import ReactPlayer from "react-player";
import YoungExperiment from "../../assets/WaveOptics/YoungsExperiment.mp4";
import PathandPhaseDifference from "../../assets/WaveOptics/PathandPhaseDifference.mp4";
import young from "../../assets/WaveOptics/young.png";

const WaveOpticsData = [
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
            light, which explained reflection and refraction by predicting that
            light bends towards the normal when it enters a denser medium.
            Newton further developed this model in his book "OPTICKS," making it
            widely known. However, in 1678, Huygens introduced the wave theory
            of light, which contradicted the corpuscular model by suggesting
            that light bends towards the normal when entering a denser medium,
            indicating a decrease in speed. This was later confirmed by
            experiments showing light travels slower in denser mediums. Despite
            resistance due to Newton's influence and the belief that waves
            require a medium, Young's interference experiment in 1801 provided
            strong evidence for the wave nature of light. This led to the
            establishment of the wave theory, supported by experiments on
            interference and diffraction. Maxwell's electromagnetic theory
            further reinforced this by predicting electromagnetic waves,
            explaining how light propagates through vacuum. This theory suggests
            that light waves are associated with changing electric and magnetic
            fields. In this chapter, we will discuss Huygens' principle,
            reflection, refraction, interference, diffraction, and polarization,
            which collectively form the foundation of understanding light as a
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
        title: "Huygens Principle ",
        text: (
          <>
            <p>
              Imagine dropping a pebble into a calm pond. When it hits the
              water, ripples spread out from the point of impact. These ripples
              form circular patterns on the surface of the water. If you took a
              picture of the water's surface at any moment, you'd see these
              circular patterns where the ripples are strongest. These circular
              patterns are called wavefronts. A wavefront is like a snapshot of
              the wave at a particular moment in time. The speed at which these
              wavefronts move outward from the point of impact is called the
              wave's speed. The energy of the wave travels perpendicular to the
              wavefront.
            </p>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
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
              If we have a point source emitting waves in all directions, the
              wavefronts will be spherical. Think of it like blowing up a
              balloon inside the pond – the ripples would spread out evenly in
              all directions. But when you're far away from the source, only a
              small part of the spherical wavefront looks flat, like a plane.
              This is called a plane wave.
            </p>
            <p>
              Now, Huygens' principle helps us understand how these wavefronts
              change over time. Imagine the spherical wavefront at the beginning
              (t = 0). According to Huygens' principle, each point on the
              wavefront acts as a mini source of new waves. These new waves
              spread out in all directions at the speed of the wave. We call
              these new waves secondary wavelets. If we draw a line that touches
              all these secondary wavelets, we can figure out where the
              wavefront will be at a later time (t = τ). We do this by drawing
              spheres around each point on the original wavefront, with a radius
              determined by the wave's speed and the time elapsed. Then, we draw
              a line that touches all these spheres. This line gives us the new
              position of the wavefront at t = τ.
            </p>
            <p>
              But there's a problem: Huygens' principle doesn't account for
              waves that move backwards. Huygens suggested that the waves moving
              backwards have zero strength, but this assumption isn't entirely
              satisfactory. However, for now, we'll stick with this simpler
              explanation.
            </p>
            <p>
              We can also use Huygens' principle to understand how plane waves
              travel through a medium, but the concept is similar: each point on
              the wavefront acts as a mini source of new waves, and we can use
              these new waves to figure out how the wavefront changes over time.
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
              Let's break down Huygens' principle and the derivation of the laws
              of refraction into simpler terms:
            </p>
            <p>
              We will now use Huygens principle to derive the laws of
              refraction. Let PP′ represent the surface separating medium 1 and
              medium 2, as shown in figure. Let <InlineMath math="\nu_1 " /> and{" "}
              <InlineMath math="\nu_2" /> represent the speed of light in medium
              1 and medium 2, respectively. We assume a plane wavefront AB
              propagating in the direction A′A incident on the interface at an
              angle i as shown in the figure. Let τ be the time taken by the
              wavefront to travel the distance BC. Thus, BC ={" "}
              <InlineMath math="\nu_1 \tau" />
            </p>
            <img src={Refraction_of_a_plane_wave} alt="Your GIF" />
            <p>
              In order to determine the shape of the refracted wavefront, we
              draw a sphere of radius <InlineMath math="\nu_2" />
              τ from the point A in the second medium (the speed of the wave in
              the second medium is <InlineMath math="\nu_2" />
              ). Let CE represent a tangent plane drawn from the point C on to
              the sphere. Then, AE = <InlineMath math="\nu_1 \tau" /> and CE
              would represent the refracted wavefront. If we now consider the
              triangles ABC and AEC, we readily obtain
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <BlockMath math="sin(i)= \frac{BC}{AC} = \frac{\nu_1 \tau}{AC}   " />
                <span style={{ margin: "1.5rem 0" }}>Eq.(10.1)</span>
              </div>
              and
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <BlockMath math="sin(r)= \frac{AE}{AC} = \frac{\nu_2 \tau}{AC}   " />
                <span style={{ margin: "1.5rem 0" }}>Eq.(10.2)</span>
              </div>
              angles of incidence and refraction, respectively
            </p>
            <p>
              Thus we obtain
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <BlockMath math=" \frac{sin(i)}{sin(r)} = \frac{\nu_1 }{\nu_2}   " />
                <span style={{ margin: "1.5rem 0" }}>Eq.(10.3)</span>
              </div>
              From the above equation, we get the important result that if r{" "}
              {"<"} i (i.e., if the ray bends toward the normal), the speed of
              the light wave in the second medium (
              <InlineMath math="\nu_2" />) will be less then the speed of the
              light wave in the first medium (
              <InlineMath math="\nu_1" />
              ). This prediction is opposite to the prediction from the
              corpuscular model of light and as later experiments showed, the
              prediction of the wave theory is correct. Now, if c represents the
              speed of light in vacuum, then,
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <BlockMath math="n_1= \frac{c}{\nu_1}" />
                <span style={{ margin: "1.5rem 0" }}>Eq.(10.4)</span>
              </div>
              and
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <BlockMath math="n_2= \frac{c}{\nu_2}" />
                <span style={{ margin: "1.5rem 0" }}>Eq.(10.5)</span>
              </div>
              are known as the refractive indices of medium 1 and medium 2,
              respectively. In terms of the refractive indices, Eq. (10.3) can
              be written as
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
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
              wavelengths of light in medium 1 and medium 2, respectively and if
              the distance BC is equal to{" "}
              <InlineMath math="\lambda_1"></InlineMath> then the distance AE
              will be equal to <InlineMath math="\lambda_2"></InlineMath>{" "}
              (because if the crest from B has reached C in time{" "}
              <InlineMath math="\tau"></InlineMath>, then the crest from A
              should have also reached E in time{" "}
              <InlineMath math="\tau"></InlineMath> ); thus
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <BlockMath math=" \frac{\nu_1}{λ_1} =   \frac{\nu_2}{λ_2} " />
                <span style={{ margin: "1.5rem 0" }}>Eq.(10.7)</span>
              </div>
            </p>

            <p>
              In simple terms, Huygens' principle helps us understand how light
              bends when it moves from one medium to another. By drawing
              imaginary spheres around each point on the original wavefront, we
              can figure out where the new wavefront will be. This helps us
              derive the laws of refraction, which tell us how light bends when
              it travels through different materials.
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
                mirror at an angle. We call this angle the angle of incidence.
                The wavefront bounces off the mirror, forming a new wavefront.
                If we draw a sphere around each point on the original wavefront
                and connect the points where these spheres touch the mirror, we
                get the new wavefront. The law of reflection tells us that the
                angle of incidence is equal to the angle of reflection. This
                means that the incoming and outgoing waves have the same angle.
              </li>
              <li>
                <strong>Refraction</strong>: When a wavefront passes through a
                material, like glass or water, it can bend. We call this bending
                refraction. If we have a wavefront passing through a prism, for
                example, the bottom part of the wavefront travels through more
                material, so it gets delayed. This delay causes the wavefront to
                tilt when it emerges from the prism. Similarly, if a wavefront
                passes through a lens, the central part of the wavefront travels
                through more material, causing it to be delayed the most. This
                creates a depression in the emerging wavefront, forming a
                spherical shape that converges at a point called the focus.
              </li>
              <li>
                <strong>Understanding Images</strong>: When light passes through
                lenses, it can form images. The total time taken for light to
                travel from an object point to its corresponding point in the
                image is the same, regardless of the path it takes. Even though
                light passing through the center of a lens travels a shorter
                distance, it takes longer due to the slower speed in the lens.
                This ensures that all rays converge to form a sharp image.
              </li>
            </ul>
            <p>
              In simple terms, reflection occurs when a wavefront bounces off a
              surface, and refraction occurs when it passes through a material
              and bends. These principles help us understand how light behaves
              when it interacts with mirrors, lenses, prisms, and other optical
              devices.
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
              motion of the source or observer. If the source moves away from
              the observer, the later wavefronts have to travel a greater
              distance to reach the observer, taking a longer time. This means
              that the time between the arrival of successive wavefronts is
              longer for the observer compared to the source.
            </p>
            <p>
              This change in frequency due to the motion of the source or
              observer is known as the Doppler effect. For example, when a
              source moves away from the observer, the frequency measured by the
              source appears smaller. This results in a shift towards longer
              wavelengths, which astronomers refer to as redshift. Conversely,
              when a source moves towards the observer, there is an apparent
              decrease in wavelength, known as blueshift.
            </p>
            <p>
              For small velocities compared to the speed of light, we can use
              formulas similar to those used for sound waves to calculate the
              Doppler shift. The fractional change in frequency
              <BlockMath math="\frac{\Delta v}{v} = - \frac{\nu_{radial}}{c}" />{" "}
              where <InlineMath math="\nu_{radial}"></InlineMath> is the
              component of the source velocity along the line joining the
              observer to the source, relative to the observer. It's considered
              positive when the source moves away from the observer.
            </p>
            <p>
              However, when dealing with speeds close to that of light, we need
              to use Einstein's special theory of relativity for a more accurate
              calculation of the Doppler effect. This Doppler effect for light
              is crucial in astronomy, as it helps measure the radial velocities
              of distant galaxies.
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
                <strong>Superposition Principle</strong>: Just like we discussed
                in Chapter 15, the interference phenomenon relies on the
                superposition principle. This principle states that at any point
                in a medium, the resulting displacement caused by multiple waves
                is the sum of the displacements caused by each individual wave.
              </li>
              <li>
                <strong>Coherent Sources</strong>: Consider two needles moving
                up and down in water, creating waves. If these needles move in
                sync, meaning their movements are perfectly aligned, the waves
                they produce are said to be coherent. At a specific point in the
                water, if the distances from each needle to that point are
                equal, the waves from both needles will arrive at that point in
                phase, meaning their peaks and troughs align perfectly.
              </li>
              <li>
                <strong>Constructive Interference</strong>: When waves arrive at
                a point in phase, they interfere constructively, meaning their
                amplitudes add up. This results in a stronger wave at that
                point. Mathematically, if the path difference between the two
                waves is a whole number multiple of the wavelength, we observe
                constructive interference.
              </li>
              <li>
                <strong>Destructive Interference</strong>: Conversely, when
                waves arrive at a point out of phase, they interfere
                destructively, canceling each other out. This results in a
                weaker or even zero amplitude at that point. If the path
                difference between the waves is a half-integer multiple of the
                wavelength, we observe destructive interference.
              </li>
              <li>
                <strong>Stable Interference Pattern</strong>: If the two sources
                maintain a constant phase difference over time, we see a stable
                interference pattern. This means the positions of maximum and
                minimum intensities remain fixed over time.
              </li>
              <li>
                <strong>Incoherent Sources</strong>: If the phase difference
                between the sources changes rapidly with time, the sources are
                said to be incoherent. In this case, the interference pattern
                also changes rapidly over time. The resulting intensity at any
                point is simply the sum of the intensities of the individual
                waves.
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
              fringes observed in double-slit experiments and the colors seen in
              thin film interference
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
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <div>
                <p>
                  Interference with light waves is a fascinating phenomenon that
                  demonstrates the wave nature of light. It occurs when two or
                  more coherent light waves superimpose on each other, resulting
                  in a pattern of alternating bright and dark regions known as
                  interference fringes. These fringes are a consequence of
                  constructive and destructive interference, where waves either
                  reinforce or cancel each other out.
                </p>
                <p>
                  Coherence is a crucial concept in interference. Coherent
                  sources emit waves with a fixed phase relationship, meaning
                  that their wavefronts maintain a consistent alignment over
                  time. In Thomas Young's famous double-slit experiment,
                  coherence was achieved by using a single source of light to
                  illuminate two closely spaced pinholes. This ensured that the
                  waves emanating from the two pinholes were in phase with each
                  other, allowing interference to occur.
                </p>
                <p>
                  When coherent light waves from the two pinholes reach a
                  screen, they interfere with each other. At certain points on
                  the screen, the waves arrive in phase and reinforce each
                  other, producing bright fringes. At other points, the waves
                  arrive out of phase and cancel each other, resulting in dark
                  fringes. The positions of these fringes are determined by the
                  path difference, which is the discrepancy in the distances
                  traveled by the waves from the two pinholes to a specific
                  point on the screen.
                </p>
              </div>
              <img src={young} style={{ width: "500px", height: "350px" }} />
            </div>
            <p>
              Thus spherical waves emanating from S1 and S2 will produce
              interference fringes on the screen GG′, as shown in Fig. The
              positions of maximum and minimum intensities can be calculated by
              using the analysis given in Section where we had shown that for
              anarbitrary point P on the line GG′ Fig to correspond to a
              maximum, we must have
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <BlockMath math="S_2P-S_1P;  n=0,1,2..." />

                <span style={{ margin: "1.5rem 0" }}>10.15</span>
              </div>
              Now,
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <BlockMath math="(S_2P)^2-(S_1P)^2=D^2 +x+\frac{d^2}{2}-D^2 +x-\frac{d^2}{2}=2xd" />
              </div>
              where <InlineMath math="S_1S_2" />
              =d and OP=x. Thus
              <span style={{ margin: "1.5rem 0" }}>10.15</span>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <BlockMath math="S_1P - S_2P = \frac{2xd}{S_1P + S_2P}" />
                <span style={{ margin: "1.5rem 0" }}>10.16</span>
              </div>
              If x, d{"<<"}D then negligible error will be introduced if{" "}
              <InlineMath math="S_1P+S_2P" />
              (in the denominator) is replaced by 2D. For example, for d = 0.1
              cm, D = 100 cm, OP = 1 cm (which correspond to typical values for
              an interference experiment using light waves), we have
              <BlockMath math="S_1P + S_2P = [100^2 + 1.05^2]^{1/2} + [100^2 + .95^2]^{1/2}\approx 200.01 cm" />
              Thus if we replace S2P + S1P by 2 D, the error involved is about
              0.005%. Hence we will have constructive interference resulting in
              a bright region when
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <BlockMath math="x = x_n=\frac{n\lambda D}{d} \quad n=0,\pm1,\pm2,\pm3...." />
                <span style={{ margin: "1.5rem 0" }}>10.18</span>
              </div>
              On the other hand, we will have a dark region near
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <BlockMath math="x = x_n=(n+\frac{1}{2})\frac{\lambda D}{d} \quad n=0,\pm1,\pm2,\pm3...." />
                <span style={{ margin: "1.5rem 0" }}>10.19</span>
              </div>
              Thus dark and bright bands appear on the screen, Such bands are
              called fringes. Equations (10.18) and (10.19) show that dark and
              bright fringes are equally spaced and the distance between two
              consecutive bright and dark fringes is given by
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
                bright or dark fringes, known as the fringe width, depends on
                the wavelength of light and the experimental setup. Wider
                separations between the pinholes or longer wavelengths result in
                broader fringes, while narrower separations or shorter
                wavelengths produce narrower fringes.
              </li>
              <li>
                <strong>Central Maximum</strong>: The central fringe, located at
                the midpoint between the two pinholes on the screen, is usually
                the brightest. This occurs when the path difference is zero,
                leading to constructive interference.
              </li>
              <li>
                <strong>Angular Distribution</strong>: The interference pattern
                may exhibit angular variation if the source is not positioned
                symmetrically between the pinholes. In such cases, the central
                maximum may be shifted, and the fringes may no longer be
                straight lines.
              </li>
              <li>
                <strong>Effect of Light Source</strong>: When white light is
                used instead of monochromatic light, interference patterns due
                to different colors overlap. This results in a central white
                fringe, with colors appearing on either side based on their
                wavelengths.
              </li>
            </ul>
            <ReactPlayer
              url={YoungExperiment}
              controls
              style={{ margin: "auto" }}
            />
            <p>
              Interference phenomena have profound implications for optics,
              astronomy, and technology. They provide valuable insights into the
              wave nature of light and are utilized in various applications,
              including interferometry, spectroscopy, and optical coatings. By
              studying interference patterns, scientists can extract information
              about the properties of light and the objects that interact with
              it, leading to advancements in diverse fields.
            </p>
          </>
        ),
        image: [],
      },
    ],
    isLab: false,
    lab: "",
  },
  // {
  //   id: 6,
  //   name: "Diffraction",
  //   slug: "diffraction",
  // },
  // {
  //   id: 7,
  //   name: "Polarisation",
  //   slug: "polarisation",
  // },
];

export default WaveOpticsData;
