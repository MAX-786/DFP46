from manim import *

class CreateDiagram(Animation):
    def __init__(self, mobject, **kwargs):
        super().__init__(mobject,run_time = 2, **kwargs)

    def interpolate_submobject(self, submobject, starting_submobject, alpha):
        submobject.become(starting_submobject.copy().fade(alpha))

class PNJunction(Scene):
    def construct(self):
        title = Text("p-n Junction Formation", font_size=30)
        title.to_edge(UP)
        pn_text1 = """
        A p-n junction is formed when a p-type silicon semiconductor wafer is doped with a small quantity 
        of pentavalent impurity, converting part of it into n-type silicon. During the formation of this 
        junction, two key processes occur: diffusion and drift.
        
        In diffusion, due to the concentration 
        gradient, holes move from the p-side to the n-side, and electrons move from the n-side to the 
        p-side. This movement of charge carriers creates a diffusion current.
        """

        pn_text2 = """
        As electrons move from the n-side to the p-side, they leave behind an ionized donor (+ve charge) 
        on the n-side, creating a +ve space-charge region. Similarly, as holes move from the p-side to 
        the n-side, they leave behind an ionized acceptor (-ve charge) on the p-side, creating a -ve 
        space-charge region. Together, these regions form the depletion region. An electric field develops 
        due to these space-charge regions, causing electrons on the p-side to move to the n-side and holes on 
        the n-side to move to the p-side. This movement, known as drift, creates a drift current opposite to 
        the diffusion current.
        """

        pn_text3 = """
        Initially, the diffusion current is larger than the drift current. However, as diffusion continues, 
        the space-charge regions extend, increasing the electric field strength and hence the drift current. 
        This continues until the diffusion current equals the drift current, at which point the p-n junction 
        is formed and there is no net current under equilibrium. The movement of electrons from the n-region 
        to the p-region creates a potential difference across the junction, known as the barrier potential. 
        """
        pn_text1 = Text(pn_text1, font_size=24, line_spacing=1.2).scale(0.8)
        pn_text1.to_edge(LEFT, buff=1)
        pn_text2 = Text(pn_text2, font_size=24, line_spacing=1.2).scale(0.8)
        pn_text2.to_edge(LEFT, buff=1)
        pn_text3 = Text(pn_text3, font_size=24, line_spacing=1.2).scale(0.8)
        pn_text3.to_edge(LEFT, buff=1)

        pn_diagram = Group(
            Line((-4, 0, 0), (0, 0, 0), color=BLUE),
            Line((0, 0, 0), (4, 0, 0), color=RED),
            Dot((-4, 0, 0), color=BLUE),
            Dot((4, 0, 0), color=RED),
            Text("p-type", font_size=24).next_to(Dot((-4, 0, 0)), DOWN),
            Text("n-type", font_size=24).next_to(Dot((4, 0, 0)), DOWN),
            Text("Depletion Region", font_size=24).next_to(ORIGIN, UP),
            Rectangle(width=2, height=4, color=WHITE).shift((0, 0, 0)),
            Arrow(LEFT * 2, RIGHT * 2, color=YELLOW).add_tip(tip_length=0.2).next_to(ORIGIN, UP).shift(UP),
            Arrow(RIGHT * 2, LEFT * 2, color=YELLOW).add_tip(tip_length=0.2).next_to(ORIGIN, DOWN).shift(DOWN),
            Text("Diffusion Current", font_size=20, color=YELLOW).next_to(ORIGIN, UP * 2).shift(UP),
            Text("Drift Current", font_size=20, color=YELLOW).next_to(ORIGIN, DOWN * 2).shift(DOWN)
        )
        pn_diagram.scale(0.8)


        self.play(Write(title))
        self.play(Write(pn_text1))
        self.wait(2)
        self.play(FadeOut(pn_text1))
        self.play(Write(pn_text2))
        self.wait(2)
        self.play(FadeOut(pn_text2))
        self.play(Write(pn_text3))
        self.wait(2)
        self.play(FadeOut(pn_text3))
        self.wait(1)
        self.play(CreateDiagram(pn_diagram))
        self.clear()


