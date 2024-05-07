from manim import *

class IntrinsicExtrinsic(Scene):
    def construct(self):
        self.clear()

        # Title
        title = Text('''Intrinsic Semiconductors''').scale(1)
        self.play(Write(title))
        self.wait(0.5)
        self.play(FadeOut(title))

        # Text for T=0K
        t0k_text = '''''''''
        At T= 0K, 
        intrinsic semiconductors behave like insulators.
        All the electrons are in the valence band, indicating that no current can flow.
        '''''''''
        t0k_text_obj = Text(t0k_text, font_size=24).to_edge(DOWN)

        # Text for T > 0K
        t_gt_0k_text = '''''''''
        At T > 0K, 
        thermally generated electron-hole pairs are present.
        Some electrons move to the conduction band, while others remain in the valence band.
        '''''''''
        t_gt_0k_text_obj = Text(t_gt_0k_text, font_size=24).to_edge(DOWN)

        # Draw valence band and conduction band
        bands = VGroup(
            Rectangle(width=6, height=1, color=BLUE),
            Rectangle(width=6, height=1, color=BLUE),
        )
        bands.arrange(DOWN, buff=0.5)

        labels = VGroup(
            Text('''Valence Band''', font_size=24),
            Text('''Conduction Band''', font_size=24),
        )
        labels.arrange(DOWN, buff=1)

        # Draw electrons in valence band for T=0K
        electrons_t0k = VGroup(*[Dot(radius=0.1, color=YELLOW) for _ in range(8)])
        electrons_t0k.arrange(RIGHT, buff=0.5)
        electrons_t0k.move_to(bands[0])

        # Move some electrons to conduction band for T > 0K
        electrons_t_gt_0k = VGroup(*[Dot(radius=0.1, color=YELLOW) for _ in range(3)])
        electrons_t_gt_0k.arrange(RIGHT, buff=0.5)
        electrons_t_gt_0k.shift(DOWN * 0.5)

        # Animation for T=0K
        self.play(Write(t0k_text_obj), Create(bands), Create(labels), Create(electrons_t0k))
        self.wait(1)

        # Remove T=0K text
        self.play(FadeOut(t0k_text_obj))
        self.play(FadeOut(electrons_t0k))

        electrons_t0k = VGroup(*[Dot(radius=0.1, color=YELLOW) for _ in range(5)])
        electrons_t0k.arrange(RIGHT, buff=0.5)
        electrons_t0k.move_to(bands[0])

        # Animation for T > 0K
        self.play(Write(t_gt_0k_text_obj), Create(electrons_t0k), Create(electrons_t_gt_0k))
        self.wait(1)

        self.clear()

        #Extrinsic semiconductor
        # Title
        title2 = Text('''Extrinsic Semiconductors''').scale(1)
        self.play(Write(title2))
        self.wait(0.5)
        self.play(FadeOut(title2))

        equilibrium = Text("Equilibrium Concentration Equation").scale(0.5).to_edge(UP)
        self.play(Write(equilibrium))
        self.wait(0.5)
        equilibrium_eq = MathTex(r"n_e \cdot n_h = n_i^2").scale(1)

        # Position the equation
        equilibrium_eq.next_to(equilibrium, DOWN)
        framebox1 = SurroundingRectangle(equilibrium_eq, buff=.1)

        eq_symbols = VGroup(
            MathTex(r"n_e : \text{electron concentration}", font_size=24),
            MathTex(r"n_h : \text{hole concentration}", font_size=24),
            MathTex(r"n_i : \text{intrinsic carrier concentration}", font_size=24),
        )
        eq_symbols.arrange(DOWN, buff=0.5)

        # Position the symbols below the equation
        eq_symbols.next_to(equilibrium_eq, DOWN)

        self.play(Write(equilibrium_eq))
        self.play(Create(framebox1))
        self.wait(0.5)
        self.play(Create(eq_symbols))
        self.wait(0.5)
        self.play(FadeOut(framebox1))
        self.play(FadeOut(equilibrium))
        self.play(FadeOut(equilibrium_eq))
        self.play(FadeOut(eq_symbols))
        

        subtitle = Text('''n-type Semiconductors''').scale(0.8).to_edge(UP)
        self.play(Write(subtitle))
        self.wait(0.5)


        # Text for T > 0K
        t_gt_0k_text = '''At T > 0K, 
        one thermally generated electron-hole pair +9 electrons from donor atoms
        '''
        t_gt_0k_text_obj = Text(t_gt_0k_text, font_size=24).to_edge(DOWN)

        # Draw valence band and conduction band
        bands = VGroup(
            Rectangle(width=6, height=1, color=BLUE),
            Rectangle(width=6, height=1, color=BLUE),
        )
        bands.arrange(DOWN, buff=0.5)

        labels = VGroup(
            Text('''Valence Band''', font_size=24),
            Text('''Conduction Band''', font_size=24),
        )
        labels.arrange(DOWN, buff=1)

        # Draw electrons in valence band for T>0K
        electrons_t0k = VGroup(*[Dot(radius=0.1, color=YELLOW) for _ in range(8)], *[Dot(radius=0.1, color=WHITE) for _ in range(1)])
        electrons_t0k.arrange(RIGHT, buff=0.5)
        electrons_t0k.move_to(bands[0])

        # Draw electrons in conduction band for T>0K
        electrons_t0kV = VGroup(*[Dot(radius=0.1, color=YELLOW) for _ in range(8)])
        electrons_t0kV.arrange(RIGHT, buff=0.5)
        electrons_t0kV.move_to(bands[1])

        # Animation for T>k
        self.play(Write(t_gt_0k_text_obj), Create(bands), Create(labels), Create(electrons_t0k), Create(electrons_t0kV))
        self.wait(1)
        

        self.clear()

        subtitle = Text('''p-type Semiconductors''').scale(0.8).to_edge(UP)
        self.play(Write(subtitle))
        self.wait(0.5)


        # Text for T > 0K
        t_gt_0k_text = '''At T > 0K, '''
        t_gt_0k_text_obj = Text(t_gt_0k_text, font_size=24).to_edge(DOWN)

        # Draw valence band and conduction band
        bands = VGroup(
            Rectangle(width=6, height=1, color=BLUE),
            Rectangle(width=6, height=1, color=BLUE),
        )
        bands.arrange(DOWN, buff=0.5)

        labels = VGroup(
            Text('''Valence Band''', font_size=24),
            Text('''Conduction Band''', font_size=24),
        )
        labels.arrange(DOWN, buff=1)

        # Draw electrons in valence band for T>0K
        electrons_t0k = VGroup(*[Dot(radius=0.1, color=YELLOW) for _ in range(3)], *[Dot(radius=0.1, color=WHITE) for _ in range(5)])
        electrons_t0k.arrange(RIGHT, buff=0.5)
        electrons_t0k.move_to(bands[0])

        # Draw electrons in conduction band for T>0K
        electrons_t0kV = VGroup(*[Dot(radius=0.1, color=YELLOW) for _ in range(1)])
        electrons_t0kV.arrange(RIGHT, buff=0.5)
        electrons_t0kV.move_to(bands[1])

        # Animation for T>k
        self.play(Write(t_gt_0k_text_obj), Create(bands), Create(labels), Create(electrons_t0k), Create(electrons_t0kV))
        self.wait(2)
        

        self.clear()
    

if __name__ == '''__main__''':
    os.system('''manim -pql typesOfSemiconductor.py IntrinsicExtrinsic''')
