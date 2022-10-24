/*Create a TV() constructor with properties like brand, channel and volume.
● Specify brand in a constructor parameter. Channel should be 1 by default. Volume
should be 50 by default.
● Add methods to increase and decrease volume. Volume can't never be below 0 or
above 100.
● Add a method to set the channel. Let's say the TV has only 50 channels so if you try
to set channel 60 the TV will stay at the current channel.
● Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint:
consider using it from the constructor).
● It's useful to write a status that returns info about the TV status like: "Panasonic
at channel 8, volume 75". */


function TV(brand) {
    this.brand = brand;
    this.channel = 1;
    this.volume = 50;
}

TV.prototype.increaseVolume = function(){
    if(this.volume < 100) {
        this.volume++;
    }
};

TV.prototype.decreaseVolume = function(){
    if(this.volume > 0) {
        this.volume--;
    }
};

TV.prototype.setChannel = function(channel){
    if(channel <= 50 && channel >= 1) {
        this.channel = channel;
    }
};

TV.prototype.resetTv = function(){
    console.log("Reset TV");
    Object.assign(this, new TV(brand));
};

TV.prototype.getStatus = function() {
    console.log(`${this.brand} at channel ${this.channel}, volume ${this.volume}`);
};


let TV1 = new TV("Panasonic");

TV1.increaseVolume();
TV1.setChannel(40);
TV1.getStatus();

TV1.resetTv(TV);
TV1.getStatus();

TV1.setChannel(40);
TV1.getStatus();
