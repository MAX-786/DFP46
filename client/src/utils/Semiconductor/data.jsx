import intrinsic_semiconductor from "../../assets/Semiconductor/intrinsic_semiconductor.png";
import extrinsic_semiconductor from "../../assets/Semiconductor/extrinsic_semiconductor.png";

import {
  metal, insulator, semiconductor
} from "/src/assets/Semiconductor/index.js";
import {
  or_gate_symbol,
  and_gate_symbol,
  not_gate_symbol,
  nand_gate_symbol,
  nor_gate_symbol,
  or_gate_table,
  and_gate_table,
  not_gate_table,
  nand_gate_table,
  nor_gate_table,
} from "/src/assets/Semiconductor/index.js";



import Lab1 from "./labs/Lab1";
import TypeOfSemiconductor from "./labs/TypeOfSemiconductor";
import PNJunction from "./labs/PNJunction";
import Lab10 from "./labs/LogicGate";

const SemiconductorData = [
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
            The foundation of all electronic circuits lies in devices that can
            manage the flow of electrons. Before the advent of the transistor in
            1948, these devices were predominantly vacuum tubes, also known as
            valves. These included the vacuum diode, triode, tetrode, and
            pentode, each with a varying number of electrodes. However, these
            vacuum tubes had their limitations - they were large, consumed a lot
            of power, operated at high voltages, and had a limited lifespan and
            reliability. The era of modern solid-state semiconductor electronics
            was ushered in the 1930s. Semiconductors brought a revolution in the
            field of electronics as they could control the quantity and
            direction of charge carriers. Unlike vacuum tubes, semiconductors
            are compact, consume less power, operate at low voltages, and have a
            longer life and higher reliability. The shift from vacuum tubes to
            semiconductors is evident in the evolution of display technology.
            Cathode Ray Tubes (CRTs), which are based on the principle of vacuum
            tubes and were once commonly used in televisions and computer
            monitors, are now being replaced by Liquid Crystal Display (LCD)
            monitors that are backed by solid-state electronics. Before the full
            potential of semiconductor devices was formally recognized, a
            naturally occurring galena crystal (Lead sulphide, PbS) with a metal
            point contact was used as a detector of radio waves.
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
    slug: "classification-of-solids",
    name: "Classification of solids",
    subtopic: [
      {
        id: 0,
        title: "Based on Conductivity: ",
        text: (
          <>
            Solids can be classified into three categories based on their
            electrical conductivity (σ) or resistivity (ρ = 1/σ).
            <p>
              <strong>Metals</strong>: Metals have low resistivity or high
              conductivity, with resistivity values ranging from approximately
              10
              <sup>–2</sup> to 10<sup>–8</sup> Ω m and conductivity values from
              10
              <sup>2</sup> to 10<sup>8</sup> S m<sup>–1</sup>.
            </p>
            <p>
              <strong>Semiconductors</strong>: Semiconductors have resistivity
              or conductivity values that fall between those of metals and
              insulators. Their resistivity ranges from about 10
              <sup>–5</sup> to 10<sup>6</sup> Ω m, and their conductivity ranges
              from 10<sup>5</sup> to 10<sup>–6</sup> S m<sup>–1</sup>.
            </p>
            <p>
              <strong>Insulators:</strong> Insulators have high resistivity or
              low conductivity, with resistivity values from 10
              <sup>11</sup> to 10
              <sup>19</sup> Ω m and conductivity values from 10<sup>–11</sup> to
              10<sup>–19</sup> S m<sup>–1</sup>.
            </p>
            <p>
              These resistivity and conductivity values are not the sole
              criteria for distinguishing between metals, insulators, and
              semiconductors. Semiconductors can be elemental (like Silicon and
              Germanium) or Compound semiconductors that can be inorganic (like
              CdS, GaAs, CdSe, InP) or organic (like anthracene, doped
              phthalocyanines) or even organic polymers (like polypyrrole,
              polyaniline, polythiophene).
            </p>
          </>
        ),
        image: [],
      },
      {
        id: 1,
        title: "Based on Energy Bands: ",
        text: (
          <>
            The Bohr model says electrons in atoms have specific energies based
            on their orbits. When atoms come together in a solid, electrons in
            their outer orbits get close or even overlap. This changes how
            electrons move compared to when they're alone. Each electron in a
            solid is in a unique place and sees different charges around it. So,
            each has its own energy level. These different energy levels
            together form <strong>energy bands</strong>. The{" "}
            <strong>valence band</strong> holds electrons with the least energy,
            while the <strong>conduction band</strong> holds those with more
            energy. If the conduction band's lowest level is lower than the
            valence band's highest, electrons can easily move between them, like
            in metals. If there's a gap between the bands, the material is an
            insulator. Some electrons may gain energy to jump this gap, creating
            conductivity.
            <p>
              For silicon or germanium crystals, each has 4N outer electrons,
              where N is the number of atoms. The energy levels of these
              electrons split into two bands, valence and conduction, separated
              by an energy gap. This gap determines the material's properties.
              Metals have overlapping bands, allowing easy electron movement.
              Insulators have a large gap, preventing electron flow.
              Semiconductors have a small gap, letting some electrons move, but
              not as many as metals..
            </p>
            <p>
              In <strong>metals</strong>, the valence and conduction bands
              overlap, meaning there's no distinct energy gap between them. This
              overlap allows electrons to move freely, making metals excellent
              conductors of electricity.
            </p>
            <p>
              For <strong>insulators</strong>, there's a significant energy gap
              between the valence and conduction bands, usually greater than 3
              electron volts (eV). This large gap prevents electrons in the
              valence band from easily jumping to the conduction band, resulting
              in very low conductivity.
            </p>
            <p>
              <strong>Semiconductors</strong> have a smaller energy gap compared
              to insulators, typically less than 3 eV. At room temperature, some
              electrons in the valence band can gain enough energy to cross this
              gap and enter the conduction band, allowing for conductivity.
              Though not as conductive as metals, semiconductors still conduct
              electricity better than insulators due to this smaller gap.
            </p>
          </>
        ),
        image: [metal, insulator, semiconductor],
      },
    ],
    isLab: true,
    lab: Lab1,
  },
  {
    id: 3,
    name: "Intrinsic Semiconductor",
    slug: "intrinsic-semiconductor",
    subtopic: [
      {
        id: 0,
        title: "",
        text: (
          <>
            Intrinsic semiconductors, such as Silicon (Si) and Germanium (Ge),
            have a diamond-like lattice structure. Each atom is surrounded by
            four nearest neighbors and shares one of its four valence electrons
            with each neighbor. This forms a covalent bond, also known as a
            valence bond.
            <p>
              At low temperatures, all bonds are intact. However, as the
              temperature increases, thermal energy ionizes a few atoms in the
              crystalline lattice, creating free electrons that contribute to
              conduction. This process leaves a vacancy with an effective
              positive electronic charge, known as a hole.
            </p>
            <p>
              In intrinsic semiconductors, the number of free electrons (n
              <sub>e</sub>) is equal to the number of holes (n<sub>h</sub>).
              This is represented as ne = nh = ni, where ni is the intrinsic
              carrier concentration.
            </p>
            <p>
              Semiconductors have the unique property of moving both electrons
              and holes. An electron from a covalent bond may jump to a vacant
              site (hole), making it appear as if the hole has moved. The free
              electron moves independently, giving rise to an electron current
              (I<sub>e</sub>) under an applied electric field. Holes move
              towards negative potential, giving the hole current (I<sub>h</sub>
              ). The total current (I) is the sum of the electron current (I
              <sub>e</sub>) and the hole current (I<sub>h</sub>) i.e.{" "}
              <strong>
                I = I<sub>e</sub> + I<sub>h</sub>
              </strong>
              .
            </p>
            <p>
              Apart from the generation of conduction electrons and holes, a
              simultaneous process of recombination occurs, where the electrons
              recombine with the holes. At equilibrium, the rate of generation
              equals the rate of recombination of charge carriers.
            </p>
            <p>
              An intrinsic semiconductor behaves like an insulator at 0 K. At
              higher temperatures (T {">"} 0K), thermal energy excites some
              electrons from the valence band to the conduction band, partially
              occupying the conduction band. This results in an equal number of
              holes in the valence band.
            </p>
          </>
        ),
        image: [intrinsic_semiconductor],
      },
    ],
    isLab: false,
    lab: "",
  },
  {
    id: 4,
    name: "Extrinsic Semiconductor",
    slug: "extrinsic-semiconductor",
    subtopic: [
      {
        id: 0,
        title: "",
        text: (
          <>
            Intrinsic semiconductors have low conductivity at room temperature,
            limiting their use in electronic devices. To enhance their
            conductivity, a process called <strong>doping</strong> is used. This
            involves adding a small amount of impurity to the pure
            semiconductor. The resulting material, known as an{" "}
            <strong>extrinsic or doped semiconductor</strong>, has significantly
            increased conductivity. The added impurity, or dopant, should not
            distort the original semiconductor lattice and should be similar in
            size to the semiconductor atoms.
            <p>
              <strong>Types of dopants</strong>
              <br />
              Dopants for tetravalent semiconductors like Silicon (Si) or
              Germanium (Ge) are typically either pentavalent or trivalent.
            </p>
            <p>
              <strong>Pentavalent dopants</strong> (valency 5), such as Arsenic
              (As), Antimony (Sb), and Phosphorous (P), have five valence
              electrons.
            </p>
            <p>
              <strong>Trivalent dopants</strong> (valency 3), like Indium (In),
              Boron (B), and Aluminium (Al), have three valence electrons.
            </p>
            <p>
              Doping changes the number of charge carriers in semiconductors,
              thereby affecting their conductivity. Si or Ge, belonging to the
              fourth group in the Periodic table, are usually doped with
              elements from the nearby fifth or third group. Interestingly,
              pentavalent and trivalent dopants in Si or Ge result in two
              entirely different types of semiconductors.
            </p>
          </>
        ),
        image: [extrinsic_semiconductor],
      },
      {
        id: 1,
        title: "n-type Semiconductor",
        text: (
          <>
            When silicon (Si) or germanium (Ge) is doped with a pentavalent
            element, such as As, Sb, P, etc., an interesting phenomenon occurs.
            The pentavalent dopant atom replaces one of the atoms in the crystal
            lattice of Si or Ge. Four of its electrons form covalent bonds with
            the neighboring silicon atoms, while the fifth electron remains
            weakly bound to its parent atom. This weak bonding occurs because
            the four bonding electrons are perceived as part of the effective
            core of the atom by the fifth electron. Consequently, the ionization
            energy required to release this electron is very low, allowing it to
            move freely within the lattice of the semiconductor, even at room
            temperature. For instance, the energy required to separate this
            electron from its atom is approximately 0.01 eV for germanium and
            0.05 eV for silicon. This energy is significantly lower than the
            energy required to jump the forbidden band (approximately 0.72 eV
            for germanium and about 1.1 eV for silicon) in an intrinsic
            semiconductor at room temperature.
            <p>
              Therefore, the pentavalent dopant effectively donates an extra
              electron for conduction and is termed as a donor impurity. The
              number of electrons available for conduction by dopant atoms
              depends heavily on the doping level and remains independent of any
              increase in ambient temperature. Conversely, the number of free
              electrons generated by Si atoms increases slightly with
              temperature. In an extrinsic semiconductor doped with a
              pentavalent impurity, electrons become the majority carriers,
              while holes become the minority carriers, classifying these
              semiconductors as n-type semiconductors.({" "}
              <strong>
                n<sub>e</sub> {">>"} n<sub>h</sub>
              </strong>
              )
            </p>
          </>
        ),
        image: [],
      },
      {
        id: 2,
        title: "p-type Semiconductor",
        text: (
          <>
            To obtain a p-type semiconductor, Si or Ge is doped with a trivalent
            impurity such as Al, B, In, etc. The dopant atom, having one valence
            electron less than Si or Ge, can form covalent bonds with
            neighboring three Si atoms but lacks an electron to offer to the
            fourth Si atom. Consequently, the bond between the fourth neighbor
            and the trivalent atom contains a vacancy or hole. Since the
            neighboring Si atom in the lattice requires an electron to fill this
            vacancy, an electron from the outer orbit of an atom in the
            neighborhood may jump to fill this vacancy, leaving a hole at its
            own site. Thus, the hole becomes available for conduction. The
            trivalent foreign atom becomes effectively negatively charged when
            it shares the fourth electron with a neighboring Si atom. Therefore,
            the dopant atom of a p-type material can be treated as the core of
            one negative charge along with its associated hole. One acceptor
            atom gives rise to one hole. These holes are in addition to the
            intrinsically generated holes, while the source of conduction
            electrons is only intrinsic generation. Consequently, for such a
            material, holes are the majority carriers, while electrons are the
            minority carriers. Therefore, extrinsic semiconductors doped with a
            trivalent impurity are referred to as p-type semiconductors.({" "}
            <strong>
              n<sub>h</sub> {">>"} n<sub>e</sub>
            </strong>
            )
            <p>
              In n-type semiconductors, the donor energy level is slightly below
              the bottom of the conduction band, while in p-type semiconductors,
              the acceptor energy level is slightly above the top of the valence
              band. At room temperature, most of the donor or acceptor atoms get
              ionized, resulting in an abundance of conduction electrons from
              donor impurities in n-type semiconductors and holes from acceptor
              impurities in p-type semiconductors.
            </p>
            <p>
              The electron and hole concentration in a semiconductor in thermal
              equilibrium is governed by a relationship where the product of the
              electron concentration and the hole concentration is equal to the
              square of the intrinsic carrier concentration, i.e.{" "}
              <strong>
                n<sub>e</sub>*n<sub>h</sub> = n<sub>i</sub>
                <sup>2</sup>
              </strong>
              .
            </p>
            <p>
              The difference in resistivity among C, Si, and Ge is determined by
              the energy gap between their conduction and valence bands. For C
              (diamond), Si, and Ge, the energy gaps are 5.4 eV, 1.1 eV, and 0.7
              eV, respectively. Sn, although a group IV element, is classified
              as a metal due to its zero energy gap.
            </p>
          </>
        ),
        image: [],
      },
    ],
    isLab: true,
    lab: TypeOfSemiconductor,
  },
  {
    id: 5,
    name: "p-n Junction",
    slug: "p-n-junction",
    subtopic: [
      {
        id: 0,
        title: "",
        text: (
          <>
            A p-n junction is the basic building block of many semiconductor
            devices like diodes, transistor, etc
          </>
        ),
        image: [],
      },
      {
        id: 1,
        title: "p-n junction formation",
        text: (
          <>
            A p-n junction is formed when a p-type silicon semiconductor wafer
            is doped with a small quantity of pentavalent impurity, converting
            part of it into n-type silicon. This wafer now contains both
            p-region and n-region, with a metallurgical junction in between.
            During the formation of this junction, two key processes occur:
            diffusion and drift. In diffusion, due to the concentration
            gradient, holes move from the p-side to the n-side, and electrons
            move from the n-side to the p-side. This movement of charge carriers
            creates a <strong>diffusion current</strong>.
            <p>
              As electrons move from the n-side to the p-side, they leave behind
              an ionized donor (positive charge) on the n-side, creating a
              positive space-charge region. Similarly, as holes move from the
              p-side to the n-side, they leave behind an ionized acceptor
              (negative charge) on the p-side, creating a negative space-charge
              region. Together, these regions form the{" "}
              <strong>depletion region</strong>. An electric field develops due
              to these space-charge regions, causing electrons on the p-side to
              move to the n-side and holes on the n-side to move to the p-side.
              This movement, known as <strong>drift</strong>, creates a drift
              current opposite to the diffusion current.
            </p>
            <p>
              Initially, the diffusion current is larger than the drift current.
              However, as diffusion continues, the space-charge regions extend,
              increasing the electric field strength and hence the drift
              current. This continues until the diffusion current equals the
              drift current, at which point the p-n junction is formed and there
              is no net current under equilibrium. The movement of electrons
              from the n-region to the p-region creates a potential difference
              across the junction, known as the{" "}
              <strong>barrier potential</strong>.
            </p>
          </>
        ),
        image: [],
      },
    ],
  },
  {
    id: 6,
    name: "Semiconductor Diode",
    slug: "semiconductor-diode",
    subtopic: [
      {
        id: 0,
        title: "",
        text: (
          <>
            A semiconductor diode is basically a p-n junction with metallic
            contacts provided at the ends for the application of an external
            voltage. It is a two terminal device.
          </>
        ),
        image: [],
      },
      {
        id: 1,
        title: "p-n junction diode under forward bias",
        text: (
          <>
            In forward bias, the positive terminal of the external voltage
            source is connected to the p-side of the diode, and the negative
            terminal is connected to the n-side. The applied voltage opposes the
            built-in potential of the diode, reducing the barrier height.
            Electrons from the n-side and holes from the p-side are injected
            across the junction, leading to significant current flow. Minority
            carriers (electrons in the p-side and holes in the n-side) are
            injected across the junction due to the applied voltage, leading to
            increased carrier concentration near the junction. The motion of
            injected carriers results in diffusion current, contributing to the
            overall forward current. Initially, the current remains low until
            the applied voltage exceeds the threshold voltage, after which the
            current increases exponentially with voltage.
          </>
        ),
        image: [],
      },
      {
        id: 2,
        title: "p-n junction diode under reverse bias",
        text: (
          <>
            In reverse bias, the positive terminal of the external voltage
            source is connected to the n-side of the diode, and the negative
            terminal is connected to the p-side. The applied voltage aids the
            built-in potential, increasing the barrier height. The majority of
            the applied voltage drops across the depletion region, suppressing
            current flow due to the widened depletion region. Minority carriers
            are swept away from the junction due to the electric field,
            resulting in a small drift current. The reverse current remains low
            and almost constant with minor variations in applied voltage until
            it reaches the breakdown voltage. Beyond the breakdown voltage, the
            reverse current increases sharply, potentially leading to diode
            destruction.
          </>
        ),
        image: [],
      },
      {
        id: 3,
        title: "",
        text: (
          <p>
            In summary, forward bias facilitates significant current flow across
            the diode junction by reducing the barrier potential, while reverse
            bias suppresses current flow due to the increased barrier potential
            and widened depletion region. The diode’s forward bias resistance is
            low compared to the reverse bias resistance, making it useful for
            rectifying AC voltages. The V-I characteristics of a diode can be
            studied by connecting it to a battery through a potentiometer and
            noting the current for different voltage values. The forward bias
            measurement uses a milliammeter, while the reverse bias uses a
            micrometer due to the difference in expected current. The threshold
            or cut-in voltage is ~0.2V for a germanium diode and ~0.7V for a
            silicon diode. The reverse saturation current is very small and
            almost constant with a change in bias. However, at very high reverse
            bias voltage known as{" "}
            <strong>
              breakdown voltage(V<sub>br</sub>)
            </strong>
            , the current suddenly increases. For diodes,{" "}
            <strong>dynamic resistance</strong> is the ratio of small change in
            the ∆V to a small change in current ∆I:{" "}
            <strong>
              r<sub>d</sub> = ∆V/∆I
            </strong>
          </p>
        ),
        image: [],
      },
    ],
    isLab: true,
    lab: PNJunction,
  },
  {
    id: 7,
    name: "Application of Junction Diode as a Rectifier",
    slug: "application-of-junction-diode-as-a-rectifier",
    subtopic: [
      {
        id: 0,
        title: "",
        text: (
          <>
            A junction diode allows current to pass only when it’s forward
            biased. This property is used to rectify alternating voltages and
            the circuit used for this purpose is called a{" "}
            <strong>rectifier</strong>.
          </>
        ),
        image: [],
      },
      {
        id: 1,
        title: "Half-wave Rectifier",
        text: (
          <>
            A half-wave rectifier is a simple device that utilizes a single
            diode to convert alternating current (AC) into direct current (DC).
            When an AC voltage is applied to a diode in series with a load, a
            pulsating voltage appears across the load only during the half
            cycles of the AC input when the diode is forward biased. This means
            that it only allows current to flow during the positive half of the
            AC cycle, effectively blocking the negative half. As a result, the
            output is a series of positive voltage pulses, or half-waves, that
            correspond to the positive half of the AC input, hence the name{" "}
            <strong>“half-wave rectifier”</strong>.
            <p>
              However, the output from a half-wave rectifier is not
              constant—it’s a pulsating DC output. To smooth this output, a
              filter (usually a capacitor) can be used. But even with a filter,
              a half-wave rectifier is not very efficient because it only uses
              half of the input signal.
            </p>
          </>
        ),
        image: [],
      },
      {
        id: 2,
        title: "Full-wave Rectifier",
        text: (
          <>
            A full-wave rectifier improves on the design of the half-wave
            rectifier. It uses two diodes and allows current to flow during both
            the positive and negative halves of the AC cycle. This means it
            converts both halves of the AC input into positive voltage pulses,
            making it more efficient than a half-wave rectifier.
            <p>
              In a full-wave rectifier, the two diodes are connected to the ends
              of a transformer secondary winding, which is center-tapped. During
              one half of the AC cycle, one diode conducts and the other does
              not. During the other half of the cycle, the roles of the diodes
              are reversed. This allows the full-wave rectifier to produce an
              output during both halves of the cycle.
            </p>
            <p>
              Just like the half-wave rectifier, the output of a full-wave
              rectifier is a pulsating DC. To smooth this output and get a
              steady DC, a filter (usually a capacitor or an inductor) is used.
            </p>
          </>
        ),
        image: [],
      },
      {
        id: 3,
        title: "",
        text: (
          <>
            In summary, while both half-wave and full-wave rectifiers serve the
            same basic function of converting AC into DC, full-wave rectifiers
            are more efficient because they utilize both halves of the AC input.
            However, they are also more complex due to the need for two diodes
            and a center-tapped transformer. On the other hand, half-wave
            rectifiers are simpler but less efficient, as they only utilize one
            half of the AC input.
            <p>
              The rectified voltage is in the form of pulses of the shape of
              half sinusoids. To get steady DC output from the pulsating
              voltage, a capacitor is connected across the output terminals
              (parallel to the load). This capacitor gets charged when the
              voltage across it is rising and gets discharged through the load
              when there is one, causing the voltage across it to fall. The rate
              of fall of the voltage across the capacitor depends upon the
              inverse product of capacitor C and the effective resistance R
              <sub>L</sub> used in the circuit and is called the{" "}
              <strong>time constant</strong>. To make the time constant large,
              the value of C should be large. So, capacitor input filters use
              large capacitors. The output voltage obtained by using a capacitor
              input filter is nearer to the peak voltage of the rectified
              voltage. This type of filter is most widely used in power
              supplies.
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
  //   id: 7,
  //   name: "Special Pupose p-n Junction Diodes",
  //   subtopic: [
  //     {
  //       id: 7.1,
  //       title: "Zener Diode",
  //       text: (
  //         <>
  //           A Zener diode is a special type of semiconductor diode, named after
  //           its inventor C. Zener. It’s designed to operate under reverse bias
  //           in the breakdown region and is primarily used as a voltage
  //           regulator.
  //           <p>
  //             The Zener diode is created by heavily doping both p- and n- sides
  //             of the junction, resulting in a very thin depletion region and an
  //             extremely high electric field. When the applied reverse bias
  //             voltage reaches the breakdown voltage of the Zener diode, there’s
  //             a significant change in the current. However, the Zener voltage
  //             remains constant, even though the current through the Zener diode
  //             varies over a wide range. This property is utilized for regulating
  //             supply voltages to keep them constant.
  //           </p>
  //           <p>
  //             The sudden increase in reverse current at the breakdown voltage is
  //             due to the high electric field strength, which is sufficient to
  //             pull valence electrons from the host atoms on the p-side and
  //             accelerate them to the n-side. This process is known as{" "}
  //             <strong>internal field emission or field ionization</strong>.
  //           </p>
  //           <h3>Zener Diode as a Voltage Regulator</h3>
  //           <p>
  //             A Zener diode is used to get a constant DC voltage from the
  //             fluctuating DC output of a rectifier. The unregulated DC voltage
  //             is connected to the Zener diode through a series resistance such
  //             that the Zener diode is reverse biased. If the input voltage
  //             increases or decreases, the current through the series resistance
  //             and Zener diode also increases or decreases, respectively. This
  //             results in a change in the voltage drop across the series
  //             resistance, but the voltage across the Zener diode remains
  //             constant. Thus, the Zener diode acts as a voltage regulator,
  //             maintaining a constant output voltage despite changes in the input
  //             voltage. The Zener diode and series resistance are selected based
  //             on the required output voltage.
  //           </p>
  //         </>
  //       ),
  //       image: [],
  //     },
  //     {
  //       id: 7.2,
  //       title: "Optoelectronic junction devices",
  //       text: (
  //         <>
  //           A Zener diode is a special type of semiconductor diode, named after
  //           its inventor C. Zener. It’s designed to operate under reverse bias
  //           in the breakdown region and is primarily used as a voltage
  //           regulator.
  //           <p></p>
  //           <h3>Photodiodes</h3>
  //           <p></p>
  //           <p></p>
  //           <h3>Light emitting diode(LED)</h3>
  //           <p></p>
  //           <p></p>
  //           <h3>Solar Cell</h3>
  //           <p></p>
  //         </>
  //       ),
  //       image: [],
  //     },
  //   ],
  //   isLab: false,
  //   lab: "",
  // },
  {
    id: 8,
    name: "Logic Gates",
    slug: "logic-gates",
    subtopic: [
      {
        id: 0,
        title: "",
        text: (
          <>
            A gate is a digital circuit designed to adhere to specific logical
            connections between input and output voltages. Hence, they are
            commonly referred to as logic gates, as they regulate the
            transmission of information. The five primary logic gates employed
            are NOT, AND, OR, NAND, and NOR. Each gate is represented by a
            symbol, and its operation is delineated by a truth table,
            illustrating all conceivable input logic level combinations
            alongside their corresponding output logic levels. Truth tables aid
            in comprehending the functionality of logic gates, which can be
            implemented through semiconductor devices.
          </>
        ),
        image: [],
      },
      {
        id: 1,
        title: "OR Gate",
        text: (
          <>
            This gate has two or more inputs and one output. The output is ‘1’
            when either or both inputs are ‘1’. In other words, if any of the
            inputs are high, the output is high.
          </>
        ),
        image: [or_gate_symbol, or_gate_table],
      },
      {
        id: 2,
        title: "AND Gate",
        text: (
          <>
            This gate also has two or more inputs and one output. The output is
            ‘1’ only when all inputs are ‘1’.
          </>
        ),
        image: [and_gate_symbol, and_gate_table],
      },
      {
        id: 3,
        title: "NOT Gate",
        text: (
          <>
            This gate has one input and one output. It produces a ‘1’ output if
            the input is ‘0’ and vice-versa, essentially inverting the input.
          </>
        ),
        image: [not_gate_symbol, not_gate_table],
      },
      {
        id: 4,
        title: "NAND Gate(NOT AND)",
        text: (
          <>
            This is an AND gate followed by a NOT gate. The output is not ‘1’
            only when all inputs are ‘1’. These gates are also called Universal
            Gates as they can be used to realize other basic gates like OR, AND,
            and NOT.
          </>
        ),
        image: [nand_gate_symbol, nand_gate_table],
      },
      {
        id: 5,
        title: "NOR Gate(NOT OR)",
        text: (
          <>
            This gate has two or more inputs and one output. The output is ‘1’
            only when all inputs are ‘0’. NOR gates are also considered as
            universal gates because you can obtain all the gates like AND, OR,
            NOT by using only NOR gates.
          </>
        ),
        image: [nor_gate_symbol, nor_gate_table],
      },
    ],
    isLab: true,
    lab: Lab10,
  },
];


export default SemiconductorData;