import java.util.ArrayList;

public class Player {
    //not much in here just some name and grid
    private String name;
    public Grid grid;
    public Player(String name, Grid grid){
        this.name = name;
        this.grid = grid;
    }

    public String getName(){
        return this.name;
    }
}
