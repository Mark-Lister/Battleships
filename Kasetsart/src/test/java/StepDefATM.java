import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

import static org.junit.jupiter.api.Assertions.*;

public class StepDefATM {
    Battleships battleships;
    Player player;
    Grid grid;
    boolean shipPlaced;
    String shootResult;
    boolean gridResult;

    @Given("a player with name (.*) and grid of size (\\d+)")
    public void create_grid_and_player(String name, int size) {
        gridResult = Grid.setSize(size);
        this.grid = new Grid();
        this.player = new Player(name, grid);

    }

    @Given("a ship of size (\\d+) called (.*) at (\\d+) (\\d+) in (.*) direction")
    public void place_ship(int size, String name, int x, int y, String direction) {
        shipPlaced = grid.placeShip(name, x, y, direction, size);
    }

    @Then("ship was placed")
    public void ship_placed() {
        assertTrue(shipPlaced);
    }

    @Then("ship wasn't placed")
    public void ship_wasnt_placed() {
        assertFalse(shipPlaced);
    }

    @Given("a shot taken at point (\\d+) (\\d+)")
    public void shoot(int x, int y) {
        shootResult = grid.shoot(x, y);
    }

    @Then("message is (.*)")
    public void shoot_response(String response) {
        assertEquals(response, shootResult);
    }

    @Then("grid was set")
    public void grid_set() {
        assertTrue(gridResult);
    }

    @Then("grid wasn't set")
    public void grid_not_set() {
        assertFalse(gridResult);
    }




}
