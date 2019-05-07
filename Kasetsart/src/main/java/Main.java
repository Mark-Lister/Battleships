public class Main {
    //Because you need to type in the command line to play this game but the GUI view is much nicer
    // than the command line view play in split screen
    public static void main(String[] args) {
        //Singleton!~
        Battleships battleships = Battleships.getInstance();
        battleships.setup();
    }
}
