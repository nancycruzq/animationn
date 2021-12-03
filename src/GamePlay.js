

GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    preload: function() {
		var me=this;
        me.load.image('background',"assets/fog.jpg");
		me.load.spritesheet("crow","assets/sonic1.png",180.8,191);
		me.load.spritesheet("man","assets/boy12.jpg",94,151);

    },
    create: function() {
		var me=this;
        me.game.add.sprite(0, 0, 'background');
		
		me.crow= me.game.add.sprite(100,400,"crow");
		me.crow.animations.add("right",[0,1,2,2,3,3,4],10,true);
		me.crow.animations.play("right");

		me.man=me.game.add.sprite(100,500,"man");
		me.man.animations.add("right",[0,1,2,3,4,5],15,true);
		me.game.cursores=me.input.keyboard.createCursorKeys();
		me.game.physics.startSystem(Phaser.Physics.ARCADE);
		me.man.animations.play("right");
    },
    update: function() {
		var me=this;
		me.crow.x+=2;
		me.man.x+=1;
		if(me.crow.x>=me.game.world.width){
			me.crow.x=-100;
			}
		if(me.man.x>=me.game.world.width){
			me.man.x=-100;
			}
		
        
    }
}

var game = new Phaser.Game(1280, 720, Phaser.CANVAS);
    
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");