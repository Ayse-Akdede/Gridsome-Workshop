import DefaultLayout from "~/layouts/Default.vue";

import VueScrollTo from "vue-scrollto";
import BootstrapVue from "bootstrap-vue";

import "./assets/styles/main.scss";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faTrophy,
  faRss,
  faCheck,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faGit,
  faTwitter,
  faFacebook,
  faLinkedin,
  faHtml5,
  faJsSquare,
  faCss3Alt,
  faAngular,
  faReact,
  faNodeJs,
  faSass,
  faLess,
  faWordpress,
  faNpm,
  faVuejs
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faGithub,
  faGit,
  faTwitter,
  faFacebook,
  faLinkedin,
  faTrophy,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faAngular,
  faReact,
  faNodeJs,
  faSass,
  faLess,
  faWordpress,

  faNpm,
  faRss,
  faCheck,
  faVuejs,
  faPhone
);

export default function(Vue, { router, head, isClient }) {
  Vue.use(VueScrollTo);
  Vue.use(BootstrapVue);
  Vue.component("Layout", DefaultLayout);

  Vue.component("font-awesome", FontAwesomeIcon);
}
