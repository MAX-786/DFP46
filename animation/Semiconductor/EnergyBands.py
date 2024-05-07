
from manim import *

class EnergyBands(Scene):
    def construct(self):
        # Title
        title = Text("Classification of Materials by Energy Bands", font_size=30)
        self.play(Write(title))
        self.clear()

        # Case 1: Metals
        metal_title = Text("Case I: Metals", font_size=24).to_edge(UP)
        metal_description = Text("Conduction band partially filled; Valence band partially empty or overlap\nElectrons easily move between bands\nLow resistance, high conductivity", font_size=20).next_to(metal_title, DOWN)
        metal_axes = Axes(
            x_range=[0, 10],
            y_range=[0, 5],
            axis_config={"color": BLUE},
            tips=False
        ).scale(0.8).to_edge(DOWN)
        metal_axes.y_axis_label = Text("Energy Gap (Eg)", font_size=18, color=BLUE).next_to(metal_axes.y_axis, LEFT, buff=0.1)

        metal_valence_band = Rectangle(width=6, height=1, color=YELLOW, fill_opacity=0.5).move_to(metal_axes.coords_to_point(3, 1.5))
        metal_conduction_band = Rectangle(width=6, height=1, color=BLUE, fill_opacity=0.5).move_to(metal_axes.coords_to_point(3, 1.8))
        metal_eg_label = Text("Eg ~ 0", font_size=18).next_to(metal_axes.coords_to_point(7, 2.5), RIGHT)

        metal_valence_band_label = Text("Valence Band", font_size=18).next_to(metal_valence_band, DOWN)
        metal_conduction_band_label = Text("Conduction Band", font_size=18).next_to(metal_conduction_band, UP)

        self.play(Write(metal_title), Write(metal_description), Write(metal_axes), Write(metal_valence_band), Write(metal_conduction_band), Write(metal_eg_label), Write(metal_valence_band_label), Write(metal_conduction_band_label), Write(metal_axes.y_axis_label), run_time=2)
        self.wait(2)

        self.clear()

        # Case 2: Semiconductors
        semiconductor_title = Text("Case II: Semiconductors", font_size=24).to_edge(UP)
        semiconductor_description = Text("Small band gap (Eg < 3 eV); Some electrons can be excited across gap\nLower resistance compared to insulators", font_size=20).next_to(semiconductor_title, DOWN)

        semiconductor_axes = metal_axes.copy().next_to(semiconductor_description, DOWN)
        semiconductor_valence_band = metal_valence_band.copy().next_to(semiconductor_axes.coords_to_point(3, 1.5), DOWN)
        semiconductor_conduction_band = metal_conduction_band.copy().next_to(semiconductor_axes.coords_to_point(3, 3.5), DOWN)
        semiconductor_eg_label = Text("Eg < 3 eV", font_size=18).next_to(semiconductor_axes.coords_to_point(7, 2.5), RIGHT)

        semiconductor_valence_band_label = Text("Valence Band", font_size=18).next_to(semiconductor_valence_band, DOWN)
        semiconductor_conduction_band_label = Text("Conduction Band", font_size=18).next_to(semiconductor_conduction_band, UP)

        self.play(Write(semiconductor_title), Write(semiconductor_description), Write(semiconductor_axes), Write(semiconductor_valence_band), Write(semiconductor_conduction_band), Write(semiconductor_eg_label), Write(semiconductor_valence_band_label), Write(semiconductor_conduction_band_label), Write(semiconductor_axes.y_axis_label), run_time=2)
        self.wait(2)

        self.clear()

        # Case 3: Insulators
        insulator_title = Text("Case III: Insulators", font_size=24).to_edge(UP)
        insulator_description = Text("Large band gap (Eg > 3 eV); No electrons in conduction band\nNo electrical conduction\nElectrons cannot be excited across gap", font_size=20).next_to(insulator_title, DOWN)

        insulator_axes = metal_axes.copy().next_to(insulator_description, DOWN)
        insulator_valence_band = metal_valence_band.copy().next_to(insulator_axes.coords_to_point(3, 1.5), DOWN)
        insulator_conduction_band = Rectangle(width=6, height=1, color=BLUE, fill_opacity=0).move_to(insulator_axes.coords_to_point(3, 3.5))
        insulator_eg_label = Text("Eg > 3 eV", font_size=18).next_to(insulator_axes.coords_to_point(7, 2.5), RIGHT)

        insulator_valence_band_label = Text("Valence Band", font_size=18).next_to(insulator_valence_band, DOWN)
        insulator_conduction_band_label = Text("Conduction Band", font_size=18).next_to(insulator_conduction_band, UP)

        self.play(Write(insulator_title), Write(insulator_description), Write(insulator_axes), Write(insulator_valence_band), Write(insulator_conduction_band), Write(insulator_eg_label), Write(insulator_valence_band_label), Write(insulator_conduction_band_label), Write(insulator_axes.y_axis_label), run_time=2)
        self.wait(2)
        self.clear()
