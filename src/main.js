import "drag-drop-touch";
import "./shims";
import "./merge-globals";
import { browserCheck, init } from "./game";
import { DEV } from "./env";
import { watchLatestCommit } from "./commit-watcher";
import { Achievements } from './core/achievements/normal-achievement.js';

window.Achievements = Achievements;

if (browserCheck()) init();
if (DEV) watchLatestCommit();
