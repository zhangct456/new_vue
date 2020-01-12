import Vue from "vue";
import baseConfig from "./base.conf";

import axios from "./axios.conf";

Vue.prototype.$remote = axios;
Vue.prototype.$baseConfig = baseConfig;