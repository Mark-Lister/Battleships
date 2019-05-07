import javax.swing.*;
import java.awt.*;
import java.util.Observable;
import java.util.Observer;

public class GuiView extends JPanel implements Observer {
    private Location[][] grid;
    private JButton[][] buttons;
    //some nice watery looking colour
    private Color lightBlue = new Color(204, 241, 255);
    private boolean enemyView;
    //Lets it know if this GuiView needs to hide the ships to stop the user cheating
    public GuiView(boolean enemyView) {
        this.enemyView = enemyView;
    }

    public void update(Observable o, Object grid) {
        //if this is the first time grid is called it makes sure to create everything needed
        //for the gui because we dont want to do this every time.
        if(this.grid == null){
            this.grid = (Location[][]) grid;
            setLayout(new GridLayout(this.grid.length + 1, this.grid.length));
            buttons = new JButton[this.grid.length][this.grid.length];
            setUpGui();
        }
        else{
            this.grid = (Location[][]) grid;
        }
        updateGrid();
    }

    public void setUpGui() {
        //Some boring placements of buttons in the gui
        for(int i = grid.length - 1; i >= 0; i--){
            //Numbers to make reading the grid easier
            JButton num = new JButton();
            num.setBackground(Color.WHITE);
            num.setText(String.valueOf(i));
            add(num);
            //The water!
            for (int z = 0; z < grid.length; z++) {
                JButton button = new JButton();
                button.setBackground(lightBlue);
                buttons[z][i] = button;
                add(button);
            }
        }
        //Spacer to make the numbers align
        JButton spacer = new JButton();
        spacer.setBackground(Color.WHITE);
        add(spacer);
        //Numbers to make reading the grid easier
        for(int x = 0; x < grid.length; x++){
            JButton num = new JButton();
            num.setBackground(Color.WHITE);
            num.setText(String.valueOf(x));
            add(num);
        }
    }

    public void updateGrid(){
        //Iterates through the grid
        for(int i = grid.length - 1; i >= 0; i--){
            for(int z = 0; z < grid.length; z++) {
                //If we want to display the ships do this
                if (!enemyView) {
                    if (grid[z][i].hasShip() != null) {
                        if (grid[z][i].isHit()) {
                            //If a ship is hit set the point to red
                            buttons[z][i].setBackground(Color.RED);
                        } else {
                            //If a ship iis here and not hit set it to blue!
                            buttons[z][i].setBackground(Color.BLUE);
                        }
                    }
                    else if(grid[z][i].isHit()){
                        //If some water was hit set it to green for some reason...
                        buttons[z][i].setBackground(Color.GREEN);
                    }
                    //Otherwise keep the normal ocean color
                }
                //If we don't want to display the ships do this
                else{

                    if (grid[z][i].isHit()) {
                        if (grid[z][i].hasShip() != null) {
                            //If a ship is hit set the point to red
                            buttons[z][i].setBackground(Color.RED);
                        }
                        else {
                            //If some water was hit set it to green for some reason...
                            buttons[z][i].setBackground(Color.GREEN);
                        }
                    }
                    //Otherwise keep the normal ocean color
                }
            }
        }
    }
}
