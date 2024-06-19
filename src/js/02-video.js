import Player from '@vimeo/player';  
import lodash from 'lodash';
  
const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
player.setCurrentTime(39.456);
player.on('timeupdate', lodash.debounce(function () {
        console.log('played the video!');
}), 10);
    
player.getCurrentTime().then(function(seconds) {
    console.log("seconds1111", seconds)
}).catch(function(error) {
    console.log("error", error)
    // an error occurred
});


