import java.util.Observable;
import java.util.Observer;

public class CommandLineView implements Observer {
    private Location[][] grid;
    private boolean enemyView;
    //Lets it know if this GuiView needs to hide the ships to stop the user cheating
    public CommandLineView(boolean enemyView){
        this.enemyView = enemyView;
    }
    @Override
    public void update(Observable o, Object grid) {
        this.grid = (Location[][]) grid;
        printGrid();
    }

    public void printGrid(){
        System.out.println();
        //Iterates through the grid
        for(int i = grid.length - 1; i >= 0; i--){
            //Numbers for easy grid reading
            System.out.print(i+" ");
            for(int z = 0; z < grid.length; z++) {
                //If we want to display the ships do this
                if (!enemyView) {
                    if (grid[z][i].hasShip() != null) {
                        if (grid[z][i].isHit()) {
                            //If a ship is hit set the point to H.. makes sense..
                            System.out.print("H ");
                        } else {
                            //If a ship isn't hit set the point to S for ship!
                            System.out.print("S ");
                        }
                    }
                    else if(grid[z][i].isHit()){
                        //If some water was hit set it to M for miss
                        System.out.print("M ");
                    }
                    else{
                        //Oceany shape?
                        System.out.print("* ");
                    }

                }
                else{
                    if (grid[z][i].isHit()) {
                        if (grid[z][i].hasShip() != null) {
                            //If a ship is hit set the point to H.......
                            System.out.print("H ");
                        }
                        else {
                            //If some water was hit set it to M for miss
                            System.out.print("M ");
                        }

                    }
                    else{
                        //Oceany shape?
                        System.out.print("* ");
                    }
                }
            }

            System.out.println();
        }
        System.out.print("  ");
        //Numbers for easy grid reading
        for(int x = 0; x < grid.length; x++){
            System.out.print(x + " ");
        }
        System.out.println();
    }

}
