import {
  flowRendererV2,
  flowStyles
} from "./chunk-J2VKOEPS.js";
import {
  flowDb,
  parser$1
} from "./chunk-YRP2YLWG.js";
import "./chunk-EGON7UF4.js";
import "./chunk-6IE2HNH2.js";
import "./chunk-77D7FPKI.js";
import "./chunk-7EFZINTJ.js";
import "./chunk-FWVD3ILV.js";
import "./chunk-FXVWBYKL.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-XQPSNAOW.js";
import {
  __toESM
} from "./chunk-TFWDKVI3.js";

// node_modules/mermaid/dist/flowDiagram-v2-9f8fab07.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_sanitize_url = __toESM(require_dist(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-9f8fab07-4Z6RKX2U.js.map
