var Menu = {

    preload : function(){
        //  Loading images is required so that later on we can create sprite based on them.
        //  Thye first argument is how our image will be refered to,
        // the second one is the path to our file.
        game.load.image('menu', './assets/images/menu.png');
    },

    create: function () {
        // Add a sprite to your game,  Here the sprite will be the game's logo
        // Parameters are : X,Y, image name (see above)
        // this.add.sprite(0,0,'menu');

        //Add menu screen.
        //This will act as a button to start the game.
        this.add.button(0,0, 'menu', this.startGame, this);
    },

    startGame: function () {

        //Change the state to the actual game.
        this.state.start('Game');
    }
};