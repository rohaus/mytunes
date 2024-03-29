// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if(this.length === 1){
        this.playFirst();
      }
    }, this);

    this.on('ended', function(){
      this.remove(this.models[0]);
      if (this.models.length){
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(){
      // Need to fix code to dequeue the element that's been clicked
      this.remove(this.models[this.models.length-1]);
    }, this);
  },

  playFirst: function(){
    this.models[0].play();
  }
});
