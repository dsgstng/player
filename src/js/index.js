import '../css/index.scss';
import DsgstngPlayer from './player';

/* global DPLAYER_VERSION GIT_HASH */
console.log(`${'\n'} %c dsgstng-player v${DPLAYER_VERSION} ${GIT_HASH} %c https://dsgstng.com ${'\n'}${'\n'}`, 'color: var(--main-theme-color); background: var(--main-background); padding:5px 0;', 'background: #fadfa3; padding:5px 0;');

export default DsgstngPlayer;