var game;

//Crate a new game instance 600px wide and 450 px tall:
game = new Phaser.Game(600,450, Phaser.AUTO, "");

//first parameter is how our state will be called.
//second parameter is an object containing to needed methods for state functionality.
game.state.add('Menu', Menu);

// Register the Game state with the global game object in Main.js
game.state.add('Game', Game);

// Register the Game_Over state with the global game object in Main.js
game.state.add('Game_Over', Game_Over);

game.state.start('Menu');

