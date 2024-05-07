import { BlockMath, InlineMath } from "react-katex";
import { fig1, fig2,fig3 } from '../../assets/Nuclie/index.js'
import NuclearChainReaction from "../../components/NuclearChainReaction/NuclearReact.jsx";
import Derivation from "./Derivation/Derivation.jsx";

const NuclieData = [
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
                        Each atom, there exists a densely packed core of positive charge and mass known as the nucleus. This nucleus occupies a tiny fraction of the overall volume of the atom, being about <strong>10<sup>-12</sup></strong> times smaller in volume compared to the atom itself. To put it in perspective, if an atom were blown up to the size of a classroom, its nucleus would be no larger than a pinhead. Despite its minuscule size, the nucleus is incredibly dense, containing over <strong>99.9%</strong> of the atom's mass.

                        But what about the structure of the nucleus? Just as atoms have their constituents, do nuclei have theirs? This is the question we'll delve into in this chapter. We'll explore the makeup of nuclei, how their constituents are held together, and dive into their properties like size, mass, and stability. Additionally, we'll tackle related nuclear phenomena such as radioactivity, fission, and fusion along the way. It's a journey into the heart of matter, where the tiniest particles hold the key to understanding the universe on a fundamental level.
                    </>
                ),
                image: []
            },
        ],
        isLab: false,
        lab: "",
    },
    {
        id: 2,
        name: "Atomic Masses and Composition of Nucleus",
        slug: "atomic-masses-and-composition-of-nucleus",
        subtopic: [
            {
                id: 0,
                title: "",
                text: (
                    <>
                        Let's break down the complexity of atomic mass and its measurement into something more relatable. Imagine trying to weigh something incredibly tiny, like a single grain of sand, on a regular scale designed for larger objects—it's just not practical. That's the challenge we face when dealing with the mass of atoms. Take, for instance, the mass of a carbon atom, which is a mere <strong>1.992647 × 10<sup>-26</sup></strong> kilograms. That's incredibly small and not very convenient for everyday measurements.
                        <br />
                        To make things more manageable, scientists use a different unit called the atomic mass unit (u). This unit is defined as 1/12th of the mass of a carbon-12 atom. Interestingly, when we measure the atomic masses of various elements in atomic mass units, we find that they are close to being whole number multiples of the mass of a hydrogen atom. However, there are exceptions to this pattern, like the atomic mass of a chlorine atom, which is <strong>35.46 u</strong>.
                        <br />
                        <div
                            style={{ display: "flex", justifyContent: "space-around", marginTop: 4, marginBottom: 2 }}
                        >
                            <InlineMath math="1\mu = \frac{{\text{{mass of one }} {}^{12}C \text{{ atom}}}}{12}" />
                            <InlineMath math="= 1.992647 \times 10^{26} \text{ kg} / 12" />
                            <InlineMath math="= 1.660539 \times 10^{-27} \text{ kg}" />
                        </div>



                        <br />

                        So, how do we accurately measure these tiny masses? Enter the mass spectrometer, a remarkable tool that allows us to precisely determine atomic masses. Through these measurements, we've discovered that within each element, there exist different versions of atoms called isotopes. These isotopes have the same chemical properties but differ in mass. Essentially, they occupy the same place in the periodic table of elements but have different masses.

                        <br />

                        For example, chlorine has two isotopes with masses of <strong>34.98 u</strong> and <strong>36.98 u</strong>, with relative abundances of <strong>75.4%</strong> and <strong>24.6%</strong>, respectively. By taking a weighted average of these isotopic masses, we can determine the average mass of a chlorine atom.

                        <br />

                        Even the simplest element, hydrogen, has three isotopes with masses of <strong>1.0078 u</strong>, <strong>2.0141 u</strong>, and <strong>3.0160 u</strong>. The most common isotope, with a relative abundance of <strong>99.985%</strong>, is known as the proton. So, beneath the surface of even the most basic elements, there's a hidden complexity waiting to be uncovered.

                        <br />

                        Think of the nucleus of an atom as a tiny powerhouse, with its positive charge generated solely by protons. Each proton carries one fundamental unit of positive charge and remains stable within the nucleus. Initially, there was speculation that electrons might also reside within the nucleus, but this notion was dismissed with the advancement of quantum theory. Electrons, in fact, exist outside the nucleus, orbiting around it.

                        <br />


                        Let's talk about the balance of charges. The number of electrons orbiting outside the nucleus determines the atom's atomic number, often denoted as Z. Since electrons carry a negative charge, the total charge contributed by them is <strong>(-Ze)</strong>, where e represents the charge of a single electron. For the atom to remain electrically neutral overall, the nucleus must provide an equal but opposite positive charge, which is <strong>(+Ze)</strong>. This means that the number of protons within the nucleus, responsible for this positive charge, exactly matches the atomic number Z. So, the nucleus holds exactly Z protons, ensuring the delicate balance of positive and negative charges within the atom.

                    </>
                ),
                image: []
            },
        ],
        isLab: false,
        lab: "",
    },
    {
        id: 3,
        name: "Discovery of Neutron",
        slug: "discovery-of-neutron",
        subtopic: [
            {
                id: 0,
                title: "",
                text: (
                    <>
                        Let's unpack the fascinating discovery regarding the nuclei of hydrogen isotopes, deuterium, and tritium. At first glance, since they are isotopes of hydrogen, it might seem logical to assume they contain only one proton each. However, the masses of these nuclei don't align with this assumption. In fact, the masses of hydrogen, deuterium, and tritium nuclei are in the ratio of 1:2:3. This discrepancy suggests that there's more to these nuclei than just protons.

                        <br />
                        <br />


                        It's proposed that besides the proton, there must be some neutral matter within these nuclei. Remarkably, the amount of neutral matter present in these isotopes, when compared to the mass of a proton, is roughly one for deuterium and two for tritium. This indicates that the nuclei of atoms consist not only of protons but also of neutral matter in multiples of a basic unit.


                        <br />
                        <br />

                        This hypothesis gained validation in 1932 when James Chadwick observed the emission of neutral radiation during experiments where beryllium nuclei were bombarded with alpha particles (helium nuclei). Notably, this neutral radiation had the ability to dislodge protons from light nuclei like helium, carbon, and nitrogen. At the time, the only known form of neutral radiation was photons (electromagnetic radiation). However, the energy required for these photons to produce such effects during the bombardment of beryllium nuclei with alpha particles was far higher than what was observed.

                        <br />
                        <br />

                        Chadwick's breakthrough came when he proposed that this neutral radiation comprised a new type of neutral particle, which he named neutrons. By applying the principles of conservation of energy and momentum, he determined that the mass of these neutrons was nearly identical to that of a proton. This discovery revolutionized our understanding of atomic structure, revealing the existence of another fundamental building block of matter alongside protons and electrons.

                        The mass of a neutron is now known to a high degree of accuracy.
                        <br />
                        <br />

                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}>
                            <InlineMath math="m_n = 1.00866 \, \text{u} = 1.6749 \times 10^{-27} \, \text{kg}" />

                        </div>

                        <br />

                        Chadwick was awarded the 1935 Nobel Prize in Physics for his discovery of the neutron.
                        A free neutron, unlike a free proton, is unstable. It decays into a proton, an electron and a antineutrino (another elementary particle), and has a mean life of about 1000s. It is, however, stable inside the nucleus. The composition of a nucleus can now be described using the following terms and symbols:

                        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 3, alignItems: 'center', gap: '10px' }}>
                            <InlineMath math="Z - \text{atomic number} = \text{number of protons}" />
                            <InlineMath math="N - \text{neutron number} = \text{number of neutrons}" />
                            <InlineMath math="A - \text{mass number} = Z + N = \text{total number of protons and neutrons}" />

                        </div>

                        <br />

                        Let's simplify the concept of nuclear species or nuclides. Each nuclide is represented by a notation like XAZ, where X is the chemical symbol of the species. For instance, the nucleus of gold is denoted by 19779Au. This notation tells us that it contains 197 nucleons, with 79 being protons and the remaining 118 being neutrons.

                        <br />
                        Understanding isotopes becomes easier with this notation. Isotopes of an element have the same number of protons but differ in their number of neutrons. For example, deuterium, represented as 21H, is an isotope of hydrogen with one proton and one neutron, while tritium, represented as 31H, has one proton and two neutrons.

                        <br />
                        Gold illustrates this diversity further with its 32 isotopes, ranging from A = 173 to A = 204, where A represents the mass number. Despite these variations, isotopes exhibit identical chemical behavior because they have the same electronic structure. Therefore, they occupy the same position in the periodic table.

                        <br />

                        Nuclides with the same mass number A are called isobars. For instance, 31H and 32He are isobars because they have the same mass number. On the other hand, nuclides with the same neutron number N but different atomic number Z are called isotones. An example would be 19880Hg and 19779Au. These terms help us categorize and understand the diverse world of atomic nuclei more easily.
                        <br />
                    </>
                ),
                image: []
            },
        ],
        isLab: false,
        lab: "",
    },
    {
        id: 4,
        name: "Size of a Nucleus",
        slug: "size-of-a-nucleus",
        subtopic: [
            {
                id: 0,
                title: "",
                text: (
                    <>
                        Let's break down the pivotal experiments and discoveries that shed light on the structure of atomic nuclei. Rutherford, known for his pioneering work, laid the foundation by proposing the existence of the atomic nucleus. Following his lead, Geiger and Marsden conducted a landmark experiment involving the scattering of alpha particles from thin gold foils. Their findings revealed that the closest distance an alpha particle could approach to a gold nucleus, given its kinetic energy of <strong>5.5 MeV</strong>, was approximately <strong>4.0 × 10^-14 meters.</strong>

                        <br />
                        <br />

                        Rutherford's explanation for this scattering phenomenon relied solely on the repulsive forces between charged particles, particularly the Coulomb repulsion between the positive charges of the alpha particle and the gold nucleus. However, it became evident that at higher energies, deviations from Rutherford's predictions occurred, suggesting the influence of short-range nuclear forces.

                        <br />
                        <br />

                        By conducting similar scattering experiments with fast electrons instead of alpha particles, scientists were able to accurately measure the sizes of nuclei across various elements. They found that the radius of a nucleus with mass number A can be approximated by the formula <strong>R = R0A^(1/3)</strong>, where R0 is approximately <strong>1.2 × 10^-15 meters (or 1.2 femtometers)</strong>. This implies that the volume of the nucleus, which is proportional to R^3, scales with A, the mass number. Consequently, the density of the nucleus remains constant, independent of A, akin to a drop of liquid with uniform density.

                        <br />
                        <br />

                        This density of nuclear matter is exceptionally high, approximately <strong>2.3 × 10^17 kilograms per cubic meter</strong>, compared to ordinary matter such as water, which has a density of around 10^3 kilograms per cubic meter. This stark difference in density underscores the emptiness of most atoms, where ordinary matter consists of atoms with a significant amount of empty space within them.

                        <br />
                        <br />

                    </>
                ),
                image: []
            },
        ],
        isLab: false,
        lab: "",
    },
    {
        id: 5,
        name: "RadioActivity",
        slug: "radio-activity",
        subtopic: [
            {
                id: 0,
                title: "",
                text: (
                    <>
                        In 1896, A. H. Becquerel made an accidental discovery that would revolutionize our understanding of atomic structure: radioactivity. While investigating the effects of visible light on compounds' fluorescence and phosphorescence, Becquerel observed an unexpected occurrence. After exposing uranium-potassium sulphate to visible light, he wrapped the compound in black paper and placed it near a photographic plate, separated by a piece of silver. Upon developing the plate hours later, he found it had darkened, indicating that something emitted by the compound had penetrated both the black paper and the silver.

                        <br />
                        <br />

                        Further experiments revealed that this phenomenon, radioactivity, is a nuclear process in which unstable nuclei undergo decay. This decay process, known as radioactive decay, manifests in three primary forms:

                        <br />
                        <br />

                        <strong>(i)</strong>  Alpha decay, which involves the emission of helium nuclei (4He).
                        <br />
                        <strong>(ii) </strong>
                        Beta decay, where electrons or positrons (particles with the same mass as electrons but opposite charge) are emitted.
                        <br />

                        <strong>
                            (iii)
                        </strong>
                        Gamma decay, characterized by the emission of high-energy photons, typically with energies in the hundreds of kiloelectronvolts (keV) or more.

                        <br />

                        Each of these decay processes will be explored in detail in subsequent sections, unveiling the intricacies of radioactive phenomena.



                    </>
                ),
                image: []
            },
            {
                id: 1,
                title: "Law of radioactive decay",
                text: (
                    <>
                        In any radioactive sample, which undergoes α, β or γ-decay, it is found that the number of nuclei undergoing the decay per unit time is proportional to the total number of nuclei in the sample. If N is the number of nuclei in the sample and ∆N undergo decay in time ∆t then
                    </>
                ),
                image: [fig3]
            }
        ],
        isLab: true,
        lab: Derivation,
    },
    {
        id: 6,
        name: "Nuclear Binding Energy",
        slug: "nuclear-binding-energy",
        subtopic: [
            {
                id: 0,
                title: "",
                text: (
                    <>
                        the nucleus comprises neutrons and protons. Intuitively, one might expect the mass of the nucleus to be the sum of the masses of its individual protons and neutrons. However, experimental observations reveal that the nuclear mass (M) is always less than this expected sum.

                        <br />
                        <br />

                        Consider the nucleus of oxygen - 16, denoted as 168O, which consists of 8 neutrons and 8 protons.Calculating the expected mass based on the masses of its constituents, we find that it should be <strong> 16.12744 atomic mass units(u)</strong>.
                        However, experiments using mass spectroscopy yield an atomic mass of <strong> 15.99493 u </strong> for oxygen - 16. Subtracting the mass of 8 electrons from this experimental value, we find the experimental mass of the nucleus to be 15.<strong>99053 u</strong>.This difference between the expected mass and the experimental mass, known as the mass defect(∆M), is found to be < strong > 0.13691 u</ strong>  for oxygen - 16.
                        < br />
                        < br />

                        So, what does this mass defect signify ? Here, Einstein's equivalence of mass and energy comes into play. Since the mass of the oxygen nucleus is less than the sum of the masses of its constituents (8 protons and 8 neutrons in the unbound state), it means that the equivalent energy of the nucleus is less than the sum of the equivalent energies of its constituents.

                        < br />
                        < br />

                        In other words, to break the oxygen nucleus into its constituent protons and neutrons, one would need to supply additional energy equal to the mass defect multiplied by the speed of light squared(c ^ 2).This extra energy, denoted as Eb, is directly related to the mass defect: <strong>Eb = ∆M * c^2</strong>.Thus, the mass defect serves as a measure of the binding energy holding the nucleus together.

                        < br />
                        < br />

                        When a certain number of neutrons and protons come together to form a nucleus of a specific charge and mass, an energy release occurs.This released energy, denoted as Eb, is termed the binding energy of the nucleus.While we can't physically break a nucleus into its individual nucleons, understanding the binding energy provides insight into how tightly the nucleus is held together.

                        < br />
                        < br />

                        To gauge this binding more effectively, we look at the binding energy per nucleon, denoted as Ebn.This value is obtained by dividing the binding energy Eb of a nucleus by the total number of nucleons, A, within that nucleus.In essence, Ebn represents the average energy required to separate a nucleus into its individual nucleons.
                        < br />

                        So, the binding energy per nucleon serves as a useful measure of the stability and cohesion within a nucleus, shedding light on the forces that keep its constituents bound together.
                        < br />
                        Figure the relationship between the binding energy per nucleon(Ebn) and the mass number(A) for numerous nuclei.Several key observations emerge from this plot:

                        <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center', margin: '8px 0px' }}>
                            <img src={fig1} alt="binding energy graph" />
                        </div>



                        (i) For nuclei with a moderate mass number <strong  > (between 30 and 170)</strong>, the binding energy per nucleon, Ebn, remains remarkably constant.This constancy implies that the binding energy per nucleon is essentially unaffected by changes in the atomic number within this range.The curve reaches its maximum value of around 8.75 MeV when A equals 56, and it maintains a value of approximately 7.6 MeV when A equals 238.

                        < br />
                        < br />

                        We can draw some conclusions from these two observations:
                        Let's break down the main points outlined in the paragraph:

                        <br />
                        <br />

                        <strong>(i)</strong>
                        The nuclear force responsible for binding nucleons together is attractive and sufficiently strong to generate a binding energy of a few million electron volts(MeV) per nucleon.

                        < br />
                        < br />

                        <strong>(ii)</strong> The constancy of the binding energy within the range of mass numbers < strong > 30</ strong> to < strong > 170</ strong> is a result of the short range of the nuclear force.Within a large nucleus, each nucleon interacts primarily with its nearest neighbors within the range of the nuclear force.If a nucleon is beyond this range, it has no effect on the binding energy of the nucleon under consideration.Therefore, the binding energy per nucleon remains nearly constant within this range, as most nucleons reside within the nucleus rather than on its surface.This property is known as the saturation property of the nuclear force.

                        < br />
                        < br />

                        <strong>(iii)</strong> Heavier nuclei, such as <strong>A = 240</strong > , have lower binding energy per nucleon compared to lighter nuclei, like A = 120. When a heavy nucleus breaks into two lighter nuclei, such as <strong>A = 240 </strong > splitting into two
                        <strong> A = 120</strong> nuclei, the nucleons become more tightly bound.This results in the release of energy, which has significant implications for energy production through fission.

                        < br />
                        < br />

                        <strong>(iv)</strong> When very light nuclei <strong> (A ≤ 10)</strong> combine to form a heavier nucleus, the binding energy per nucleon of the resulting fused nucleus is greater than that of the individual lighter nuclei.This indicates that the final system is more tightly bound than the initial system, resulting in the release of energy.This process, known as fusion, is the energy source of the sun.

                        < br />
                        < br />

                        These points illustrate the fundamental principles underlying nuclear interactions and their implications for energy production through processes such as fission and fusion.



                    </>
                ),
                image: []
            },
        ],
        isLab: false,
        lab: "",
    },
    {
        id: 7,
        name: "Nuclear Force",
        slug: "nuclear-force",
        subtopic: [
            {
                id: 0,
                title: "",
                text: (
                    <>
                        The force governing the motion of atomic electrons is the familiar Coulomb force. However, for nuclei, the binding energy per nucleon is approximately <strong>8 Mev</strong>, significantly greater than that in atoms. This implies the existence of a strong attractive force, distinct from the Coulomb force, necessary to overcome the repulsion between protons and bind both protons and neutrons within the tiny nuclear volume.

                        <br />
                        <br />

                        The characteristics of the nuclear binding force are summarized below based on experiments conducted between 1930 and 1950:

                        <br />
                        <br />

                        <strong>(i)</strong> The nuclear force is considerably stronger than the Coulomb force between charges or the gravitational forces between masses. This dominance of the nuclear force over the Coulomb repulsion between protons within the nucleus is essential for nucleus stability. Moreover, the gravitational force is even weaker than the Coulomb force.

                        <br />
                        <br />

                        <strong>(ii)</strong> The nuclear force between nucleons rapidly diminishes to zero beyond a few femtometers in distance. This leads to force saturation within medium to large-sized nuclei, explaining the constancy of the binding energy per nucleon. A rough plot of the potential energy between nucleons versus distance illustrates that the force is attractive at distances larger than about 0.8 femtometers and becomes repulsive at distances less than 0.8 femtometers.
                        <br />
                        <br />

                        <strong>(iii)</strong> Interestingly, the nuclear force between neutron-neutron, proton-neutron, and proton-proton pairs is approximately the same, irrespective of their electric charge. Unlike Coulomb's law or Newton's law of gravitation, there is no simple mathematical expression for the nuclear force.
                        <br />
                        <br />
                        These insights into the nuclear binding force shed light on the complex interplay of forces within atomic nuclei, highlighting the unique characteristics and challenges associated with understanding nuclear interactions.


                    </>
                ),
                image: [fig2]
            },
        ],
        isLab: false,
        lab: "",
    },
    {
        id: 8,
        name: "Nuclear Energy",
        slug: "nuclear-energy",
        subtopic: [
            {
                id: 0,
                title: "",
                text: (
                    <>
                        The curve depicting binding energy per nucleon (Ebn) in Figure 13.1 displays a distinct plateau between mass numbers <strong> A = 30</strong> and <strong> A = 170</strong>, where the binding energy per nucleon remains almost constant at approximately 8.0 million electron volts (MeV). In contrast, for nuclei with <strong>A &gt; 30</strong> or <strong>A &lt; 170</strong>, the binding energy per nucleon is lower than 8.0 MeV, as previously mentioned.

                        <br />
                        <br />

                        Greater binding energy corresponds to lower total mass within a bound system, such as a nucleus. Therefore, when nuclei with lower total binding energy transform into nuclei with higher binding energy, there is a net release of energy. This phenomenon occurs during processes like nuclear fission, where a heavy nucleus splits into two or more intermediate mass fragments, or nuclear fusion, where light nuclei combine to form a heavier nucleus.

                        <br />
                        <br />


                        Conventional energy sources like coal or petroleum rely on exothermic chemical reactions, typically involving energies measured in electron volts. In contrast, nuclear reactions release energy on the order of MeV. This means that nuclear sources can produce a million times more energy than chemical sources for the same amount of matter. For instance, the fission of 1 kilogram of uranium yields 10^14 joules of energy, a stark contrast to the 10^7 joules of energy produced by burning 1 kilogram of coal.



                    </>
                ),
                image: []
            },
            {
                id: 1,
                title: "Fission",
                text: (
                    <>
                        Exploring nuclear reactions beyond natural radioactive decays opens up new possibilities, particularly when nuclei are bombarded with other nuclear particles like protons, neutrons, or alpha particles.

                        <br />
                        <br />

                        One of the most significant reactions induced by neutrons is fission. In this process, a uranium isotope, such as <strong>uranium-235 (235U)</strong>, when bombarded with a neutron, undergoes fission, splitting into two intermediate mass nuclear fragments.

                        <br />
                        <br />

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '5px', marginBottom: '20px' }}>


                            <InlineMath math="^1_0n + ^{235}_{92}U \rightarrow ^{236}_{92}U \rightarrow ^{144}_{56}Ba + ^{89}_{36}Kr + 3 \times ^1_0n" />

                            <InlineMath math="^1_0n + ^{235}_{92}U \rightarrow ^{236}_{92}U \rightarrow ^{133}_{51}Sb + ^{99}_{41}Nb + 4 \times ^1_0n" />

                            <InlineMath math="^1_0n + ^{235}_{92}U \rightarrow ^{140}_{54}Xe + ^{94}_{38}Sr + 2 \times ^1_0n" />

                        </div>




                        After undergoing fission, the resulting fragment products become radioactive nuclei, emitting beta particles sequentially until stable end products are achieved.


                        <br />
                        <br />

                        Consider a nucleus with a mass number (A) of 240 breaking into two fragments, each with A = 120. In this scenario:

                        <strong>
                            <br />
                            <br />

                            - The binding energy per nucleon (Ebn) for the A = 240 nucleus is approximately 7.6 MeV.
                            <br />
                            - For the two A = 120 fragment nuclei, Ebn is approximately 8.5 MeV.
                            <br />
                            - The gain in binding energy per nucleon is approximately 0.9 MeV.

                        </strong>
                        <br />
                        <br />

                        Hence, the total gain in binding energy is estimated as 240 * 0.9, resulting in 216 MeV.
                        <br />

                        Initially, the energy released in fission events manifests as the kinetic energy of the fragments and neutrons. Eventually, this energy dissipates into the surrounding matter as heat. Nuclear reactors, which produce electricity, harness this energy from nuclear fission. Conversely, the immense energy released in an atomic bomb originates from uncontrolled nuclear fission.

                        <br />
                        <br />

                        <NuclearChainReaction />
                    </>
                ),
                image: []
            }
        ],
        isLab: false,
        lab: "",
    },

]
export default NuclieData;