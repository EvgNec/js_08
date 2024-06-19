import Player from '@vimeo/player';  
import lodash, { times } from 'lodash';
  
const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

player.on('timeupdate', lodash.debounce(function () {
        console.log('played the video!');
    }), 1);

