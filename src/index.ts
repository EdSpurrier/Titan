import { countReset } from 'console';
import { TitanCore } from 'titan-core'
import { RunTest } from './testing'

global.titanCore = new TitanCore();

//  Unpack TitanCore
const core = global.titanCore;
const console = global.titanCore.console;

console.logError("Titan Console");


RunTest();