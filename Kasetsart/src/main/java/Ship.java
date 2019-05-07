public class Ship{
    private int shipSize;
    private String name;
    private int hits = 0;

    public Ship(String name, int size){
        this.shipSize = size;
        this.name = name;
    }

    //if it gets hit add one hit to this ship!
    public void hit(){ //returns true if sunken
        this.hits += 1;
    }

    //Checks if the amount of hit is the same as the size if sooo it means it should be underwater...
    public boolean isAlive(){
        if(this.hits == this.shipSize){
            return true;
        }
        return false;
    }

    public String getName(){
        return this.name;
    }


}
