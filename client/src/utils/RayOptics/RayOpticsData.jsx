import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";
import React from "react";

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
            By the nineteenth century, enough evidence had accumulated in favour
            of atomic hypothesis of matter. In 1897, the experiments on electric
            discharge through gases carried out by the English physicist J. J.
            Thomson (1856 – 1940) revealed that atoms of different elements
            contain negatively charged constituents (electrons) that are
            identical for all atoms. However, atoms on a whole are electrically
            neutral. Therefore, an atom must also contain some positive charge
            to neutralise the negative charge of the electrons. But what is the
            arrangement of the positive charge and the electrons inside the
            atom? In other words, what is the structure of an atom? <br />
            <br />
            The first model of atom was proposed by J. J. Thomson in 1898.
            According to this model, the positive charge of the atom is
            uniformly distributed throughout the volume of the atom and the
            negatively charged electrons are embedded in it like seeds in a
            watermelon. This model was picturesquely called plum pudding model
            of the atom. However subsequent studies on atoms, as described in
            this chapter, showed that the distribution of the electrons and
            positive charges are very different from that proposed in this
            model. <br />
            <br />
            We know that condensed matter (solids and liquids) and dense gases
            at all temperatures emit electromagnetic radiation in which a
            continuous distribution of several wavelengths is present, though
            with different intensities. This radiation is considered to be due
            to oscillations of atoms and molecules, governed by the interaction
            of each atom or molecule with its neighbours. In contrast, light
            emitted from rarefied gases heated in a flame, or excited
            electrically in a glow tube such as the familiar neon sign or
            mercury vapour light has only certain discrete wavelengths. The
            spectrum appears as a series of bright lines. In such gases, the
            average spacing between atoms is large. Hence, the radiation emitted
            can be considered due to individual atoms rather than because of
            interactions between atoms or molecules. <br />
            <br />
            In the early nineteenth century it was also established that each
            element is associated with a characteristic spectrum of radiation,
            for example, hydrogen always gives a set of lines with fixed
            relative position between the lines. This fact suggested an intimate
            relationship between the internal structure of an atom and the
            spectrum of radiation emitted by it. In 1885, Johann Jakob Balmer
            (1825 – 1898) obtained a simple empirical formula which gave the
            wavelengths of a group of lines emitted by atomic hydrogen. Since
            hydrogen is simplest of the elements known, we shall consider its
            spectrum in detail in this chapter. <br />
            <br />
            Ernst Rutherford (1871–1937), a former research student of J. J.
            Thomson, was engaged in experiments on <InlineMath math="\alpha" />
            -particles emitted by some radioactive elements. In 1906, he
            proposed a classic experiment of scattering of these{" "}
            <InlineMath math="\alpha" />
            -particles by atoms to investigate the atomic structure. This
            experiment was later performed around 1911 by Hans Geiger
            (1882–1945) and Ernst Marsden (1889–1970, who was 20 year-old
            student and had not yet earned his bachelor’s degree). The details
            are discussed in Section 12.2. The explanation of the results led to
            the birth of Rutherford’s planetary model of atom (also called the
            nuclear model of the atom). According to this the entire positive
            charge and most of the mass of the atom is concentrated in a small
            volume called the nucleus with electrons revolving around the
            nucleus just as planets revolve around the sun. <br />
            <br />
            Rutherford’s nuclear model was a major step towards how we see the
            atom today. However, it could not explain why atoms emit light of
            only discrete wavelengths. How could an atom as simple as hydrogen,
            consisting of a single electron and a single proton, emit a complex
            spectrum of specific wavelengths? In the classical picture of an
            atom, the electron revolves round the nucleus much like the way a
            planet revolves round the sun. However, we shall see that there are
            some serious difficulties in accepting such a model.
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
    name: "Reflection of Light by Spherical Mirrors",
    slug: "reflection-of-light-by-spherical-mirrors",
    subtopic: [
      {
        id: 0,
        title: "",
        text: (
          <>
            By the nineteenth century, enough evidence had accumulated in favour
            of atomic hypothesis of matter. In 1897, the experiments on electric
            discharge through gases carried out by the English physicist J. J.
            Thomson (1856 – 1940) revealed that atoms of different elements
            contain negatively charged constituents (electrons) that are
            identical for all atoms. However, atoms on a whole are electrically
            neutral. Therefore, an atom must also contain some positive charge
            to neutralise the negative charge of the electrons. But what is the
            arrangement of the positive charge and the electrons inside the
            atom? In other words, what is the structure of an atom? <br />
            <br />
            The first model of atom was proposed by J. J. Thomson in 1898.
            According to this model, the positive charge of the atom is
            uniformly distributed throughout the volume of the atom and the
            negatively charged electrons are embedded in it like seeds in a
            watermelon. This model was picturesquely called plum pudding model
            of the atom. However subsequent studies on atoms, as described in
            this chapter, showed that the distribution of the electrons and
            positive charges are very different from that proposed in this
            model. <br />
            <br />
            We know that condensed matter (solids and liquids) and dense gases
            at all temperatures emit electromagnetic radiation in which a
            continuous distribution of several wavelengths is present, though
            with different intensities. This radiation is considered to be due
            to oscillations of atoms and molecules, governed by the interaction
            of each atom or molecule with its neighbours. In contrast, light
            emitted from rarefied gases heated in a flame, or excited
            electrically in a glow tube such as the familiar neon sign or
            mercury vapour light has only certain discrete wavelengths. The
            spectrum appears as a series of bright lines. In such gases, the
            average spacing between atoms is large. Hence, the radiation emitted
            can be considered due to individual atoms rather than because of
            interactions between atoms or molecules. <br />
            <br />
            In the early nineteenth century it was also established that each
            element is associated with a characteristic spectrum of radiation,
            for example, hydrogen always gives a set of lines with fixed
            relative position between the lines. This fact suggested an intimate
            relationship between the internal structure of an atom and the
            spectrum of radiation emitted by it. In 1885, Johann Jakob Balmer
            (1825 – 1898) obtained a simple empirical formula which gave the
            wavelengths of a group of lines emitted by atomic hydrogen. Since
            hydrogen is simplest of the elements known, we shall consider its
            spectrum in detail in this chapter. <br />
            <br />
            Ernst Rutherford (1871–1937), a former research student of J. J.
            Thomson, was engaged in experiments on <InlineMath math="\alpha" />
            -particles emitted by some radioactive elements. In 1906, he
            proposed a classic experiment of scattering of these{" "}
            <InlineMath math="\alpha" />
            -particles by atoms to investigate the atomic structure. This
            experiment was later performed around 1911 by Hans Geiger
            (1882–1945) and Ernst Marsden (1889–1970, who was 20 year-old
            student and had not yet earned his bachelor’s degree). The details
            are discussed in Section 12.2. The explanation of the results led to
            the birth of Rutherford’s planetary model of atom (also called the
            nuclear model of the atom). According to this the entire positive
            charge and most of the mass of the atom is concentrated in a small
            volume called the nucleus with electrons revolving around the
            nucleus just as planets revolve around the sun. <br />
            <br />
            Rutherford’s nuclear model was a major step towards how we see the
            atom today. However, it could not explain why atoms emit light of
            only discrete wavelengths. How could an atom as simple as hydrogen,
            consisting of a single electron and a single proton, emit a complex
            spectrum of specific wavelengths? In the classical picture of an
            atom, the electron revolves round the nucleus much like the way a
            planet revolves round the sun. However, we shall see that there are
            some serious difficulties in accepting such a model.
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
    name: "Refraction",
    slug: "refraction",
    subtopic: [
      {
        id: 0,
        title: "",
        text: (
          <>
            By the nineteenth century, enough evidence had accumulated in favour
            of atomic hypothesis of matter. In 1897, the experiments on electric
            discharge through gases carried out by the English physicist J. J.
            Thomson (1856 – 1940) revealed that atoms of different elements
            contain negatively charged constituents (electrons) that are
            identical for all atoms. However, atoms on a whole are electrically
            neutral. Therefore, an atom must also contain some positive charge
            to neutralise the negative charge of the electrons. But what is the
            arrangement of the positive charge and the electrons inside the
            atom? In other words, what is the structure of an atom? <br />
            <br />
            The first model of atom was proposed by J. J. Thomson in 1898.
            According to this model, the positive charge of the atom is
            uniformly distributed throughout the volume of the atom and the
            negatively charged electrons are embedded in it like seeds in a
            watermelon. This model was picturesquely called plum pudding model
            of the atom. However subsequent studies on atoms, as described in
            this chapter, showed that the distribution of the electrons and
            positive charges are very different from that proposed in this
            model. <br />
            <br />
            We know that condensed matter (solids and liquids) and dense gases
            at all temperatures emit electromagnetic radiation in which a
            continuous distribution of several wavelengths is present, though
            with different intensities. This radiation is considered to be due
            to oscillations of atoms and molecules, governed by the interaction
            of each atom or molecule with its neighbours. In contrast, light
            emitted from rarefied gases heated in a flame, or excited
            electrically in a glow tube such as the familiar neon sign or
            mercury vapour light has only certain discrete wavelengths. The
            spectrum appears as a series of bright lines. In such gases, the
            average spacing between atoms is large. Hence, the radiation emitted
            can be considered due to individual atoms rather than because of
            interactions between atoms or molecules. <br />
            <br />
            In the early nineteenth century it was also established that each
            element is associated with a characteristic spectrum of radiation,
            for example, hydrogen always gives a set of lines with fixed
            relative position between the lines. This fact suggested an intimate
            relationship between the internal structure of an atom and the
            spectrum of radiation emitted by it. In 1885, Johann Jakob Balmer
            (1825 – 1898) obtained a simple empirical formula which gave the
            wavelengths of a group of lines emitted by atomic hydrogen. Since
            hydrogen is simplest of the elements known, we shall consider its
            spectrum in detail in this chapter. <br />
            <br />
            Ernst Rutherford (1871–1937), a former research student of J. J.
            Thomson, was engaged in experiments on <InlineMath math="\alpha" />
            -particles emitted by some radioactive elements. In 1906, he
            proposed a classic experiment of scattering of these{" "}
            <InlineMath math="\alpha" />
            -particles by atoms to investigate the atomic structure. This
            experiment was later performed around 1911 by Hans Geiger
            (1882–1945) and Ernst Marsden (1889–1970, who was 20 year-old
            student and had not yet earned his bachelor’s degree). The details
            are discussed in Section 12.2. The explanation of the results led to
            the birth of Rutherford’s planetary model of atom (also called the
            nuclear model of the atom). According to this the entire positive
            charge and most of the mass of the atom is concentrated in a small
            volume called the nucleus with electrons revolving around the
            nucleus just as planets revolve around the sun. <br />
            <br />
            Rutherford’s nuclear model was a major step towards how we see the
            atom today. However, it could not explain why atoms emit light of
            only discrete wavelengths. How could an atom as simple as hydrogen,
            consisting of a single electron and a single proton, emit a complex
            spectrum of specific wavelengths? In the classical picture of an
            atom, the electron revolves round the nucleus much like the way a
            planet revolves round the sun. However, we shall see that there are
            some serious difficulties in accepting such a model.
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
    name: "Total Internal Reflection",
    slug: "total-internal-reflection",
    subtopic: [
      {
        id: 0,
        title: "",
        text: (
          <>
            By the nineteenth century, enough evidence had accumulated in favour
            of atomic hypothesis of matter. In 1897, the experiments on electric
            discharge through gases carried out by the English physicist J. J.
            Thomson (1856 – 1940) revealed that atoms of different elements
            contain negatively charged constituents (electrons) that are
            identical for all atoms. However, atoms on a whole are electrically
            neutral. Therefore, an atom must also contain some positive charge
            to neutralise the negative charge of the electrons. But what is the
            arrangement of the positive charge and the electrons inside the
            atom? In other words, what is the structure of an atom? <br />
            <br />
            The first model of atom was proposed by J. J. Thomson in 1898.
            According to this model, the positive charge of the atom is
            uniformly distributed throughout the volume of the atom and the
            negatively charged electrons are embedded in it like seeds in a
            watermelon. This model was picturesquely called plum pudding model
            of the atom. However subsequent studies on atoms, as described in
            this chapter, showed that the distribution of the electrons and
            positive charges are very different from that proposed in this
            model. <br />
            <br />
            We know that condensed matter (solids and liquids) and dense gases
            at all temperatures emit electromagnetic radiation in which a
            continuous distribution of several wavelengths is present, though
            with different intensities. This radiation is considered to be due
            to oscillations of atoms and molecules, governed by the interaction
            of each atom or molecule with its neighbours. In contrast, light
            emitted from rarefied gases heated in a flame, or excited
            electrically in a glow tube such as the familiar neon sign or
            mercury vapour light has only certain discrete wavelengths. The
            spectrum appears as a series of bright lines. In such gases, the
            average spacing between atoms is large. Hence, the radiation emitted
            can be considered due to individual atoms rather than because of
            interactions between atoms or molecules. <br />
            <br />
            In the early nineteenth century it was also established that each
            element is associated with a characteristic spectrum of radiation,
            for example, hydrogen always gives a set of lines with fixed
            relative position between the lines. This fact suggested an intimate
            relationship between the internal structure of an atom and the
            spectrum of radiation emitted by it. In 1885, Johann Jakob Balmer
            (1825 – 1898) obtained a simple empirical formula which gave the
            wavelengths of a group of lines emitted by atomic hydrogen. Since
            hydrogen is simplest of the elements known, we shall consider its
            spectrum in detail in this chapter. <br />
            <br />
            Ernst Rutherford (1871–1937), a former research student of J. J.
            Thomson, was engaged in experiments on <InlineMath math="\alpha" />
            -particles emitted by some radioactive elements. In 1906, he
            proposed a classic experiment of scattering of these{" "}
            <InlineMath math="\alpha" />
            -particles by atoms to investigate the atomic structure. This
            experiment was later performed around 1911 by Hans Geiger
            (1882–1945) and Ernst Marsden (1889–1970, who was 20 year-old
            student and had not yet earned his bachelor’s degree). The details
            are discussed in Section 12.2. The explanation of the results led to
            the birth of Rutherford’s planetary model of atom (also called the
            nuclear model of the atom). According to this the entire positive
            charge and most of the mass of the atom is concentrated in a small
            volume called the nucleus with electrons revolving around the
            nucleus just as planets revolve around the sun. <br />
            <br />
            Rutherford’s nuclear model was a major step towards how we see the
            atom today. However, it could not explain why atoms emit light of
            only discrete wavelengths. How could an atom as simple as hydrogen,
            consisting of a single electron and a single proton, emit a complex
            spectrum of specific wavelengths? In the classical picture of an
            atom, the electron revolves round the nucleus much like the way a
            planet revolves round the sun. However, we shall see that there are
            some serious difficulties in accepting such a model.
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
    name: "Refraction at Spherical Surfaces and by Lenses",
    slug: "refraction-at-spherical-surfaces-and-by-lenses",
    subtopic: [
      {
        id: 0,
        title: "",
        text: (
          <>
            By the nineteenth century, enough evidence had accumulated in favour
            of atomic hypothesis of matter. In 1897, the experiments on electric
            discharge through gases carried out by the English physicist J. J.
            Thomson (1856 – 1940) revealed that atoms of different elements
            contain negatively charged constituents (electrons) that are
            identical for all atoms. However, atoms on a whole are electrically
            neutral. Therefore, an atom must also contain some positive charge
            to neutralise the negative charge of the electrons. But what is the
            arrangement of the positive charge and the electrons inside the
            atom? In other words, what is the structure of an atom? <br />
            <br />
            The first model of atom was proposed by J. J. Thomson in 1898.
            According to this model, the positive charge of the atom is
            uniformly distributed throughout the volume of the atom and the
            negatively charged electrons are embedded in it like seeds in a
            watermelon. This model was picturesquely called plum pudding model
            of the atom. However subsequent studies on atoms, as described in
            this chapter, showed that the distribution of the electrons and
            positive charges are very different from that proposed in this
            model. <br />
            <br />
            We know that condensed matter (solids and liquids) and dense gases
            at all temperatures emit electromagnetic radiation in which a
            continuous distribution of several wavelengths is present, though
            with different intensities. This radiation is considered to be due
            to oscillations of atoms and molecules, governed by the interaction
            of each atom or molecule with its neighbours. In contrast, light
            emitted from rarefied gases heated in a flame, or excited
            electrically in a glow tube such as the familiar neon sign or
            mercury vapour light has only certain discrete wavelengths. The
            spectrum appears as a series of bright lines. In such gases, the
            average spacing between atoms is large. Hence, the radiation emitted
            can be considered due to individual atoms rather than because of
            interactions between atoms or molecules. <br />
            <br />
            In the early nineteenth century it was also established that each
            element is associated with a characteristic spectrum of radiation,
            for example, hydrogen always gives a set of lines with fixed
            relative position between the lines. This fact suggested an intimate
            relationship between the internal structure of an atom and the
            spectrum of radiation emitted by it. In 1885, Johann Jakob Balmer
            (1825 – 1898) obtained a simple empirical formula which gave the
            wavelengths of a group of lines emitted by atomic hydrogen. Since
            hydrogen is simplest of the elements known, we shall consider its
            spectrum in detail in this chapter. <br />
            <br />
            Ernst Rutherford (1871–1937), a former research student of J. J.
            Thomson, was engaged in experiments on <InlineMath math="\alpha" />
            -particles emitted by some radioactive elements. In 1906, he
            proposed a classic experiment of scattering of these{" "}
            <InlineMath math="\alpha" />
            -particles by atoms to investigate the atomic structure. This
            experiment was later performed around 1911 by Hans Geiger
            (1882–1945) and Ernst Marsden (1889–1970, who was 20 year-old
            student and had not yet earned his bachelor’s degree). The details
            are discussed in Section 12.2. The explanation of the results led to
            the birth of Rutherford’s planetary model of atom (also called the
            nuclear model of the atom). According to this the entire positive
            charge and most of the mass of the atom is concentrated in a small
            volume called the nucleus with electrons revolving around the
            nucleus just as planets revolve around the sun. <br />
            <br />
            Rutherford’s nuclear model was a major step towards how we see the
            atom today. However, it could not explain why atoms emit light of
            only discrete wavelengths. How could an atom as simple as hydrogen,
            consisting of a single electron and a single proton, emit a complex
            spectrum of specific wavelengths? In the classical picture of an
            atom, the electron revolves round the nucleus much like the way a
            planet revolves round the sun. However, we shall see that there are
            some serious difficulties in accepting such a model.
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
    name: "Refraction through a Prism",
    slug: "refraction-through-a-prism",
    subtopic: [
      {
        id: 0,
        title: "",
        text: (
          <>
            By the nineteenth century, enough evidence had accumulated in favour
            of atomic hypothesis of matter. In 1897, the experiments on electric
            discharge through gases carried out by the English physicist J. J.
            Thomson (1856 – 1940) revealed that atoms of different elements
            contain negatively charged constituents (electrons) that are
            identical for all atoms. However, atoms on a whole are electrically
            neutral. Therefore, an atom must also contain some positive charge
            to neutralise the negative charge of the electrons. But what is the
            arrangement of the positive charge and the electrons inside the
            atom? In other words, what is the structure of an atom? <br />
            <br />
            The first model of atom was proposed by J. J. Thomson in 1898.
            According to this model, the positive charge of the atom is
            uniformly distributed throughout the volume of the atom and the
            negatively charged electrons are embedded in it like seeds in a
            watermelon. This model was picturesquely called plum pudding model
            of the atom. However subsequent studies on atoms, as described in
            this chapter, showed that the distribution of the electrons and
            positive charges are very different from that proposed in this
            model. <br />
            <br />
            We know that condensed matter (solids and liquids) and dense gases
            at all temperatures emit electromagnetic radiation in which a
            continuous distribution of several wavelengths is present, though
            with different intensities. This radiation is considered to be due
            to oscillations of atoms and molecules, governed by the interaction
            of each atom or molecule with its neighbours. In contrast, light
            emitted from rarefied gases heated in a flame, or excited
            electrically in a glow tube such as the familiar neon sign or
            mercury vapour light has only certain discrete wavelengths. The
            spectrum appears as a series of bright lines. In such gases, the
            average spacing between atoms is large. Hence, the radiation emitted
            can be considered due to individual atoms rather than because of
            interactions between atoms or molecules. <br />
            <br />
            In the early nineteenth century it was also established that each
            element is associated with a characteristic spectrum of radiation,
            for example, hydrogen always gives a set of lines with fixed
            relative position between the lines. This fact suggested an intimate
            relationship between the internal structure of an atom and the
            spectrum of radiation emitted by it. In 1885, Johann Jakob Balmer
            (1825 – 1898) obtained a simple empirical formula which gave the
            wavelengths of a group of lines emitted by atomic hydrogen. Since
            hydrogen is simplest of the elements known, we shall consider its
            spectrum in detail in this chapter. <br />
            <br />
            Ernst Rutherford (1871–1937), a former research student of J. J.
            Thomson, was engaged in experiments on <InlineMath math="\alpha" />
            -particles emitted by some radioactive elements. In 1906, he
            proposed a classic experiment of scattering of these{" "}
            <InlineMath math="\alpha" />
            -particles by atoms to investigate the atomic structure. This
            experiment was later performed around 1911 by Hans Geiger
            (1882–1945) and Ernst Marsden (1889–1970, who was 20 year-old
            student and had not yet earned his bachelor’s degree). The details
            are discussed in Section 12.2. The explanation of the results led to
            the birth of Rutherford’s planetary model of atom (also called the
            nuclear model of the atom). According to this the entire positive
            charge and most of the mass of the atom is concentrated in a small
            volume called the nucleus with electrons revolving around the
            nucleus just as planets revolve around the sun. <br />
            <br />
            Rutherford’s nuclear model was a major step towards how we see the
            atom today. However, it could not explain why atoms emit light of
            only discrete wavelengths. How could an atom as simple as hydrogen,
            consisting of a single electron and a single proton, emit a complex
            spectrum of specific wavelengths? In the classical picture of an
            atom, the electron revolves round the nucleus much like the way a
            planet revolves round the sun. However, we shall see that there are
            some serious difficulties in accepting such a model.
          </>
        ),
        image: [],
      },
    ],
    isLab: false,
    lab: "",
  },
  {
    id: 7,
    name: "Optical Instruments",
    slug: "optical-instruments",
    subtopic: [
      {
        id: 0,
        title: "",
        text: (
          <>
            By the nineteenth century, enough evidence had accumulated in favour
            of atomic hypothesis of matter. In 1897, the experiments on electric
            discharge through gases carried out by the English physicist J. J.
            Thomson (1856 – 1940) revealed that atoms of different elements
            contain negatively charged constituents (electrons) that are
            identical for all atoms. However, atoms on a whole are electrically
            neutral. Therefore, an atom must also contain some positive charge
            to neutralise the negative charge of the electrons. But what is the
            arrangement of the positive charge and the electrons inside the
            atom? In other words, what is the structure of an atom? <br />
            <br />
            The first model of atom was proposed by J. J. Thomson in 1898.
            According to this model, the positive charge of the atom is
            uniformly distributed throughout the volume of the atom and the
            negatively charged electrons are embedded in it like seeds in a
            watermelon. This model was picturesquely called plum pudding model
            of the atom. However subsequent studies on atoms, as described in
            this chapter, showed that the distribution of the electrons and
            positive charges are very different from that proposed in this
            model. <br />
            <br />
            We know that condensed matter (solids and liquids) and dense gases
            at all temperatures emit electromagnetic radiation in which a
            continuous distribution of several wavelengths is present, though
            with different intensities. This radiation is considered to be due
            to oscillations of atoms and molecules, governed by the interaction
            of each atom or molecule with its neighbours. In contrast, light
            emitted from rarefied gases heated in a flame, or excited
            electrically in a glow tube such as the familiar neon sign or
            mercury vapour light has only certain discrete wavelengths. The
            spectrum appears as a series of bright lines. In such gases, the
            average spacing between atoms is large. Hence, the radiation emitted
            can be considered due to individual atoms rather than because of
            interactions between atoms or molecules. <br />
            <br />
            In the early nineteenth century it was also established that each
            element is associated with a characteristic spectrum of radiation,
            for example, hydrogen always gives a set of lines with fixed
            relative position between the lines. This fact suggested an intimate
            relationship between the internal structure of an atom and the
            spectrum of radiation emitted by it. In 1885, Johann Jakob Balmer
            (1825 – 1898) obtained a simple empirical formula which gave the
            wavelengths of a group of lines emitted by atomic hydrogen. Since
            hydrogen is simplest of the elements known, we shall consider its
            spectrum in detail in this chapter. <br />
            <br />
            Ernst Rutherford (1871–1937), a former research student of J. J.
            Thomson, was engaged in experiments on <InlineMath math="\alpha" />
            -particles emitted by some radioactive elements. In 1906, he
            proposed a classic experiment of scattering of these{" "}
            <InlineMath math="\alpha" />
            -particles by atoms to investigate the atomic structure. This
            experiment was later performed around 1911 by Hans Geiger
            (1882–1945) and Ernst Marsden (1889–1970, who was 20 year-old
            student and had not yet earned his bachelor’s degree). The details
            are discussed in Section 12.2. The explanation of the results led to
            the birth of Rutherford’s planetary model of atom (also called the
            nuclear model of the atom). According to this the entire positive
            charge and most of the mass of the atom is concentrated in a small
            volume called the nucleus with electrons revolving around the
            nucleus just as planets revolve around the sun. <br />
            <br />
            Rutherford’s nuclear model was a major step towards how we see the
            atom today. However, it could not explain why atoms emit light of
            only discrete wavelengths. How could an atom as simple as hydrogen,
            consisting of a single electron and a single proton, emit a complex
            spectrum of specific wavelengths? In the classical picture of an
            atom, the electron revolves round the nucleus much like the way a
            planet revolves round the sun. However, we shall see that there are
            some serious difficulties in accepting such a model.
          </>
        ),
        image: [],
      },
    ],
    isLab: false,
    lab: "",
  },
];

export default RayOpticsData;
