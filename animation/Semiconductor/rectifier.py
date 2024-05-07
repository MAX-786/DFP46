
from manim import *

class Rectifier(Scene):
    def construct(self):
        # Title
        title = Text("Half-Wave Rectifier", font_size=30).to_edge(UP)
        self.play(Write(title))
        
        
        circuit_image = ImageMobject("halfWave.jpg").scale(1.5)
        circuit_image.move_to(ORIGIN)

        text = Text("Circuit diagram").scale(0.6)
        
        self.play(Write(text))
        self.play(FadeIn(circuit_image))
        self.wait()
        self.play(FadeOut(text))
        self.play(FadeOut(circuit_image))

        # Create axes for input waveform
        input_axes = Axes(
            x_range=[0, 4 * PI, PI / 2],
            y_range=[-2, 2, 1],
            x_length=8,
            y_length=4,
            axis_config={"color": BLUE},
            tips=False
        )
        input_axes_labels = input_axes.get_axis_labels(x_label="Time (t)", y_label="Voltage (V)")
        self.add(input_axes, input_axes_labels)

        # Animate input waveform
        input_waveform_graph = input_axes.plot(lambda x: 1.5 * np.sin(x), color=BLUE)
        input_label = Text("Input").next_to(input_axes, UP, buff=0.5)
        self.add(input_waveform_graph, input_label)
        self.wait(2)
        # self.remove(input_label, input_waveform_graph)
        self.clear()

        # Move input waveform to the right side while animating
        # self.play(
        #     ApplyMethod(input_waveform_graph.shift, RIGHT * 8, run_time=4),
        #     FadeOut(input_label),
        #     rate_func=linear
        # )

        # self.clear()

        # Create axes for output waveform
        output_axes = Axes(
            x_range=[0, 4 * PI, PI / 2],
            y_range=[0, 2, 1],
            x_length=8,
            y_length=4,
            axis_config={"color": GREEN},
            tips=False
        )
        output_axes_labels = output_axes.get_axis_labels(x_label="Time (t)", y_label="Voltage-at-R")
        self.add(output_axes, output_axes_labels)

        # Animate output waveform
        output_waveform_graph = output_axes.plot(lambda x: np.maximum(0, 1.5 * np.sin(x)), color=GREEN)
        output_label = Text("Output").next_to(output_axes, DOWN, buff=0.5)
        self.add(output_waveform_graph, output_label)
        self.wait(2)


        self.clear()


        #! Title for Full-Wave Rectifier
        title_full_wave = Text("Full-Wave Rectifier", font_size=30).to_edge(UP)
        self.play(Write(title_full_wave))

        # Circuit diagram for Full-Wave Rectifier
        circuit_image_full_wave = ImageMobject("fullWave.jpg").scale(1.5)
        text_full_wave = Text("Circuit diagram").scale(0.6)
        
        self.play(Write(text_full_wave))
        self.play(FadeIn(circuit_image_full_wave))
        self.wait()
        self.play(FadeOut(text_full_wave))
        self.play(FadeOut(circuit_image_full_wave))

        # Create axes for input waveform from Diode D1
        input_axes_full_wave_d1 = Axes(
            x_range=[0, 4 * PI, PI / 2],
            y_range=[-2, 2, 1],
            x_length=8,
            y_length=4,
            axis_config={"color": BLUE},
            tips=False
        )
        input_axes_labels_full_wave_d1 = input_axes_full_wave_d1.get_axis_labels(x_label="Time (t)", y_label="Voltage (V)")

        self.add(input_axes_full_wave_d1, input_axes_labels_full_wave_d1)

        # Animate input waveform from Diode D1
        input_waveform_graph_full_wave_d1 = input_axes_full_wave_d1.plot(lambda x: 1.5 * np.sin(x), color=BLUE)
        input_label_full_wave_d1 = Text("Input from D1").next_to(input_axes_full_wave_d1, UP, buff=0.5)
        self.add(input_axes_labels_full_wave_d1, input_waveform_graph_full_wave_d1, input_label_full_wave_d1)
        self.wait(2)

        # Create axes for input waveform from Diode D2
        input_axes_full_wave_d2 = Axes(
            x_range=[0, 4 * PI, PI / 2],
            y_range=[-2, 2, 1],
            x_length=8,
            y_length=4,
            axis_config={"color": RED},  # Red color for input from Diode D2
            tips=False
        )
        input_axes_labels_full_wave_d2 = input_axes_full_wave_d2.get_axis_labels(x_label="Time (t)", y_label="Voltage (V)")
        self.add(input_axes_full_wave_d2, input_axes_labels_full_wave_d2)

        # Animate input waveform from Diode D2
        input_waveform_graph_full_wave_d2 = input_axes_full_wave_d2.plot(lambda x: 1.5 * np.sin(x - PI), color=RED)
        input_label_full_wave_d2 = Text("Input from D2").next_to(input_axes_full_wave_d2, DOWN, buff=0.5)
        self.add(input_axes_labels_full_wave_d2, input_waveform_graph_full_wave_d2, input_label_full_wave_d2)
        self.wait(2)

        self.clear()

        # Create axes for output waveform from both Diodes
        output_axes_full_wave = Axes(
            x_range=[0, 4 * PI, PI / 2],
            y_range=[0, 2, 1],
            x_length=8,
            y_length=4,
            axis_config={"color": GREEN},
            tips=False
        )
        output_axes_labels_full_wave = output_axes_full_wave.get_axis_labels(x_label="Time (t)", y_label="Voltage-at-R")

        #  Add the axes to the scene
        self.add(output_axes_full_wave, output_axes_labels_full_wave)

        # Animate output waveform from both Diodes
        def output_waveform_full_wave_1(x):
            return 1.5 * np.abs(np.sin(x)) if (0 <= x % (2 * PI) <= PI) else 0

        def output_waveform_full_wave_2(x):
            return 1.5 * np.abs(np.sin(x - PI)) if (PI < x % (2 * PI) <= 2 * PI) else 0

        output_waveform_graph_full_wave_1 = output_axes_full_wave.plot(output_waveform_full_wave_1, color=BLUE)
        output_waveform_graph_full_wave_2 = output_axes_full_wave.plot(output_waveform_full_wave_2, color=RED)
        output_label_full_wave = Text("Output").next_to(output_axes_full_wave, DOWN, buff=0.5)
        self.add(output_axes_labels_full_wave, output_axes_full_wave, output_waveform_graph_full_wave_1, output_waveform_graph_full_wave_2, output_label_full_wave)
        self.wait(2)

        # # Animate output waveform from both Diodes
        # output_waveform_graph_full_wave = []
        # x_values = np.linspace(0, 4 * PI, 1000)
        # for x in x_values:
        #     color = BLUE if (0 <= x % (2 * PI) <= PI) else RED
        #     y = 1.5 * np.abs(np.sin(x)) if (0 <= x % (2 * PI) <= PI) else 1.5 * np.abs(np.sin(x - PI))
        #     line = DashedLine(
        #         output_axes_full_wave.coords_to_point(x, 0),
        #         output_axes_full_wave.coords_to_point(x, y),
        #         color=color
        #     )
        #     output_waveform_graph_full_wave.append(line)
        # output_label_full_wave = Text("Output").next_to(output_axes_full_wave, DOWN, buff=0.5)
        # self.add(output_axes_labels_full_wave, output_axes_full_wave, *output_waveform_graph_full_wave, output_label_full_wave)
        # self.wait(2)

        # Clear the scene
        self.clear()

