import java.awt.*;

public class Location {
    private Ship ship;
    private boolean hit;

    //Adds reference to a ship on this location point
    public void addShip(Ship ship){
        this.ship = ship;
    }

    //Returns a ship if this point has one
    public Ship hasShip(){
        if(this.ship == null){
            return null;
        }
        return this.ship;
    }
    //Return the status of this location if it's been hit before or not
    public boolean isHit(){
        return hit;
    }

    //Sets this location to hit returns true if there was a ship there!
    //Otherwise returns false if you just hit water
    public boolean hit(){
        this.hit = true;
        if(this.ship != null){
            this.ship.hit();
            return this.ship.isAlive();
        }
        return false;
    }


}
