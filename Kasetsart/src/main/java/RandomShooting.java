public class RandomShooting implements ShootingStrategy {
    public boolean shoot(Grid grid){
        //random shooting nothing too special here
        int x = (int) (Math.random() * grid.getSize());
        int y = (int) (Math.random() * grid.getSize());
        String result = "";
        //stops it shooting at a repeated spot
        while(!result.equals("Not over") && !result.equals("Game over")) {
            result = grid.shoot(x, y);
            x = (int) (Math.random() * grid.getSize());
            y = (int) (Math.random() * grid.getSize());
        }
        //this means the computer won
        if(result.equals("Game over")){
            return true;
        }
        return false;
    }
}
