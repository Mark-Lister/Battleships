import java.util.ArrayList;
import java.util.Observable;

public class Grid extends Observable {
    //The size of this Grid default 10 make it bigger to make it harder or smaller to make games shorter.
    private static int size = 10;
    //Grid of locations
    private Location[][] grid = new Location[size][size];
    //List of ships on this grid
    private ArrayList<Ship> ships = new ArrayList<>();
    //Constructor creates location objects on every point
    public Grid(){
        for(int i = 0; i < size; i++){
            for(int z = 0; z < size; z++){
                grid[i][z] = new Location();
            }
        }
    }

    //This method is used to place ships on the grid
    public boolean placeShip(String name, int x, int y, String direction, int size){
        //For every location the ship takes it has to be checked
        ArrayList<Location> locations = new ArrayList<>();
        //So every point the the ship will use is calculated and added to the arraylist
        for(int i = 0; i < size; i++){
            try {
                switch (direction.toUpperCase()) {
                    //adds specific x or y values based off the direction chosen
                    case "N":
                        locations.add(grid[x][y + i]);
                        break;
                    case "E":
                        locations.add(grid[x + i][y]);
                        break;
                    case "S":
                        locations.add(grid[x][y - i]);
                        break;
                    case "W":
                        locations.add(grid[x - i][y]);
                        break;
                    case "NE":
                        locations.add(grid[x + i][y + i]);
                        break;
                    case "NW":
                        locations.add(grid[x - i][y + i]);
                        break;
                    case "SE":
                        locations.add(grid[x + i][y - i]);
                        break;
                    case "SW":
                        locations.add(grid[x - i][y - i]);
                        break;
                    default:
                        //Prints this if the user put some made up direction like esfksefk
                        System.out.println("Invalid Direction!");
                        return false;
                }
                //This stops any illegal placement because it would normally cause an indexing error
            } catch (ArrayIndexOutOfBoundsException e){
                //System.out.println("Ship goes out of bounds");
                //Print statement here but when youre randomly choosen spots it gets it wrong a lot.
                return false;
            }
            //checks if the latest point that was calculated for placement already has a ship
            //if so just stop calculating this placement now and let the user know
            if(locations.get(i).hasShip() != null){
                return false;
            }

        }
        //if it made it through that process its safe to place so lets create the ship
        Ship ship = new Ship(name, size);
        //add it to the list of ships on the grid
        ships.add(ship);
        //then add this ship to all of the points that were calculated
        for(int i = 0; i < locations.size(); i++){
            locations.get(i).addShip(ship);
        }
        //let the class that called this know it was a success!
        return true;
    }
    //This is the shoot method to shoot a specific location
    public String shoot(int x, int y){ //contains logic to see if game is finished
        try {
            //Checks that the point isn't already hit so stops a user wasting their turn
            if(grid[x][y].isHit()){
                System.out.println("This is already hit pick another coordinate!");
                return "Already hit";
            }
            //tells the specific location point it's been hit.
            boolean result = grid[x][y].hit();
            //updates the gui and cli (Observers)
            updateView();
            //if there was a ship and it has been sunk then remove it from the list of ships on this grid
            if (grid[x][y].hasShip() != null) {
                if (result == true) {
                    System.out.println(grid[x][y].hasShip().getName() + " has been sunk!");
                    ships.remove(grid[x][y].hasShip());
                }
            }
            if (ships.size() > 0) {
                return "Not over";
            //if there's no ships remaining on this grid then the game is over!
            } else {
                return "Game over";
            }
            //Stops shots outside of the grid and the nasty errors
        }catch (ArrayIndexOutOfBoundsException e){
            System.out.println("Invalid coordinate its out of bounds!");
            return "Error";
        }
    }


    //just gets the size of the grid
    public static int getSize(){
        return size;
    }

    //sets the size of grid
    public static boolean setSize(int size){
        if(size <= 20 && size >= 5){
            Grid.size=size;
            return true;
        }
        return false;
    }


    //this updates the observers by sending them the current status of the grid
    public void updateView() {
        setChanged();
        notifyObservers(grid);
    }



}
