"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const titan_core_1 = require("titan-core");
const testing_1 = require("./testing");
global.titanCore = new titan_core_1.TitanCore();
//  Unpack TitanCore
const core = global.titanCore;
const console = global.titanCore.console;
console.logError("Titan Console");
(0, testing_1.RunTest)();
//# sourceMappingURL=index.js.map