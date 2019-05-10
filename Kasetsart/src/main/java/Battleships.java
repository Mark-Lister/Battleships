
import javax.swing.*;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;
public class Battleships extends JFrame {
    private final String[] directions = {"N", "E", "S", "W", "NE", "SE", "SW", "NW"};
    //All the ships and their sizes feel free to add or remove some to change the game
    private final Map<String, Integer> ships = new HashMap();{
        ships.put("Carrier", 5);
        ships.put("Battleship", 4);
        ships.put("Cruiser", 3);
        ships.put("Submarine", 3);
        ships.put("Destroyer", 2);
    };

    //Used for singleton
    private static Battleships instance;

    //This is so only one instance of the game can run!
    public static synchronized Battleships getInstance(){
        if(instance == null){
            instance = new Battleships();
        }
        return instance;
    }

    public void setup() {
        //Creates windows for two JPanels of GuiView
        Window window = new Window();
        //Set grid size!
        Scanner sc = new Scanner(System.in);
        boolean sizeSet = false;
        int size;
        while(!sizeSet) {
            try {
                System.out.println("Enter Grid Size at least 5 and most 20");
                size = Integer.valueOf(sc.nextLine());
                sizeSet = Grid.setSize(size);
            } catch (NumberFormatException ex){
                System.out.println("Invalid Grid size...");
            }
        }
        //Creates playerGrid first to add observers
        Grid playerGrid = new Grid();
        playerGrid.addObserver(new CommandLineView(false));
        GuiView playerGui = new GuiView(false);
        playerGrid.addObserver(playerGui);
        //Notice false params in player but true in computer true means to hide ships so the player cannot cheat!
        //Creates computerGrid first to add observers
        Grid computerGrid = new Grid();
        computerGrid.addObserver(new CommandLineView(true));
        GuiView computerGui = new GuiView(true);
        computerGrid.addObserver(computerGui);
        Computer computer = new Computer(new RandomShooting(), computerGrid);
        //Update views here so we can display the window and pack it now!
        computerGrid.updateView();
        playerGrid.updateView();
        window.add(computerGui);
        window.add(playerGui);
        window.pack();
        window.setVisible(true);
        //Now go to configure the player and setup ship placement
        Player player = playerSetup(playerGrid);
        //Automatically place computer ships
        placeShips(computer, "a");
        //Starts the Game!
        Player winner = start(player, computer);
        System.out.println(winner.getName() + " has won!");
    }

    public Player playerSetup(Grid playerGrid) {
        //Gets the player name
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter player name");
        String name = sc.nextLine();
        //Creates player with grid made earlier
        Player player = new Player(name, playerGrid);
        //Makes sure the user only enter a for automatic or c to choose their own ship places.
        String placement = "";
        while (!placement.toLowerCase().equals("a")
                && !placement.toLowerCase().equals("c")) {
            System.out.println("Press a to auto-place ships or c to choose your own placement.");
            placement = sc.nextLine().toLowerCase();
        }
        //Goes to place ships with selected method
        placeShips(player, placement);

        return player;
    }

    public void placeShips(Player player, String method) {
        Scanner sc = new Scanner(System.in);
        boolean placed;
        //Get the map of ship names and sizes see top of file to add or remove some!
        for (Map.Entry<String, Integer> ship : ships.entrySet()) {
            String shipName = ship.getKey();
            int shipSize = ship.getValue();
            placed = false;
            //If the placement method was to choose do the following
            if (method.equals("c")) {
                //Ensures that no ship is placed in an illegal area or is skipped
                while (!placed) {
                    System.out.println("Place your " + shipName + " of size " + shipSize);
                    //Stops typos
                    try {
                        System.out.println("Type a X coord");
                        int x = Integer.valueOf(sc.nextLine());
                        System.out.println("Type a Y coord");
                        int y = Integer.valueOf(sc.nextLine());
                        //Direction ships squares increase from start point North South......
                        System.out.println("Type a direction 'N' 'NE' 'E' 'SE' 'S' 'SW' 'W' 'NW'...");
                        String direction = sc.nextLine();
                        //If place ship returns true it means the ship was placed correctly
                        if (player.grid.placeShip(shipName, x, y, direction, shipSize)) {
                            placed = true;
                        } else {
                            System.out.println("The " + shipName + " could not be placed pick a differnt spot.");
                        }
                    } catch (NumberFormatException ex) {
                        System.out.println("Enter a real coordinate!");
                    }
                }
                //updates the view each iteration to show placing each ship
                player.grid.updateView();

                //This section is used to automatically place
            } else {
                while (!placed) {
                    //Same code as before but random numbers instead of input
                    try {
                        int x = (int) (Math.random() * player.grid.getSize());
                        int y = (int) (Math.random() * player.grid.getSize());
                        String direction = directions[(int) (Math.random() * (directions.length))];
                        if (player.grid.placeShip(shipName, x, y, direction, shipSize)) {
                            placed = true;
                        } else {

                        }
                    } catch (NumberFormatException ex) {

                    }
                }
                //updates the view to show all ships placed!
                player.grid.updateView();
            }
        }
    }


    public Player start(Player player, Computer computer) {
        Scanner sc = new Scanner(System.in);
        //Currently its no ones turn
        Player currentTurn = null;
        //This will continue until theres a return outta here! (or an error hopefully not)
        while(true){
            //Changes the turn to computer if the player went previously
            if(currentTurn == player){
                currentTurn = computer;
                //Does a fancy computer shooting method that can be changed in the setup
                //This uses the Strategy design pattern
                if(computer.shoot(player.grid)){
                    //if that shoot method returns true that means the last ship was sunk and computer won!
                    return computer;
                }
            }
            else{
                //Players turn!
                currentTurn = player;
                String result = "";
                System.out.println("It's " + player.getName() + "'s turn enter coordinates to target!");
                //Ensures that the player hasn't fired in a spot they already did or an illegal spot
                while(!result.equals("Not over") && !result.equals("Game over")) {
                    //stops nasty errors C:
                    try {
                        System.out.println("Type a X coord");
                        int x = Integer.valueOf(sc.nextLine());
                        System.out.println("Type a Y coord");
                        int y = Integer.valueOf(sc.nextLine());
                        result = computer.grid.shoot(x, y);
                    }catch (NumberFormatException ex) {
                        System.out.println("Enter a real coordinate!");
                    }
                }
                //If game over was returned that means the player won!
                if(result.equals("Game over")){
                    return player;
                }
            }
        }

    }
}

