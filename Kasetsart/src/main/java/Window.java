import javax.swing.*;
import java.awt.*;

public class Window extends JFrame {
    //This window is to contain the GuiView to show players ships and their shot on the computers ship.
    public Window() {
        super("Battleships");
        setResizable(true);
        setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        setLayout(new GridLayout(2, 1));
    }


}