class SemiconductorDiode(Scene):
    def construct(self):
        title = Text("Semiconductor Diode", font_size=30)
        title.to_edge(UP)

        diode_text = """
        A semiconductor diode is basically a p-n junction with metallic contacts
        provided at the ends for the application of an external voltage.
        It is a two terminal device.
        """
        diode_text = Text(diode_text, font_size=24).scale(1)
        diode_text.to_edge(LEFT, buff=1)

        self.play(Write(title))
        self.wait(1)
        self.play(Write(diode_text))
        self.wait(1)
        self.clear()
        
        subtitle = Text("Forward Bias",font_size=30)
        subtitle.to_edge(UP)

        text = """

            \\begin{itemize}
            \\item \\textbf{Applied Voltage Direction}: In forward bias, the positive terminal of the external voltage source 
            is connected to the p-side of the diode, and the negative terminal is connected to the n-side.\\vspace{0.3cm}
            
            \\item \\textbf{Barrier Potential}: The applied voltage opposes the built-in potential of the diode, reducing 
            the barrier height.\\vspace{0.3cm}
            
            \\item \\textbf{Current Flow}: Electrons from the n-side and holes from the p-side are injected across the 
            junction, leading to significant current flow.\\vspace{0.3cm}
            
            \\item \\textbf{Minority Carrier Injection}: Minority carriers (electrons in the p-side and holes in the n-side) 
            are injected across the junction due to the applied voltage, leading to increased carrier concentration 
            near the junction.\\vspace{0.3cm}
            
            \\item \\textbf{Diffusion Current}: The motion of injected carriers results in diffusion current, contributing 
            to the overall forward current.\\vspace{0.3cm}
            
            \\item \\textbf{Voltage-Current Relationship}: Initially, the current remains low until the applied voltage 
            exceeds the threshold voltage, after which the current increases exponentially with voltage.
            \\end{itemize}
        """

        text = Tex(text, font_size=24).scale(1)
        text.to_edge(LEFT, buff=1)
        self.play(Write(subtitle))
        self.wait(1);
        self.play(Write(text))
        self.wait(2)
        self.play(FadeOut(text))

        forward_bias_diagram = Group(
            Line((-4, 0, 0), (4, 0, 0), color=BLUE),
            Dot((-4, 0, 0), color=BLUE),
            Dot((4, 0, 0), color=RED),
            Text("p-side", font_size=24).next_to(Dot((-4, 0, 0)), DOWN),
            Text("n-side", font_size=24).next_to(Dot((4, 0, 0)), DOWN),
            Text("+", font_size=24).next_to(Dot((-4, 0, 0)), UP),
            Text("-", font_size=24).next_to(Dot((4, 0, 0)), UP),
            Arrow(start=(-2, 0, 0), end=(2, 0, 0), buff=0),
            Text("Applied Voltage", font_size=24).next_to(ORIGIN, UP),
            Text("Depletion Region", font_size=24).next_to(ORIGIN + 2, UP),
            Rectangle(width=1, height=4, color=WHITE).shift((0, 0, 0))
        )
        forward_bias_diagram.scale(0.8)

        self.play(CreateDiagram(forward_bias_diagram))
        # self.wait(2)
        self.clear()




        subtitle = Text("Reverse Bias",font_size=30)
        subtitle.to_edge(UP)

        text = """
            \\begin{itemize}
            \\item \\textbf{Applied Voltage Direction}: In reverse bias, the positive terminal of the external voltage source 
            is connected to the n-side of the diode, and the negative terminal is connected to the p-side.\\vspace{0.3cm}
            
            \\item \\textbf{Barrier Potential}: The applied voltage aids the built-in potential, increasing the barrier height.\\vspace{0.3cm}
            
            \\item \\textbf{Current Flow}: The majority of the applied voltage drops across the depletion region, suppressing 
            current flow due to the widened depletion region.\\vspace{0.3cm}
            
            \\item \\textbf{Minority Carrier Drift}: Minority carriers are swept away from the junction due to the electric 
            field, resulting in a small drift current.\\vspace{0.3cm}
            
            \\item \\textbf{Voltage-Current Relationship}: The reverse current remains low and almost constant with minor 
            variations in applied voltage until it reaches the breakdown voltage. Beyond the breakdown voltage, 
            the reverse current increases sharply, potentially leading to diode destruction.
            \\end{itemize}
        """

        text = Tex(text, font_size=24).scale(1)
        text.to_edge(LEFT, buff=1)
        self.play(Write(subtitle))
        self.wait(1);
        self.play(Write(text))
        self.wait(2)
        self.play(FadeOut(text))


        reverse_bias_diagram = Group(
            Line((-4, 0, 0), (4, 0, 0), color=BLUE),
            Dot((-4, 0, 0), color=RED),
            Dot((4, 0, 0), color=BLUE),
            Text("n-side", font_size=24).next_to(Dot((-4, 0, 0)), DOWN),
            Text("p-side", font_size=24).next_to(Dot((4, 0, 0)), DOWN),
            Text("+", font_size=24).next_to(Dot((-4, 0, 0)), UP),
            Text("-", font_size=24).next_to(Dot((4, 0, 0)), UP),
            Arrow(start=(2, 0, 0), end=(-2, 0, 0), buff=0),
            Text("Applied Voltage", font_size=24).next_to(ORIGIN, UP),
            Text("Depletion Region", font_size=24).next_to(ORIGIN+2, UP),
            Rectangle(width=3, height=4, color=WHITE).shift((0, 0, 0))
        )
        reverse_bias_diagram.scale(0.8)

        self.play(CreateDiagram(reverse_bias_diagram))
        # self.wait(2)
        self.clear()


        subtitle = Text("Difference: Forward & Reverse bias",font_size=30)
        subtitle.to_edge(UP)

        forward_bias_diagram = Group(
            Line((-4, 0, 0), (4, 0, 0), color=BLUE),
            Dot((-4, 0, 0), color=BLUE),
            Dot((4, 0, 0), color=RED),
            Text("p-side", font_size=24).next_to(Dot((-4, 0, 0)), DOWN),
            Text("n-side", font_size=24).next_to(Dot((4, 0, 0)), DOWN),
            Text("+", font_size=24).next_to(Dot((-4, 0, 0)), UP),
            Text("-", font_size=24).next_to(Dot((4, 0, 0)), UP),
            Arrow(start=(-2, 0, 0), end=(2, 0, 0), buff=0),
            Text("Applied Voltage", font_size=24).next_to(ORIGIN, UP),
            Text("Depletion Region", font_size=24).next_to(ORIGIN + 2, UP),
            Text("Forward bias", font_size=24).next_to(ORIGIN - 3, UP),
            Rectangle(width=1, height=4, color=WHITE).shift((0, 0, 0))
        )

        forward_bias_diagram.to_edge(LEFT,buff=1).scale(0.8)


        reverse_bias_diagram = Group(
            Line((-4, 0, 0), (4, 0, 0), color=BLUE),
            Dot((-4, 0, 0), color=RED),
            Dot((4, 0, 0), color=BLUE),
            Text("n-side", font_size=24).next_to(Dot((-4, 0, 0)), DOWN),
            Text("p-side", font_size=24).next_to(Dot((4, 0, 0)), DOWN),
            Text("+", font_size=24).next_to(Dot((-4, 0, 0)), UP),
            Text("-", font_size=24).next_to(Dot((4, 0, 0)), UP),
            Arrow(start=(2, 0, 0), end=(-2, 0, 0), buff=0),
            Text("Applied Voltage", font_size=24).next_to(ORIGIN, UP),
            Text("Depletion Region", font_size=24).next_to(ORIGIN+2, UP),
            Text("Reverse bias", font_size=24).next_to(ORIGIN-3, UP),
            Rectangle(width=3, height=4, color=WHITE).shift((0, 0, 0))
        )
        reverse_bias_diagram.to_edge(RIGHT, buff=1).scale(0.8)

        self.play(Write(subtitle))
        self.wait(0.5)
        self.play(CreateDiagram(forward_bias_diagram))
        # self.wait(1)
        self.play(CreateDiagram(reverse_bias_diagram))
        # self.wait(1)
        self.play(FadeOut(subtitle))

        self.wait(1)
        self.clear()



# class Formulas(Scene):
#     def construct(self):
#         title = Text("Formulas and Notation", font_size=30)
#         title.to_edge(UP)
#         formula_text = """
#         The dynamic resistance of diodes is defined as the ratio of a small change in voltage to a 
#         small change in current. The V-I characteristics of a diode can be studied by connecting it 
#         to a battery through a potentiometer and noting the current for different voltage values. 
#         The forward bias measurement uses a milliammeter, while the reverse bias uses a micrometer 
#         due to the difference in expected current. The threshold or cut-in voltage is ~0.2V for a 
#         germanium diode and ~0.7V for a silicon diode. The reverse saturation current is very small 
#         and almost constant with a change in bias. However, at very high reverse bias (breakdown 
#         voltage), the current suddenly increases. For diodes, dynamic resistance is the ratio of 
#         small change in the ∆V to a small change in current ∆I: rd = ∆V/∆I
#         """
#         formula_text = Text(formula_text, font_size=24, line_spacing=1.2).scale(0.8)
#         formula_text.to_edge(LEFT, buff=1)

#         self.play(Write(title))
#         self.play(Write(formula_text))
