from manim import *

class ElectronOrbits(Scene):
    def construct(self):
        # Title
        title = Text("Electron orbits").scale(1.2).to_edge(UP)

        self.play(Write(title))
        self.wait(0.5)
        
        rutherford_model_text = """
            The Rutherford nuclear model of the atom which involves classical
            concepts, pictures the atom as an electrically neutral sphere
            consisting of a very small, massive and positively charged nucleus
            at the centre surrounded by the revolving electrons in their
            respective dynamically stable orbits. The electrostatic force of
            attraction, Fe between the revolving electrons and the nucleus
            provides the requisite centripetal force (Fc) to keep them in their orbits.
            Thus, for a dynamically stable orbit in a hydrogen atom Fe = Fc.
        """
        rutherford_model_tex = Tex(rutherford_model_text).scale(0.6)

        text = MathTex(
            "\\frac{1}{4\\pi\\epsilon_0} \\frac{e^2}{r^2}", "=", "\\frac{mv^2}{r}"
        )
        text = text.next_to(rutherford_model_tex, DOWN).scale(0.8)

        self.play(Write(rutherford_model_tex))
        self.wait(1)

        self.play(Write(text))
        framebox1 = SurroundingRectangle(text[0], buff=.1)
        framebox2 = SurroundingRectangle(text[2], buff=.1)
        self.play(Create(framebox1))
        # self.wait()
        self.play(ReplacementTransform(framebox1, framebox2))

        self.play(FadeOut(framebox1)) 
        self.play(FadeOut(framebox2)) 
        self.play(FadeOut(rutherford_model_tex))
        self.play(FadeOut(text)) 


        inf = """
            Thus the relation between the orbit radius and the electron velocity is: 
        """
        info = Tex(inf).next_to(title, DOWN, buff=0.5).scale(0.6)

        text = MathTex(
            "r = \\frac{e^2}{4\\pi\\epsilon_0mv^2}"
        )
        text = text.scale(0.8).next_to(info, DOWN)

        self.play(Write(info))
        self.play(Write(text))

        framebox1 = SurroundingRectangle(text[0], buff=.1)
        self.play(Create(framebox1))
        # self.wait()
        self.play(FadeOut(framebox1)) 
        self.play(FadeOut(info)) 
        self.play(FadeOut(text)) 

        inf = """
        The Kinetic energy(K) and electrostatic potential energy(U) of the electron in hydrogen atom are: 
        """
        info = Tex(inf).next_to(title, DOWN, buff=0.5).scale(0.6)

        text = MathTex(
            "K = \\frac{1}{2}mv^2", "=", "\\frac{e^2}{8\\pi\\epsilon_0r}"
        )
        text = text.scale(0.8).next_to(info, DOWN)

        text2 = MathTex(
            "U = -\\frac{e^2}{4\\pi\\epsilon_0r}"
        )
        text2 = text2.next_to(text, DOWN).scale(0.8)


        framebox1 = SurroundingRectangle(text[0], buff=.1)
        framebox2 = SurroundingRectangle(text[2], buff=.1)
        framebox3 = SurroundingRectangle(text2[0], buff=.1)
        self.play(Write(info))
        self.play(Write(text))
        self.wait()
        self.play(Create(framebox1))
        # self.wait()
        self.play(ReplacementTransform(framebox1, framebox2))
        # self.wait()
        self.play(FadeOut(framebox1)) 
        self.play(FadeOut(framebox2)) 

        self.play(Write(text2))
        self.play(Create(framebox3))
        # self.wait()
        self.play(FadeOut(framebox3)) 
        self.play(FadeOut(info)) 
        self.play(FadeOut(text)) 
        self.play(FadeOut(text2)) 


        inf = """
        The total energy E of the elctron in a hydrogen atom is: 
        """
        info = Tex(inf).next_to(title, DOWN, buff=0.5).scale(0.6)

        text = MathTex(
            "E = K + U", "=", "\\frac{e^2}{8\\pi\\epsilon_0r} - \\frac{e^2}{4\\pi\\epsilon_0r}"
        )
        text = text.next_to(info, DOWN).scale(0.8)

        textf = MathTex(
            "E= -\\frac{e^2}{8\\pi\\epsilon_0r}"
        )
        textf = textf.next_to(text, DOWN).scale(0.8)



        framebox1 = SurroundingRectangle(text[0], buff=.1)
        framebox2 = SurroundingRectangle(text[2], buff=.1)
        framebox3 = SurroundingRectangle(text2[0], buff=.1)

        self.play(Write(info))
        self.play(Write(text))
        self.play(Create(framebox1))
        # self.wait()
        self.play(ReplacementTransform(framebox1, framebox2))
        # self.wait()
        self.play(FadeOut(framebox1)) 
        self.play(FadeOut(framebox2))

        self.play(Write(textf))
        # self.play(Create(framebox3))
        # self.wait()
        # self.play(FadeOut(framebox3)) 
        self.play(FadeOut(info)) 
        self.play(FadeOut(text)) 
        self.play(FadeOut(textf)) 

        self.clear()


