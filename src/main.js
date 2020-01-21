import DefaultLayout from "~/layouts/Default.vue";

import VueScrollTo from "vue-scrollto";
import BootstrapVue from "bootstrap-vue";

import "./assets/styles/main.scss";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faTrophy,
  faRss,
  faCheck,
  faPhone,
  faEnvelope,
  faCar,
  faMapMarker,
  faBirthdayCake,
  faFileExcel,
  faFilePowerpoint,
  faFileWord,
  faDatabase,
  faBookOpen,
  faVideo,
  faPaperclip
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faGit,
  faLinkedin,
  faHtml5,
  faJsSquare,
  faCss3Alt,
  faAngular,
  faReact,
  faNodeJs,
  faSass,
  faWordpress,
  faNpm,
  faVuejs,
  faBootstrap,
  faLaravel,
  faDocker
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faGithub,
  faGit,
  faLinkedin,
  faTrophy,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faAngular,
  faReact,
  faNodeJs,
  faSass,
  faWordpress,
  faNpm,
  faRss,
  faCheck,
  faVuejs,
  faPhone,
  faEnvelope,
  faCar,
  faMapMarker,
  faBirthdayCake,
  faBootstrap,
  faFileExcel,
  faFilePowerpoint,
  faFileWord,
  faDatabase,
  faBookOpen,
  faVideo,
  faLaravel,
  faDocker,
  faPaperclip
);

// Here is some examples but you can add any other icon by typing in the library.add(ADD_HERE_ANY_NAME_OF_ICON);

export default function(Vue, { router, head, isClient }) {
  Vue.use(VueScrollTo);
  Vue.use(BootstrapVue);
  Vue.component("Layout", DefaultLayout);

  Vue.component("font-awesome", FontAwesomeIcon);
}
