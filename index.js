import { filesBrowser } from "./js-utils/files/files-browser.js";
import { filesNode } from "./js-utils/files/files-node.js";
import { times } from "./js-utils/times/time.js";

export const bimscJs = {
    files: {...filesBrowser,...filesNode},
    times: times
}

