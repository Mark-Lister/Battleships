public class Computer extends Player{
    private ShootingStrategy strategy;
    Computer(ShootingStrategy stratergy, Grid grid){
        super("Computer", grid);
        this.strategy = stratergy;
    }
    public boolean shoot(Grid g){
        return this.strategy.shoot(g);

    }


}
