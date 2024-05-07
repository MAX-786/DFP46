from manim import *


class LogicGate(Scene):
    def construct(self):
        # Create a NOT gate
        not_gate = Text("NOT Gate (Inverter) - Truth Table").scale(0.8).to_edge(UP)
        not_truth_table = Tex(r"""
        \begin{tabular}{|c|c|}
        \hline
        Input A & Output Y \\
        \hline
        0 & 1 \\
        \hline
        1 & 0 \\
        \hline
        \end{tabular}
        """).scale(0.8).to_edge(UP)

        # Create an OR gate
        or_gate = Text("OR Gate - Truth Table").scale(0.8).to_edge(UP)
        or_truth_table = Tex(r"""
        \begin{tabular}{|c|c|c|}
        \hline
        Input A & Input B & Output Y \\
        \hline
        0 & 0 & 0 \\
        \hline
        0 & 1 & 1 \\
        \hline
        1 & 0 & 1 \\
        \hline
        1 & 1 & 1 \\
        \hline
        \end{tabular}
        """).scale(0.8)

        # Create an AND gate
        and_gate = Text("AND Gate - Truth Table").scale(0.8).to_edge(UP)
        and_truth_table = Tex(r"""
        \begin{tabular}{|c|c|c|}
        \hline
        Input A & Input B & Output Y \\
        \hline
        0 & 0 & 0 \\
        \hline
        0 & 1 & 0 \\
        \hline
        1 & 0 & 0 \\
        \hline
        1 & 1 & 1 \\
        \hline
        \end{tabular}
        """).scale(0.8)

        # Create a NAND gate
        nand_gate = Text("NAND Gate - Truth Table").scale(0.8).to_edge(UP)
        nand_truth_table = Tex(r"""
        \begin{tabular}{|c|c|c|}
        \hline
        Input A & Input B & Output Y \\
        \hline
        0 & 0 & 1 \\
        \hline
        0 & 1 & 1 \\
        \hline
        1 & 0 & 1 \\
        \hline
        1 & 1 & 0 \\
        \hline
        \end{tabular}
        """).scale(0.8)

        # Create a NOR gate
        nor_gate = Text("NOR Gate - Truth Table").scale(0.8).to_edge(UP)
        nor_truth_table = Tex(r"""
        \begin{tabular}{|c|c|c|}
        \hline
        Input A & Input B & Output Y \\
        \hline
        0 & 0 & 1 \\
        \hline
        0 & 1 & 0 \\
        \hline
        1 & 0 & 0 \\
        \hline
        1 & 1 & 0 \\
        \hline
        \end{tabular}
        """).scale(0.8)

        self.play(Write(or_gate))
        self.wait(0.5)
        self.play(Write(or_truth_table))
        self.wait(2)
        self.clear()

        self.play(Write(and_gate))
        self.wait(0.5)
        self.play(Write(and_truth_table))
        self.wait(2)
        self.clear()

        self.play(Write(nand_gate))
        self.wait(0.5)
        self.play(Write(nand_truth_table))
        self.wait(2)
        self.clear()

        self.play(Write(nor_gate))
        self.wait(0.5)
        self.play(Write(nor_truth_table))
        self.wait(2)
        self.clear()


# Run the script to generate the animations
if __name__ == "__main__":
    os.system("manim -p logic_gates.py LogicGate")
