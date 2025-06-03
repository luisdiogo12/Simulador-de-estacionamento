//TODO
import * as THREE from "three";

import { IS_DEBUG } from "debugManager";

const loadingManager = new THREE.LoadingManager();

const progressBar = document.querySelector(".progress-bar");
const progressBarContainer = document.querySelector(".progress-bar-container");
loadingManager.onStart = function (url, itemsLoaded, total) {
  if (IS_DEBUG) {
    console.log("Loading process has started!");
  }
};

loadingManager.onProgress = function (url, itemsLoaded, total) {
  if (IS_DEBUG) {
    console.log(`Started loading: ${url}
number of items loaded: ${itemsLoaded}
total number of items: ${total}
  `);
  }
  progressBar.value = (itemsLoaded / total) * 100;
};

loadingManager.onLoad = function () {
  if (IS_DEBUG) {
    console.log("Loading process has been completed!");
  }
  progressBarContainer.style.display = "none";
};

loadingManager.onError = function (url) {
  console.error(`Got a problem loading: ${url}`);
};
