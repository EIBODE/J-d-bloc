import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCheckSquare,
  faSquare,
  faFileAlt,
  faCircle,
  faCheckCircle
} from '@fortawesome/free-regular-svg-icons'
import {
  faQuestionCircle,
  faAngleUp,
  faAngleDown,
  faTimes,
  faAngleRight,
  faAngleLeft,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faPlus,
  faMinus,
  faEnvelope,
  faSearch,
  faTrash,
  faHamburger,
  faBars,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('faIcon', FontAwesomeIcon)

export const fontAwesome = library.add(
  faAngleUp,
  faAngleDown,
  faCheckSquare,
  faSquare,
  faTimes,
  faQuestionCircle,
  faAngleLeft,
  faAngleRight,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faPlus,
  faMinus,
  faFileAlt,
  faEnvelope,
  faSearch,
  faAngleDown,
  faAngleUp,
  faCheckCircle,
  faCircle,
  faTrash,
  faHamburger,
  faBars,
  faArrowRight
)
