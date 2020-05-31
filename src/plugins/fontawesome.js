import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
  faVolumeUp,
  faVolumeMute,
  faVideo
} from '@fortawesome/free-solid-svg-icons';

library.add(faVolumeUp);
library.add(faVolumeMute);
library.add(faVideo);

Vue.component('font-awesome-icon', FontAwesomeIcon);
