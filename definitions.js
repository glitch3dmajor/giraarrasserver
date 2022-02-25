// GUN DEFINITIONS
const combineStats = function(arr) { 
    try {
    // Build a blank array of the appropiate length
    let data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    arr.forEach(function(component) {
        for (let i=0; i<data.length; i++) {
            data[i] = data[i] * component[i];
        }
    });
    return {
      reload: data[0],
      recoil: data[1],
      shudder: data[2],
      size: data[3],
      health: data[4],
      damage: data[5],
      pen: data[6],
      speed: data[7],
      maxSpeed: data[8],
      range: data[9],
      density: data[10],
      spray: data[11],
      resist: data[12],
    };
  } catch (err) {
    console.log(err);
    console.log(JSON.stringify(arr));
  }
};
const skillSet = (() => {
  let config = require("../config.json");
  let skcnv = {
    rld: 0,
    pen: 1,
    str: 2,
    dam: 3,
    spd: 4,

    shi: 5,
    atk: 6,
    hlt: 7,
    rgn: 8,
    mob: 9,
  };
  return (args) => {
    let skills = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let s in args) {
      if (!args.hasOwnProperty(s)) continue;
      skills[skcnv[s]] = Math.round(config.MAX_SKILL * args[s]);
    }
    return skills;
  };
})();
const g = {
  // Gun info here
  trap: [36, 1, 0.25, 0.6, 1, 2, 1, 5, 1, 1, 1, 15, 3],
  swarm: [18, 0.25, 0.05, 0.4, 1, 2, 1, 1, 1, 1, 1, 5, 1],
  drone: [50, 0.25, 0.1, 0.6, 1, 2, 1, 2, 1, 1, 1, 0.1, 1],
  factory: [60, 1, 0.1, 0.7, 1, 2, 1, 3, 1, 1, 1, 0.1, 1],
  basic: [18, 1.4, 0.1, 1, 1, 2, 1, 4.5, 1, 1, 1, 15, 1],
  /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
  blank: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  spam: [1.1, 1, 1, 1.05, 1, 1.1, 1, 0.9, 0.7, 1, 1, 1, 1.05],
  minion: [1, 1, 2, 1, 0.4, 0.4, 1.2, 1, 1, 0.75, 1, 2, 1],
  single: [1.05, 1, 1, 1, 1, 1, 1, 1.05, 1, 1, 1, 1, 1],
  sniper: [1.35, 1, 0.25, 1, 1, 0.8, 1.1, 1.5, 1.5, 1, 1.5, 0.2, 1.15],
  rifle: [0.8, 0.8, 1.5, 1, 0.8, 2, 0.9, 1, 1, 1, 1, 2, 1],
  assass: [1.65, 1, 0.25, 1, 1.15, 2, 1.1, 1.18, 1.18, 1, 3, 1, 1.3],
  hunter: [1.5, 0.7, 1, 0.95, 1, 2, 1, 1.1, 0.8, 1, 1.2, 1, 1.15],
  hunter2: [1, 1, 1, 0.9, 2, 2, 1.5, 1, 1, 1, 1.2, 1, 1.1],
  preda: [1.4, 1, 1, 0.8, 1.5, 2, 1.2, 0.9, 0.9, 1, 1, 1, 1],
  snake: [0.4, 1, 4, 1, 1.5, 2, 1.2, 0.2, 0.35, 1, 3, 6, 0.5],
  sidewind: [1.5, 2, 1, 1, 1.5, 2, 1, 0.15, 0.5, 1, 1, 1, 1],
  snakeskin: [0.6, 1, 2, 1, 0.5, 2, 1, 1, 0.2, 0.4, 1, 5, 1],
  mach: [0.5, 0.8, 1.7, 1, 0.7, 2, 1, 1, 0.8, 1, 1, 2.5, 1],
  blaster: [1, 1.2, 1.25, 1.1, 1.5, 2, 0.6, 0.8, 0.33, 0.6, 0.5, 1.5, 0.8],
  chain: [1.25, 1.33, 0.8, 1, 0.8, 2, 1.1, 1.25, 1.25, 1.1, 1.25, 0.5, 1.1],
  mini: [1.25, 0.6, 1, 0.8, 0.55, 2, 1.25, 1.33, 1, 1, 1.25, 0.5, 1.1],
  stream: [1.1, 0.6, 1, 1, 1, 2, 1, 1.24, 1, 1, 1, 1, 1],
  shotgun: [8, 0.4, 1, 1.5, 1, 2, 0.8, 1.8, 0.6, 1, 1.2, 1.2, 1],
  flank: [1, 1.2, 1, 1, 1.02, 2, 0.9, 1, 0.85, 1, 1.2, 1, 1],
  tri: [1, 0.9, 1, 1, 0.9, 2, 1, 0.8, 0.8, 0.6, 1, 1, 1],
  trifront: [1, 0.2, 1, 1, 1, 2, 1, 1.3, 1.1, 1.5, 1, 1, 1],
  thruster: [1, 1.5, 2, 1, 0.5, 2, 0.7, 1, 1, 1, 1, 0.5, 0.7],
  auto: /*pure*/ [1.8, 0.75, 0.5, 0.8, 0.9, 2, 1.2, 1.1, 1, 0.8, 1.3, 1, 1.25],
  five: [1.15, 1, 1, 1, 1, 2, 1, 1.05, 1.05, 1.1, 2, 1, 1],
  autosnipe: [1, 1, 1, 1.4, 2, 2, 1, 1, 1, 1, 1, 1, 1],
  healer: [1, 1, 1, 1.4, 2, -5, 1, 1, 1, 1, 1, 1, 1],
  /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
  pound: [2, 1.6, 1, 1, 1, 2, 1, 0.85, 0.8, 1, 1.5, 1, 1.15],
  destroy: [2.2, 1.8, 0.5, 1, 2, 2, 1.2, 0.65, 0.5, 1, 2, 1, 3],
  anni: [0.85, 1.25, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
  hive: [1.5, 0.8, 1, 0.8, 0.7, 2, 1, 1, 0.6, 1, 1, 1, 1],
  arty: [1.2, 0.7, 1, 0.9, 1, 2, 1, 1.15, 1.1, 1, 1.5, 1, 1],
  mortar: [1.2, 1, 1, 1, 1.1, 2, 1, 0.8, 0.8, 1, 1, 1, 1],
  spreadmain: [
    0.78125,
    0.25,
    0.5,
    1,
    0.5,
    2,
    1,
    1.5 / 0.78,
    0.9 / 0.78,
    1,
    1,
    1,
    1,
  ],
  spread: [1.5, 1, 0.25, 1, 1, 2, 1, 0.7, 0.7, 1, 1, 0.25, 1],
  skim: [1.33, 0.8, 0.8, 0.9, 1.35, 2, 2, 0.3, 0.3, 1, 1, 1, 1.1],
  twin: [1, 0.5, 0.9, 1, 0.9, 2, 1, 1, 1, 1, 1, 1.2, 1],
  bent: [1.1, 1, 0.8, 1, 0.9, 2, 0.8, 1, 1, 1, 0.8, 0.5, 1],
  triple: [1.2, 0.667, 0.9, 1, 0.85, 2, 0.9, 1, 1, 1, 1.1, 0.9, 0.95],
  quint: [1.5, 0.667, 0.9, 1, 1, 2, 0.9, 1, 1, 1, 1.1, 0.9, 0.95],
  dual: [2, 1, 0.8, 1, 1.5, 2, 1, 1.3, 1.1, 1, 1, 1, 1.25],
  double: [1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
  hewn: [1.25, 1.5, 1, 1, 0.9, 2, 1, 1, 0.9, 1, 1, 1, 1],
  puregunner: [1, 0.25, 1.5, 1.2, 1.35, 2, 1.25, 0.8, 0.65, 1, 1.5, 1.5, 1.2],
  machgun: [0.66, 0.8, 2, 1, 1, 2, 1, 1.2, 0.8, 1, 1, 2.5, 1],
  gunner: [1.25, 0.25, 1.5, 1.1, 1, 2, 1.35, 0.9, 0.8, 1, 1.5, 1.5, 1.2],
  power: [1, 1, 0.6, 1.2, 1, 2, 1.25, 2, 1.7, 1, 2, 0.5, 1.5],
  nail: [0.85, 2.5, 1, 0.8, 1, 2, 1, 1, 1, 1, 2, 1, 1],
  fast: [1, 1, 1, 1, 1, 2, 1, 1.2, 1, 1, 1, 1, 1],
  turret: [2, 1, 1, 1, 0.8, 2, 0.7, 1, 1, 1, 0.1, 1, 1],
  healer: [2, 1, 1, 1, 0.8, 0.1, 0.7, 1, 1, 1, 0.1, 1, 1],
  /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
  battle: [1, 1, 1, 1, 1.25, 2, 1, 1, 0.85, 1, 1, 1, 1.1],
  bees: [1.3, 1, 1, 1.4, 1, 2, 0.5, 3, 1.5, 1, 0.25, 1, 1],
  dominator: [0.5, 0.000001, 1, 1, 10, 2, 1, 1, 1, 1, 5, 1, 1],
  carrier: [1.5, 1, 1, 1, 1, 2, 1, 1.3, 1.2, 1.2, 1, 1, 1],
  hexatrap: [1.3, 1, 1.25, 1, 1, 2, 1, 0.8, 1, 0.5, 1, 1, 1],
  block: [1.1, 2, 0.1, 1.5, 2, 2, 1.25, 1.5, 2.5, 1.25, 1, 1, 1.25],
  construct: [1.3, 1, 1, 0.9, 1, 2, 1, 1, 1.1, 1, 1, 1, 1],
  boomerang: [0.8, 1, 1, 1, 0.5, 2, 1, 0.75, 0.75, 1.333, 1, 1, 1],
  over: [1.25, 1, 1, 0.85, 0.7, 2, 1, 1, 0.9, 1, 2, 1, 1],
  meta: [1.333, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
  weak: [2, 1, 1, 1, 0.6, 2, 0.8, 0.5, 0.7, 0.25, 0.3, 1, 1],
  master: [3, 1, 1, 0.7, 0.4, 2, 1, 1, 1, 0.1, 0.5, 1, 1],
  sunchip: [5, 1, 1, 1.4, 0.5, 2, 0.6, 1, 1, 1, 0.8, 1, 1],
  babyfactory: [1.5, 1, 1, 1, 1, 2, 1, 1, 1.35, 1, 1, 1, 1],
  lowpower: [1, 1, 2, 1, 0.5, 2, 0.7, 1, 1, 1, 1, 0.5, 0.7],
  norecoil: [1, 0.000001, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
  halfrecoil: [1, 0.5, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
  morerecoil: [1, 1.15, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
  muchmorerecoil: [1, 1.35, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
  lotsmorrecoil: [1, 1.8, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
  tonsmorrecoil: [1, 4, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
  doublereload: [0.5, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
  morereload: [0.75, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
  halfreload: [2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
  lessreload: [2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
  threequartersrof: [1.333, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
  morespeed: [1, 1, 1, 1, 1, 2, 1, 1.3, 1.3, 1, 1, 1, 1],
  bitlessspeed: [1, 1, 1, 1, 1, 2, 1, 0.93, 0.93, 1, 1, 1, 1],
  slow: [1, 1, 1, 1, 1, 2, 1, 0.7, 0.7, 1, 1, 1, 1],
  halfspeed: [1, 1, 1, 1, 1, 2, 1, 0.5, 1, 1, 1, 1, 1],
  notdense: [1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0.1, 1, 1],
  halfrange: [1, 1, 1, 1, 1, 2, 1, 1, 1, 0.5, 1, 1, 1],
  fake: [1, 1, 1, 0.00001, 0.0001, 2, 1, 0.00001, 2, 0, 1, 1, 1],
  lessspread: [1, 1, 1, 1, 1, 2, 1, 0.7, 1, 1, 1, 0.000001, 1],
  /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
  op: [0.5, 1.3, 1, 1, 4, 4, 4, 3, 2, 1, 5, 2, 1],
  protectorswarm: [5, 0.000001, 1, 1, 100, 1, 1, 1, 1, 0.5, 5, 1, 10],
  arenac: [0.2, 0.000001, 1, 1, 1e20, 1e20, 10, 10, 12, 1, 0.01, 1, 10],
  arenab: [0.2, 10, 1, 1, 1e20, 1e20, 10, 10, 12, 1, 0.01, 1, 10],
  arenarecoil: [0.1, 20, 1, 1, 1, 1, 1, 1, 0.1, 0.1, 0.01, 1, 10],
  Idrone: [1, 0.000001, 1, 2, 1000, 1000, 100, 1, 1, 1, 5, 1, 5],
  killerbullet: [0.2, 0.000001, 1, 1, 1e200, 1e22220, 10, 10, 12, 1, 0.01, 1, 10],
};
const dfltskl = 9;

// NAMES
const statnames = {
  smasher: 1,
  drone: 2,
  necro: 3,
  swarm: 4,
  trap: 5,
  generic: 6,
};
const gunCalcNames = {
  default: 0,
  bullet: 1,
  drone: 2,
  swarm: 3,
  fixedReload: 4,
  thruster: 5,
  sustained: 6,
  necro: 7,
  trap: 8,
};

// ENTITY DEFINITIONS
exports.genericEntity = {
  NAME: "",
  LABEL: "Unknown Entity",
  TYPE: "unknown",
  DAMAGE_CLASS: 0, // 0: def, 1: food, 2: tanks, 3: obstacles
  DANGER: 0,
  VALUE: 0,
  SHAPE: 0,
  COLOR: 16,
  INDEPENDENT: false,
  CONTROLLERS: ["doNothing"],
  HAS_NO_MASTER: false,
  MOTION_TYPE: "glide", // motor, swarm, chase
  FACING_TYPE: "toTarget", // turnWithSpeed, withMotion, looseWithMotion, toTarget, looseToTarget
  DRAW_HEALTH: false,
  DRAW_SELF: true,
  DAMAGE_EFFECTS: true,
  RATEFFECTS: true,
  MOTION_EFFECTS: true,
  INTANGIBLE: false,
  ACCEPTS_SCORE: true,
  GIVE_KILL_MESSAGE: false,
  CAN_GO_OUTSIDE_ROOM: false,
  HITS_OWN_TYPE: "normal", // hard, repel, never, hardWithBuffer
  DIE_AT_LOW_SPEED: false,
  DIE_AT_RANGE: false,
  CLEAR_ON_MASTER_UPGRADE: false,
  PERSISTS_AFTER_DEATH: false,
  VARIES_IN_SIZE: false,
  HEALTH_WITH_LEVEL: true,
  CAN_BE_ON_LEADERBOARD: true,
  HAS_NO_RECOIL: false,
  AUTO_UPGRADE: "none",
  BUFF_VS_FOOD: false,
  OBSTACLE: false,
  CRAVES_ATTENTION: false,
  NECRO: false,
  UPGRADES_TIER_1: [],
  UPGRADES_TIER_2: [],
  UPGRADES_TIER_3: [],
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  LEVEL: 0,
  SKILL_CAP: [
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
  ],
  GUNS: [],
  MAX_CHILDREN: 0,
  BODY: {
    ACCELERATION: 1,
    SPEED: 0,
    HEALTH: 1,
    RESIST: 1,
    SHIELD: 0,
    REGEN: 0,
    DAMAGE: 1,
    PENETRATION: 1,

    RANGE: 0,
    FOV: 1,
    DENSITY: 1,
    STEALTH: 1,
    PUSHABILITY: 1,
    HETERO: 2,
  },
  FOOD: {
    LEVEL: -1,
  },
};

// FOOD
exports.food = {
  TYPE: "food",
  DAMAGE_CLASS: 1,
  CONTROLLERS: ["moveInCircles"],
  HITS_OWN_TYPE: "repel",
  MOTION_TYPE: "drift",
  FACING_TYPE: "turnWithSpeed",
  VARIES_IN_SIZE: true,
  BODY: {
    STEALTH: 30,
    PUSHABILITY: 1,
  },
  DAMAGE_EFFECTS: false,
  RATEFFECTS: false,
  HEALTH_WITH_LEVEL: false,
};

const basePolygonDamage = 1;
const basePolygonHealth = 2;
exports.hugePentagon = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 5,
  },
  LABEL: "Alpha Pentagon",
  VALUE: 369240000,
  SHAPE: -5,
  SIZE: 58,
  COLOR: 36,
  BODY: {
    DAMAGE: 2 * basePolygonDamage,
    DENSITY: 80,
    HEALTH: 100000 * basePolygonHealth,
    RESIST: Math.pow(5, 5),
    SHIELD: 40000 * basePolygonHealth,
    REGEN: 20000,
  },
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true,
};
exports.bigPentagon = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 4,
  },
  LABEL: "Beta Pentagon",
  VALUE: 80540000,
  SHAPE: 5,
  SIZE: 30,
  COLOR: 36,
  BODY: {
    DAMAGE: 2 * basePolygonDamage,
    DENSITY: 30,
    HEALTH: 50000 * basePolygonHealth,
    RESIST: Math.pow(2.50, 2.50),
    SHIELD: 20000 * basePolygonHealth,
    REGEN: 10000,
  },
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true,
};
exports.pentagon = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 3,
  },
  LABEL: "Pentagon",
  VALUE: 16980000,
  SHAPE: 5,
  SIZE: 16,
  COLOR: 36,
  BODY: {
    DAMAGE: 2 * basePolygonDamage,
    DENSITY: 8,
    HEALTH: 25000* basePolygonHealth,
    RESIST: 3,
    PENETRATION: 1.1,
  },
  DRAW_HEALTH: true,
};
exports.triangle = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 2,
  },
  LABEL: "Triangle",
  VALUE: 120,
  SHAPE: 3,
  SIZE: 9,
  COLOR: 2,
  BODY: {
    DAMAGE: basePolygonDamage,
    DENSITY: 6,
    HEALTH: 3 * basePolygonHealth,
    RESIST: 1.15,
    PENETRATION: 1.5,
  },
  DRAW_HEALTH: true,
};
exports.square = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 1,
  },
  LABEL: "Square",
  VALUE: 300,
  SHAPE: 4,
  SIZE: 10,
  COLOR: 13,
  BODY: {
    DAMAGE: basePolygonDamage,
    DENSITY: 4,
    HEALTH: basePolygonHealth,
    PENETRATION: 2,
  },
  DRAW_HEALTH: true,
  INTANGIBLE: false,
};
exports.egg = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 0,
  },
  LABEL: "Egg",
  VALUE: 10,
  SHAPE: 0,
  SIZE: 5,
  COLOR: 6,
  INTANGIBLE: true,
  BODY: {
    DAMAGE: 0,
    DENSITY: 2,
    HEALTH: 0.0011,
    PUSHABILITY: 0,
  },
  DRAW_HEALTH: false,
};

exports.greenpentagon = {
  PARENT: [exports.food],
  LABEL: "Pentagon",
  VALUE: 30000,
  SHAPE: 5,
  SIZE: 16,
  COLOR: 20,
  BODY: {
    DAMAGE: 3,
    DENSITY: 8,
    HEALTH: 200,
    RESIST: 1.25,
    PENETRATION: 1.1,
  },
  DRAW_HEALTH: true,
};
exports.greentriangle = {
  PARENT: [exports.food],
  LABEL: "Triangle",
  VALUE: 7000,
  SHAPE: 3,
  SIZE: 9,
  COLOR: 0,
  BODY: {
    DAMAGE: 1,
    DENSITY: 6,
    HEALTH: 60,
    RESIST: 1.15,
    PENETRATION: 1.5,
  },
  DRAW_HEALTH: true,
};
exports.greensquare = {
  PARENT: [exports.food],
  LABEL: "Square",
  VALUE: 2000,
  SHAPE: 4,
  SIZE: 10,
  COLOR: 1,
  BODY: {
    DAMAGE: 0.5,
    DENSITY: 4,
    HEALTH: 20,
    PENETRATION: 2,
  },
  DRAW_HEALTH: true,
  INTANGIBLE: false,
};

exports.gem = {
  PARENT: [exports.food],
  LABEL: "Gem",
  VALUE: 2000,
  SHAPE: 6,
  SIZE: 5,
  COLOR: 0,
  BODY: {
    DAMAGE: basePolygonDamage / 4,
    DENSITY: 4,
    HEALTH: 10,
    PENETRATION: 2,
    RESIST: 2,
    PUSHABILITY: 0.25,
  },
  DRAW_HEALTH: true,
  INTANGIBLE: false,
};
exports.obstacle = {
  TYPE: "wall",
  DAMAGE_CLASS: 1,
  LABEL: "Rock",
  FACING_TYPE: "turnWithSpeed",
  SHAPE: -9,
  BODY: {
    PUSHABILITY: 0,
    HEALTH: 10000,
    SHIELD: 10000,
    REGEN: 1000,
    DAMAGE: 1,
    RESIST: 15,
    STEALTH: 1,
  },
  VALUE: 0,
  SIZE: 60,
  COLOR: 16,
  VARIES_IN_SIZE: true,
  GIVE_KILL_MESSAGE: true,
  ACCEPTS_SCORE: false,
};
exports.babyObstacle = {
  PARENT: [exports.obstacle],
  SIZE: 25,
  SHAPE: -7,
  LABEL: "Gravel",
};

// WEAPONS
exports.celestialTrapTurret = {
  PARENT: [exports.genericTank],
  LABEL: "powerTurret",
  BODY: {
    FOV: 0.5,
  },
  INDEPENDENT: true,
  CONTROLLERS: ["nearestDifferentMaster"],
  COLOR: 16,
  AI: {
    SKYNET: true,
    FULL_VIEW: true,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 14, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [4, 14, 1.8, 16, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.trap,
          g.op,
          g.fast,
          g.halfreload,
          g.op,
          g.op,
          g.halfreload,
        ]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};

function bossStats(options = {}) {
  if (!options.health) options.health = 1;
  if (!options.damage) options.damage = 1;
  if (!options.speed) options.speed = 1;
  if (!options.fov) options.fov = 1;
  return {
    HEALTH: base.HEALTH * 15 * options.health,
    DAMAGE: base.DAMAGE * 1.5 * options.damage,
    SPEED: base.SPEED * 0.1 * options.speed,
    DENSITY: 500,
    FOV: base.FOV * 1.125 * options.fov,
    SHIELD: base.SHIELD * 0.75,
  };
}
const setBuild = (build) => {
  let skills = build.split(build.includes("/") ? "/" : "").map((r) => +r);
  if (skills.length !== 10)
    throw new RangeError("Build must be made up of 10 numbers");
  return [6, 4, 3, 5, 2, 9, 0, 1, 8, 7].map((r) => skills[r]);
};
exports.celestialTrapTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 14, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [4, 14, 1.8, 16, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.trap,
          [4, 1, 1, 1, 2, 1, 0.25, 1, 1, 1, 10, 1, 1],
        ]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
        AUTOFIRE: true,
      },
    },
  ],
};
let celestialTrapTurretArray = [];
for (let i = 0; i < 9; i++) {
  celestialTrapTurretArray.push({
    POSITION: [7, 9, 0, i * (360 / 9) + 360 / 9 / 2, 0, 0],
    TYPE: [
      exports.celestialTrapTurret,
      { CONTROLERS: ["nearestDifferentMaster"] },
    ],
  });
}
let infinitusTrapTurretArray = [];
for (let i = 0; i < 21; i++) {
  infinitusTrapTurretArray.push({
    POSITION: [3.5, 9.5, 0, i * (360 / 21) + 360 / 21/ 2, 0, 0,],
    TYPE: [
      exports.celestialTrapTurret,
      { CONTROLERS: ["nearestDifferentMaster"] }
    ]
  });
};
let superiorTrapTurretArray = [];
for (let i = 0; i < 13; i++) {
  superiorTrapTurretArray.push({
    POSITION: [5, 9, 0, i * (360 / 13) + 360 / 13 / 2, 0, 0],
    TYPE: [
      exports.celestialTrapTurret,
      { CONTROLERS: ["nearestDifferentMaster"] },
    ],
  });
}
//3.5, 9.5
const wepHealthFactor = 0.5;
const wepDamageFactor = 1.5;
exports.bullet = {
  LABEL: "Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 1 * wepDamageFactor,
    PUSHABILITY: 0.3,
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
};

exports.Xbullet = {
  LABEL: "XBullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 1 * wepDamageFactor,
    PUSHABILITY: 0.3,
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
  GUNS: [
    
  ],
};

exports.trailbullet = {
  LABEL: "Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 1 * wepDamageFactor,
    PUSHABILITY: 0.3,
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
  GUNS: [ 
    {//just want to try this first, should probably test it, if it doesnt work ill change it to bullets
      POSITION: [4, 7, 1.1, 18, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block,
          STAT_NAMES: statnames.bullet,
      },
    },
  ],
};


exports.jetbullet = {
  LABEL: "Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 0 * wepDamageFactor,
    PUSHABILITY: 0.3,
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
};

exports.quadbullet = {
  LABEL: "Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    PUSHABILITY: 0.3,
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      }, 
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.grenade = {
  LABEL: "Grenade",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    PUSHABILITY: 0.3,
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 30, 1, 0, 0, 0, 1.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.halfspeed]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 30, 1, 0, 0, 180, 1.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.halfspeed]),
        TYPE: exports.bullet,
      }, 
    },
    {
      POSITION: [1, 30, 1, 0, 0, 45, 1.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.halfspeed]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [1, 30, 1, 0, 0, 225, 1.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.halfspeed]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 30, 1, 0, 0, 90, 1.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.halfspeed]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 30, 1, 0, 0, 270, 1.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.halfspeed]),
        TYPE: exports.bullet,
      }, 
    },
    {
      POSITION: [1, 30, 1, 0, 0, 135, 1.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.halfspeed]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [1, 30, 1, 0, 0, 315, 1.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.halfspeed]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.quadtrapbullet = {
  LABEL: "Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    PUSHABILITY: 0.3,
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
  GUNS: [
    {
      POSITION: [14, 8, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [14, 8, 1, 0, 0, 90, 0],
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [14, 8, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [14, 8, 1, 0, 0, 270, 0],
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.radioactivebullet = {
  LABEL: "Radioactive Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    PUSHABILITY: 0.3,
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
  GUNS: [
   {
      POSITION: [5, 12, 1.2, 8, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload,
        ]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        LABEL: "Guard",
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload,
        ]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        LABEL: "Guard",
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload,
        ]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        LABEL: "Guard",
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload,
        ]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        LABEL: "Guard",
      },
    },
  ],
};
exports.flamingpumpkin = {
  LABEL: "Flaming Pumpkin",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  INDEPENDENT: true,
  BODY: {
    PENETRATION: 1,
    SPEED: 100,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 7 * wepHealthFactor,
    DAMAGE: 20 * wepDamageFactor,
    PUSHABILITY: 5,
  },
  SHAPE: [[-0.5,-1],[0.5,-1],[1,-0.5],[1,0.5],[0.5,1],[0.25,1],[0,1.5],[-0.5,1.6],[-0.7,1.25],[-0.1,1.3],[-0.1,1],[-0.5,1],[-1,0.5],[-1,-0.5]
         ],
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
  GUNS: [
  {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 15, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
        ]),
        TYPE: exports.squarebullet,
      },
    },
  ],
};
exports.pentabullet = {
  LABEL: "Penta Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    PUSHABILITY: 0.3,
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, -3, -30, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 3, 30, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, -2, -15, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 2, 15, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.healbullet = {
  LABEL: "Heal Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  SHAPE: [[0.25,1],[-0.25,1],[-0.25,0.25],[-1,0.25],[-1,-0.25],[-0.25,-0.25],[-0.25,-1],[0.25,-1],[0.25,-0.25],[1,-0.25],[1,0.25],[0.25,0.25]
         ],
  
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: -99999999999999999999999999999 * wepDamageFactor,
    PUSHABILITY: 0.3,
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
};
exports.repeller = {
  LABEL: "Repel Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  SHAPE: [[-0.5,-1],[0.5,-1],[1,-0.5],[1,0.5],[0.5,1],[-0.5,1],[0,0.5],[0,-0.5]
         ],
  BODY: {
    PENETRATION: 99999999999999999999999999999999999999999999999999999999999999999,
    SPEED: 20,
    RANGE: 999999999999999999999999999999999999999,
    DENSITY: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
    HEALTH: 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999 * wepHealthFactor,
    DAMAGE: 0 * wepDamageFactor,
    PUSHABILITY: 99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  //DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
};

exports.rocket = {
  LABEL: "Rocketer Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  SHAPE: [[-0.5,-1],[0.5,-1],[1,-0.5],[1,0.5],[0.5,1],[-0.5,1],[0,0.5],[0,-0.5]
         ],
  BODY: {
    PENETRATION: 1,
    SPEED: 5,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 5 * wepDamageFactor,
    PUSHABILITY: 0.33,
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  //DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 10, 1.4, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
  ],
};

exports.heavyrocket = {
  LABEL: "Heavy Rocketer Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  SHAPE: [[-0.5,-1],[0.5,-1],[1,-0.5],[1,0.5],[0.5,1],[-0.5,1],[0,0.5],[0,-0.5]
         ],
  BODY: {
    PENETRATION: 1,
    SPEED: 2,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 5 * wepDamageFactor,
    PUSHABILITY: 0.33,
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  //DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 10, 1.4, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.firebullet = {
  LABEL: "Fire Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  SHAPE: [[-1,-1],[0.5,-1],[1,-0.5],[1,0.5],[0.5,1],[-1,1],[-2,1],[-1,0.5],[-3,0],[-1,-0.5],[-2,-1]
         ],
  BODY: {
    PENETRATION: 1.5,
    SPEED: 20,
    RANGE: 90,
    DENSITY: 25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 20 * wepDamageFactor,
    PUSHABILITY: 100,
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
};

exports.flare = {
  LABEL: "Flare",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  SHAPE: [[-1,-1],[0.5,-1],[1,-0.5],[1,0.5],[0.5,1],[-1,1],[-2,1],[-1,0.5],[-3,0],[-1,-0.5],[-2,-1]
         ],
  BODY: {
    PENETRATION: 1.5,
    SPEED: 20,
    RANGE: 90,
    DENSITY: 25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 20 * wepDamageFactor,
    PUSHABILITY: 100,
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.thruster]),
        TYPE: exports.jetbullet,
        LABEL: "Bullet",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10, 1, 0, 0, 180, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.thruster]),
        TYPE: exports.jetbullet,
        LABEL: "Bullet",
      },
    },
  ],
};

exports.squarebullet = {
  LABEL: "Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  SHAPE: 4,
  BODY: {
    PENETRATION: 1,
    SPEED: 5,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor, //ok
    PUSHABILITY: 1, //Ok yea I gotta buff strider. Too weak
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
};
exports.laser = {
  LABEL: "Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  SHAPE: [[-1,-0.05],[-1,0.05],[1,0.05],[1,-0.05]
         ],
  BODY: {
    PENETRATION: 1,
    SPEED: 5,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor, //ok
    PUSHABILITY: 50, //Ok yea I gotta buff strider. Too weak
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
};

exports.biglaser = {
  LABEL: "Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  SHAPE: [[-4,-1],[-4,1],[4,1],[4,-1]
         ],
  BODY: {
    PENETRATION: 1,
    SPEED: 5,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 0.5 * wepDamageFactor, //ok
    PUSHABILITY: 2, //Ok yea I gotta buff strider. Too weak
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
};

exports.stronglaser = {
  LABEL: "Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  SHAPE: [[-4,-1],[-4,1],[4,1],[4,-1]
         ],
  BODY: {
    PENETRATION: 1,
    SPEED: 5,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 5 * wepDamageFactor, //ok
    PUSHABILITY: 2, //Ok yea I gotta buff strider. Too weak
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
};
exports.ebullet = {
  LABEL: "E Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  SHAPE: [
    [-1,1],[-1,-1],[0,-1],[0,-0.75],[-0.75,-0.75],[-0.75,-0.125],[0,-0.125],[0,0.125],[-0.75,0.125],[-0.75,0.75],[0,0.75],[0,1]
         ],
  BODY: {
    PENETRATION: 1,
    SPEED: 100,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    PUSHABILITY: 0.3,
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
};
exports.swarmbullet = {
  LABEL: "AutoBullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 5,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    PUSHABILITY: 0.3,
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
  GUNS: [
    {
      POSITION: [1, 1.1, 0.6, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.collapsebullet = {
  LABEL: "collapser",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 2,
    SPEED: 0,
    RANGE: 200,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    PUSHABILITY: 4,
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [1, 10, 1, -70, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 10, 1, -70, 0, 12, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 10, 1, -70, 0, 24, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 10, 1, -70, 0, 36, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 10, 1, -70, 0, 48, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 10, 1, -70, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 10, 1, -70, 0, 72, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 10, 1, -70, 0, 84, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 10, 1, -70, 0, 96, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 10, 1, -70, 0, 108, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 10, 1, -70, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 10, 1, -70, 0, 132, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 10, 1, -70, 0, 144, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 10, 1, -70, 0, 156, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 10, 1, -70, 0, 168, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 10, 1, -70, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 10, 1, -70, 0, 192, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 10, 1, -70, 0, 204, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 10, 1, -70, 0, 216, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 10, 1, -70, 0, 228, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 10, 1, -70, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 10, 1, -70, 0, 252, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 10, 1, -70, 0, 264, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 10, 1, -70, 0, 276, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 10, 1, -70, 0, 288, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 10, 1, -70, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 10, 1, -70, 0, 312, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 10, 1, -70, 0, 324, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 10, 1, -70, 0, 336, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 10, 1, -70, 0, 348, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    ],
};
exports.twinbullet = {
  LABEL: "Mini Twin",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    PUSHABILITY: 0.3,
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
  GUNS: [
{
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    ],
  TURRENTS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [25, 0, 0, 0, 360, 1],
      TYPE: [exports.ballgun, {COLOR: 9}]
    },
    
  ],
};
exports.machinebullet = {
  LABEL: "MiniMachineGun",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    PUSHABILITY: 0.3,
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.spikebullet = {
  SIZE: 10,
  LABEL: "Metal Spike",
  TYPE: "bullet",
SHAPE: [[6,-0.4],[12,0],[6,0.4],[2.5,0.7],[-1,1],[-2,0],[-1,-1],[2.5,-0.7]],
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1000,
    SPEED: 4,
    RANGE: 90,
    DENSITY: 4,
    HEALTH: 10,
    DAMAGE: 10,
    PUSHABILITY: 0.3,
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
};
exports.knife = {
  SIZE: 10,
  LABEL: "knife",
  TYPE: "bullet",
  SHAPE: [
    [-1.48,-1.01],
    [0.5,-1],
    [1.16,-1.02],
    [2.47,-0.94],
    [2.5,-0.95],
    [3,-1.12],
    [4.38,-1.72],
    [5.95,-1.8],
    [7.27,-1.18],
    [7.64,-0.3],
    [-1.48,-0.41]
  ],
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    PUSHABILITY: 0.3,
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
};

exports.moddedsquareA = {
  PARENT: [exports.drone],
  LABEL: 'Square Turret',
  TYPE: 'drone',
  SHAPE: 4,
  HITS_OWN_TYPE: "hard",
  BODY: {
    FOV: 0.5,
  }, 
  AI: {
    BLIND: true,
    FARMER: true,
  },
};
exports.autosquare = makeAuto(exports.moddedsquareA);

exports.heavyDrone = {
  PARENT: [exports.drone],
  SHAPE: 5,
  HITS_OWN_TYPE: "hard",
  BODY: {
    FOV: 0.5,
  },
  AI: {
    BLIND: true,
    FARMER: true,
  },
};

exports.casing = {
  PARENT: [exports.bullet],
  LABEL: "Shell",
  TYPE: "swarm",
};
exports.swarm = {
  LABEL: "Swarm Drone",
  TYPE: "swarm",
  ACCEPTS_SCORE: false,
  SHAPE: 3,
  MOTION_TYPE: "swarm",
  FACING_TYPE: "smoothWithMotion",
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  CRAVES_ATTENTION: true,
  BODY: {
    ACCELERATION: 3,
    PENETRATION: 1.5,
    HEALTH: 0.35 * wepHealthFactor,
    DAMAGE: 1.5 * wepDamageFactor,
    SPEED: 4.5,
    RESIST: 1.6,
    RANGE: 225,
    DENSITY: 12,
    PUSHABILITY: 0.5,
    FOV: 1.5,
  },
  DIE_AT_RANGE: true,
  BUFF_VS_FOOD: true,
};
exports.bee = {
  PARENT: [exports.swarm],
  PERSISTS_AFTER_DEATH: true,
  SHAPE: 4,
  LABEL: "Drone",
  HITS_OWN_TYPE: "hardWithBuffer",
};
exports.autoswarm = {
  PARENT: [exports.swarm],
  AI: { FARMER: true },
  INDEPENDENT: true,
};

exports.trap = {
  LABEL: "Thrown Trap",
  TYPE: "trap",
  ACCEPTS_SCORE: false,
  SHAPE: -3,
  MOTION_TYPE: "glide", // def
  FACING_TYPE: "turnWithSpeed",
  HITS_OWN_TYPE: "push",
  DIE_AT_RANGE: true,
  BODY: {
    HEALTH: 1 * wepHealthFactor,
    DAMAGE: 2 * wepDamageFactor,
    RANGE: 450,
    DENSITY: 2.5,
    RESIST: 2.5,
    SPEED: 0,
  },
};
exports.block = {
  LABEL: "Set Trap",
  PARENT: [exports.trap],
  SHAPE: -4,
  MOTION_TYPE: "motor",
  CONTROLLERS: ["goToMasterTarget"],
  BODY: {
    SPEED: 1,
    DENSITY: 5,
  },
};
exports.trapblock = {
  LABEL: "Set Trap",
  PARENT: [exports.trap],
  SHAPE: -4,
  MOTION_TYPE: "motor",
  CONTROLLERS: ["doNothing"],
  BODY: {
    SPEED: 1,
    DENSITY: 5,
  },
  GUNS: [
    {
      POSITION: [10, 12, 1.1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.trap,
      },
    },
  ],
};
exports.quadblock = {
  LABEL: "Set Trap",
  PARENT: [exports.trap],
  SHAPE: -4,
  MOTION_TYPE: "motor",
  CONTROLLERS: ["goToMasterTarget"],
  BODY: {
    SPEED: 1,
    DENSITY: 5,
    GUNS: [
      {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 90, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 270, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
    ],
  },
};
exports.hexablock = {
  LABEL: "Set Trap",
  PARENT: [exports.trap],
  SHAPE: -6,
  MOTION_TYPE: "motor",
  CONTROLLERS: ["goToMasterTarget"],
  BODY: {
    SPEED: 1,
    DENSITY: 5,
    GUNS: [
      {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 60, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 120, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 180, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 240, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 300, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
    ],
  },
};
exports.boomerang = {
  LABEL: "boomerang",
  PARENT: [exports.trap],
  CONTROLLERS: ["boomerang"],
  MOTION_TYPE: "motor",
  HITS_OWN_TYPE: "never",
  SHAPE: -5,
  SPEED: 100,
  BODY: {
    SPEED: 1.25,
    RANGE: 120,
  },
};
exports.drone = {
  LABEL: "Drone",
  TYPE: "drone",
  ACCEPTS_SCORE: false,
  DANGER: 2,
  CONTROL_RANGE: 0,
  SHAPE: 3,
  MOTION_TYPE: "chase",
  FACING_TYPE: "smoothToTarget",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "hangOutNearMaster",
  ],
  AI: { BLIND: true },
  BODY: {
    PENETRATION: 1.2,
    PUSHABILITY: 0.6,
    ACCELERATION: 0.05,
    HEALTH: 0.6 * wepHealthFactor,
    DAMAGE: 1.25 * wepDamageFactor,
    SPEED: 3.8,
    RANGE: 200,
    DENSITY: 0.03,
    RESIST: 1.5,
    FOV: 0.8,
  },
  HITS_OWN_TYPE: "hard",
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  BUFF_VS_FOOD: true,
};
exports.gunnerdrone = {
  LABEL: "Drone",
  TYPE: "drone",
  ACCEPTS_SCORE: false,
  DANGER: 2,
  CONTROL_RANGE: 0,
  MOTION_TYPE: "chase",
  FACING_TYPE: "smoothToTarget",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "hangOutNearMaster",
  ],
  AI: { BLIND: true },
  BODY: {
    PENETRATION: 1.2,
    PUSHABILITY: 0.6,
    ACCELERATION: 0.05,
    HEALTH: 0.01 * wepHealthFactor,
    DAMAGE: 0.0001 * wepDamageFactor,
    SPEED: 3.8,
    RANGE: 200,
    DENSITY: 0.03,
    RESIST: 1.5,
    FOV: 0.8,
  },
  HITS_OWN_TYPE: "hard",
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  BUFF_VS_FOOD: true,
   GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.octodrone = {
  LABEL: "Octo Drone",
  TYPE: "drone",
  ACCEPTS_SCORE: false,
  DANGER: 2,
  CONTROL_RANGE: 0,
  MOTION_TYPE: "chase",
  FACING_TYPE: "smoothToTarget",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "hangOutNearMaster",
  ],
  AI: { BLIND: true },
  BODY: {
    PENETRATION: 1.2,
    PUSHABILITY: 0.6,
    ACCELERATION: 0.05,
    HEALTH: 0.6 * wepHealthFactor,
    DAMAGE: 1.25 * wepDamageFactor,
    SPEED: 3.8,
    RANGE: 200,
    DENSITY: 0.03,
    RESIST: 1.5,
    FOV: 0.8,
  },
  HITS_OWN_TYPE: "hard",
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  BUFF_VS_FOOD: true,
  DIE_AT_LOW_SPEED: true,
   GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 225, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 315, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.diseasedrone = {
  LABEL: "disease",
  TYPE: "drone",
  ACCEPTS_SCORE: false,
  DANGER: 2,
  CONTROL_RANGE: 0,
  SHAPE: [[-1,-1],[1,-1.5],[1,1.5],[-1,1],[-1.5,0]
         ],
  MOTION_TYPE: "chase",
  FACING_TYPE: "smoothToTarget",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "hangOutNearMaster",
  ],
  AI: { BLIND: true },
  BODY: {
    PENETRATION: 1.2,
    PUSHABILITY: 0.6,
    ACCELERATION: 0.05,
    HEALTH: 0.6 * wepHealthFactor,
    DAMAGE: 1.25 * wepDamageFactor,
    SPEED: 3.8,
    RANGE: 200,
    DENSITY: 0.03,
    RESIST: 1.5,
    FOV: 0.8,
  },
  HITS_OWN_TYPE: "hard",
  DRAW_HEALTH: true,
  CLEAR_ON_MASTER_UPGRADE: true,
  BUFF_VS_FOOD: true,
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ 
    {
      POSITION: [4, 3, 1, 11, -3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [4, 3, 1, 11, 3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [4, 4, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [1, 4, 1, 12, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [1, 4, 1, 11, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [1, 3, 1, 13, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [1, 2, 1, 13, 2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [1, 2, 1, 13, -2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [15, 14, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [8, 14, -1.3, 4, 0, 0, 0],
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.infectiondrone = {
  LABEL: "infection",
  TYPE: "drone",
  ACCEPTS_SCORE: false,
  DANGER: 2,
  CONTROL_RANGE: 0,
  SHAPE: [[0,-0.5],[1,-1.5],[1,1.5],[0,0.5],[-3,0]
         ],
  MOTION_TYPE: "chase",
  FACING_TYPE: "smoothToTarget",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "hangOutNearMaster",
  ],
  AI: { BLIND: true },
  BODY: {
    PENETRATION: 1.2,
    PUSHABILITY: 0.6,
    ACCELERATION: 0.05,
    HEALTH: 0.6 * wepHealthFactor,
    DAMAGE: 1.25 * wepDamageFactor,
    SPEED: 3.8,
    RANGE: 200,
    DENSITY: 0.03,
    RESIST: 1.5,
    FOV: 0.8,
  },
  HITS_OWN_TYPE: "hard",
  DRAW_HEALTH: true,
  CLEAR_ON_MASTER_UPGRADE: true,
  BUFF_VS_FOOD: true,
   GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4, 3, 1, 11, -3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [4, 3, 1, 11, 3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [4, 4, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [1, 4, 1, 12, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [1, 4, 1, 11, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [1, 3, 1, 13, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [1, 2, 1, 13, 2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [1, 2, 1, 13, -2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [15, 14, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [8, 14, -1.3, 4, 0, 0, 0],
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.boosterdrone = {
  LABEL: "Booster Drone",
  TYPE: "drone",
  ACCEPTS_SCORE: false,
  DANGER: 2,
  CONTROL_RANGE: 0,
  MOTION_TYPE: "chase",
  FACING_TYPE: "smoothToTarget",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "hangOutNearMaster",
  ],
  AI: { BLIND: true },
  DIE_AT_LOW_SPEED: true,
  BODY: {
    PENETRATION: 1.2,
    PUSHABILITY: 0.6,
    ACCELERATION: 0.05,
    HEALTH: 0.6 * wepHealthFactor,
    DAMAGE: 1.25 * wepDamageFactor,
    SPEED: 3.8,
    RANGE: 200,
    DENSITY: 0.03,
    RESIST: 1.5,
    FOV: 0.8,
  },
  HITS_OWN_TYPE: "hard",
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  BUFF_VS_FOOD: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.muchmorerecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.minielitedestroyer = {
  LABEL: "Drone",
  TYPE: "drone",
  ACCEPTS_SCORE: false,
  DANGER: 2,
  CONTROL_RANGE: 0,
  SHAPE: 3,
  MOTION_TYPE: "chase",
  FACING_TYPE: "smoothToTarget",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "hangOutNearMaster",
  ],
  AI: { BLIND: true },
  BODY: {
    PENETRATION: 1.2,
    PUSHABILITY: 0.6,
    ACCELERATION: 0.05,
    HEALTH: 0.6 * wepHealthFactor,
    DAMAGE: 1.25 * wepDamageFactor,
    SPEED: 3.8,
    RANGE: 200,
    DENSITY: 0.03,
    RESIST: 1.5,
    FOV: 0.8,
  },
  HITS_OWN_TYPE: "hard",
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  BUFF_VS_FOOD: true,
};
exports.minielitesprayer = {
  LABEL: "Drone",
  TYPE: "drone",
  ACCEPTS_SCORE: false,
  DANGER: 2,
  CONTROL_RANGE: 0,
  SHAPE: 3,
  MOTION_TYPE: "chase",
  FACING_TYPE: "smoothToTarget",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "hangOutNearMaster",
  ],
  AI: { BLIND: true },
  BODY: {
    PENETRATION: 1.2,
    PUSHABILITY: 0.6,
    ACCELERATION: 0.05,
    HEALTH: 0.6 * wepHealthFactor,
    DAMAGE: 1.25 * wepDamageFactor,
    SPEED: 3.8,
    RANGE: 200,
    DENSITY: 0.03,
    RESIST: 1.5,
    FOV: 0.8,
  },
  HITS_OWN_TYPE: "hard",
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  BUFF_VS_FOOD: true,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 6, 0, 180, 190, 0],
      TYPE: [exports.spray, { COLOR: 5 }],
    },
    {
      POSITION: [14, 6, 0, 60, 190, 0],
      TYPE: [exports.spray, { COLOR: 5 }],
    },
    {
      POSITION: [14, 6, 0, -60, 190, 0],
      TYPE: [exports.spray, { COLOR: 5 }],
    },
  ],
};
exports.minielitegunner = {
  LABEL: "Drone",
  TYPE: "drone",
  ACCEPTS_SCORE: false,
  DANGER: 2,
  CONTROL_RANGE: 0,
  SHAPE: 3,
  MOTION_TYPE: "chase",
  FACING_TYPE: "smoothToTarget",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "hangOutNearMaster",
  ],
  AI: { BLIND: true },
  BODY: {
    PENETRATION: 1.2,
    PUSHABILITY: 0.6,
    ACCELERATION: 0.05,
    HEALTH: 0.6 * wepHealthFactor,
    DAMAGE: 1.25 * wepDamageFactor,
    SPEED: 3.8,
    RANGE: 200,
    DENSITY: 0.03,
    RESIST: 1.5,
    FOV: 0.8,
  },
  HITS_OWN_TYPE: "hard",
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  BUFF_VS_FOOD: true,
   GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 16, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 16, 1.5, 14, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: [exports.pillbox, { INDEPENDENT: true }],
      },
    },
    {
      POSITION: [6, 14, -2, 2, 0, 60, 0],
    },
    {
      POSITION: [6, 14, -2, 2, 0, 300, 0],
    },
  ],
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 8, 0, 60, 180, 0],
      TYPE: [exports.auto4gun],
    },
    {
      POSITION: [14, 8, 0, 300, 180, 0],
      TYPE: [exports.auto4gun],
    },
  ],
};
exports.guidedbullet = {
  LABEL: "Bullet",
  TYPE: "drone",
  ACCEPTS_SCORE: false,
  DANGER: 2,
  CONTROL_RANGE: 100,
  MOTION_TYPE: "chase",
  FACING_TYPE: "smoothToTarget",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "hangOutNearMaster",
  ],
  AI: { BLIND: true },
  BODY: {
    PENETRATION: 1,
    PUSHABILITY: 0.3,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    SPEED: 3.75,
    RANGE: 200,
    DENSITY: 1.25,
  },
  HITS_OWN_TYPE: false,
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  BUFF_VS_FOOD: true,
  DIE_AT_LOW_SPEED: true,
};
exports.decoy = {
  LABEL: "Bullet",
  TYPE: "drone",
  ACCEPTS_SCORE: true,
  DANGER: 2,
  CONTROL_RANGE: 100,
  MOTION_TYPE: "chase",
  FACING_TYPE: "smoothToTarget",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
  ],
  AI: { BLIND: true },
  BODY: {
    PENETRATION: 1,
    PUSHABILITY: 0.3,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    SPEED: 2.75,
    RANGE: 200,
    DENSITY: 1.25,
  },
  HITS_OWN_TYPE: false,
  DRAW_HEALTH: true,
  CLEAR_ON_MASTER_UPGRADE: true,
  BUFF_VS_FOOD: true,
  GUNS: [
  {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 39, 1.2, 8, 0, 180, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        LABEL: "Bullet",
      },
    },
  ],
};
exports.shard = {
  LABEL: "Shard",
  TYPE: "drone",
  ACCEPTS_SCORE: false,
  DANGER: 2,
  CONTROL_RANGE: 0,
  SHAPE: [[-3,0],[0,-0.5],[1,0],[0,0.5]],
  MOTION_TYPE: "chase",
  FACING_TYPE: "smoothToTarget",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "hangOutNearMaster",
  ],
  AI: { BLIND: true },
  BODY: {
    PENETRATION: 1.9,
    PUSHABILITY: 2,
    ACCELERATION: 1,
    HEALTH: 4 * wepHealthFactor,
    DAMAGE: 5 * wepDamageFactor,
    SPEED: 6,
    RANGE: 200,
    DENSITY: 0.03,
    RESIST: 1.5,
    FOV: 0.8,
    GUNS: [
       {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
    ],
  },
  HITS_OWN_TYPE: "hard",
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  BUFF_VS_FOOD: true,
};
exports.dronespawn = {
  LABEL: "drone spawner",
  TYPE: "drone",
  ACCEPTS_SCORE: false,
  DANGER: 2,
  CONTROL_RANGE: 0,
  SIZE: 20,
  SHAPE: 3,
  MOTION_TYPE: "chase",
  FACING_TYPE: "smoothToTarget",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "hangOutNearMaster",
  ],
  AI: { BLIND: true },
  BODY: {
    PENETRATION: 1.2,
    PUSHABILITY: 0.6,
    ACCELERATION: 0.05,
    HEALTH: 0.6 * wepHealthFactor,
    DAMAGE: 1.25 * wepDamageFactor,
    SPEED: 3.8,
    RANGE: 200,
    DENSITY: 0.03,
    RESIST: 1.5,
    FOV: 0.8,
  },
  MAX_CHILDREN: 4,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
  ],
  HITS_OWN_TYPE: "hard",
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  BUFF_VS_FOOD: true,
};
exports.bigDrone = {
  PARENT: [exports.drone],
  SHAPE: [
    [-1.91, 2.293],
    [2.047, -0.002],
    [-1.908, -2.293],
  ],
  HITS_OWN_TYPE: "hard",
  BODY: {
    FOV: 0.5,
  },
  AI: {
    BLIND: true,
    FARMER: true,
  },
};
exports.massiveDrone = {
  PARENT: [exports.drone],
  SHAPE: [
    [-1.91, 2.293],
    [2.047, -0.002],
    [-1.908, -2.293],
  ],
  HITS_OWN_TYPE: "hard",
  BODY: {
    FOV: 0.5,
    SPEED: 1.3,
    DAMAGE: 6,
  },
  AI: {
    BLIND: true,
    FARMER: true,
  },
};
exports.bigfiredrone = {
  PARENT: [exports.drone],
  SHAPE: [[-1,-1],[0.5,-1],[1,-0.5],[1,0.5],[0.5,1],[-1,1],[-2,1],[-1,0.5],[-3,0],[-1,-0.5],[-2,-1]
         ],
  HITS_OWN_TYPE: "hard",
  BODY: {
    FOV: 0.5,
    SPEED: 0.8,
    DAMAGE: 0.07,
  },
  AI: {
    BLIND: true,
    FARMER: true,
  },
};
exports.sunchip = {
  PARENT: [exports.drone],
  SHAPE: 4,
  NECRO: true,
  HITS_OWN_TYPE: "hard",
  BODY: {
    FOV: 0.5,
  },
  AI: {
    BLIND: true,
    FARMER: true,
  },
  DRAW_HEALTH: false,
};
exports.autosunchip = {
  PARENT: [exports.sunchip],
  AI: {
    BLIND: true,
    FARMER: true,
  },
  INDEPENDENT: true,
};
exports.gunchip = {
  PARENT: [exports.drone],
  SHAPE: -2,
  NECRO: true,
  HITS_OWN_TYPE: "hard",
  BODY: {
    FOV: 0.5,
  },
  AI: {
    BLIND: true,
    FARMER: true,
  },
  DRAW_HEALTH: false,
};

exports.missile = {
  PARENT: [exports.bullet],
  LABEL: "Missile",
  INDEPENDENT: true,
  BODY: {
    RANGE: 120,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, -2, 130, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 2, 230, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
  ],
};

exports.octobullet = {
  PARENT: [exports.bullet],
  LABEL: "octobullet",
  INDEPENDENT: true,
  BODY: {
    RANGE: 120,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, 2, 30, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 2, 60, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, 2, 90, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 2, 120, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, 2, 150, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 2, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },//gira if you ever took a look through this code, there are a lot of unused tanks that we could just add to the normal tanks
    // i think im gonna do that tomorrow, anyways see ya im going to bed
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, 2, 210, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 2, 240, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 2, 270, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 2, 300, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 2, 330, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 2, 360, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
  ],
};
exports.hypermissile = {
  PARENT: [exports.missile],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, -2, 330, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.morerecoil,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 2, 360, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.morerecoil,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [14, 6, 1, 0, -2, 90, 0.5],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.morerecoil,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
      },
    },
    {
      POSITION: [14, 6, 1, 0, 2, 270, 0.5],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.morerecoil,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
      },
    },
  ],
};
exports.snake = {
  PARENT: [exports.bullet],
  LABEL: "Snake",
  INDEPENDENT: true,
  BODY: {
    RANGE: 120,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.4, 8, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.thruster,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.snake,
          g.snakeskin,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
      },
    },
    {
      POSITION: [10, 12, 0.8, 8, 0, 180, 0.5],
      PROPERTIES: {
        AUTOFIRE: true,
        NEGATIVE_RECOIL: true,
        STAT_CALCULATOR: gunCalcNames.thruster,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.snake,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
      },
    },
  ],
};
exports.hive = {
  PARENT: [exports.bullet],
  LABEL: "Hive",
  BODY: {
    RANGE: 90,
    FOV: 0.5,
  },
  FACING_TYPE: "turnWithSpeed",
  INDEPENDENT: true,
  CONTROLLERS: ["alwaysFire", "nearestDifferentMaster", "targetSelf"],
  AI: { NO_LEAD: true },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 9.5, 0.6, 7, 0, 108, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 180, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 252, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 324, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 36, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};

// TANK CLASSES
const base = {
  ACCEL: 1.6,
  SPEED: 5.25,
  HEALTH: 20,
  DAMAGE: 3,
  RESIST: 1,
  PENETRATION: 1.05,
  SHIELD: 8,
  REGEN: 0.025,
  FOV: 1,
  DENSITY: 0.5,
};
exports.genericTank = {
  LABEL: "Unknown Class",
  TYPE: "tank",
  DAMAGE_CLASS: 2,
  DANGER: 5,
  MOTION_TYPE: "motor",
  FACING_TYPE: "toTarget",
  SIZE: 12,
  MAX_CHILDREN: 0,
  DAMAGE_EFFECTS: false,
  BODY: {
    // def
    ACCELERATION: base.ACCEL,
    SPEED: base.SPEED,
    HEALTH: base.HEALTH,
    DAMAGE: base.DAMAGE,
    PENETRATION: base.PENETRATION,
    SHIELD: base.SHIELD,
    REGEN: base.REGEN,
    FOV: base.FOV,
    DENSITY: base.DENSITY,
    PUSHABILITY: 0.9,
    HETERO: 3,
  },
  GUNS: [],
  TURRETS: [],
  GIVE_KILL_MESSAGE: true,
  DRAW_HEALTH: true,
};
let gun = {};

exports.autoTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  BODY: {
    FOV: 0.8,
  },
  COLOR: 16,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.machineAutoTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  COLOR: 16,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 11, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret,
          g.mach,
          g.slow,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.autoSmasherTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  COLOR: 16,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 6, 1, 0, 5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret,
          g.fast,
          g.mach,
          g.pound,
          g.morereload,
          g.morereload,
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload,
      },
    },
    {
      POSITION: [20, 6, 1, 0, -5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret,
          g.fast,
          g.mach,
          g.pound,
          g.morereload,
          g.morereload,
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload,
      },
    },
  ],
};
exports.oldAutoSmasherTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  COLOR: 16,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 7, 1, 0, -5.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.lotsmorrecoil,
          g.morereload,
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload,
      },
    },
    {
      POSITION: [20, 7, 1, 0, 5.75, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.lotsmorrecoil,
          g.morereload,
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload,
      },
    },
  ],
};

exports.auto3gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.auto5gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 11, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.five]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.heavy3gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2,
    SPEED: 0.9,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.masterGun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3,
  },
  CONTROLLERS: ["nearestDifferentMaster"],
  COLOR: 16,
  MAX_CHILDREN: 6,
  AI: {
    NO_LEAD: true,
    SKYNET: true,
    FULL_VIEW: true,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 14, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.master]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
};
exports.sniper3gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 5,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.auto,
          g.assass,
          g.autosnipe,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 9, -1.5, 8, 0, 0, 0],
    },
  ],
};
exports.bulkzarkpounddestroyannigun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  COLOR: 9,
  BODY: {
    FOV: 1,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 14, 1, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.anni, g.norecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 16, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, g.norecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20.5, 18, 1, 0, 0, 0, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, g.anni, g.norecoil]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.twingun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 5,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
  ],
  TURRENTS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [25, 0, 0, 0, 360, 1],
      TYPE: [exports.ballgun, {COLOR: 9}]
    },
    
  ]
};
exports.machinedestroyer = {
  PARENT: [exports.genericTank],
  LABEL: "Mini Twin Shooter",
  BODY: {
    FOV: 2,
    DAMAGE: base.DAMAGE * 0.06
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 16, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.destroy, g.destroy, g.norecoil]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.bulkzarkrailgun = {
  PARENT: [exports.genericTank],
  LABEL: "Mini Twin Shooter",
  BODY: {
    FOV: 5,
    DAMAGE: base.DAMAGE * 0.06
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2.5, 8.5, 1, 32.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.halfrecoil,
          g.halfrecoil,
          g.fake
        ]),
        TYPE: exports.bullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2.5, 8.5, 1, 27.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.halfrecoil,
          g.halfrecoil,
          g.fake
        ]),
        TYPE: exports.bullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2.5, 8.5, 1, 22.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.halfrecoil,
          g.halfrecoil,
          g.fake
        ]),
        TYPE: exports.bullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2.5, 8.5, 1, 17.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.halfrecoil,
          g.halfrecoil,
          g.fake
        ]),
        TYPE: exports.bullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2.5, 8.5, 1, 12.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.halfrecoil,
          g.halfrecoil,
          g.op,
          g.lessreload,
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [37.5, 2, 1, 0, -4.5, 0, 0]
    },
    {
      POSITION: [37.5, 2, 1, 0, 4.5, 0, 0]
    }
  ]
};
exports.kulzirigun = {
  PARENT: [exports.genericTank],
  LABEL: "Kulziri Cannon",
  SHAPE: 6,
  BODY: {
    FOV: 1.5,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 2, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.op, g.halfreload, g.halfreload, g.norecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 2, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.op, g.halfreload, g.halfreload, g.norecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 2, 1, 0, 4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.op, g.halfreload, g.halfreload, g.norecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 2, 1, 0, -4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.op, g.halfreload, g.halfreload, g.norecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [26, 2, 1, 0, 2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.op, g.halfreload, g.halfreload, g.norecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [26, 2, 1, 0, -2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.op, g.halfreload, g.halfreload, g.norecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.op, g.op, g.halfreload, g.halfreload, g.halfreload, g.norecoil]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.kulziricannon = {
PARENT: [exports.genericTank],
LABEL: "Kulziri Cannon",
SHAPE: 7,
  BODY: {
    FOV: 4,
  },
  COLOR: 16,
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [30, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.op, g.halfreload, g.halfreload, g.norecoil, g.lessspread, g.op, g.halfreload]),
        TYPE: exports.bullet,
      },
    },
   {
     POSITION: [5, 15, 0, 30, 0, 0, 0],
   },
  
  ],
};
exports.kulziricannonL = {
PARENT: [exports.genericTank],
LABEL: "Kulziri Cannon",
SHAPE: 5,
  BODY: {
    FOV: 2,
  },
  COLOR: 16,
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.op, g.halfreload, g.halfreload, g.norecoil, g.lessspread, g.op, g.halfreload]),
        TYPE: exports.bullet,
      },
    }, 
  {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.op, g.halfreload, g.halfreload, g.norecoil, g.lessspread, g.op, g.halfreload]),
        TYPE: exports.bullet,
      },
    }, 
  ],
};
exports.kulziricannonR = {
PARENT: [exports.genericTank],
LABEL: "Kulziri Cannon",
SHAPE: 5,
  BODY: {
    FOV: 2,
  },
  COLOR: 16,
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.op, g.halfreload, g.halfreload, g.norecoil, g.lessspread, g.op, g.halfreload]),
        TYPE: exports.bullet,
      },
    }, 
  {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.op, g.halfreload, g.halfreload, g.norecoil, g.lessspread, g.op, g.halfreload]),
        TYPE: exports.bullet,
      },
    }, 
  ],
};
exports.kulzirirailgun = {
PARENT: [exports.genericTank],
LABEL: "Kulziri Railgun",
SHAPE: 4,
  BODY: {
    FOV: 2,
  },
  COLOR: 16,
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2.5, 8.5, 1, 32.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.halfrecoil,
          g.halfrecoil,
          g.fake
        ]),
        TYPE: exports.bullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2.5, 8.5, 1, 27.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.halfrecoil,
          g.halfrecoil,
          g.fake
        ]),
        TYPE: exports.bullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2.5, 8.5, 1, 22.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.halfrecoil,
          g.halfrecoil,
          g.fake
        ]),
        TYPE: exports.bullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2.5, 8.5, 1, 17.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.halfrecoil,
          g.halfrecoil,
          g.fake
        ]),
        TYPE: exports.bullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2.5, 8.5, 1, 12.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.halfrecoil,
          g.halfrecoil,
          g.op,
          g.lessreload,
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [37.5, 2, 1, 0, -4.5, 0, 0]
    },
    {
      POSITION: [37.5, 2, 1, 0, 4.5, 0, 0]
    }
  ]
};
exports.bansheegun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [26, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.lessreload]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.octoturret = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2,
    DAMAGE: 1,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 4, 1, 0, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.slow,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 4, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.slow,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 4, 1, 0, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.slow,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 4, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.slow,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 4, 1, 0, 0, 225, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.slow,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 4, 1, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.slow,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 4, 1, 0, 0, 315, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.slow,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 4, 1, 0, 0, 360, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.slow,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.singleturret = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.slow,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.octoswarmturret = {
  PARENT: [exports.genericTank],
  LABEL: "octoswarmturret",
  BODY: {
    FOV: 2,
    HEALTH: 1,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  MAX_CHILDREN: 15,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 225, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 315, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};

exports.assassinturret = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2,
    HEALTH: 1,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
   {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 8.5, -1.6, 8, 0, 0, 0],
    },
  ],
};
exports.auto4gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 4, 1, 0, -3.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.slow,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 4, 1, 0, 3.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.slow,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.bigauto4gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 5, 1, 0, -4.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 5, 1, 0, 4.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 5, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};

exports.tritrapgun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 16, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 16, 1.1, 20, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.auto]),
        TYPE: exports.block,
      },
    },
  ],
};
exports.smasherBody = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 9,
  SHAPE: 6,
  INDEPENDENT: true,
};
exports.spikeBody = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 9,
  SHAPE: -4,
  INDEPENDENT: true,
};
exports.spikeBody1 = {
  LABEL: "",
  CONTROLLERS: ["fastspin"],
  COLOR: 9,
  SHAPE: 3,
  INDEPENDENT: true,
};
exports.spikeBody2 = {
  LABEL: "",
  CONTROLLERS: ["reversespin"],
  COLOR: 9,
  SHAPE: 3,
  INDEPENDENT: true,
};
exports.megasmashBody = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 9,
  SHAPE: -6,
  INDEPENDENT: true,
};
exports.dominationBody = {
  LABEL: "",
  CONTROLLERS: ["dontTurn"],
  COLOR: 9,
  SHAPE: 8,
  INDEPENDENT: true,
};
exports.baseSwarmTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Protector",
  COLOR: 16,
  BODY: {
    FOV: 2,
  },
  CONTROLLERS: ["nearestDifferentMaster"],
  AI: {
    NO_LEAD: true,
    LIKES_SHAPES: true,
  },
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 4.5, 0.6, 7, 2, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [5, 4.5, 0.6, 7, -2, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [5, 4.5, 0.6, 7.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
        TYPE: [
          exports.swarm,
          { INDEPENDENT: true, AI: { LIKES_SHAPES: true } },
        ],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.baseGunTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Protector",
  BODY: {
    FOV: 5,
  },
  ACCEPTS_SCORE: false,
  CONTROLLERS: ["nearestDifferentMaster"],
  INDEPENDENT: true,
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 12, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.destroy]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [11, 13, 1, 6, 0, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.destroy]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [7, 13, -1.3, 6, 0, 0, 0],
    },
  ],
};
exports.baseProtector = {
  PARENT: [exports.genericTank],
  LABEL: "Base",
  SIZE: 64,
  DAMAGE_CLASS: 0,
  ACCEPTS_SCORE: false,
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    spd: 1,
    str: 1,
  }),
  BODY: {
    // def
    SPEED: 0,
    HEALTH: 10000,
    DAMAGE: 10,
    PENETRATION: 0.25,
    SHIELD: 1000,
    REGEN: 100,
    FOV: 1,
    PUSHABILITY: 0,
    HETERO: 0,
  },
  //CONTROLLERS: ['nearestDifferentMaster'],
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [25, 0, 0, 0, 360, 0],
      TYPE: exports.dominationBody,
    },
    {
      POSITION: [12, 7, 0, 45, 100, 0],
      TYPE: exports.baseSwarmTurret,
    },
    {
      POSITION: [12, 7, 0, 135, 100, 0],
      TYPE: exports.baseSwarmTurret,
    },
    {
      POSITION: [12, 7, 0, 225, 100, 0],
      TYPE: exports.baseSwarmTurret,
    },
    {
      POSITION: [12, 7, 0, 315, 100, 0],
      TYPE: exports.baseSwarmTurret,
    },
  ],
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 45, 0],
    },
    {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 135, 0],
    },
    {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 225, 0],
    },
    {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 315, 0],
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 45, 0],
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 135, 0],
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 225, 0],
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 315, 0],
    },
  ],
};

exports.minion = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4,
  },
  AI: {
    BLIND: true,
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster",
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
        WAIT_TO_CYCLE: true,
        TYPE: exports.bullet,
      },
    },
  ],
};

exports.minion2 = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4,
  },
  AI: {
    BLIND: true,
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster",
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
        WAIT_TO_CYCLE: true,
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 12, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.kulziriminion = {
  PARENT: [exports.minion],
  LABEL: '12 Bolt Minion',
SHAPE: [[-0.5,-1],[0.5,-1],[1.4,-0.4],[1.4,0.4],[0.5,1],[-0.5,1],[-4,0]],
SIZE: 50,
MAX_CHILDREN: 8,
  BODY: {
  FOV: 1,
},
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 19.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, g.halfrecoil, g.halfrecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 4, 1, 0, -3, -7, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.doublereload, g.doublereload, g.doublereload, g.doublereload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 4, 1, 0, 3, 7, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.doublereload, g.doublereload, g.doublereload, g.doublereload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 4, 1, 0, -2, -5, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.doublereload, g.doublereload, g.doublereload, g.doublereload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 4, 1, 0, 2, 5, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.doublereload, g.doublereload, g.doublereload, g.doublereload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.doublereload, g.doublereload, g.doublereload, g.doublereload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [8, 14, 1, 15.5, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.boosterminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [12, 14, 1, 8, 0, 180, 0],
    },
    
  ],
  TURRETS: [
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }],
    },
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }],
    },
    {
      POSITION: [10, 0, 10, 0, 180, 0],
      TYPE: [exports.twingun, { INDEPENDENT: true, COLOR: 5 }],
    },
    {
      POSITION: [10, 0, -10, 0, 180, 0],
      TYPE: [exports.twingun, { INDEPENDENT: true, COLOR: 5 }],
    },
    {
      POSITION: [9, -20, 0, 0, 180, 1],
      TYPE: [exports.twingun, { INDEPENDENT: true, COLOR: 5 }],
    },
    ],
};
exports.arenaminion = {
PARENT: [exports.minion],
SIZE: 100,
BODY: {
health :99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
FOV: 5,
},
 GUNS: [
    {
      POSITION: [15, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenac]),
        TYPE: exports.bullet,
      },
    },
  ],
}
exports.boosterminion = {
PARENT: [exports.minion],
SIZE: 100,
BODY: {
health :500,
FOV: 2,
},
 GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.op,
          g.halfreload, 
          g.anni,
          g.op, 
          g.halfreload, 
          g.halfreload,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
}
exports.pillboxTurret = {
  PARENT: [exports.genericTank],
  LABEL: "",
  COLOR: 16,
  BODY: {
    FOV: 2,
  },
  HAS_NO_RECOIL: true,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 11, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.minion,
          g.turret,
          g.power,
          g.auto,
          g.notdense,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.pillbox = {
  LABEL: "Pillbox",
  PARENT: [exports.trap],
  SHAPE: -4,
  MOTION_TYPE: "motor",
  CONTROLLERS: ["goToMasterTarget", "nearestDifferentMaster"],
  INDEPENDENT: true,
  BODY: {
    SPEED: 1,
    DENSITY: 5,
  },
  DIE_AT_RANGE: true,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: exports.pillboxTurret,
    },
  ],
};
exports.pillbox4 = {
  LABEL: "Pillbox4",
  PARENT: [exports.trap],
  SHAPE: -4,
  SIZE: 30,
  MOTION_TYPE: "motor",
  CONTROLLERS: ["goToMasterTarget", "nearestDifferentMaster"],
  INDEPENDENT: true,
  BODY: {
    SPEED: 1,
    DENSITY: 5,
  },
  DIE_AT_RANGE: true,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: exports.pillboxTurret,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 10, 0, 360, 1],
      TYPE: exports.pillboxTurret,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, -10, 0, 360, 1],
      TYPE: exports.pillboxTurret,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 10, 0, 0, 360, 1],
      TYPE: exports.pillboxTurret,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, -10, 0, 0, 360, 1],
      TYPE: exports.pillboxTurret,
    },
  ],
};

exports.programbox = {
  LABEL: "Programbox",
  PARENT: [exports.trap],
  SHAPE: -4,
  SIZE: 60,
  MOTION_TYPE: "motor",
  CONTROLLERS: ["goToMasterTarget", "nearestDifferentMaster"],
  INDEPENDENT: true,
  BODY: {
    SPEED: 1,
    DENSITY: 5,
  },
  DIE_AT_RANGE: true,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [20, 0, 0, 0, 360, 1],
      TYPE: exports.pillboxTurret,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 30, 0, 0, 360, 1],
      TYPE: exports.pillboxTurret,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, -30, 0, 0, 360, 1],
      TYPE: exports.pillboxTurret,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 30, 0, 360, 1],
      TYPE: exports.pillboxTurret,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, -30, 0, 360, 1],
      TYPE: exports.pillboxTurret,
    },
  ],
};

exports.programtrap = {
  LABEL: "Programmer Trap",
  PARENT: [exports.trap],
  SHAPE: -4,
  MOTION_TYPE: "motor",
  CONTROLLERS: ["goToMasterTarget", "nearestDifferentMaster"],
  INDEPENDENT: true,
  BODY: {
    SPEED: 1,
    DENSITY: 5,
  },
  DIE_AT_RANGE: true,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: exports.pillboxTurret,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [6, 10, 0, 0, 360, 1],
      TYPE: exports.pillboxTurret,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [6, -10, 0, 0, 360, 1],
      TYPE: exports.pillboxTurret,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [6, 0, 10, 0, 360, 1],
      TYPE: exports.pillboxTurret,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [6, 0, -10, 0, 360, 1],
      TYPE: exports.pillboxTurret,
    },
  ],
};

exports.skimturret = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 2,
  },
  COLOR: 2,
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  LABEL: "",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -0.5, 9, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
        ]),
        TYPE: exports.hypermissile,
      },
    },
    {
      POSITION: [17, 15, 1, 0, 0, 0, 0],
    },
  ],
};
exports.skimboss = {
  PARENT: [exports.genericTank],
  BODY: {
    HEALTH: 300,
    DAMAGE: 2,
    SHIELD: 200,
  },
  SHAPE: 3,
  COLOR: 2,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [15, 5, 0, 60, 170, 0],
      TYPE: exports.skimturret,
    },
    {
      POSITION: [15, 5, 0, 180, 170, 0],
      TYPE: exports.skimturret,
    },
    {
      POSITION: [15, 5, 0, 300, 170, 0],
      TYPE: exports.skimturret,
    },
  ],
};

function makeAuto(type, name = -1, options = {}) {
  let turret = { type: exports.autoTurret, size: 10, independent: true };
  if (options.type != null) {
    turret.type = options.type;
  }
  if (options.size != null) {
    turret.size = options.size;
  }
  if (options.independent != null) {
    turret.independent = options.independent;
  }

  let output = JSON.parse(JSON.stringify(type));
  let autogun = {
    /*********  SIZE               X       Y     ANGLE    ARC */
    POSITION: [turret.size, 0, 0, 180, 360, 1],
    TYPE: [
      turret.type,
      {
        CONTROLLERS: ["nearestDifferentMaster"],
        INDEPENDENT: turret.independent,
      },
    ],
  };
  if (type.GUNS != null) {
    output.GUNS = type.GUNS;
  }
  if (type.TURRETS == null) {
    output.TURRETS = [autogun];
  } else {
    output.TURRETS = [...type.TURRETS, autogun];
  }
  if (name == -1) {
    output.LABEL = "Auto-" + type.LABEL;
  } else {
    output.LABEL = name;
  }
  output.DANGER = type.DANGER + 1;
  return output;
}
function makeHybrid(type, name = -1) {
  let output = JSON.parse(JSON.stringify(type));
  let spawner = {
    /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [7, 12, 1.2, 8, 0, 180, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([g.drone, g.weak]),
      TYPE: [exports.drone, { INDEPENDENT: true }],
      AUTOFIRE: true,
      SYNCS_SKILLS: true,
      STAT_CALCULATOR: gunCalcNames.drone,
      WAIT_TO_CYCLE: false,
      MAX_CHILDREN: 3,
    },
  };
  if (type.TURRETS != null) {
    output.TURRETS = type.TURRETS;
  }
  if (type.GUNS == null) {
    output.GUNS = [spawner];
  } else {
    output.GUNS = [...type.GUNS, spawner];
  }
  if (name == -1) {
    output.LABEL = "Hybrid " + type.LABEL;
  } else {
    output.LABEL = name;
  }
  return output;
}

exports.basic = {
  PARENT: [exports.genericTank],
  LABEL: "Basic",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        LABEL: "Bullet",
      },
    },
  ],
};

exports.trailer = {
  PARENT: [exports.genericTank],
  LABEL: "Trailer",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.trailbullet,
        LABEL: "Bullet",
      },
    },
  ],
};


exports.basicpage2 = {
  PARENT: [exports.genericTank],
  LABEL: "Basic Page 2",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        LABEL: "Bullet",
      },
    },
  ],
};

exports.steamer = {
  PARENT: [exports.genericTank],
  LABEL: "Steamer",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.thruster]),
        TYPE: exports.jetbullet,
        LABEL: "Bullet",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10, 1, 0, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.thruster]),
        TYPE: exports.jetbullet,
        LABEL: "Bullet",
      },
    },
  ],
};

exports.magmarammer = {
  PARENT: [exports.genericTank],
  LABEL: "Magma Rammer",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10, 1, -10, 15, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.thruster]),
        TYPE: exports.jetbullet,
        LABEL: "Bullet",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10, 1, -10, 15, 180, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.thruster]),
        TYPE: exports.jetbullet,
        LABEL: "Bullet",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10, 1, -10, 15, 180, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.thruster]),
        TYPE: exports.jetbullet,
        LABEL: "Bullet",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10, 1, -10, -15, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.thruster]),
        TYPE: exports.jetbullet,
        LABEL: "Bullet",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10, 1, -10, -15, 180, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.thruster]),
        TYPE: exports.jetbullet,
        LABEL: "Bullet",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10, 1, -10, -15, 180, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.thruster]),
        TYPE: exports.jetbullet,
        LABEL: "Bullet",
      },
    },
  ],
};

exports.flaregun = {
  PARENT: [exports.genericTank],
  LABEL: "Flare Gun",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.flare,
        LABEL: "Bullet",
        MAX_CHILDREN: 1,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.thruster]),
        TYPE: exports.jetbullet,
        LABEL: "Bullet",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10, 1, 0, 0, 180, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.thruster]),
        TYPE: exports.jetbullet,
        LABEL: "Bullet",
      },
    },
  ],
};

exports.swarmer = {
  PARENT: [exports.genericTank],
  LABEL: "Swarmer",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};

exports.heavyswarmer = {
  PARENT: [exports.genericTank],
  LABEL: "Heavy Swarmer",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 18, 0.6, 5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};

exports.swarmbasic = {
  PARENT: [exports.genericTank],
  LABEL: "Swarm Basic",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        LABEL: "Bullet",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};//

exports.swarmtwin = {
  PARENT: [exports.genericTank],
  LABEL: "Swarm Twin",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        LABEL: "Bullet",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        LABEL: "Bullet",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ], 
};

exports.minipenta = {
  PARENT: [exports.genericTank],
  LABEL: "Mini Penta",
  //CONTROLLERS: ['nearestDifferentMaster'],
  MAX_CHILDREN: 2,
  BODY: {
    DAMAGE: base.DAMAGE * 0.03,
},
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, 1, 0, 0, 0, 2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.pentabullet,
        LABEL: "Bullet",
      },
    },
  ],
};

exports.notverybasic = {
  PARENT: [exports.genericTank],
  LABEL: "Oblivion",
  SIZE: 20,
  BODY: {
    SHIELD: 1e99,
    REGEN: 1e99,
    RESIST: 1e99,
    HEALTH: 1e99,
    DAMAGE: 1e99,
    PENETRATION: 1e99,
    DENSINY: 1e99,
    RANGE: 5090,
    FOV: 2,
    SPEED: 10,
  },
  DRAW_HEALTH: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.killerbullet, g.lessspread]),
        TYPE: exports.spikebullet,
        LABEL: "OBLIVION BULLET", 
      },
    },
  ],
};
exports.e = {
  PARENT: [exports.genericTank],
  LABEL: "E",
  SIZE: 100,
  SHAPE: [
    [-1,1],[-1,-1],[0,-1],[0,-0.75],[-0.75,-0.75],[-0.75,-0.125],[0,-0.125],[0,0.125],[-0.75,0.125],[-0.75,0.75],[0,0.75],[0,1]
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 20, 1, -10, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.ebullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false, // def
      },
    },
  ],
},
exports.sus = {
  PARENT: [exports.genericTank],
  LABEL: "Sussy",
  SIZE: 20,
  SHAPE:  [
  [-1.6,1],
  [-1.6,-0.63],
  [-1.187,-0.63],
  [-1.19,-1.665],
  [-0.32,-1.67],
  [-0.31,-0.49],
  [-0.04,-0.49],
  [-0.056,-1.65],
  [0.67,-1.66],
  [0.7,0.92],
  [1.35,0.92],
  [1.35,1.48],
  [0.7,1.493],
  [0.43,1.98],
  [-0.68,2],
  [-1.06,1.62],
  [-1.06,1]
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.knife,
      },
    },
  ]
}
exports.sad = {
  PARENT: [exports.genericTank],
  LABEL: "Low Budget Testbed",
  SHAPE: 4,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false, // def
      },
    },
  ],
}
exports.testbed = {
  PARENT: [exports.genericTank],
  LABEL: "TESTBED",
  RESET_UPGRADES: true,
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  LEVEL: -1,
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2,
  },
  SHAPE: [
    [-1, -0.8],
    [-0.8, -1],
    [0.8, -1],
    [1, -0.8],
    [0.2, 0],
    [1, 0.8],
    [0.8, 1],
    [-0.8, 1],
    [-1, 0.8],
  ],
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }],
      },
    },
  ],
};
exports.dev = {
  PARENT: [exports.genericTank],
  LABEL: "Dev",
  COLOR: 37,
  RESET_UPGRADES: true,
  VALUE: 10000000000000000,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  LEVEL: -1,
  BODY: {
    // def
    SHIELD: 999999999999999999999999999999,
    REGEN: 99999999999999999999999999999999,
    HEALTH: 9999999999999999999999999999999999999999999999999999999999,
    DAMAGE: 999999999999999999999999999999999999999999999999999999999999999,
    DENSITY: 20,
    FOV: 2.5,
  },
  SHAPE: 0,
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }],
      },
    },
  ],
};
exports.arenacloser = {
  PARENT: [exports.genericTank],
  LABEL: "Arena Closer",
  CAN_GO_OUTSIDE_ROOM: true,
  SIZE: 100,
  HEALTH: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
  DAMAGE: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
  REGEN: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
  BODY: {
    HEALTH: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
    DAMAGE: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
    REGEN: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
    FOV: 3.5,
  },
  GUNS: [
    {
      POSITION: [15, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenac]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.arenaram = {
  PARENT: [exports.genericTank],
  LABEL: "Arena Rammer",
  CAN_GO_OUTSIDE_ROOM: true,
  SIZE: 100,
  HEALTH: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
  DAMAGE: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
  REGEN: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
  BODY: {
    HEALTH: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
    DAMAGE: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
    REGEN: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
    FOV: 3.5,
  },
  GUNS: [
    {
      POSITION: [15, 10, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenarecoil]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.arenabooster = {
  PARENT: [exports.genericTank],
  LABEL: "Arena Booster",
  CAN_GO_OUTSIDE_ROOM: true,
  SIZE: 100,
  HEALTH: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
  DAMAGE: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
  REGEN: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
  BODY: {
    HEALTH: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
    DAMAGE: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
    REGEN: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
    FOV: 3.5,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.muchmorerecoil,
          g.arenac,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.thruster,
          g.halfrecoil,
          g.arenab,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.thruster,
          g.halfrecoil,
          g.arenab,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.thruster,
          g.arenab,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.thruster,
          g.arenab,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.arenaanni = {
  PARENT: [exports.genericTank],
  LABEL: "Arena Annihilator",
  CAN_GO_OUTSIDE_ROOM: true,
  SIZE: 100,
  HEALTH: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
  DAMAGE: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
  REGEN: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
  BODY: {
    HEALTH: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
    DAMAGE: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
    REGEN: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
    FOV: 3.5,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20.5, 19.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.anni,
          g.arenac,
          g.arenac,
          g.morespeed,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.arenaocto = {
  PARENT: [exports.genericTank],
  LABEL: "Arena OctoTank",
  CAN_GO_OUTSIDE_ROOM: true,
  SIZE: 100,
  HEALTH: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
  DAMAGE: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
  REGEN: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
  BODY: {
    HEALTH: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
    DAMAGE: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
    REGEN: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999,
    FOV: 3.5,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.arenac,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.arenac,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.arenac,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.arenac,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 45, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.arenac,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 135, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.arenac,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 225, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.arenac,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 315, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.arenac,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.single = {
  PARENT: [exports.genericTank],
  LABEL: "Single",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
    },
  ],
};

exports.bigBullet = {
  PARENT: [exports.genericTank],
  LABEL: "Big Bullet",
  BODY: {
    FOV: 5,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [0, 1000, 0, 0, 5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single, g.op, g.op]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
    },
  ],
};
exports.thing3 = {
  PARENT: [exports.genericTank],
  LABEL: "Single",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
    },
  ],
};
exports.thing = {
  PARENT: [exports.genericTank],
  LABEL: "Wave",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [100, 1, 0, 0, 5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [100, 1, 0, 0, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet,
      },
    },
     {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [100, 1, 0, 0, 3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet,
      },
    },
     {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [100, 1, 0, 0, 2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet,
      },
    },
     {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [100, 1, 0, 0, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet,
      },
    },
     {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [100, 1, 0, 0, 6, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet,
      },
    },
     {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [100, 1, 0, 0, 7, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet,
      },
    },
     {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [100, 1, 0, 0, 8, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet,
      },
    },
     {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [100, 1, 0, 0, 9, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet,
      },
    },
     {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [100, 1, 0, 0, 10, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [100, 1, 0, 0, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet,
      },
    },
   {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [100, 1, 0, 0, -2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [100, 1, 0, 0, -3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [100, 1, 0, 0, -4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [100, 1, 0, 0, -5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [100, 1, 0, 0, -6, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [100, 1, 0, 0, -7, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [100, 1, 0, 0, -8, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [100, 1, 0, 0, -9, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [100, 1, 0, 0, -10, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
    },
  ],
};
let smshskl = 12; //13;
exports.smash = {
  PARENT: [exports.genericTank],
  LABEL: "Smasher",
  DANGER: 6,
  BODY: {
    FOV: base.FOV * 1.05,
    DENSITY: base.DENSITY * 2,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody,
    },
  ],
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
};
exports.megasmash = {
  PARENT: [exports.genericTank],
  LABEL: "Mega-Smasher",
  DANGER: 7,
  BODY: {
    SPEED: base.speed * 1.05,
    FOV: base.FOV * 1.1,
    DENSITY: base.DENSITY * 4,
  },
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [24, 0, 0, 0, 360, 0],
      TYPE: exports.megasmashBody,
    },
  ],
};

exports.weirdspike = {
  PARENT: [exports.genericTank],
  LABEL: "Spike",
  DANGER: 7,
  BODY: {
    DAMAGE: base.DAMAGE * 1.15,
    FOV: base.FOV * 1.05,
    DENSITY: base.DENSITY * 1.5,
  },
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [20.5, 0, 0, 0, 360, 0],
      TYPE: exports.spikeBody1,
    },
    {
      POSITION: [20.5, 0, 0, 180, 360, 0],
      TYPE: exports.spikeBody2,
    },
  ],
};
exports.autosmash = makeAuto(exports.smash, "Auto-Smasher", {
  type: exports.autoSmasherTurret,
  size: 11,
});
exports.autosmash.SKILL_CAP = [
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
];

exports.twin = {
  PARENT: [exports.genericTank],
  LABEL: "Twin",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.rocketer = {
  PARENT: [exports.genericTank],
  LABEL: "Rocketer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [30, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.rocket,
        MAX_CHILDREN: 3,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 10, 1.4, 9, 0, 0, 0],
    },
  ],
};

exports.reloader = {
  PARENT: [exports.genericTank],
  LABEL: "Reloader",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [30, 20, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.heavyrocket,
        MAX_CHILDREN: 1,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10, 1, 0, 5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.rocket,
        MAX_CHILDREN: 1,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10, 1, 0, -5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.rocket,
        MAX_CHILDREN: 1,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 40, 1.4, 9, 0, 0, 0],
    },
  ],
};

exports.launcher = {
  PARENT: [exports.genericTank],
  LABEL: "Launcher",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [30, 20, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.heavyrocket,
        MAX_CHILDREN: 1,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 33, 1.4, 9, 0, 0, 0],
    },
  ],
};

exports.dualrocketer = {
  PARENT: [exports.genericTank],
  LABEL: "Dual Rocketer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [30, 6, 1, -10, 16, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.rocket,
        MAX_CHILDREN: 2,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [30, 6, 1, -10, -16, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.rocket,
        MAX_CHILDREN: 2,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 26, 1.4, -20, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 10, 1.4, 9, 16, 0, 0],
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 10, 1.4, 9, -16, 0, 0],
    },
  ],
};

exports.hippo = {
  PARENT: [exports.genericTank],
  LABEL: "Hippo",
  BODY: {
    DAMAGE: base.DAMAGE * 0.001,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 18, 1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 2, 1, 0, 0, 60, 0],
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 2, 1, 0, 0, -60, 0.5],
    },
  ],
};

exports.gas = {
  PARENT: [exports.genericTank],
  LABEL: "Gas Orb",
  SIZE: 20,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 7, 1, -20, 0, 36, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, -12, 0, 36, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 7, 1, -20, 0, 72, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, -12, 0, 72, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 7, 1, -20, 0, 108, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, -12, 0, 108, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 7, 1, -20, 0, 144, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, -12, 0, 144, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 7, 1, -20, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, -12, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 7, 1, -20, 0, 216, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, -12, 0, 216, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 7, 1, -20, 0, 252, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, -12, 0, 252, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 7, 1, -20, 0, 288, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, -12, 0, 288, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 7, 1, -20, 0, 324, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, -12, 0, 324, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 7, 1, -20, 0, 360, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, -12, 0, 360, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.gunner = {
  PARENT: [exports.genericTank],
  LABEL: "Gunner",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
  ],
};

exports.advancedgunner = {
  PARENT: [exports.genericTank],
  LABEL: "Advanced Gunner",
  DANGER: 6,
  BODY: {
    DAMAGE: base.DAMAGE * 0.00005,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 10, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
  ],
};

exports.driller = {
  PARENT: [exports.genericTank],
  LABEL: "Driller",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 3.5, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 10, 1.4, 8, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.pentabullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 10, 1.4, 8, 0, -135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.pentabullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 12, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [3, 20, 1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.hexablock,
      },
    },
    {
      POSITION: [5, 15, 1.1, 21, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.quadblock,
      },
    },
    {
      POSITION: [8, 12, 1.1, 26, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.twinbullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.twinbullet,
      },
    },
  ],
};
exports.machinegunner = {
  PARENT: [exports.genericTank],
  LABEL: "Machine Gunner",
  DANGER: 6,
  BODY: {
    SPEED: base.SPEED * 0.9,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 3, 4.0, -3, 5, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 3, 4.0, -3, -5, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 3, 4.0, 0, 2.5, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 3, 4.0, 0, -2.5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 3, 4.0, 3, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.autogunner = makeAuto(exports.gunner);
exports.nailgun = {
  PARENT: [exports.genericTank],
  LABEL: "Nailgun",
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.1,
    SPEED: base.SPEED * 0.02,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 2, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
    },
  ],
};

exports.pelter = {
  PARENT: [exports.genericTank],
  LABEL: "pelter",
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.1,
    SPEED: base.SPEED * 0.9,
    DAMAGE: base.DAMAGE * 0.04,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9,5, 2, 1, 5, -1.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [9.5, 2, 1, 5, 1.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 5, -2.5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 2, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 1, 1, 5, 5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 1, 1, 5, 5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};

exports.double = {
  PARENT: [exports.genericTank],
  LABEL: "Double Twin",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.tripletwin = {
  PARENT: [exports.genericTank],
  LABEL: "Triple Twin",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 120, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 240, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.autodouble = makeAuto(exports.double, "Auto-Double");
exports.split = {
  PARENT: [exports.genericTank],
  LABEL: "Hewn Double",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, 5.5, 25, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, -5.5, -25, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
        TYPE: exports.bullet,
      },
    },
  ],
};

exports.bent = {
  PARENT: [exports.genericTank],
  LABEL: "Triple Shot",
  DANGER: 6,
  BODY: {
    SPEED: base.SPEED * 0.9,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, -2, -20, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 2, 20, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.bentdouble = {
  PARENT: [exports.genericTank],
  LABEL: "Bent Double",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, -1, -25, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 1, 25, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, -1, 155, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 1, -155, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.penta = {
  PARENT: [exports.genericTank],
  LABEL: "Penta Shot",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 0.85,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, -3, -30, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 3, 30, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, -2, -15, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 2, 15, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.telescope = {
  PARENT: [exports.genericTank],
  LABEL: "Telescope",
  DANGER: 7,
  SIZE: 20,
  SHAPE: [[-1,-1],[-0.5,-0.5],[1,-1],[1,1],[-0.5,0.5],[-1,1]
         ],
  BODY: {
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 3,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [31, 8, 1, 0, -3, -45, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.twinbullet,
      },
    },
    {
      POSITION: [31, 8, 1, 0, 3, 45, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.twinbullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [34, 8, 1, 0, -3, -30, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.machinebullet,
      },
    },
    {
      POSITION: [34, 8, 1, 0, 3, 30, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.machinebullet,
      },
    },
    {
      POSITION: [37, 8, 1.4, 0, -2, -15, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.firebullet,
      },
    },
    {
      POSITION: [37, 8, 1.4, 0, 2, 15, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.firebullet,
      },
    },
    {
      POSITION: [40, 8, 1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.pentabullet,
      },
    },
  ],
};
exports.pentapenta = {
  PARENT: [exports.genericTank],
  LABEL: "Mini Penta Shooter",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 0.85,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, -3, -30, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.pentabullet,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 3, 30, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.pentabullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, -2, -15, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.pentabullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 2, 15, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.pentabullet,
      },
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.pentabullet,
      },
    },
  ],
};
exports.ship12 = {
PARENT: [exports.genericTank],
LABEL: '12 Bolt 787',
SIZE: 50,
DANGER: 10,
VALUE: 1000000,
BODY: {
  FOV: 1,
},
SHAPE: [[-0.5,-1],[0.5,-1],[1.4,-0.4],[1.4,0.4],[0.5,1],[-0.5,1],[-4,0]],
  MAX_CHILDREN: 8,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 19.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, g.halfrecoil, g.halfrecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 4, 1, 0, -3, -7, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.doublereload, g.doublereload, g.doublereload, g.doublereload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 4, 1, 0, 3, 7, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.doublereload, g.doublereload, g.doublereload, g.doublereload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 4, 1, 0, -2, -5, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.doublereload, g.doublereload, g.doublereload, g.doublereload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 4, 1, 0, 2, 5, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.doublereload, g.doublereload, g.doublereload, g.doublereload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.doublereload, g.doublereload, g.doublereload, g.doublereload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [8, 14, 1, 15.5, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.boosterminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [12, 14, 1, 8, 0, 180, 0],
    },
    
  ],
  TURRETS: [
    {
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }],
    },
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }],
    },
    {
      POSITION: [10, 0, 10, 0, 180, 0],
      TYPE: [exports.twingun, { INDEPENDENT: true, COLOR: 5 }],
    },
    {
      POSITION: [10, 0, -10, 0, 180, 0],
      TYPE: [exports.twingun, { INDEPENDENT: true, COLOR: 5 }],
    },
    {
      POSITION: [9, -20, 0, 0, 180, 1],
      TYPE: [exports.twingun, { INDEPENDENT: true, COLOR: 5 }],
    },
    ]
};

exports.benthybrid = makeHybrid(exports.bent, "Bent Hybrid");

exports.triple = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    FOV: base.FOV * 1.05,
  },
  LABEL: "Triplet",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, 1, 0, 5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 10, 1, 0, -5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.quint = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.1,
  },
  LABEL: "Quintuplet",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 10, 1, 0, -5, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 10, 1, 0, 5, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 10, 1, 0, -3, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 10, 1, 0, 3, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.dual = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  BODY: {
    ACCEL: base.ACCEL * 0.8,
    FOV: base.FOV * 1.1,
  },
  LABEL: "Dual",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 7, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
        TYPE: exports.bullet,
        LABEL: "Small",
      },
    },
    {
      POSITION: [18, 7, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
        TYPE: exports.bullet,
        LABEL: "Small",
      },
    },
    {
      POSITION: [16, 8.5, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 8.5, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
        TYPE: exports.bullet,
      },
    },
  ],
};

exports.swarmsniper = {
  PARENT: [exports.genericTank],
  LABEL: "Swarm Sniper",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.sniper = {
  PARENT: [exports.genericTank],
  LABEL: "Sniper",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.railgun = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Railgun",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.4
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2.5, 8.5, 1, 32.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.halfrecoil,
          g.halfrecoil,
          g.fake
        ]),
        TYPE: exports.bullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2.5, 8.5, 1, 27.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.halfrecoil,
          g.halfrecoil,
          g.fake
        ]),
        TYPE: exports.bullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2.5, 8.5, 1, 22.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.halfrecoil,
          g.halfrecoil,
          g.fake
        ]),
        TYPE: exports.bullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2.5, 8.5, 1, 17.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.halfrecoil,
          g.halfrecoil,
          g.fake
        ]),
        TYPE: exports.bullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [2.5, 8.5, 1, 12.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.halfrecoil,
          g.halfrecoil,
          g.op,
          g.lessreload,
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [37.5, 2, 1, 0, -4.5, 0, 0]
    },
    {
      POSITION: [37.5, 2, 1, 0, 4.5, 0, 0]
    }
  ]
};

exports.spewer = {
  PARENT: [exports.genericTank],
  LABEL: "Spewer",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  TURRETS: [
    {
      POSITION: [4, 0, 0, 10, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }],
    },
    {
      POSITION: [4, 0, 0, -10, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }],
    },
    {
      POSITION: [4, 0, 10, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }],
    },
    {
      POSITION: [4, 0, -10, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }],
    },
    {
      POSITION: [4, 0, -10, -10, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }],
    },
    {
      POSITION: [4, 0, -10, 10, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }],
    },
    {
      POSITION: [4, 0, 10, 10, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }],
    },
    {
      POSITION: [4, 0, 10, -10, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }],
    },
    {
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }],
    },
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }],
    },
    {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }],
    },
    {
      POSITION: [8, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }],
    },
    {
      POSITION: [7, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }],
    },
    {
      POSITION: [6, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }],
    },
    {
      POSITION: [5, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }],
    },
    {
      POSITION: [4, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }],
    },
    {
      POSITION: [3, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }],
    },
    {
      POSITION: [2, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }],
    },
    {
      POSITION: [1, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }],
    },
  ],
};
exports.sniperkill = {
  PARENT: [exports.genericTank],
  LABEL: "Sniper",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.op, g.op, g.halfspeed, g.lessreload]),
        TYPE: exports.spike,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.healer = {
  PARENT: [exports.genericTank],
  LABEL: "Healer",
   SHAPE: [[0.25,1],[-0.25,1],[-0.25,0.25],[-1,0.25],[-1,-0.25],[-0.25,-0.25],[-0.25,-1],[0.25,-1],[0.25,-0.25],[1,-0.25],[1,0.25],[0.25,0.25]
         ],
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [50, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.healer]),
        TYPE: exports.healbullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [50, 10, 1, 0, 0, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.healer]),
        TYPE: exports.healbullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [50, 10, 1, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.healer]),
        TYPE: exports.healbullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [50, 10, 1, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.healer]),
        TYPE: exports.healbullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [50, 10, 1, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.healer]),
        TYPE: exports.healbullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [50, 10, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.healer]),
        TYPE: exports.healbullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [50, 10, 1, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.healer]),
        TYPE: exports.healbullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [50, 10, 1, 0, 0, 0, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.healer]),
        TYPE: exports.healbullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [50, 10, 1, 0, 0, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.healer]),
        TYPE: exports.healbullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [50, 10, 1, 0, 0, 0, 0.9],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.healer]),
        TYPE: exports.healbullet,
      },
    },
  ],
};
exports.rifle = {
  PARENT: [exports.genericTank],
  LABEL: "Rifle",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.225,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10.5, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [24, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
        TYPE: exports.bullet,
      },
    },
  ],
};

exports.assassin = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Assassin",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.4,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 8.5, -1.6, 8, 0, 0, 0],
    },
  ],
};
exports.swarmassassin = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Swarm Assassin",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.4,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 8.5, -1.6, 8, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.snipingshotgun = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Sniping Shotgun",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 3,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, 1, 0, 0, 3, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, 1, 0, 0, -3, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, 1, 0, 0, 6, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, 1, 0, 0, -6, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, 1, 27, 0, 6, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.quadbullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, 1, 27, 0, -6, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.quadbullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, 1, 27, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [5, 20, -1.6, 8, 0, 0, 0],
    },
  ],
};
exports.guidedassassin = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  SHAPE: 5,
  LABEL: "Guided Assassin",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.4,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.guidedbullet,
      },
    },
    {
      POSITION: [5, 8.5, -1.6, 8, 0, 0, 0],
    },
  ],
};

exports.shadowassassin = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  INVISIBIABLE: true,
  LABEL: "Shadow Assassin",
  SHAPE: [[-1,-1],[0.5,-1],[1,-0.5],[1,0.5],[0.5,1],[-1,1],[-2,1],[-1,0.5],[-3,0],[-1,-0.5],[-2,-1]
         ],
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 4,
    FOV: base.FOV * 2,
    HEALTH: 1,
    DAMAGE: 1,
    PENETRATION: 1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [70, 1, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [50, 3, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [40, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 8.5, -1.6, 8, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 5, 1, 0, -10, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 5, 1, 0, 10, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet,
      },
    },
  ],
};

exports.ranger = {
  PARENT: [exports.genericTank],
  LABEL: "Ranger",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.5,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [32, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 8.5, -1.6, 8, 0, 0, 0],
    },
  ],
};

exports.autoass = makeAuto(exports.assassin, "");

exports.hunter = {
  PARENT: [exports.genericTank],
  LABEL: "Hunter",
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.25,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
        TYPE: exports.bullet,
      },
    },
  ],
};

exports.preda = {
  PARENT: [exports.genericTank],
  LABEL: "Predator",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.3,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.preda,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.preda,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 16, 1, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.carnivore = {
  PARENT: [exports.genericTank],
  LABEL: "carnivore",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 1.2,
    SPEED: base.SPEED * 1.5,
    FOV: base.FOV * 3,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [50, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.preda,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [50, 8, 1, -5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.preda,
        ]),
        TYPE: exports.bullet,
      },
    },
     {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [49, 9, 1, 0, 0, 0, 0.05],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.preda,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [49, 9, 1, -5, 0, 0, 0.05],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.preda,
        ]),
        TYPE: exports.bullet,
      },
    },
     {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [48, 10, 1, 0, 0, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.preda,
        ]),
        TYPE: exports.bullet,
      },
    },
     {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [48, 10, 1, -5, 0, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.preda,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [47, 12, 1, 0, 0, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.preda,
        ]),
        TYPE: exports.bullet,
      },
    },
     {
      POSITION: [47, 12, 1, -5, 0, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.preda,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [46, 13, 1, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.preda,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [46, 13, 1, -5, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.preda,
        ]),
        TYPE: exports.bullet,
      },
    },
     {
      POSITION: [45, 14, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.preda,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [45, 14, 1, -5, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.preda,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [44, 16, 1, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda,]),
        TYPE: exports.bullet,
      },
    }, 
     {
      POSITION: [43, 17, 1, 0, 0, 0, 0.35],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda,]),
        TYPE: exports.bullet,
      },
    }, 
    {
      POSITION: [42, 18, 1, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda,]),
        TYPE: exports.bullet,
      },
    }, 
    {
      POSITION: [41, 19, 1, 0, 0, 0, 0.45],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda,]),
        TYPE: exports.bullet,
      },
    }, 
     {
      POSITION: [10, 20, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda,]),
        TYPE: exports.bullet,
      },
    }, 
     {
      POSITION: [30, 10, 1, 0, 0, 190, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda,]),
        TYPE: exports.bullet,
      },
    }, 
    {
      POSITION: [30, 10, 1, 0, 0, 170, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda,]),
        TYPE: exports.bullet,
      },
    }, 
     {
      POSITION: [40, 5, 1, 0, 0, 200, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda,]),
        TYPE: exports.bullet,
      },
    }, 
     {
      POSITION: [40, 5, 1, 0, 0, 160, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda,]),
        TYPE: exports.bullet,
      },
    }, 
     {
      POSITION: [50, 3, 1, 0, 0, 205, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda,]),
        TYPE: exports.bullet,
      },
    }, 
     {
      POSITION: [50, 3, 1, 0, 0, 155, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda,]),
        TYPE: exports.bullet,
      },
    }, 
    {
      POSITION: [60, 2, 1, 0, 0, 150, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda,]),
        TYPE: exports.bullet,
      },
    }, 
     {
      POSITION: [60, 2, 1, 0, 0, 210, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda,]),
        TYPE: exports.bullet,
      },
    }, 
     {
      POSITION: [70, 1, 1, 0, 0, 145, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda,]),
        TYPE: exports.bullet,
      },
    }, 
     {
      POSITION: [70, 1, 1, 0, 0, 215, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda,]),
        TYPE: exports.bullet,
      },
    }, 
   
  ],
};

exports.poach = makeHybrid(exports.hunter, "Poacher");
exports.sidewind = {
  PARENT: [exports.genericTank],
  LABEL: "Sidewinder",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.3,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 11, -0.5, 14, 0, 0, 0],
    },
    {
      POSITION: [21, 12, -1.1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
        TYPE: exports.snake,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
  ],
};

exports.director = {
  PARENT: [exports.genericTank],
  LABEL: "Director",
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
  },
  MAX_CHILDREN: 5,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
};

exports.decoymaker = {
  PARENT: [exports.genericTank],
  LABEL: "Decoy Maker",
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
    SPEED: 3.75,
  },
  MAX_CHILDREN: 5,
  DRAW_HEALTH: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 39, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.decoy,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        LABEL: "Bullet",
      },
    },
  ],
};
exports.supervisor = {
  PARENT: [exports.genericTank],
  LABEL: "Supervisor",
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
  },
  MAX_CHILDREN: 2,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 30, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.destroy]),
        TYPE: exports.massiveDrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
};
exports.emerger = {
  PARENT: [exports.genericTank],
  LABEL: "Emerger",
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
  },
  MAX_CHILDREN: 1,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [3, 50, 1.2, 12, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.anni]),
        TYPE: exports.massiveDrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
};
exports.overbliterator = {
  PARENT: [exports.genericTank],
  LABEL: "Overbliterator",
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.5,
  },
  MAX_CHILDREN: 1,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [3, 100, 1.2, 12, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.anni, g.anni, g.anni, g.anni, g.anni, g.anni, g.op, g.anni, g.anni, g.anni]),
        TYPE: exports.massiveDrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
};
exports.glacier = {
  PARENT: [exports.genericTank],
  LABEL: "Glacier",
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  SIZE: 20,
  SHAPE: [[-3,0],[0,-0.5],[1,0],[0,0.5]
         ],
  BODY: {
    ACCELERATION: base.ACCEL * 3,
    FOV: base.FOV * 2.2,
    DAMAGE: base.DAMAGE * 0.06
  },
  MAX_CHILDREN: 20,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10, 1.2, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.shard,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 90, 90, 360, 0],
      TYPE: [exports.shardSpawner],
    },
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 90, -90, 360, 0],
      TYPE: [exports.shardSpawner],
    },
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, -90, 90, 360, 0],
      TYPE: [exports.shardSpawner],
    },
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, -90, -90, 360, 0],
      TYPE: [exports.shardSpawner],
    },
  ],
};
exports.overload = {
  PARENT: [exports.genericTank],
  LABEL: "Overload",
  STAT_NAMES: statnames.drone,
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.5,
  },
  MAX_CHILDREN: 2,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 18, 1.2, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.op, g.halfspeed]),
        TYPE: exports.bigDrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.bigDrone,
      },
    },
  ],
};
exports.overpower = {
  PARENT: [exports.genericTank],
  LABEL: "Overpower",
  STAT_NAMES: statnames.drone,
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.5,
  },
  MAX_CHILDREN: 4,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 18, 1.2, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.op, g.halfspeed]),
        TYPE: exports.bigDrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.bigDrone,
      },
    },
    {
      POSITION: [9, 18, 1.2, 6, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.op, g.halfspeed]),
        TYPE: exports.bigDrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.bigDrone,
      },
    },
  ],
};
exports.overflare = {
  PARENT: [exports.genericTank],
  LABEL: "Overflare",
  STAT_NAMES: statnames.drone,
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.5,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 18, 1.2, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.op, g.halfspeed]),
        TYPE: exports.bigfiredrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.bigDrone,
        MAX_CHILDREN: 1,
      },
    },
    {
      POSITION: [9, 18, 1.2, 6, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.op, g.halfspeed]),
        TYPE: exports.bigfiredrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.bigDrone,
        MAX_CHILDREN: 1,
      },
    },
    {
      POSITION: [7, 2, 0.6, 7, -1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        MAX_CHILDREN: 10,
      },
    },
    {
      POSITION: [7, 2, 0.6, 7, 1, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        MAX_CHILDREN: 10,
      },
    },
    {
      POSITION: [7, 2, 0.6, 7, 1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.bee],
        STAT_CALCULATOR: gunCalcNames.swarm,
        MAX_CHILDREN: 5,
      },
    },
    {
      POSITION: [7, 2, 0.6, 7, -1, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.bee],
        STAT_CALCULATOR: gunCalcNames.swarm,
        MAX_CHILDREN: 5,
      },
    },
  ],
};
exports.master = {
  PARENT: [exports.genericTank],
  LABEL: "Master",
  STAT_NAMES: statnames.drone,
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.15,
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */ POSITION: [16, 1, 0, 0, 0, 0],
      TYPE: exports.masterGun,
    },
    {
      POSITION: [16, 1, 0, 120, 0, 0],
      TYPE: [exports.masterGun, { INDEPENDENT: true }],
    },
    {
      POSITION: [16, 1, 0, 240, 0, 0],
      TYPE: [exports.masterGun, { INDEPENDENT: true }],
    },
  ],
};

exports.overseer = {
  PARENT: [exports.genericTank],
  LABEL: "Overseer",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  MAX_CHILDREN: 8,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
  ],
};
exports.overlord = {
  PARENT: [exports.genericTank],
  LABEL: "Overlord",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.1,
  },
  MAX_CHILDREN: 8,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
  ],
};
exports.overgod = {
  PARENT: [exports.genericTank],
  LABEL: "Overgod",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.1,
  },
  MAX_CHILDREN: 8,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
      {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 225, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 315, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
  ],
};
exports.underlord = {
  PARENT: [exports.genericTank],
  LABEL: "Underlord",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.1,
  },
  MAX_CHILDREN: 5,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.dronespawn,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 40, 1.2, 8, 0, 180, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.dronespawn,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.dronespawn,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.dronespawn,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
  ],
};
exports.overtrap = {
  PARENT: [exports.genericTank],
  LABEL: "Overtrapper",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 11, 1.2, 8, 0, 125, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 3,
      },
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 235, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 3,
      },
    },
    {
      POSITION: [14, 8, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.banshee = {
  PARENT: [exports.genericTank],
  LABEL: "",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.1,
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */ POSITION: [10, 8, 0, 0, 80, 0],
      TYPE: exports.bansheegun,
    },
    {
      POSITION: [10, 8, 0, 120, 80, 0],
      TYPE: exports.bansheegun,
    },
    {
      POSITION: [10, 8, 0, 240, 80, 0],
      TYPE: exports.bansheegun,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 11, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2,
      },
    },
  ],
};
exports.autoover = makeAuto(exports.overseer, "");
exports.overgunner = {
  PARENT: [exports.genericTank],
  LABEL: "Overgunner",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 11, 1.2, 8, 0, 125, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 3,
      },
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 235, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 3,
      },
    },
    {
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.slow,
          g.flank,
          g.lotsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.slow,
          g.flank,
          g.lotsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0],
    },
  ],
};

function makeSwarmSpawner(guntype) {
  return {
    PARENT: [exports.genericTank],
    LABEL: "",
    BODY: {
      FOV: 2,
    },
    CONTROLLERS: ["nearestDifferentMaster"],
    COLOR: 16,
    AI: {
      NO_LEAD: true,
      SKYNET: true,
      FULL_VIEW: true,
    },
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 15, 0.6, 14, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: guntype,
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm,
        },
      },
    ],
  };
}
exports.cruiserGun = makeSwarmSpawner(combineStats([g.swarm]));
exports.cruiser = {
  PARENT: [exports.genericTank],
  LABEL: "Cruiser",
  DANGER: 6,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.SplitCruiser = {
                PARENT: [exports.genericTank],//cya, imma head to bed now, oof, bye
                LABEL: '(Auto turret) skimmer ', 
                DANGER: 7,
               /* STAT_NAMES: statnames.swarm,
                FACING_TYPE: 'locksFacing',*/ //gonna leave now. cya and good night. orius still doesn't work rip. Gn
                BODY: {
                    FOV: base.FOV * 1.3,
                },
                CONTROLLERS: ["onlyAcceptInArc", "nearestDifferentMaster"],
                COLOR: 16,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   7,    7.5,    0.6,     7,      2,     20,      0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.basic]),
                            TYPE: exports.swarm,
                           
                        }, }, {
                    POSITION: [   7,    7.5,    0.6,     7,     -2,     -20,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.basic]),
                            TYPE: exports.swarm,
                               
                        }, }
                ],
            };
exports.battleship = {
  PARENT: [exports.genericTank],
  LABEL: "Battleship",
  DANGER: 7,
  STAT_NAMES: statnames.swarm,
  FACING_TYPE: "locksFacing",
  BODY: {
    ACCELERATION: base.ACCEL,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 4, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
  ],
};
exports.inferno = {
  PARENT: [exports.genericTank],
  LABEL: "Inferno",
  DANGER: 7,
  STAT_NAMES: statnames.swarm,
  FACING_TYPE: "smoothWithMotion",
  BODY: {
    ACCELERATION: base.ACCEL,
    FOV: base.FOV * 1.4,
    DAMAGE: base.DAMAGE * 0.0000001,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 4.5, 0.6, 7, 1, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
    {
      POSITION: [4, 4.5, 0.6, 7, 1, 135, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
    {
      POSITION: [4, 4.5, 0.6, 7, 1, 225, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
    {
      POSITION: [4, 4.5, 0.6, 7, 1, 315, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 2, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 2, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 2, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
  ],
};
exports.carrier = {
  PARENT: [exports.genericTank],
  LABEL: "Carrier",
  DANGER: 7,
  STAT_NAMES: statnames.swarm,
  FACING_TYPE: "locksFacing",
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.3,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 2, 40, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -2, -40, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.autocruiser = makeAuto(exports.cruiser, "");
exports.fortress = {
  PARENT: [exports.genericTank],
  LABEL: "Fortress", //'Palisade',
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.swarm, { CONTROLLERS: ["canRepel"] }],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 120, 1 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.swarm, { CONTROLLERS: ["canRepel"] }],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 240, 2 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.swarm, { CONTROLLERS: ["canRepel"] }],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [14, 9, 1, 0, 0, 60, 0],
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [14, 9, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [14, 9, 1, 0, 0, 300, 0],
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};

exports.underseer = {
  PARENT: [exports.genericTank],
  LABEL: "Underseer",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  SHAPE: 4,
  MAX_CHILDREN: 14,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
  ],
};
exports.necromancer = {
  PARENT: [exports.genericTank],
  LABEL: "Necromancer",
  DANGER: 7,
  STAT_NAMES: statnames.necro,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  SHAPE: 4,
  FACING_TYPE: "autospin",
  MAX_CHILDREN: 14,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload,
        ]),
        TYPE: exports.autosunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        LABEL: "Guard",
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload,
        ]),
        TYPE: exports.autosunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        LABEL: "Guard",
      },
    },
  ],
};
exports.stormsummoner = {
  PARENT: [exports.genericTank],
  LABEL: "Storm Summoner",
  DANGER: 7,
  STAT_NAMES: statnames.necro,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.25,
    DAMAGE: base.DAMAGE * 0.02
  },
  SHAPE: 4,
  FACING_TYPE: "smoothWithMotion",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.octodrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
         MAX_CHILDREN: 1,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.octodrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
         MAX_CHILDREN: 1,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload,
        ]),
        TYPE: exports.octodrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1,
        STAT_CALCULATOR: gunCalcNames.necro,
        LABEL: "Guard",
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload,
        ]),
        TYPE: exports.octodrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 1,
        STAT_CALCULATOR: gunCalcNames.necro,
        LABEL: "Guard",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 225, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 315, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
  ],
};

exports.charger = {
  PARENT: [exports.genericTank],
  LABEL: "Charger",
  DANGER: 7,
  STAT_NAMES: statnames.necro,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
    DAMAGE: base.DAMAGE * 0.06
  },
  SHAPE: 4,
  FACING_TYPE: "smoothWithMotion",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.boosterdrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 2,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.boosterdrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 2,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload,
        ]),
        TYPE: exports.boosterdrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 2,
        STAT_CALCULATOR: gunCalcNames.necro,
        LABEL: "Guard",
      },
    },
    {
      POSITION: [2, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [2, 8, 1, 0, 0, 180, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [2, 8, 1, 0, 0, 180, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.lilfact = {
  PARENT: [exports.genericTank],
  LABEL: "",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    ACCELERATION: base.ACCEL * 0.5,
    FOV: 1.1,
  },
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 1, 10.5, 0, 0, 0],
    },
    {
      POSITION: [1, 12, 1, 15, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 4,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 12, 1, 8, 0, 0, 0],
    },
  ],
};
exports.kulzirifactory = {
  PARENT: [exports.genericTank],
  LABEL: "Kulziri Factory",
  DANGER: 7,
  SHAPE: 8,
  SIZE: 50,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: 2.5,
  },
  MAX_CHILDREN: 2,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, 0, 0],
    },
    {
      POSITION: [2, 14, 1, 15.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.kulziriminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [4, 14, 1, 8, 0, 0, 0],
    },
  ],
};
exports.factory = {
  PARENT: [exports.genericTank],
  LABEL: "Factory",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: 1.1,
  },
  MAX_CHILDREN: 6,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, 0, 0],
    },
    {
      POSITION: [2, 14, 1, 15.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [4, 14, 1, 8, 0, 0, 0],
    },
  ],
};

exports.generator = {
  PARENT: [exports.genericTank],
  LABEL: "Generator",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: 1.1,
  },
  MAX_CHILDREN: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, 0, 0],
    },
    {
      POSITION: [2, 14, 1, 15.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion2,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [4, 14, 1, 8, 0, 0, 0],
    },
  ],
};

exports.machine = {
  PARENT: [exports.genericTank],
  LABEL: "Machine Gun",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.machinegungunner = {
  PARENT: [exports.genericTank],
  LABEL: "Mini Machine Gun Shooter",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.machinebullet,
      },
    },
  ],
};
exports.pyromaniac = {
  PARENT: [exports.genericTank],
  LABEL: "Pyromaniac",
  SHAPE: [[-1,-1],[0.5,-1],[1,-0.5],[1,0.5],[0.5,1],[-1,1],[-2,1],[-1,0.5],[-3,0],[-1,-0.5],[-2,-1]
         ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
        ]),
        TYPE: exports.firebullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 15, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
        ]),
        TYPE: exports.squarebullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 15, 1, 0, 0, 180, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
        ]),
        TYPE: exports.squarebullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.firebullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.squarebullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, -135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.squarebullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 135, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.squarebullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, -135, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.squarebullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 135, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.squarebullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, -135, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.squarebullet,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -1, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.bee],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },{
      POSITION: [7, 7.5, 0.6, 7, -1, -45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.bee],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};

exports.spray = {
  PARENT: [exports.genericTank],
  LABEL: "Sprayer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
  ],
};

exports.mini = {
  PARENT: [exports.genericTank],
  LABEL: "Minigun",
  DANGER: 6,
  BODY: {
    FOV: 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.stream = {
  PARENT: [exports.genericTank],
  LABEL: "Streamliner",
  DANGER: 7,
  BODY: {
    FOV: 1.3,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [23, 8, 1, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 8, 1, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 8, 1, 0, 0, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 8, 1, 0, 0, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.laserpointer = {
  PARENT: [exports.genericTank],
  LABEL: "Laser Pointer",
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.4,
    DAMAGE: base.DAMAGE * 0.02,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.laser,
      },
    },
    {
      POSITION: [23, 8, 1, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.laser,
      },
    },
    {
      POSITION: [21, 8, 1, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.laser,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.laser,
      },
    },
    {
      POSITION: [17, 8, 1, 0, 0, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.laser,
      },
    },
    {
      POSITION: [15, 8, 1, 0, 0, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.laser,
      },
    },
    {
      POSITION: [15, 8, 1, 0, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.laser,
      },
    },
  ],
};
exports.lasergun = {
  PARENT: [exports.genericTank],
  LABEL: "Laser Gun",
  DANGER: 7,
  BODY: {
    FOV: 1.3,
    HEALTH: 1,
    DAMAGE: base.DAMAGE * 0.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 13, 1, 0, 0, 0, 2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.assass]),
        TYPE: exports.stronglaser,
      },
    },
  ],
};

exports.lasersniper = {
  PARENT: [exports.genericTank],
  LABEL: "Laser Sniper",
  DANGER: 7,
  BODY: {
    FOV: 1.3,
    HEALTH: 1,
    DAMAGE: base.DAMAGE * 0.3,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 2, 1, 0, 0, 0, 2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.assass]),
        TYPE: exports.stronglaser,
      },
    },
  ],
};
exports.repellant = {
  PARENT: [exports.genericTank],
  LABEL: "Repellant",
  DANGER: 7,
  SHAPE: 6,
  BODY: {
    FOV: 2,
  },
  SKILL: skillSet({
    rld: 0,
    dam: 0,
    pen: 70,
    str: 0,
    spd: 0,
    atk: 0,
    hlt: 0,
    shi: 0,
    rgn: 0,
    mob: 0,
  }),
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.repeller,
      },
    },
    {
      POSITION: [23, 12, 1, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.repeller,
      },
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.repeller,
      },
    },
    {
      POSITION: [19, 12, 1, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.repeller,
      },
    },
    {
      POSITION: [17, 12, 1, 0, 0, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.repeller,
      },
    },
    {
      POSITION: [15, 12, 1, 0, 0, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.repeller,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.mach]),
        TYPE: exports.repeller,
      },
    },
    {
      POSITION: [23, 12, 1, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.mach]),
        TYPE: exports.repeller,
      },
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.mach]),
        TYPE: exports.repeller,
      },
    },
    {
      POSITION: [19, 12, 1, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.mach]),
        TYPE: exports.repeller,
      },
    },
    {
      POSITION: [17, 12, 1, 0, 0, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.mach]),
        TYPE: exports.repeller,
      },
    },
    {
      POSITION: [15, 12, 1, 0, 0, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.mach]),
        TYPE: exports.repeller,
      },
    },
  ],
};

exports.guidedstream = {
  PARENT: [exports.genericTank],
  LABEL: "Guided Streamliner",
  DANGER: 7,
  SHAPE: 5,
  BODY: {
    FOV: 1.3,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.guidedbullet,
      },
    },
    {
      POSITION: [23, 8, 1, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.guidedbullet,
      },
    },
    {
      POSITION: [21, 8, 1, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.guidedbullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.guidedbullet,
      },
    },
    {
      POSITION: [17, 8, 1, 0, 0, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.guidedbullet,
      },
    },
    {
      POSITION: [15, 8, 1, 0, 0, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.guidedbullet,
    },
    },
  ],
};
exports.strider = {
  PARENT: [exports.genericTank],
  LABEL: "strider",
  DANGER: 7,
  SHAPE: [
    [0,-0.5],[1,-0.5],[1,0.5],[0,0.5],[-1,1],[0,0],[-1,-1]
  ],
  BODY: {
    FOV: 2.4,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.spread]),
        TYPE: exports.squarebullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 8, 1, 0, 0, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.spread]),
        TYPE: exports.squarebullet,
      },
    },
    {
      POSITION: [23, 8, 1, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.spread]),
        TYPE: exports.squarebullet,
      },
    },
    {
      POSITION: [23, 8, 1, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.spread]),
        TYPE: exports.squarebullet,
      },
    },
    {
      POSITION: [21, 8, 1, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.spread]),
        TYPE: exports.squarebullet,
      },
    },
    {
      POSITION: [21, 8, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.spread]),
        TYPE: exports.squarebullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.spread]),
        TYPE: exports.squarebullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 0, 0, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.spread]),
        TYPE: exports.squarebullet,
      },
    },
    {
      POSITION: [17, 8, 1, 0, 0, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.spread]),
        TYPE: exports.squarebullet,
      },
    },
    {
      POSITION: [17, 8, 1, 0, 0, 0, 0.9],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.spread]),
        TYPE: exports.squarebullet,
      },
    },
    {
      POSITION: [10, 15, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.spread, g.morerecoil]),
        TYPE: exports.laser,
      },
    },
    {
      POSITION: [10, 15, 1, 0, 0, 180, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.spread, g.morerecoil]),
        TYPE: exports.laser,
      },
    },
    {
      POSITION: [10, 15, 1, 0, 0, 180, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.spread, g.morerecoil]),
        TYPE: exports.laser,
      },
    },
    {
      POSITION: [10, 15, 1, 0, 0, 180, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.spread, g.morerecoil]),
        TYPE: exports.laser,
      },
    },
    {
      POSITION: [10, 15, 1, 0, 0, 180, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.spread, g.morerecoil]),
        TYPE: exports.laser,
      },
    },
    {
      POSITION: [10, 15, 1, 0, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.spread, g.morerecoil]),
        TYPE: exports.laser,
      },
    },
    {
      POSITION: [10, 15, 1, 0, 0, 180, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.spread, g.morerecoil]),
        TYPE: exports.laser,
      },
    },
    {
      POSITION: [10, 15, 1, 0, 0, 180, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.spread, g.morerecoil]),
        TYPE: exports.laser,
      },
    },
    {
      POSITION: [10, 15, 1, 0, 0, 180, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.spread, g.morerecoil]),
        TYPE: exports.laser,
      },
    },
    {
      POSITION: [10, 15, 1, 0, 0, 180, 0.9],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.spread, g.morerecoil]),
        TYPE: exports.laser,
      },
    },
    {
      POSITION: [10, 15, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.spread, g.morerecoil]),
        TYPE: exports.laser,
      },
    },
    {
      POSITION: [10, 15, 1, 0, 0, 180, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.spread, g.morerecoil]),
        TYPE: exports.laser,
      },
    },
    {
      POSITION: [10, 15, 1, 0, 0, 180, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.spread, g.morerecoil]),
        TYPE: exports.laser,
      },
    },
    {
      POSITION: [10, 15, 1, 0, 0, 180, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.spread, g.morerecoil]),
        TYPE: exports.laser,
      },
    },
    {
      POSITION: [10, 15, 1, 0, 0, 180, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.spread, g.morerecoil]),
        TYPE: exports.laser,
      },
    },
    {
      POSITION: [10, 15, 1, 0, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.spread, g.morerecoil]),
        TYPE: exports.laser,
      },
    },
    {
      POSITION: [10, 15, 1, 0, 0, 180, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.spread, g.morerecoil]),
        TYPE: exports.laser,
      },
    },
    {
      POSITION: [10, 15, 1, 0, 0, 180, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.spread, g.morerecoil]),
        TYPE: exports.laser,
      },
    },
    {
      POSITION: [10, 15, 1, 0, 0, 180, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.spread, g.morerecoil]),
        TYPE: exports.laser,
      },
    },
    {
      POSITION: [10, 15, 1, 0, 0, 180, 0.9],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.spread, g.morerecoil]),
        TYPE: exports.laser,
      },
    },
  ],
};
exports.gammaray = {
  PARENT: [exports.genericTank],
  LABEL: "Gamma Ray Burst",
  DANGER: 7,
  SHAPE: 4,
  SIZE: 20,
  BODY: { 
    FOV: 2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 25, 1, 0, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenac]),
        TYPE: exports.stronglaser,
      },
    },
    {
      POSITION: [24, 25, 1, 0, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenac]),
        TYPE: exports.stronglaser,
      },
    },
    {
      POSITION: [23, 25, 1, 0, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenac]),
        TYPE: exports.stronglaser,
      },
    },
    {
      POSITION: [22, 25, 1, 0, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenac]),
        TYPE: exports.stronglaser,
      },
    },
    {
      POSITION: [21, 25, 1, 0, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenac]),
        TYPE: exports.stronglaser,
      },
    },
     {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 25, 1, 0, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenac]),
        TYPE: exports.stronglaser,
      },
    },
    {
      POSITION: [19, 25, 1, 0, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenac]),
        TYPE: exports.stronglaser,
      },
    },
    {
      POSITION: [18, 25, 1, 0, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenac]),
        TYPE: exports.stronglaser,
      },
    },
    {
      POSITION: [17, 25, 1, 0, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenac]),
        TYPE: exports.stronglaser,
      },
    },
    {
      POSITION: [16, 25, 1, 0, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenac]),
        TYPE: exports.stronglaser,
      },
    },
     {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 25, 1, 0, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenac]),
        TYPE: exports.stronglaser,
      },
    },
    {
      POSITION: [14, 25, 1, 0, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenac]),
        TYPE: exports.stronglaser,
      },
    },
    {
      POSITION: [13, 25, 1, 0, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenac]),
        TYPE: exports.stronglaser,
      },
    },
    {
      POSITION: [12, 25, 1, 0, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenac]),
        TYPE: exports.stronglaser,
      },
    },
    {
      POSITION: [11, 25, 1, 0, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenac]),
        TYPE: exports.stronglaser,
      },
    },
     {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 25, 1, 0, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenac]),
        TYPE: exports.stronglaser,
      },
    },
    {
      POSITION: [9, 25, 1, 0, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenac]),
        TYPE: exports.stronglaser,
      },
    },
    {
      POSITION: [8, 25, 1, 0, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenac]),
        TYPE: exports.stronglaser,
      },
    },
    {
      POSITION: [7, 25, 1, 0, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenac]),
        TYPE: exports.stronglaser,
      },
    },
    {
      POSITION: [6, 25, 1, 0, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenac]),
        TYPE: exports.stronglaser,
      },
    },
     {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 25, 1, 0, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenac]),
        TYPE: exports.stronglaser,
      },
    },
    {
      POSITION: [4, 25, 1, 0, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenac]),
        TYPE: exports.stronglaser,
      },
    },
    {
      POSITION: [3, 25, 1, 0, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenac]),
        TYPE: exports.stronglaser,
      },
    },
    {
      POSITION: [2, 25, 1, 0, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenac]),
        TYPE: exports.stronglaser,
      },
    },
    {
      POSITION: [1, 25, 1, 0, 0, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arenac]),
        TYPE: exports.stronglaser,
      },
    },
  ],
};
exports.blowtorch = {
  PARENT: [exports.genericTank],
  LABEL: "Blowtorch",
  DANGER: 7,
  SHAPE: -2,
  SIZE: 20,
  BODY: { 
    FOV: 0.6,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 0.1, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 0.1, 1, 0, 0, 0, 0.04],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [23, 0.1, 1, 0, 0, 0, 0.08],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 0.1, 1, 0, 0, 0, 0.12],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 0.1, 1, 0, 0, 0, 0.16],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
     {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 0.1, 1, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 0.1, 1, 0, 0, 0, 0.24],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 0.1, 1, 0, 0, 0, 0.28],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 0.1, 1, 0, 0, 0, 0.32],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 0.1, 1, 0, 0, 0, 0.36],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
     {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 0.1, 1, 0, 0, 0, 0.40],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 0.1, 1, 0, 0, 0, 0.44],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 0.1, 1, 0, 0, 0, 0.48],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 0.1, 1, 0, 0, 0, 0.52],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [11, 0.1, 1, 0, 0, 0, 0.56],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
     {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 0.1, 1, 0, 0, 0, 0.60],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [9, 0.1, 1, 0, 0, 0, 0.64],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [8, 0.1, 1, 0, 0, 0, 0.68],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [7, 0.1, 1, 0, 0, 0, 0.72],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [6, 0.1, 1, 0, 0, 0, 0.76],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
     {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 0.1, 1, 0, 0, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [4, 0.1, 1, 0, 0, 0, 0.84],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [3, 0.1, 1, 0, 0, 0, 0.88],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [2, 0.1, 1, 0, 0, 0, 0.92],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [1, 0.1, 1, 0, 0, 0, 0.96],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
  ],
};

exports.pulse = {
  PARENT: [exports.genericTank],
  LABEL: "Pulse",
  DANGER: 7,
  SIZE: 10,
  BODY: { 
    FOV: 2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 5, 1, 0, 0, 3, 0.02],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 5, 1, 0, 0, -3, 0.02],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [23, 5, 1, 0, 0, 6, 0.04],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [23, 5, 1, 0, 0, -6, 0.04],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
     {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 5, 1, 0, 0, 9, 0.08],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 5, 1, 0, 0, -9, 0.08],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 5, 1, 0, 0, 12, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 5, 1, 0, 0, -12, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 5, 1, 0, 0, 15, 0.12],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
     {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 5, 1, 0, 0, -15, 0.12],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 5, 1, 0, 0, 18, 0.14],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 5, 1, 0, 0, -18, 0.14],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 5, 1, 0, 0, 21, 0.16],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 5, 1, 0, 0, -21, 0.16],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
     {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 5, 1, 0, 0, 24, 0.18],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 5, 1, 0, 0, -24, 0.18],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 5, 1, 0, 0, -27, 0.20],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 5, 1, 0, 0, 27, 0.20],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 5, 1, 0, 0, 30, 0.22],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
     {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 5, 1, 0, 0, -30, 0.22],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 5, 1, 0, 0, -33, 0.24],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 5, 1, 0, 0, 33, 0.24],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 50, 1, 0, 0, 170, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread, g.muchmorerecoil, g.halfspeed]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 50, 1, 0, 0, -170, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread, g.muchmorerecoil, g.halfspeed]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 50, 1, 0, 0, -180, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread, g.muchmorerecoil, g.halfspeed]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 50, 1, 0, 0, -180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread, g.muchmorerecoil, g.halfspeed]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 50, 1, 0, 0, -180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread, g.muchmorerecoil, g.halfspeed]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 50, 1, 0, 0, -180, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread, g.muchmorerecoil, g.halfspeed]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 50, 1, 0, 0, -180, 1.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread, g.muchmorerecoil, g.halfspeed]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 50, 1, 0, 0, -180, 1.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread, g.muchmorerecoil, g.halfspeed]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 50, 1, 0, 0, -180, 1.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread, g.muchmorerecoil, g.halfspeed]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 50, 1, 0, 0, -180, 2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.spread, g.muchmorerecoil, g.halfspeed]),
        TYPE: exports.bullet,
      },
    },
  ],
};

exports.barricade = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Barricade",
  STAT_NAMES: statnames.trap,
  BODY: {
    FOV: 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [4, 8, 1.3, 22, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [4, 8, 1.3, 18, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [4, 8, 1.3, 14, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};

exports.barracuda = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Barracuda",
  STAT_NAMES: statnames.trap,
  BODY: {
    FOV: 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [4, 8, 1.3, 22, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [4, 8, 1.3, 18, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [4, 8, 1.3, 14, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.thruster]),
        TYPE: exports.jetbullet,
        LABEL: "Bullet",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10, 1, 0, 0, 180, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.thruster]),
        TYPE: exports.jetbullet,
        LABEL: "Bullet",
      },
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.jetbullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.jetbullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.jetbullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.jetbullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};

exports.pound = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
  },
  LABEL: "Pounder",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
      },
    },
  ],
};

exports.hotwire = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
  },
  LABEL: "Hotwire",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.autoswarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [20, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [20, 12, 1, 0, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.thruster]),
        TYPE: exports.jetbullet,
      },
    },
    {
      POSITION: [20, 12, 1, 0, 0, -135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.thruster]),
        TYPE: exports.jetbullet,
      },
    },
  ],
}; 

exports.spitling = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  COLOR: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
  },
  LABEL: "Spitling",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 20, 1, 50, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 16, 1, 40, 0, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1, 30, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 8, 1, 20, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 4, 1, 10, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 1, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
      },
    },
  ],
};

exports.destroy = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.speed * 0.8,
  },
  LABEL: "Destroyer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 10, -1.2, 5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats[(g.basic, g.pound, g.destroy)],
        TYPE: exports.bullet,
      },
    },
  ],
};

exports.hybrid = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.speed * 0.8,
  },
  LABEL: "Hybrid",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 10, -1.2, 5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats[(g.basic, g.pound, g.destroy)],
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
  ],
};

exports.swarmdestroyer = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
  },
  LABEL: "Swarm Destroyer",
  GUNS: [
    {
      POSITION: [21, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ], 
};
//anyways, im gonna go work on citadel, see ya
exports.radiowave = {
  PARENT: [exports.genericTank],
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
  },
  LABEL: "Radiowave",
  DANGER: 7,
  SHAPE: [[-1,-1],[0.5,-1],[1,-0.5],[1,0.5],[0.5,1],[-1,1]
         ],
  MAX_CHILDREN: 3,
  BODY: {
    DAMAGE: base.DAMAGE * 0.001,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 19.5, 1.4, -25, 0, 180, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20.5, 19.5, 1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
        TYPE: exports.overseer,
      },
    },
  ],
};
exports.guidedanni = {
  PARENT: [exports.genericTank],
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
  },
  SHAPE:5,
  LABEL: "Guided Annihilator",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20.5, 19.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
        TYPE: exports.guidedbullet,
      },
    },
  ],
};
exports.anni = {
  PARENT: [exports.genericTank],
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
  },
  SHAPE:5,
  LABEL: "Annihilator",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20.5, 19.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.heavytrailer = {
  PARENT: [exports.genericTank],
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
  },
  LABEL: "Heavytrailer",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20.5, 19.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
        TYPE: exports.trailbullet,
      },
    },
  ],
};
exports.swarmanni = {
  PARENT: [exports.genericTank],
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
  },
  SHAPE:5,
  LABEL: "Swarm Annihilator",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20.5, 19.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.collapser = {
  PARENT: [exports.genericTank],
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
  },
  SHAPE: [[0.5,-1],[1,-0.5],[1,0.5],[0.5,1],[-1,1],[0,0],[-1,-1]
         ],
  LABEL: "Collapser",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20.5, 19.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
        TYPE: exports.collapsebullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [30, 1, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
        TYPE: exports.bee,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [30, 1, 1, 5, 5, 180, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
        TYPE: exports.bee,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [30, 1, 1, 5, -5, 180, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
        TYPE: exports.bee,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [30, 1, 1, 10, 10, 180, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
        TYPE: exports.bee,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [30, 1, 1, 10, -10, 180, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
        TYPE: exports.bee,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [30, 1, 1, -20, 10, 360, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
        TYPE: exports.bigauto4gun,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [30, 1, 1, -20, -10, 360, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
        TYPE: exports.bigauto4gun,
      },
    }, 
  ],
};

exports.hiveshooter = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.speed * 0.8,
  },
  LABEL: "Hiveshooter",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 14, -1.2, 5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats[(g.basic, g.pound, g.destroy, g.hive)],
        TYPE: exports.hive,
      },
    },
    {
      POSITION: [15, 12, 1, 5, 0, 0, 0],
    },
  ],
};
exports.hybrid = makeHybrid(exports.destroy, "Hybrid");

exports.shotgun2 = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Shotgun",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
  },
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4, 3, 1, 11, -3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [4, 3, 1, 11, 3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [4, 4, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 4, 1, 12, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 4, 1, 11, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [1, 3, 1, 13, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [1, 2, 1, 13, 2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 2, 1, 13, -2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [15, 14, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [8, 14, -1.3, 4, 0, 0, 0],
    },
  ],
};
exports.shotgunanni = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Shotgun Anni",
  BODY: {
    FOV: 1.5,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4, 3, 1, 11, -3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.anni, g.halfreload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [4, 3, 1, 11, 3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.anni, g.halfreload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [4, 4, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.anni, g.halfreload]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 4, 1, 12, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.anni, g.halfreload]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 4, 1, 11, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.anni, g.halfreload]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.anni, g.halfreload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [1, 3, 1, 13, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.anni, g.halfreload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [1, 2, 1, 13, 2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.anni, g.halfreload]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 2, 1, 13, -2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.anni, g.halfreload]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [15, 14, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [8, 14, -1.3, 4, 0, 0, 0],
    },
  ],
};
exports.erupter = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Erupter",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
  },
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4, 3, 1, 11, -3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [4, 3, 1, 11, 3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [4, 4, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 4, 1, 12, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 4, 1, 11, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [1, 3, 1, 13, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [1, 2, 1, 13, 2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 2, 1, 13, -2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [15, 14, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [8, 14, -1.3, 4, 0, 0, 0],
    },
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4, 3, 1, 11, -3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [4, 3, 1, 11, 3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [4, 4, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 4, 1, 12, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 4, 1, 11, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [1, 3, 1, 13, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [1, 2, 1, 13, 2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 2, 1, 13, -2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [15, 14, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [8, 14, -1.3, 4, 0, 0, 0],
    },
    {
      POSITION: [8, 14, -1.4, 9, 0, 0, 0],
    },
  ],
};

exports.grenadeshotgun = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Grenade Shotgun",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
  },
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4, 3, 1, 11, -3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.grenade,
      },
    },
    {
      POSITION: [4, 3, 1, 11, 3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.grenade,
      },
    },
    {
      POSITION: [4, 4, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.grenade,
      },
    },
    {
      POSITION: [1, 4, 1, 12, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.grenade,
      },
    },
    {
      POSITION: [1, 4, 1, 11, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.grenade,
      },
    },
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.grenade,
      },
    },
    {
      POSITION: [1, 3, 1, 13, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.grenade,
      },
    },
    {
      POSITION: [1, 2, 1, 13, 2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.grenade,
      },
    },
    {
      POSITION: [1, 2, 1, 13, -2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.grenade,
      },
    },
    {
      POSITION: [15, 14, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
        TYPE: exports.grenade,
      },
    },
    {
      POSITION: [8, 14, -1.3, 4, 0, 0, 0],
    },
  ],
};exports.plaguestarter = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Plague Starter",
  SIZE: 30,
  SHAPE: [[2,-0.5],[1,-2],[1,2],[2,0.5],[-2,0]
         ],
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 2.3,
  },
  GUNS: [
    {
      POSITION: [4, 3, 1, 11, -3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [4, 3, 1, 11, 3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [4, 4, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [1, 4, 1, 12, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [1, 4, 1, 11, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [1, 3, 1, 13, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [1, 2, 1, 13, 2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [1, 2, 1, 13, -2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [15, 14, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [8, 14, -1.3, 4, 0, 0, 0],
    },
    {
      POSITION: [4, 3, 1, 11, -3, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [4, 3, 1, 11, 3, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [4, 4, 1, 13, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [1, 4, 1, 12, -1, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [1, 4, 1, 11, 1, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [1, 3, 1, 13, 1, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [1, 2, 1, 13, 2, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [1, 2, 1, 13, -2, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [15, 14, 1, 6, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [8, 14, -1.3, 4, 0, 0, 0],
    },
    {
      POSITION: [4, 3, 1, 11, -3, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [4, 3, 1, 11, 3, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [4, 4, 1, 13, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [1, 4, 1, 12, -1, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [1, 4, 1, 11, 1, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [1, 3, 1, 13, 1, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [1, 2, 1, 13, 2, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [1, 2, 1, 13, -2, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [15, 14, 1, 6, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [8, 14, -1.3, 4, 0, 0, 0],
    },
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4, 3, 1, 11, -3, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [4, 3, 1, 11, 3, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [4, 4, 1, 13, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [1, 4, 1, 12, -1, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [1, 4, 1, 11, 1, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [1, 3, 1, 13, 1, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [1, 2, 1, 13, 2, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [1, 2, 1, 13, -2, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [15, 14, 1, 6, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [8, 14, -1.3, 4, 0, 0, 0],
    },
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4, 3, 1, 11, -3, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [4, 3, 1, 11, 3, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [4, 4, 1, 13, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [1, 4, 1, 12, -1, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [1, 4, 1, 11, 1, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [1, 3, 1, 13, 1, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [1, 2, 1, 13, 2, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [1, 2, 1, 13, -2, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [15, 14, 1, 6, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [8, 14, -1.3, 4, 0, 0, 0],
    },
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4, 3, 1, 11, -3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [4, 3, 1, 11, 3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [4, 4, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [1, 4, 1, 12, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [1, 4, 1, 11, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [1, 3, 1, 13, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [1, 2, 1, 13, 2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [1, 2, 1, 13, -2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [15, 14, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [8, 14, -1.3, 4, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 20, 1.2, -8, 20, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.infectiondrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 3,
      },
    },
    {//have another go with it now
      POSITION: [6, 20, 1.2, -8, -20, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.diseasedrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 3,
      }, 
    },
  ],
};
exports.disease = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  SHAPE: [[-1,-1],[1,-1.5],[1,1.5],[-1,1],[-1.5,0]
         ],
  LABEL: "Disease",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
  },
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ 
    {
      POSITION: [4, 3, 1, 11, -3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [4, 3, 1, 11, 3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [4, 4, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [1, 4, 1, 12, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [1, 4, 1, 11, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [1, 3, 1, 13, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [1, 2, 1, 13, 2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [1, 2, 1, 13, -2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [15, 14, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
        TYPE: exports.quadbullet,
      },
    },
    {
      POSITION: [8, 14, -1.3, 4, 0, 0, 0],
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.infection = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  SHAPE: [[0,-0.5],[1,-1.5],[1,1.5],[0,0.5],[-3,0]
         ],
  LABEL: "Infection",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
  },
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4, 3, 1, 11, -3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [4, 3, 1, 11, 3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [4, 4, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [1, 4, 1, 12, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [1, 4, 1, 11, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [1, 3, 1, 13, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [1, 2, 1, 13, 2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [1, 2, 1, 13, -2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [15, 14, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
        TYPE: exports.quadtrapbullet,
      },
    },
    {
      POSITION: [8, 14, -1.3, 4, 0, 0, 0],
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};

exports.builder = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Builder",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  MAX_CHILDREN: 4,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 12, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 12, 1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block,
      },
    },
  ],
};

exports.trapper = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Trapper",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  MAX_CHILDREN: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 7, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [4, 7, 1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.trap,
      },
    },
  ],
};
exports.tracker = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Tracker",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  MAX_CHILDREN: 4,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 12, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 12, 1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.trapblock,
      },
    },
  ],
};
exports.engineer = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Engineer",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.75,
    FOV: base.FOV * 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, 0, 0],
    },
    {
      POSITION: [3, 14, 1, 15.5, 0, 0, 0],
    },
    {
      POSITION: [2, 14, 1.3, 18, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 6,
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.pillbox,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [4, 14, 1, 8, 0, 0, 0],
    },
  ],
};

exports.programmer = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Programmer",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.75,
    FOV: base.FOV * 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 20, 1, 10.5, 0, 0, 0],
    },
    {
      POSITION: [3, 23, 1, 15.5, 0, 0, 0],
    },
    {
      POSITION: [2, 23, 1.3, 18, 0, 0, 1.2],
      PROPERTIES: {
        MAX_CHILDREN: 5,
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.programbox,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [4, 23, 1, 8, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, 180, 0],
    },
    {
      POSITION: [3, 14, 1, 15.5, 0, 180, 0],
    },
    {
      POSITION: [2, 14, 1.3, 18, 0, 180, 0],
      PROPERTIES: {
        MAX_CHILDREN: 8,
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.pillbox4,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [4, 14, 1, 8, 0, 0, 0],
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.bee],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },{
      POSITION: [7, 7.5, 0.6, 7, -1, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.bee],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.bulkzarkconstruct = {
  PARENT: [exports.genericTank],
  LABEL: "Mini Twin Shooter",
  BODY: {
    FOV: 2,
    DAMAGE: base.DAMAGE * 0.06
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 12, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 12, 1.2, 27, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct, g.norecoil]),
        TYPE: exports.block,
      },
    },
   {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 15, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 15, 1.2, 23, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct, g.norecoil]),
        TYPE: exports.block,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 18, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 18, 1.2, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct, g.norecoil]),
        TYPE: exports.block,
      },
    },
  ],
};
exports.construct = {
  PARENT: [exports.genericTank],
  LABEL: "Mega Trapper",
   CONTROLLERS: ["nearestDifferentMaster"],
  STAT_NAMES: statnames.trap,
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    SPEED: base.SPEED * 0.7,
    FOV: base.FOV * 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 18, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 18, 1.2, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct]),
        TYPE: exports.block,
      },
    },
  ],
};
exports.overpass = {
  PARENT: [exports.genericTank],
  LABEL: "Overpass",
   CONTROLLERS: ["nearestDifferentMaster"],
  STAT_NAMES: statnames.trap,
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    SPEED: base.SPEED * 0.7,
    FOV: base.FOV * 1.15,
  },
  GUNS: [
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 30, 1.4, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 30, 1.2, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct]),
        TYPE: exports.block,
        MAX_CHILDREN: 4,
      },
    },
  ],
};
exports.autobuilder = makeAuto(exports.builder);
exports.conq = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 14, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 14, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 14, 1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block,
      },
    },
  ],
};
exports.bentboomer = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Boomer",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 10, 1, 8, -2, -35, 0],
    },
    {
      POSITION: [8, 10, 1, 8, 2, 35, 0],
    },
    {
      POSITION: [2, 10, 1.3, 16, -2, -35, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
        TYPE: exports.boomerang,
      },
    },
    {
      POSITION: [2, 10, 1.3, 16, 2, 35, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
        TYPE: exports.boomerang,
      },
    },
  ],
};
exports.janitor = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Janitor",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 3,
    FOV: base.FOV * 1.15,
    MAX_CHILDREN: 30,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 10, 1, 8, -2, -35, 0],
    },
    {
      POSITION: [8, 10, 1, 8, 2, 35, 0],
    },
    {
      POSITION: [2, 10, 1.3, 16, -2, -35, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
        TYPE: exports.boomerang,
      },
    },
    {
      POSITION: [2, 10, 1.3, 16, 2, 35, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
        TYPE: exports.boomerang,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 10, 1, 8, -2, -15, 0],
    },
    {
      POSITION: [8, 10, 1, 8, 2, 15, 0],
    },
    {
      POSITION: [2, 10, 1.3, 16, -2, -15, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
        TYPE: exports.boomerang,
      },
    },
    {
      POSITION: [2, 10, 1.3, 16, 2, 15, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
        TYPE: exports.boomerang,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 10, 1, 8, -2, -55, 0],
    },
    {
      POSITION: [8, 10, 1, 8, 2, 55, 0],
    },
    {
      POSITION: [2, 10, 1.3, 16, -2, -55, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
        TYPE: exports.boomerang,
      },
    },
    {
      POSITION: [2, 10, 1.3, 16, 2, 55, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
        TYPE: exports.boomerang,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 10, 1, 8, -2, -75, 0],
    },
    {
      POSITION: [8, 10, 1, 8, 2, 75, 0],
    },
    {
      POSITION: [20, 15, 1, 8, 0, 0, 0],
    },
    {
      POSITION: [2, 10, 1.3, 16, -2, -75, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
        TYPE: exports.boomerang,
      },
    },
    {
      POSITION: [2, 10, 1.3, 16, 2, 75, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
        TYPE: exports.boomerang,
      },
    },
    {
      POSITION: [14, 15, 1.3, 16, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
        TYPE: exports.boomerang,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 20, 1, 14, 0, 180, 0],
    },
    {
      POSITION: [6, 20, -1.5, 7, 0, 180, 0],
    },
    {
      //POSITION: [  12,    15,      1,      0,      0,      0,      0,   ],
      //    }, {
      POSITION: [2, 20, 1.3, 18, 0, 180, 5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang]),
        TYPE: exports.boomerang,
      },
    },
  ],
};
exports.boomer = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Boomer",
  STAT_NAMES: statnames.trap,
  FACING_TYPE: "locksFacing",
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 10, 1, 14, 0, 0, 0],
    },
    {
      POSITION: [6, 10, -1.5, 7, 0, 0, 0],
    },
    {
      //POSITION: [  12,    15,      1,      0,      0,      0,      0,   ],
      //    }, {
      POSITION: [2, 10, 1.3, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang]),
        TYPE: exports.boomerang,
      },
    },
  ],
};
exports.weatherballoon = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  SHAPE: [[-1.026,-1],[0.5,-1],[0.005,-0.5],[0,0.5],[0.5,1],[-1,1],[-4,0]],
  LABEL: "Weather Balloon",
  STAT_NAMES: statnames.trap,
  FACING_TYPE: "locksFacing",
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
    HEALTH: 10,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 10, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [6, 10, -1.5, -7, 0, 0, 0],
    },
    {
      //POSITION: [  12,    15,      1,      0,      0,      0,      0,   ],
      //    }, {
      POSITION: [2, 10, 1.3, 4, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang, g.muchmorerecoil]),
        TYPE: exports.boomerang,
      },
    },
    {
      //POSITION: [  12,    15,      1,      0,      0,      0,      0,   ],
      //    }, {
      POSITION: [2, 10, 1.3, 4, 0, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang, g.muchmorerecoil]),
        TYPE: exports.boomerang,
      },
    },
    {
      //POSITION: [  12,    15,      1,      0,      0,      0,      0,   ],
      //    }, {
      POSITION: [2, 10, 1.3, 4, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang, g.muchmorerecoil]),
        TYPE: exports.boomerang,
      },
    },
    {
      //POSITION: [  12,    15,      1,      0,      0,      0,      0,   ],
      //    }, {
      POSITION: [2, 10, 1.3, 4, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang, g.muchmorerecoil]),
        TYPE: exports.boomerang,
      },
    },
    {
      //POSITION: [  12,    15,      1,      0,      0,      0,      0,   ],
      //    }, {
      POSITION: [2, 10, 1.3, 4, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang, g.muchmorerecoil]),
        TYPE: exports.boomerang,
      },
    },
    {
      //POSITION: [  12,    15,      1,      0,      0,      0,      0,   ],
      //    }, {
      POSITION: [2, 10, 1.3, 4, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang, g.muchmorerecoil]),
        TYPE: exports.boomerang,
      },
    },
    {
      //POSITION: [  12,    15,      1,      0,      0,      0,      0,   ],
      //    }, {
      POSITION: [2, 10, 1.3, 4, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang, g.muchmorerecoil]),
        TYPE: exports.boomerang,
      },
    },
    {
      //POSITION: [  12,    15,      1,      0,      0,      0,      0,   ],
      //    }, {
      POSITION: [2, 10, 1.3, 4, 0, 0, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang, g.muchmorerecoil]),
        TYPE: exports.boomerang,
      },
    },
    {
      //POSITION: [  12,    15,      1,      0,      0,      0,      0,   ],
      //    }, {
      POSITION: [2, 10, 1.3, 4, 0, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang, g.muchmorerecoil]),
        TYPE: exports.boomerang,
      },
    },
    {
      //POSITION: [  12,    15,      1,      0,      0,      0,      0,   ],
      //    }, {
      POSITION: [2, 10, 1.3, 4, 0, 0, 0.9],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang, g.muchmorerecoil]),
        TYPE: exports.boomerang,
      },
    },
  ],
};
exports.quadtrapper = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, 0, 45, 0],
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
        TYPE: exports.block,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 0, 135, 0],
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
        TYPE: exports.block,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 0, 225, 0],
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 225, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
        TYPE: exports.block,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 0, 315, 0],
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 315, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
        TYPE: exports.block,
      },
    },
  ],
};

exports.artillery = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Artillery",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 3, 1, 0, -6, -7, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [17, 3, 1, 0, 6, 7, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [19, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Heavy",
      },
    },
  ],
};
exports.mortar = {
  PARENT: [exports.genericTank],
  LABEL: "Mortar",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 3, 1, 0, -8, -7, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [13, 3, 1, 0, 8, 7, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [17, 3, 1, 0, -6, -7, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [17, 3, 1, 0, 6, 7, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [19, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Heavy",
      },
    },
  ],
};
exports.skimmer = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.15,
  },
  LABEL: "Skimmer",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -0.5, 9, 0, 0, 0],
    },
    {
      POSITION: [17, 15, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
        ]),
        TYPE: exports.missile,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
  ],
};
exports.fogger = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.15,
  },
  LABEL: "Fogger",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -0.5, 9, 0, 0, 0],
    },
    {
      POSITION: [17, 15, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
        ]),
        TYPE: exports.octobullet,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -0.5, 9, 0, 45, 0],
    },
    {
      POSITION: [17, 15, 1, 0, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
        ]),
        TYPE: exports.octobullet,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -0.5, 9, 0, 90, 0],
    },
    {
      POSITION: [17, 15, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
        ]),
        TYPE: exports.octobullet,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -0.5, 9, 0, 135, 0],
    },
    {
      POSITION: [17, 15, 1, 0, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic, 
          g.pound,
          g.arty,
          g.arty,
          g.skim,
        ]),
        TYPE: exports.octobullet,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -0.5, 9, 0, 180, 0],
    },
    {
      POSITION: [17, 15, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
        ]),
        TYPE: exports.octobullet,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -0.5, 9, 0, 225, 0],
    },
    {
      POSITION: [17, 15, 1, 0, 0, 225, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
        ]),
        TYPE: exports.octobullet,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -0.5, 9, 0, 270, 0],
    },
    {
      POSITION: [17, 15, 1, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
        ]),
        TYPE: exports.octobullet,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -0.5, 9, 0, 315, 0],
    },
    {
      POSITION: [17, 15, 1, 0, 0, 315, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
        ]),
        TYPE: exports.octobullet,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
  ],
};
exports.hurricane = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.15,
  },
  LABEL: "Hurricane",
  DANGER: 7,
  GUNS: [
    {
      POSITION: [40, 38, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
        ]),
        TYPE: exports.octobullet,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
    {
      POSITION: [38, 36, 1, 0, 0, 0, 0.02],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
        ]),
        TYPE: exports.octobullet,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
    {
      POSITION: [36, 34, 1, 0, 0, 0, 0.04],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
        ]),
        TYPE: exports.octobullet,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
    {
      POSITION: [34, 32, 1, 0, 0, 0, 0.08],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic, 
          g.pound,
          g.arty,
          g.arty,
          g.skim,
        ]),
        TYPE: exports.octobullet,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
    {
      POSITION: [32, 30, 1, 0, 0, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
        ]),
        TYPE: exports.octobullet,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
    {
      POSITION: [30, 28, 1, 0, 0, 0, 0.12],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
        ]),
        TYPE: exports.octobullet,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
    {
      POSITION: [28, 26, 1, 0, 0, 0, 0.14],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
        ]),
        TYPE: exports.octobullet,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
    {
      POSITION: [26, 24, 1, 0, 0, 0, 0.16],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
        ]),
        TYPE: exports.octobullet,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
    {
      POSITION: [24, 22, 1, 0, 0, 0, 0.18],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
        ]),
        TYPE: exports.octobullet,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
    {
      POSITION: [22, 20, 1, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
        ]),
        TYPE: exports.octobullet,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
    {
      POSITION: [20, 18, 1, 0, 0, 0, 0.22],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
        ]),
        TYPE: exports.octobullet,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
    {
      POSITION: [18, 16, 1, 0, 0, 0, 0.24],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
        ]),
        TYPE: exports.octobullet,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
  ],
};
exports.spread = {
  PARENT: [exports.genericTank],
  LABEL: "Spreadshot",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 4, 1, 0, -0.8, -75, 5 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [14.5, 4, 1, 0, -1.0, -60, 4 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [16, 4, 1, 0, -1.6, -45, 3 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [17.5, 4, 1, 0, -2.4, -30, 2 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [19, 4, 1, 0, -3.0, -15, 1 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [13, 4, 1, 0, 0.8, 75, 5 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [14.5, 4, 1, 0, 1.0, 60, 4 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [16, 4, 1, 0, 1.6, 45, 3 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [17.5, 4, 1, 0, 2.4, 30, 2 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [19, 4, 1, 0, 3.0, 15, 1 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [13, 10, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.spreadmain,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Pounder",
      },
    },
  ],
};

exports.slimshot = {
  PARENT: [exports.genericTank],
  LABEL: "Slimshot",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 4, 1, 0, -0.8, -25, 5 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [14.5, 4, 1, 0, -1.0, -20, 4 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [16, 4, 1, 0, -1.6, -15, 3 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [17.5, 4, 1, 0, -2.4, -10, 2 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [19, 4, 1, 0, -3.0, -5, 1 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [13, 4, 1, 0, 0.8, 25, 5 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [14.5, 4, 1, 0, 1.0, 20, 4 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [16, 4, 1, 0, 1.6, 15, 3 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [17.5, 4, 1, 0, 2.4, 10, 2 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [19, 4, 1, 0, 3.0, 5, 1 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [13, 10, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.spreadmain,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Pounder",
      },
    },
  ],
};

exports.narrowshot = {
  PARENT: [exports.genericTank],
  LABEL: "Narrowshot",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 4, 1, 0, -0.8, -10, 5 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [14.5, 4, 1, 0, -1.0, -8, 4 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [16, 4, 1, 0, -1.6, -6, 3 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [17.5, 4, 1, 0, -2.4, -4, 2 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [19, 4, 1, 0, -3.0, -2, 1 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [13, 4, 1, 0, 0.8, 10, 5 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [14.5, 4, 1, 0, 1.0, 8, 4 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [16, 4, 1, 0, 1.6, 6, 3 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [17.5, 4, 1, 0, 2.4, 4, 2 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [19, 4, 1, 0, 3.0, 2, 1 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [13, 10, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.spreadmain,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Pounder",
      },
    },
  ],
};

exports.vastshot = {
  PARENT: [exports.genericTank],
  LABEL: "Vastshot",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 4, 1, 0, -0.8, -100, 5 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [14.5, 4, 1, 0, -1.0, -80, 4 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [16, 4, 1, 0, -1.6, -60, 3 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [17.5, 4, 1, 0, -2.4, -40, 2 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [19, 4, 1, 0, -3.0, -20, 1 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [13, 4, 1, 0, 0.8, 100, 5 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [14.5, 4, 1, 0, 1.0, 80, 4 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [16, 4, 1, 0, 1.6, 60, 3 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [17.5, 4, 1, 0, 2.4, 40, 2 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [19, 4, 1, 0, 3.0, 20, 1 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [13, 10, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.spreadmain,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Pounder",
      },
    },
  ],
};

exports.flank = {
  PARENT: [exports.genericTank],
  LABEL: "Flank Guard",
  BODY: {
    SPEED: base.SPEED * 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.hexa = {
  PARENT: [exports.genericTank],
  LABEL: "Hexa Tank",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 300, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.octo = {
  PARENT: [exports.genericTank],
  LABEL: "Octo Tank",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 225, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 315, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
  ],
};

exports.hexadecagon = {
  PARENT: [exports.genericTank],
  LABEL: "Hexadecagon",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 45, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 135, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 225, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 315, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [8, 0, 0, 10, 360, 1],
      TYPE: [exports.octoturret, { INDEPENDENT: true, COLOR: 5 }],
    },
  ],
};

exports.sonar = {
  PARENT: [exports.genericTank],
  LABEL: "Sonar",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 2, 1, 0, 0, 0, 0.05],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 2, 1, 0, 0, 18, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 2, 1, 0, 0, 36, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 2, 1, 0, 0, 54, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 2, 1, 0, 0, 72, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 2, 1, 0, 0, 90, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 2, 1, 0, 0, 108, 0.35],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 2, 1, 0, 0, 126, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 2, 1, 0, 0, 144, 0.45],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 2, 1, 0, 0, 162, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 2, 1, 0, 0, 180, 0.55],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 2, 1, 0, 0, 198, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 2, 1, 0, 0, 216, 0.65],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 2, 1, 0, 0, 234, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 2, 1, 0, 0, 252, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 2, 1, 0, 0, 270, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 2, 1, 0, 0, 288, 0.85],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 2, 1, 0, 0, 306, 0.9],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 2, 1, 0, 0, 324, 0.95],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 2, 1, 0, 0, 342, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.guidedocto = {
  PARENT: [exports.genericTank],
  LABEL: "Guided Octo Tank",
  DANGER: 6,
  SHAPE: 5,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.guidedbullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.guidedbullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.guidedbullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.guidedbullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.guidedbullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 225, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.guidedbullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.guidedbullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 315, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.guidedbullet,
      },
    },
  ],
};
exports.Tetracontagon = {
  PARENT: [exports.genericTank],
  LABEL: "Tetracontagon",
  DANGER: 7,
  SIZE: 30,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 45, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 135, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 225, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 315, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [20, 20, 20, 180, 360, 0],
      TYPE: [exports.octoturret],
    },
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [20, -20, 20, 180, 360, 0],
      TYPE: [exports.octoturret],
    },
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [20, 20, -20, 180, 360, 0],
      TYPE: [exports.octoturret],
    },
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [20, -20, -20, 180, 360, 0],
      TYPE: [exports.octoturret],
    },
  ],
};
exports.heptatrap = (() => {
  let g = 360 / 7,
    d = 1 / 7;
  return {
    PARENT: [exports.genericTank],
    LABEL: "Hepta-Trapper",
    DANGER: 7,
    BODY: {
      SPEED: base.SPEED * 0.8,
    },
    STAT_NAMES: statnames.trap,
    HAS_NO_RECOIL: true,
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 0, 0],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, g, 4 * d],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, g, 4 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 2 * g, 1 * d],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 2 * g, 1 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 3 * g, 5 * d],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 3 * g, 5 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 4 * g, 2 * d],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 4 * g, 2 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 5 * g, 6 * d],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 5 * g, 6 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 6 * g, 3 * d],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 6 * g, 3 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
    ],
  };
})();
exports.hexatrap = makeAuto(
  {
    PARENT: [exports.genericTank],
    LABEL: "Hexa-Trapper",
    DANGER: 7,
    BODY: {
      SPEED: base.SPEED * 0.8,
    },
    STAT_NAMES: statnames.trap,
    HAS_NO_RECOIL: true,
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 0, 0],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 60, 0.5],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 60, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 120, 0],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 120, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 180, 0.5],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 180, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 240, 0],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 240, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 300, 0.5],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 300, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
    ],
  },
  "Hexa-Trapper"
);

exports.castle = makeAuto(
  {
    PARENT: [exports.genericTank],
    LABEL: "Castle",
    DANGER: 7,
    BODY: {
      SPEED: base.SPEED * 0.8,
      DAMAGE: base.DAMAGE * 0.04
    },
    STAT_NAMES: statnames.trap,
    HAS_NO_RECOIL: true,
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 0, 0],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 30, 0],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 30, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 60, 0],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 60, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 90, 0],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 120, 0],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 120, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 150, 0],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 150, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 180, 0],
      },
      {
        POSITION: [3, 7, 1.7, 15, 180, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 210, 0],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 210, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 240, 0],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 240, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 270, 0],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 270, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 300, 0],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 300, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 330, 0],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 330, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 360, 0],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 360, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
    ],
  },
  "Castle"
);

exports.tri = {
  PARENT: [exports.genericTank],
  LABEL: "Tri-Angle",
  BODY: {
    HEALTH: base.HEALTH * 0.8,
    SHIELD: base.SHIELD * 0.8,
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.booster = {
  PARENT: [exports.genericTank],
  LABEL: "Booster",
  BODY: {
    HEALTH: base.HEALTH * 0.6,
    SHIELD: base.SHIELD * 0.6,
    DENSITY: base.DENSITY * 0.2,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.muchmorerecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.headlesshorseman = {
  PARENT: [exports.genericTank],
  LABEL: "Headless Horseman",
  BODY: {
    HEALTH: base.HEALTH * 0.6,
    SHIELD: base.SHIELD * 0.6,
    DENSITY: base.DENSITY * 0.2,
    FOV: base.FOV * 2,
    SPEED: base.SPEED * 8,
  },
  DANGER: 7,
  SIZE: 30,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.muchmorerecoil,
        ]),
        TYPE: exports.flamingpumpkin,
        LABEL: "Front",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 6, 1, 0, -10, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.muchmorerecoil,
        ]),
        TYPE: exports.flamingpumpkin,
        LABEL: "Front",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 6, 1, 0, 10, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.muchmorerecoil,
        ]),
        TYPE: exports.flamingpumpkin,
        LABEL: "Front",
      },
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.squarebullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [10, 8, 1, 0, -1, 125, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.squarebullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [10, 8, 1, 0, -1, 165, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.squarebullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [13, 8, 1, 0, -1, 155, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.squarebullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.squarebullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 1, 205, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.squarebullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [10, 8, 1, 0, 1, 235, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.squarebullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [10, 8, 1, 0, 1, 195, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.squarebullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.squarebullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.squarebullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.squarebullet],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },{
      POSITION: [7, 7.5, 0.6, 7, -1, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: [exports.squarebullet],
        STAT_CALCULATOR: gunCalcNames.basic,
      },
    },
  ],
};
exports.stormbringer = {
  PARENT: [exports.genericTank],
  LABEL: "Storm Bringer",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [24, 12, 1, 0, -1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side",
      },
    },
    {
      POSITION: [24, 12, 1, 0, 1, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side",
      },
    },
    {
      POSITION: [24, 12, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [24, 12, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 4, 1, 0, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 4, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 4, 1, 0, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 4, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 4, 1, 0, 0, 225, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 4, 1, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 4, 1, 0, 0, 315, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 4, 1, 0, 0, 22.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 4, 1, 0, 0, 67.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 4, 1, 0, 0, 112.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      }, //Ok then. Good luck
    },//srry i gtg soon, btw i am makeing a tank here, its just taking a very long time to place al the coordinates
    {
      POSITION: [15, 4, 1, 0, 0, 157.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 4, 1, 0, 0, 202.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 4, 1, 0, 0, 247.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 4, 1, 0, 0, 292.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 4, 1, 0, 0, 337.5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.fighter = {
  PARENT: [exports.genericTank],
  LABEL: "Fighter",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [16, 8, 1, 0, -1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side",
      },
    },
    {
      POSITION: [16, 8, 1, 0, 1, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side",
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.fooster = {
  PARENT: [exports.genericTank],
  LABEL: "Fooster",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [16, 8, 1, 0, -1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side",
      },
    },
    {
      POSITION: [16, 8, 1, 0, 1, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side",
      },
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.brutalizer = {
  PARENT: [exports.genericTank],
  LABEL: "Brutalizer",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 1, -90, 9],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.boarder = {
  PARENT: [exports.genericTank],
  LABEL: "Boarder",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 12, 1, 0, 0, 0, 0],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [7, 13, 0.6, 7, -1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 13, 0.6, 7, -1, -90, 9],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, -145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, -135, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 135, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.hover = {
  PARENT: [exports.genericTank],
  LABEL: "Hover",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 3,
  MAX_CHILDREN: 5,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
        TYPE: exports.octoswarmturret,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 1, -90, 9],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.bomber = {
  PARENT: [exports.genericTank],
  LABEL: "Bomber",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 130, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
        TYPE: exports.bullet,
        LABEL: "Wing",
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 230, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
        TYPE: exports.bullet,
        LABEL: "Wing",
      },
    },
    {
      POSITION: [14, 8, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.morerecoil]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.autotri = makeAuto(exports.tri);
exports.autotri.BODY = {
  SPEED: base.SPEED,
};
exports.falcon = {
  PARENT: [exports.genericTank],
  LABEL: "Falcon",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
        LABEL: "Assassin",
        ALT_FIRE: true,
      },
    },
    {
      POSITION: [5, 8.5, -1.6, 8, 0, 0, 0],
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};

exports.auto3 = {
  PARENT: [exports.genericTank],
  LABEL: "Auto-3",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.auto3gun,
    },
    {
      POSITION: [11, 8, 0, 120, 190, 0],
      TYPE: exports.auto3gun,
    },
    {
      POSITION: [11, 8, 0, 240, 190, 0],
      TYPE: exports.auto3gun,
    },
  ],
};
exports.auto5 = {
  PARENT: [exports.genericTank],
  LABEL: "Auto-5",
  DANGER: 7,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.auto5gun,
    },
    {
      POSITION: [11, 8, 0, 72, 190, 0],
      TYPE: exports.auto5gun,
    },
    {
      POSITION: [11, 8, 0, 144, 190, 0],
      TYPE: exports.auto5gun,
    },
    {
      POSITION: [11, 8, 0, 216, 190, 0],
      TYPE: exports.auto5gun,
    },
    {
      POSITION: [11, 8, 0, 288, 190, 0],
      TYPE: exports.auto5gun,
    },
  ],
};
exports.heavy3 = {
  BODY: {
    SPEED: base.SPEED * 0.95,
  },
  PARENT: [exports.genericTank],
  LABEL: "Mega-3",
  DANGER: 7,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 8, 0, 0, 190, 0],
      TYPE: exports.heavy3gun,
    },
    {
      POSITION: [14, 8, 0, 120, 190, 0],
      TYPE: exports.heavy3gun,
    },
    {
      POSITION: [14, 8, 0, 240, 190, 0],
      TYPE: exports.heavy3gun,
    },
  ],
};
exports.tritrap = {
  LABEL: "",
  BODY: {
    SPEED: base.SPEED * 1.1,
  },
  PARENT: [exports.genericTank],
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [12, 8, 0, 0, 190, 0],
      TYPE: exports.tritrapgun,
    },
    {
      POSITION: [12, 8, 0, 120, 190, 0],
      TYPE: exports.tritrapgun,
    },
    {
      POSITION: [12, 8, 0, 240, 190, 0],
      TYPE: exports.tritrapgun,
    },
  ],
};
exports.sniper3 = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.25,
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [13, 8, 0, 0, 170, 0],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [13, 8, 0, 120, 170, 0],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [13, 8, 0, 240, 170, 0],
      TYPE: exports.sniper3gun,
    },
  ],
};
exports.auto4 = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  LABEL: "Auto-4",
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [13, 6, 0, 45, 160, 0],
      TYPE: exports.auto4gun,
    },
    {
      POSITION: [13, 6, 0, 135, 160, 0],
      TYPE: exports.auto4gun,
    },
    {
      POSITION: [13, 6, 0, 225, 160, 0],
      TYPE: exports.auto4gun,
    },
    {
      POSITION: [13, 6, 0, 315, 160, 0],
      TYPE: exports.auto4gun,
    },
  ],
};

exports.flanktrap = {
  PARENT: [exports.genericTank],
  LABEL: "Trap Guard",
  STAT_NAMES: statnames.generic,
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 8, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.guntrap = {
  PARENT: [exports.genericTank],
  LABEL: "Gunner Trapper",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    FOV: base.FOV * 1.25,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [13, 11, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 11, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.fast, g.halfrecoil]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.bushwhack = {
  PARENT: [exports.genericTank],
  LABEL: "Snipe Guard",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.morerecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 8.5, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 8.5, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};

// UPGRADE PATHS

exports.basic.UPGRADES_TIER_1 = [
  exports.twin,
  exports.sniper,
  exports.machine,
  exports.flank,
  exports.swarmer,
  exports.director,
  exports.tri,
  exports.trapper,
  exports.steamer,
];

exports.factory.UPGRADES_TIER_3 = [
  exports.generator,  
];

exports.trapper.UPGRADES_TIER_3 = [
  exports.builder,
  exports.barricade,
  exports.trailer,
];

exports.trailer.UPGRADES_TIER_3 = [
  exports.heavytrailer,
];

exports.steamer.UPGRADES_TIER_2 = [
  exports.barracuda,
  exports.flaregun,
  exports.magmarammer,
];

exports.barricade.UPGRADES_TIER_3 = [
  exports.barracuda,
];

exports.skimmer.UPGRADES_TIER_3 = [
  exports.rocketer,
];

exports.rocketer.UPGRADES_TIER_3 = [
  exports.dualrocketer,
  exports.launcher,
  exports.reloader,
  exports.flaregun,
];

exports.anni.UPGRADES_TIER_3 = [
  exports.heavytrailer,
  exports.radiowave,
  exports.guidedanni
];

exports.twin.UPGRADES_TIER_2 = [
  exports.double,
  exports.bent,
  exports.gunner,
  exports.hexa,
  exports.dual,
  exports.hippo,
];

exports.spread.UPGRADES_TIER_3 = [
  exports.vastshot,
  exports.slimshot,
  exports.narrowshot,
];

exports.shotgun2.UPGRADES_TIER_3 = [
  exports.erupter,
];

exports.swarmdestroyer.UPGRADES_TIER_3 = [
  exports.hotwire,
];

exports.swarmer.UPGRADES_TIER_2 = [
  exports.cruiser,
  exports.swarmbasic,
  exports.heavyswarmer,
];

exports.brutalizer.UPGRADES_TIER_3 = [
  exports.boarder,
];

exports.swarmbasic.UPGRADES_TIER_3 = [
  exports.swarmtwin,
  exports.swarmsniper,
  exports.swarmdestroyer, 
];

exports.swarmsniper.UPGRADES_TIER_3 = [
  exports.swarmassassin,
];
  

exports.carrier.UPGRADES_TIER_3 = [
  exports.inferno,
];

exports.battleship.UPGRADES_TIER_3 = [
  exports.inferno,  
];

exports.construct.UPGRADES_TIER_3 = [
  exports.radiowave,
  exports.overpass,
];

exports.assassin.UPGRADES_TIER_3 = [
  exports.guidedassassin,
];

exports.overpower.UPGRADES_TIER_3 = [
  exports.supervisor,
  exports.overflare,
];

exports.nailgun.UPGRADES_TIER_3 = [
  exports.pelter,  
];

exports.penta.UPGRADES_TIER_3 = [
  exports.minipenta,
];

exports.hexatrap = makeAuto.UPGRADES_TIER_3 = [
  exports.castle,
];

exports.necromancer.UPGRADES_TIER_3 = [
  exports.charger,  
  exports.stormsummoner,
];

exports.fighter.UPGRADES_TIER_2 = [
  exports.fooster,
  exports.stormbringer,
];

exports.pound.UPGRADES_TIER_3 = [
  exports.hybrid,  
];

exports.spray.UPGRADES_TIER_3 = [
  exports.shotgun2,
];

exports.booster.UPGRADES_TIER_3 = [
  exports.brutalizer,
  exports.charger,
  exports.barracuda,
];

exports.skimmer.UPGRADES_TIER_2 = [
  exports.hiveshooter,  
];

exports.cruiser.UPGRADES_TIER_3 = [
  exports.autocruiser,
];

exports.overseer.UPGRADES_TIER_3 = [
  exports.master,
];

exports.twin.UPGRADES_TIER_3 = [exports.triple];
exports.double.UPGRADES_TIER_3 = [
  exports.tripletwin,
  exports.split,
  exports.autodouble,
  exports.bentdouble,
];
exports.bent.UPGRADES_TIER_3 = [
  exports.penta,
  exports.spread,
  exports.benthybrid,
  exports.bentdouble,
  exports.triple,
];
exports.gunner.UPGRADES_TIER_3 = [
  exports.autogunner,
  exports.nailgun,
  exports.auto4,
  exports.machinegunner,
  exports.advancedgunner,
];

exports.stream.UPGRADES_TIER_3 = [
  exports.laserpointer,
  exports.guidedstreamliner,
];

exports.overlord.UPGRADES_TIER_3 = [
  exports.glacier,  
];

exports.octo.UPGRADES_TIER_3 = [
  exports.stormsummoner,
  exports.stormbringer,
  exports.guidedocto,
  exports.sonar,
  exports.hexadecagon,
];

exports.sniper.UPGRADES_TIER_2 = [
  exports.assassin,
  exports.hunter,
  exports.mini,
  exports.builder,
  exports.lasersniper,
];

exports.sniper.UPGRADES_TIER_3 = [exports.bushwhack];
exports.assassin.UPGRADES_TIER_3 = [exports.ranger, exports.falcon];
exports.hunter.UPGRADES_TIER_3 = [
  exports.preda,
  exports.poach,
  exports.sidewind,
  exports.dual,
];

exports.builder.UPGRADES_TIER_3 = [
  exports.construct,
  exports.autobuilder,
  exports.engineer,
  exports.boomer,
  exports.tracker,
];

exports.machine.UPGRADES_TIER_2 = [
  exports.pound,
  exports.artillery,
  exports.mini,
  exports.gunner,
  exports.hippo,
];

exports.machine.UPGRADES_TIER_3 = [exports.spray];
exports.pound.UPGRADES_TIER_3 = [
  exports.anni,
  exports.hybrid,
  exports.construct,
  exports.shotgun2,
  exports.lasergun,
  exports.hotwire,
];
exports.artillery.UPGRADES_TIER_3 = [
  exports.mortar,
  exports.spread,
  exports.skimmer,
];
exports.mini.UPGRADES_TIER_3 = [exports.stream, exports.nailgun];

exports.flank.UPGRADES_TIER_2 = [
  exports.hexa,
  exports.tri,
  exports.auto3,
  exports.flanktrap,
];
exports.flank.UPGRADES_TIER_3 = [];
exports.tri.UPGRADES_TIER_3 = [
  exports.fighter,
  exports.booster,
  exports.falcon,
  exports.bomber,
  exports.autotri,
];
exports.hexa.UPGRADES_TIER_3 = [exports.octo, exports.hexatrap];
exports.auto3.UPGRADES_TIER_3 = [exports.auto5, exports.heavy3, exports.auto4];
exports.flanktrap.UPGRADES_TIER_3 = [
  exports.bushwhack,
  exports.guntrap,
  exports.fortress,
  exports.bomber,
];

exports.supervisor.UPGRADES_TIER_3 = [
  exports.emerger,
];

exports.director.UPGRADES_TIER_2 = [
  exports.overseer,
  exports.cruiser,
  exports.underseer,
  exports.supervisor,
  exports.decoymaker,
];
exports.director.UPGRADES_TIER_3 = [exports.factory];
exports.overseer.UPGRADES_TIER_3 = [
  exports.overlord,
  exports.overtrap,
  exports.overgunner,
  exports.overload,
  exports.radiowave,
];
exports.underseer.UPGRADES_TIER_3 = [exports.necromancer];
exports.cruiser.UPGRADES_TIER_3 = [
  exports.carrier,
  exports.battleship,
  exports.fortress,
];

exports.overload.UPGRADES_TIER_3 = [exports.overpower];

exports.overlord.UPGRADES_TIER_3 = [exports.master];

/*exports.smash.UPGRADES_TIER_3 = [exports.megasmash, exports.spike, exports.autosmash];
            
    /*exports.twin.UPGRADES_TIER_2 = [exports.double, exports.bent, exports.triple, exports.hexa];
        exports.double.UPGRADES_TIER_3 = [exports.tripletwin, exports.autodouble];
        exports.bent.UPGRADES_TIER_3 = [exports.penta, exports.benthybrid];
        exports.triple.UPGRADES_TIER_3 = [exports.quint];

    exports.sniper.UPGRADES_TIER_2 = [exports.assassin, exports.overseer, exports.hunter, exports.builder];
        exports.assassin.UPGRADES_TIER_3 = [exports.ranger];
        exports.overseer.UPGRADES_TIER_3 = [exports.overlord, exports.battleship
            , exports.overtrap, exports.necromancer, exports.factory, exports.fortress];
        exports.hunter.UPGRADES_TIER_3 = [exports.preda, exports.poach];
        exports.builder.UPGRADES_TIER_3 = [exports.construct, exports.autobuilder];
        
    exports.machine.UPGRADES_TIER_2 = [exports.destroy, exports.gunner, exports.artillery];
        exports.destroy.UPGRADES_TIER_3 = [exports.anni, exports.hybrid];
        exports.gunner.UPGRADES_TIER_3 = [exports.autogunner, exports.mortar, exports.stream];
        exports.artillery.UPGRADES_TIER_3 = [exports.mortar, exports.spread, exports.skimmer];
        exports.machine.UPGRADES_TIER_3 = [exports.spray];

    exports.flank.UPGRADES_TIER_2 = [exports.hexa, exports.tri, exports.auto3, exports.flanktrap];
        exports.hexa.UPGRADES_TIER_3 = [exports.octo];
        exports.tri.UPGRADES_TIER_3 = [exports.booster, exports.fighter, exports.bomber, exports.autotri];
        exports.auto3.UPGRADES_TIER_3 = [exports.auto5, exports.heavy3];
        exports.flanktrap.UPGRADES_TIER_3 = [exports.guntrap, exports.fortress, exports.bomber];*/

// NPCS:
exports.crasher = {
  TYPE: "crasher",
  LABEL: "Crasher",
  COLOR: 5,
  SHAPE: 3,
  SIZE: 5,
  VARIES_IN_SIZE: true,
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  AI: { NO_LEAD: true },
  BODY: {
    SPEED: 5,
    ACCEL: 0.01,
    HEALTH: 0.5,
    DAMAGE: 0.5,
    PENETRATION: 0.7,
    PUSHABILITY: 10,
    DENSITY: 0.2,
    RESIST: 0,
  },
  MOTION_TYPE: "motor",
  FACING_TYPE: "smoothWithMotion",
  HITS_OWN_TYPE: "hard",
  HAS_NO_MASTER: true,
  DRAW_HEALTH: true,
};
exports.divider = {
  TYPE: "Divider",
  LABEL: "Crasher",
  COLOR: 5,
  SHAPE: [[-3,0],[0,-0.5],[1,0],[0,0.5]],
  SIZE: 2,
  VARIES_IN_SIZE: true,
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  AI: { NO_LEAD: true },
  BODY: {
    SPEED: 5,
    ACCEL: 0.01,
    HEALTH: 0.5,
    DAMAGE: 0.5,
    PENETRATION: 0.7,
    PUSHABILITY: 10,
    DENSITY: 0.2,
    RESIST: 0,
  },
  MOTION_TYPE: "motor",
  FACING_TYPE: "smoothWithMotion",
  HITS_OWN_TYPE: "hard",
  HAS_NO_MASTER: true,
  DRAW_HEALTH: true,
};
exports.sentry = {
  PARENT: [exports.genericTank],
  TYPE: "crasher",
  LABEL: "Sentry",
  DANGER: 3,
  COLOR: 5,
  SHAPE: 7,
  SIZE: 20,
  SKILL: skillSet({
    rld: 0.5,
    dam: 20,
    pen: 3,
    str: 4,
    spd: 6,
    atk: 6,
    hlt: 10,
    shi: 0,
    rgn: 0.7,
    mob: 0,
  }),
  VALUE: 1500,
  VARIES_IN_SIZE: true,
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  AI: { NO_LEAD: true },
  BODY: {
    FOV: 0.5,
    ACCEL: 0.006,
    DAMAGE: base.DAMAGE * 10,
    SPEED: base.SPEED * 4,
  },
  MOTION_TYPE: "motor",
  FACING_TYPE: "smoothToTarget",
  HITS_OWN_TYPE: "hard",
  HAS_NO_MASTER: true,
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true,
};
exports.trapTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  BODY: {
    FOV: 0.5,
  },
  INDEPENDENT: true,
  CONTROLLERS: ["nearestDifferentMaster"],
  COLOR: 16,
  AI: {
    SKYNET: true,
    FULL_VIEW: true,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 14, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [4, 14, 1.8, 16, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.trap,
          g.lowpower,
          g.fast,
          g.halfreload,
        ]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.sentrySwarm = {
  PARENT: [exports.sentry],
  DANGER: 3,
  GUNS: [
    {
      POSITION: [7, 14, 0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.sentryGun = makeAuto(exports.sentry, "Sentry", {
  type: exports.heavy3gun,
  size: 12,
});
exports.sentryTrap = makeAuto(exports.sentry, "Sentry", {
  type: exports.trapTurret,
  size: 12,
});
exports.miniboss = {
  PARENT: [exports.genericTank],
  TYPE: "miniboss",
  DANGER: 6,
  SKILL: skillSet({
    rld: 0.7,
    dam: 0.5,
    pen: 0.8,
    str: 0.8,
    spd: 100,
    atk: 20,
    hlt: 500,
    shi: 100,
    rgn: 100,
    mob: 0,
  }),
  LEVEL: 45,
  CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
  AI: { NO_LEAD: true },
  FACING_TYPE: "autospin",
  HITS_OWN_TYPE: "hard",
  BROADCAST_MESSAGE: "A visitor has left!",
};
// [6, 4, 3, 5, 2, 9, 0, 1, 8, 7]
exports.crasherSpawner = {
  PARENT: [exports.genericTank],
  LABEL: "Spawned",
  STAT_NAMES: statnames.drone,
  CONTROLLERS: ["nearestDifferentMaster"],
  COLOR: 5,
  INDEPENDENT: true,
  AI: { chase: true },
  MAX_CHILDREN: 4,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak]),
        TYPE: [
          exports.drone,
          { LABEL: "Crasher", VARIES_IN_SIZE: true, DRAW_HEALTH: true },
        ],
        SYNCS_SKILLS: true,
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
};
exports.shardSpawner = {
  PARENT: [exports.genericTank],
  LABEL: "Spawned",
  STAT_NAMES: statnames.drone,
  CONTROLLERS: ["nearestDifferentMaster"],
  COLOR: 5,
  SHAPE: [[-3,0],[0,-0.5],[1,0],[0,0.5]
         ],
  INDEPENDENT: true,
  AI: { chase: true },
  MAX_CHILDREN: 5,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak]),
        TYPE: [
          exports.shard,
          { LABEL: "Shard", VARIES_IN_SIZE: true, DRAW_HEALTH: true },
        ],
        SYNCS_SKILLS: true,
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
};
exports.elite = {
  PARENT: [exports.miniboss],
  LABEL: "Elite Crasher",
  COLOR: 5,
  SHAPE: 3,
  SIZE: 20,
  VARIES_IN_SIZE: true,
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: base.HEALTH * 1.5,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5,
  },
};

//I AM DEACTIVATING ORIUS BECAUSE IT IS BREAKING THE SERVER
/*exports.orius = {
  PARENT: [exports.elite],
  LABEL: ["Orius"],
  SHAPE: -4,
  COLOR: 9,
  SIZE: 40,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
     /* POSITION: [5, 16, 1, 6, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.destroy, g.drone]),
        TYPE: exports.moddedsquareA,
        LABEL: "SquareTurret",
      },
    },//i though for sure that would be how to get it to work, 
    { 
      POSITION: [5, 16, 1, 6, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.destroy, g.drone]),
        TYPE: exports.moddedsquareA,
        LABEL: "SquareTurret",
      },
    },
    {
      POSITION: [5, 16, 1, 6, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.destroy, g.drone]),
        TYPE: exports.moddedsquareA,
        LABEL: "SquareTurret",
      },
    },
    
    {
      POSITION: [5, 16, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.destroy, g.drone]),
        TYPE: exports.moddedsquareA,
        LABEL: "SquareTurret",
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }],
    },
  ],
};
*/


exports.alphathirteen = {
  PARENT: [exports.genericTank],
  LABEL: ["Alpha 13"],
  SHAPE:13,
  SIZE:40,
  MAX_CHILDREN: 40,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 16, 1, 6, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 16, 1, 6, 0, 160, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 16, 1, 6, 0, 140, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 16, 1, 6, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 16, 1, 6, 0, 100, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 16, 1, 6, 0, 80, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
    {
      POSITION: [5, 16, 1, 6, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
    {
      POSITION: [5, 16, 1, 6, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
    {
      POSITION: [5, 16, 1, 6, 0, -80, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
    {
      POSITION: [5, 16, 1, 6, 0, -100, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
    {
      POSITION: [5, 16, 1, 6, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
    {
      POSITION: [5, 16, 1, 6, 0, -140, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
    {
      POSITION: [5, 16, 1, 6, 0, -160, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
    {
      POSITION: [5, 16, 1, 6, 0, -180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
    {
      POSITION: [5, 16, 1, 6, 0, -200, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
    {
      POSITION: [5, 16, 1, 6, 0, -220, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
     {
      POSITION: [5, 16, 1, 6, 0, -240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
     {
      POSITION: [5, 16, 1, 6, 0, -260, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
     {
      POSITION: [5, 16, 1, 6, 0, -280, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
     {
      POSITION: [5, 16, 1, 6, 0, -300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
     {
      POSITION: [5, 16, 1, 6, 0, -320, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
     {
      POSITION: [5, 16, 1, 6, 0, -340, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
     {
      POSITION: [5, 16, 1, 6, 0, -360, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
  ],
  TURRETS: [ //idk I wanted to see what type does
    {//im headin to bed have fun
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 20, 0, 180, 360, 0],
      TYPE: [exports.crasherSpawner],
    },
     {
      POSITION: [5, 20, 5, 60, 360, 0],
      TYPE: [exports.crasherSpawner],
    },
    {
      POSITION: [5, 20, -5, 60, 360, 0],
      TYPE: [exports.crasherSpawner],
    },
    {
      POSITION: [10, 20, 0, 60, 360, 0],
      TYPE: [exports.crasherSpawner],
    },
    {
      POSITION: [10, 20, 5, 60, 360, 0],
      TYPE: [exports.crasherSpawner],
    },
    {
      POSITION: [10, 20, -5, 60, 360, 0],
      TYPE: [exports.crasherSpawner],
    },
    {
      POSITION: [10, 20, 0, -60, 360, 0],
      TYPE: [exports.crasherSpawner],
    },
    {
      POSITION: [10, 20, 5, -60, 360, 0],
      TYPE: [exports.crasherSpawner],
    },
    {
      POSITION: [10, 20, -5, -60, 360, 0],
      TYPE: [exports.crasherSpawner],
    },
    {
      POSITION: [13, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }],
    },
    {
      POSITION: [5, 20, 0, 180, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }],
    },
    {
      POSITION: [5, 20, 0, 60, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }],
    },
    {
      POSITION: [5, 20, 0, -60, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }],
    },
    {
      POSITION: [5, 6, 6, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }],
    },
     {
      POSITION: [5, -6, 6, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }],
    },
     {
      POSITION: [5, 6, -6, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }],
    },
     {
      POSITION: [5, -6, -6, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }],
    },
  ],
};
exports.elite_gunner = {
  PARENT: [exports.elite],
  LABEL: ["Elite Gunner"],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 16, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 16, 1.5, 14, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: [exports.pillbox, { INDEPENDENT: true }],
      },
    },
    {
      POSITION: [6, 14, -2, 2, 0, 60, 0],
    },
    {
      POSITION: [6, 14, -2, 2, 0, 300, 0],
    },
  ],
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 8, 0, 60, 180, 0],
      TYPE: [exports.auto4gun],
    },
    {
      POSITION: [14, 8, 0, 300, 180, 0],
      TYPE: [exports.auto4gun],
    },
  ],
};
exports.elite_sprayer = {
  PARENT: [exports.elite],
  LABEL: ["Elite Sprayer"],
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 6, 0, 180, 190, 0],
      TYPE: [exports.spray, { COLOR: 5 }],
    },
    {
      POSITION: [14, 6, 0, 60, 190, 0],
      TYPE: [exports.spray, { COLOR: 5 }],
    },
    {
      POSITION: [14, 6, 0, -60, 190, 0],
      TYPE: [exports.spray, { COLOR: 5 }],
    },
  ],
}; 
exports.elite_destroyer = {
  PARENT: [exports.elite], 
  LABEL: ["Elite Destroyer"],
  AI: { NO_LEAD: false }, 
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 19.5, 1, 0, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, g.halfspeed]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 19.5, 1, 0, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, g.halfspeed]),
        TYPE: exports.bullet,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 19.5, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, g.halfspeed]),
        TYPE: exports.bullet,
      },
    },
  ],
    TURRETS: [
    {
      POSITION: [14, -8, 0, 300, 180, 0],
      TYPE: [exports.auto4gun],
    },
  ],
}; 
exports.portal = {
  PARENT: [exports.elite],
  LABEL: ["Portal"],
  AI: { NO_LEAD: false },
  SIZE: 50,
  TURRETS: [
    { 
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 10, 0, 180, 190, 0],
      TYPE: [exports.spray, { COLOR: 5 }],
    },
    {
      POSITION: [10, 10, 0, 60, 190, 0],
      TYPE: [exports.spray, { COLOR: 5 }],
    },
    {
      POSITION: [10, 10, 0, -60, 190, 0],
      TYPE: [exports.spray, { COLOR: 5 }],
    },
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [6, 0, 0, 60, 360, 1],
      TYPE: [exports.singleturret],
    }, 
     {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 60, 360, 1],
      TYPE: [exports.auto4gun],
     },
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 0, 0, 60, 360, 1],
      TYPE: [exports.bigauto4gun],
    },
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [4, 6, -8, 60, 360, 1],
      TYPE: [exports.singleturret],
     },
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [4, 6, 8, 60, 360, 1],
      TYPE: [exports.singleturret],
     },
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [4, -10, 0, 60, 360, 1],
      TYPE: [exports.singleturret],
    },
  ] 
}; 
exports.bushyata = {
  PARENT: [exports.elite],
  LABEL: ["Bushyata"],
  SHAPE:-2,
  SIZE:20,
  FOV:3,
  AI: { NO_LEAD: false },
  TURRETS: [
     {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 16, 1, 6, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
     {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 16, 1, 6, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
     {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 16, 1, 6, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [42, 6, 0, 180, 190, 0],
      TYPE: [exports.spray, { COLOR: 5 }],
    },
    {
      POSITION: [42, 6, 0, 60, 190, 0],
      TYPE: [exports.spray, { COLOR: 5 }],
    },
    {
      POSITION: [42, 6, 0, -60, 190, 0],
      TYPE: [exports.spray, { COLOR: 5 }],
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 48, 1, 6, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
    {
      POSITION: [15, 48, 1, 6, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
    {
      POSITION: [15, 48, 1, 6, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [33, 0, 0, 180, 360, 0],
      TYPE: [exports.crasherSpawner],
    },
    {
      POSITION: [33, 0, 0, 60, 360, 0],
      TYPE: [exports.crasherSpawner],
    },
    {
      POSITION: [33, 0, 0, -60, 360, 0],
      TYPE: [exports.crasherSpawner],
    },
    {
      POSITION: [33, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }],
    },
  ],
};
exports.eligos = {
  PARENT: [exports.elite], //ok
  LABEL: ["Eligos"],
  COLOR: 9,
  SHAPE: -5,
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [6, 0, 0, 0, 360, 0],
      TYPE: [exports.spray, { COLOR: 5 }],
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [6, 0, 0, 0, 360, 0],
      TYPE: [exports.spray, { COLOR: 5 }],
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [6, 0, 0, 0, 360, 0],
      TYPE: [exports.spray, { COLOR: 5 }],
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [6, 0, 0, 0, 360, 0],
      TYPE: [exports.spray, { COLOR: 5 }],
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [6, 0, 0, 0, 360, 0],
      TYPE: [exports.spray, { COLOR: 5 }],
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [6, 0, 0, 0, 360, 0],
      TYPE: [exports.spray, { COLOR: 5 }],
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [6, 0, 0, 0, 360, 0],
      TYPE: [exports.spray, { COLOR: 5 }],
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [6, 0, 0, 0, 360, 0],
      TYPE: [exports.spray, { COLOR: 5 }],
    },
  ],
}; 
exports.elite_sprayerodd = (() => {
  let a = 360 / 12;
  return {
    PARENT: [exports.miniboss],
    LABEL: " Odd Elite Crasher",
    SIZE: 20,
    SHAPE: 3,
    TURRETS: [
      /*  SIZE     X       Y     ANGLE    ARC */
      {
        POSITION: [7, 9, 6, a, 180, 0],
        TYPE: exports.spray,
      },
      {
        POSITION: [7, 9, -6, a * 3, 180, 0],
        TYPE: exports.spray,
      },
      {
        POSITION: [7, 9, 6, a * 5, 180, 0],
        TYPE: exports.spray,
      },
      {
        POSITION: [7, 9, -6, a * 7, 180, 0],
        TYPE: exports.spray,
      },
      {
        POSITION: [7, 9, 6, a * 11, 180, 0],
        TYPE: exports.spray,
      },
      {
        POSITION: [7, 9, -6, (360 * 3.5) / 3, 180, 0],
        TYPE: exports.spray,
      },
      {
        POSITION: [7, 0, 0, 0, 0, 1],
        TYPE: [exports.tripletwin],
        CONTROLLERS: ["reversespin"],
        AUTOFIRE: true,
      },
    ],
  };
})();
exports.elite_sprayernew = (() => {
  let a = 360 / 6;
  return {
    PARENT: [exports.miniboss],
    LABEL: "Elite Crasher",
    SIZE: 20,
    SHAPE: 3,
    TURRETS: [
      /*  SIZE     X       Y     ANGLE    ARC */
      {
        POSITION: [7, 9, 6, a, 180, 0],
        TYPE: exports.spray,
      },
      {
        POSITION: [7, 9, -6, a, 180, 0],
        TYPE: exports.spray,
      },
      {
        POSITION: [7, 9, 6, a *3, 180, 0],
        TYPE: exports.spray,
      },
      {
        POSITION: [7, 9, -6, a *3, 180, 0],
        TYPE: exports.spray,
      },
      {
        POSITION: [7, 9, 6, a *5, 180, 0],
        TYPE: exports.spray,
      },
      {
        POSITION: [7, 9, -6, a *5, 180, 0],
        TYPE: exports.spray,
      },
      {
        POSITION: [7, 0, 0, 0, 0, 1],
        TYPE: [exports.tripletwin],
        CONTROLLERS: ["reversespin"],
        AUTOFIRE: true,
      },
    ],
  };
})();
exports.elite_sprayernew2 = (() => {
  let a = 360 / 6;
  return {
    PARENT: [exports.miniboss],
    LABEL: "Elite Crasher",
    COLOR: 5,
    SIZE: 20,
    SHAPE: 3,
CONTROLLERS: ['onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster',],
    BODY: {
      FOV: 2,
      },
    GUNS: [
    {
          /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5,   12,    0.6,     7,      6,      a,      0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.op]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [5, 12, 0.6, 7, -6, a, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.op]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
       {
          /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5,   12,    0.6,     7,      6,      a *3,      0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.op]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [5, 12, 0.6, 7, -6, a *3, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.op]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
       {
          /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5,   12,    0.6,     7,      6,      a *5,      0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.op]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [5, 12, 0.6, 7, -6, a *5, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.op]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
    TURRETS: [
      /*  SIZE     X       Y     ANGLE    ARC */
      {
                POSITION: [  14,     9.5,      0,     120,     120, 0], 
                    TYPE: [exports.auto4gun, { COLOR: 5, }],
                        }, {
                POSITION: [  14,     9.5,      0,      240,    240, 0], 
                    TYPE: [exports.auto4gun, { COLOR: 5, }],
                        }, {
                POSITION: [  14,     9.5,      0,     360,    360, 0], 
                    TYPE: [exports.auto4gun, { COLOR: 5, }],
                        },
    ],
  };
})();
exports.elite_legion = (() => {
  let a = 360 / 6;
  return {
    PARENT: [exports.elite],
    LABEL: "Legionary Crasher",
    SIZE: 50,
    SHAPE: 3,
    MAX_CHILDREN: 6,
    GUNS: [
      {
       POSITION: [16, 15, 1, 0, 0, 120, 0],
      },
    {
      POSITION: [5, 15, 1.5, 14, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.over, g.op]),
        TYPE: exports.elite_destroyer,
      },
    },
    {
      POSITION: [16, 15, 1, 0, 0, 240, 0],
    },
    {
      POSITION: [5, 15, 1.5, 14, 0, 240, 0,],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.over, g.op]),
        TYPE: exports.elite_sprayer,
      },
    },
    {
      POSITION: [16, 15, 1, 0, 0, 360, 0],
    },
    {
      POSITION: [5, 15, 1.5, 14, 0, 360, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.over, g.op]),
        TYPE: exports.elite_gunner,
      },
    },
    {
     POSITION: [5,   20,    0.6,     7,      0,      a,      1],
    },
    {
     POSITION: [5,   20,    0.6,     7,      0,      a *3,      1],
    },
    {
     POSITION: [5,   20,    0.6,     7,      0,      a *5,      1],
    },
    ],
    TURRETS: [
      /*  SIZE     X       Y     ANGLE    ARC */
      {
        POSITION: [16.5, 7, 0, a, 180, 0],
        TYPE: exports.spray,
      }, 
      {
        POSITION: [16.5, 7, 0, a *3, 180, 0],
        TYPE: exports.spray,
      },
      { 
        POSITION: [16.5, 7, 0, a *5, 180, 0],
        TYPE: exports.spray,
      },
       { 
        POSITION: [10, 0, 0, 0, 180, 1],
         TYPE: [exports.elite_sprayernew2, {COLOR: 5}],
      }, 
    ],
  };
})();
/*exports.infinitusrangerlayer = (() => {
  let a = 360 / 10;
  return {
  PARENT: [exports.genericTank],
  LABEL: 'Infinitus layer',
  COLOR: 6,
  SHAPE: 5,
  FACING_TYPE: 'autospin',
  TURRETS: [
    {
      POSITION: [6, 9, 0, a, 180, 0],
      TYPE: exports.rangerkill
    },
     {
      POSITION: [6, 9, 0, a *3, 180, 0],
      TYPE: exports.rangerkill
    },
     {
      POSITION: [6, 9, 0, a *5, 180, 0],
      TYPE: exports.rangerkill
    },
     {
      POSITION: [6, 9, 0, a *7, 180, 0],
      TYPE: exports.rangerkill
    },
     {
      POSITION: [6, 9, 0, a *9, 180, 0],
      TYPE: exports.rangerkill
    },
    ]
 };
})();
*/
exports.elite_battleship = (() => {
  let a = 360 / 6;
  return {
    PARENT: [exports.elite],
    LABEL: "Legionary Crasher",
    SIZE: 20,
    SHAPE: 3,
    FACING_TYPE: 'autospin',
    GUNS: [
    {
          /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5,   12,    0.6,     7,      6,      a,      0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.op]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [5, 12, 0.6, 7, -6, a, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.op]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
       {
          /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5,   12,    0.6,     7,      6,      a *3,      0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.op]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [5, 12, 0.6, 7, -6, a *3, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.op]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
       {
          /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5,   12,    0.6,     7,      6,      a *5,      0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.op]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [5, 12, 0.6, 7, -6, a *5, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.op]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
    TURRETS: [
      /*  SIZE     X       Y     ANGLE    ARC */
      {
                POSITION: [  14,     9.5,      0,     120,     190, 0], 
                    TYPE: [exports.auto4gun, { COLOR: 5, }],
                        }, {
                POSITION: [  14,     9.5,      0,      240,    190, 0], 
                    TYPE: [exports.auto4gun, { COLOR: 5, }],
                        }, {
                POSITION: [  14,     9.5,      0,     360,    190, 0], 
                    TYPE: [exports.auto4gun, { COLOR: 5, }],
                        },
    ],
  };
})();
exports.elite_drone = {
  PARENT: [exports.elite],
  LABEL: ["Elite Drone"],
  AI: { NO_LEAD: false },
  MAX_CHILDREN: 24,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.op]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.op]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.op]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
  ],
};
exports.abezthibou = {
  PARENT: [exports.elite],
  LABEL: ["Abezethibou"],
  AI: { NO_LEAD: false },
  MAX_CHILDREN: 20,
  SIZE: 20,
  SHAPE: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12.5, 2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.op]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [7.5, 15, 2, 8, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.op]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7.5, 15, 2, 8, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.op]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7.5, 15, 2, 8, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.op]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [7.5, 15, 2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.op]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [7.5, 15, 2, 8, 0, -180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.op]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [7.5, 15, 2, 8, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.op]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [7.5, 15, 2, 8, 0, -240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.op]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
        {
      POSITION: [7.5, 15, 2, 8, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.op]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
        {
      POSITION: [7.5, 15, 2, 8, 0, -300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.op]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
        {
      POSITION: [7.5, 15, 2, 8, 0, 360, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.op]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
     {
      POSITION: [7.5, 15, 2, 8, 0, -360, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.op]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
  ],
};
exports.palisade = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([
      g.factory,
      g.pound,
      g.halfreload,
      g.halfreload,
    ]),
    TYPE: exports.minion,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true,
  };
  return {
    PARENT: [exports.miniboss],
    LABEL: "Rogue Palisade",
    COLOR: 17,
    SHAPE: 6,
    SIZE: 28,
    VALUE: 500000,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 0.1,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3,
    },
    GUNS: [
      {
        /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [4, 6, -1.6, 8, 0, 0, 0],
        PROPERTIES: props,
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 60, 0],
        PROPERTIES: props,
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 120, 0],
        PROPERTIES: props,
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
          TYPE: exports.minion,
          STAT_CALCULATOR: gunCalcNames.drone,
          AUTOFIRE: true,
          MAX_CHILDREN: 1,
          SYNCS_SKILLS: true,
          WAIT_TO_CYCLE: true,
        },
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 240, 0],
        PROPERTIES: props,
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 300, 0],
        PROPERTIES: props,
      },
    ],
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [5, 10, 0, 30, 110, 0],
        TYPE: exports.trapTurret,
      },
      {
        POSITION: [5, 10, 0, 90, 110, 0],
        TYPE: exports.trapTurret,
      },
      {
        POSITION: [5, 10, 0, 150, 110, 0],
        TYPE: exports.trapTurret,
      },
      {
        POSITION: [5, 10, 0, 210, 110, 0],
        TYPE: exports.trapTurret,
      },
      {
        POSITION: [5, 10, 0, 270, 110, 0],
        TYPE: exports.trapTurret,
      },
      {
        POSITION: [5, 10, 0, 330, 110, 0],
        TYPE: exports.trapTurret,
      },
    ],
  };
})();
exports.division = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([
      g.factory,
      g.pound,
      g.halfreload,
      g.halfreload,
    ]),
    TYPE: exports.minion,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 7,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true,
  };
  return {
    PARENT: [exports.miniboss],
    LABEL: "Division",
    COLOR: 4,
    SHAPE: 4,
    SIZE: 4, //damn how are you gonna make something like that
    VALUE: 500000,
    BODY: {
      FOV: 2.2,
      SPEED: base.SPEED * 2,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      REGEN:  base.REGEN  * 2,
      DAMAGE: base.DAMAGE * 5,
    },
    GUNS: [
      {
        /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [4, 6, -1.6, 8, 0, 0, 0],
        PROPERTIES: props,
      },
      {
        /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 12, -1.6, 8, 0, 0, 0],
        PROPERTIES: props,
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 60, 0],
        PROPERTIES: props,
      },
      {
        POSITION: [10, 12, -1.6, 8, 0, 60, 0],
        PROPERTIES: props,
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 120, 0],
        PROPERTIES: props,
      },
      {
        POSITION: [10, 12, -1.6, 8, 0, 120, 0],
        PROPERTIES: props,
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
          TYPE: exports.minion,
          STAT_CALCULATOR: gunCalcNames.drone,
          AUTOFIRE: true,
          MAX_CHILDREN: 1,
          SYNCS_SKILLS: true,
          WAIT_TO_CYCLE: true,
        },
       },
      {
        POSITION: [10, 12, -1.6, 8, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
          TYPE: exports.minion,
          STAT_CALCULATOR: gunCalcNames.drone,
          AUTOFIRE: true,
          MAX_CHILDREN: 1,
          SYNCS_SKILLS: true,
          WAIT_TO_CYCLE: true,
        },
       },
      {
        POSITION: [4, 6, -1.6, 8, 0, 240, 0],
        PROPERTIES: props,
      },
      {
        POSITION: [10, 12, -1.6, 8, 0, 240, 0],
        PROPERTIES: props,
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 300, 0],
        PROPERTIES: props,
      },
      {
        POSITION: [10, 12, -1.6, 8, 0, 300, 0],
        PROPERTIES: props,
      },
    ],
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [5, 10, 0, 30, 110, 0],
        TYPE: exports.trapTurret,
      },
      {
        POSITION: [20, 25, 0, 90, 110, 0],
        TYPE: exports.trapTurret,
      },
      {
        POSITION: [5, 10, 0, 150, 110, 0],
        TYPE: exports.trapTurret,
      },
      {
        POSITION: [20, 25, 0, 210, 110, 0],
        TYPE: exports.trapTurret,
      },
      {
        POSITION: [5, 10, 0, 270, 110, 0],
        TYPE: exports.trapTurret,
      },
      {
        POSITION: [20, 25, 0, 330, 110, 0],
        TYPE: exports.trapTurret,
      },
    ],
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [5, 10, 0, 30, 110, 0],
        TYPE: exports.trapTurret,
      },
      {
        POSITION: [20, 25, 0, 90, 110, 0],
        TYPE: exports.trapTurret,
      },
      {
        POSITION: [5, 10, 0, 150, 110, 0],
        TYPE: exports.trapTurret,
      },
      {
        POSITION: [20, 25, 0, 210, 110, 0],
        TYPE: exports.trapTurret,
      },
      {
        POSITION: [5, 10, 0, 270, 110, 0],
        TYPE: exports.trapTurret,
      },
      {
        POSITION: [20, 25, 0, 330, 110, 0],
        TYPE: exports.trapTurret,
      },
    ],
  };
})();//p.s. id like to go look at the elite sprayer
exports.bot = {
  AUTO_UPGRADE: "random",
  FACING_TYPE: "looseToTarget",
  BODY: {
    SIZE: 20,
    HEALTH: base.HEALTH * 300,
    DAMAGE: base.DAMAGE * 300,
    DENSITY: base.DENSITY * 30,
  },
  SKILL: skillSet({
    rld: 5,
    dam: 30,
    pen: 30,
    str: 5,
    spd: 30,
    atk: 30,
    hlt: 50,
    shi: 5,
    rgn: 5,
    mob: 5,
  }),
  SKILL_CAP: [30, 30, 30, 30, 30, 30, 70, 30, 30, 30],
  COLOR: 6,
  NAME: "ai_",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "fleeAtLowHealth",
  ],
  AI: { STRAFE: true },
};
exports.pages = {
  PARENT: [exports.genericTank],
  LABEL: "pages",
};
exports.page2 = {
  PARENT: [exports.genericTank],
  LABEL: "page 2",
};
exports.page3 = {
  PARENT: [exports.genericTank],
  LABEL: "page3",
};
exports.page4 = {
  PARENT: [exports.genericTank],
  LABEL: "page4",
};
exports.page5 = {
  PARENT: [exports.genericTank],
  LABEL: "page5",
};
exports.page6 = {
  PARENT: [exports.genericTank],
  LABEL: "page6",
};
exports.page7 = {
  PARENT: [exports.genericTank],
  LABEL: "page7",
};
exports.page8 = {
  PARENT: [exports.genericTank],
  LABEL: "page8",
};
exports.page9 = {
  PARENT: [exports.genericTank],
  LABEL: "page9",
};
exports.page10 = {
  PARENT: [exports.genericTank],
  LABEL: "page10",
};
exports.bossbranch = {
  PARENT: [exports.genericTank],
  LABEL: "bosses",
};
exports.bossbranch2 = {
  PARENT: [exports.genericTank],
  LABEL: "bosses2",
};
exports.bossbranch3 = {
  PARENT: [exports.genericTank],
  LABEL: "bosses3",
};
exports.bad = {
  PARENT: [exports.genericTank],
  LABEL: "malfunctioning tanks",
};
exports.infinitusbranch = {
  PARENT: [exports.genericTank],
  LABEL: "infinitus branch",
};
exports.kulziribranch = {
  PARENT: [exports.genericTank],
  LABEL: "kulziri branch",
};
exports.arena = {
  PARENT: [exports.genericTank],
  LABEL: "arena",
};
exports.guided = {
  PARENT: [exports.genericTank],
  SHAPE: 5,
  LABEL: "Guided",
};
exports.plaguestarterbranch = {
  PARENT: [exports.genericTank],
  LABEL: "plaguestarter branch",
};
exports.spikeshootbullet = {
  PARENT: [exports.bullet],
  LABEL: "spiky bullet",
  SHAPE: [
    [-0.57, 0.305],
    [-1.094, -0.003],
    [-0.57, -0.297],
    [-0.57, -0.825],
    [1.152, -0.014],
    [-0.57, 0.82],
  ],
};
exports.spikedrone = {
  PARENT: [exports.drone],
  LABEL: "spiky bullet",
  SHAPE: [
    [-0.57, 0.305],
    [-1.094, -0.003],
    [-0.57, -0.297],
    [-0.57, -0.825],
    [1.152, -0.014],
    [-0.57, 0.82],
  ],
};
exports.spikeshoot = {
  PARENT: [exports.genericTank],
  LABEL: "Spike Basic",
  GUNS: [
    {
      POSITION: [19, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.spikeshootbullet,
      },
    },
  ],
};
exports.spikedirector = {
  PARENT: [exports.genericTank],
  LABEL: "Spike Director",
  GUNS: [
    {
      POSITION: [19, 7, 2.3, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.over]),
        TYPE: exports.spikedrone,
        MAX_CHILDREN: 8,
        AUTOFIRE: true,
      },
    },
  ],
};
exports.spikePound = {
  PARENT: [exports.genericTank],
  LABEL: "Spike Pound",
  GUNS: [
    {
      POSITION: [19, 13, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.spikeshootbullet,
      },
    },
  ],
};
exports.spikeBiggerPound = {
  PARENT: [exports.genericTank],
  LABEL: "Spike Destroyer",
  GUNS: [
    {
      POSITION: [19, 16, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
        TYPE: exports.spikeshootbullet,
      },
    },
  ],
};
exports.infinitusminion = {
    PARENT: [exports.minion],
    LABEL: 'Minion', 
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    BODY: {
        FOV: 1,
        SPEED: 10,
        ACCELERATION: 10,
        HEALTH: 100,
        SHIELD: 5,
        DAMAGE: 5,
        RESIST: 5,
        PENETRATION: 5,
        DENSITY: 5,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: true,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'],
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  17,     9,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.op]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        }, }, 
    ],
};
exports.sidewind2 = {
                PARENT: [exports.genericTank],
                LABEL: 'Sidewinder',
                CONTROLLERS: ['onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
                DANGER: 7,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.7,
                    SPEED: base.SPEED * 0.8,
                    FOV: 20,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  10,    11,    -0.5,    14,      0,      0,      0,  ], 
                        }, {
                    POSITION: [  21,    12,    -1.1,     0,      0,      0,      0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind, g.op, g.op, g.op, g.op, g.lessreload, g.lessreload, g.lessreload, g.lessreload, g.lessspread]),
                            TYPE: exports.snake,
                            STAT_CALCULATOR: gunCalcNames.sustained,
                        }, },
                ],
            };
exports.rangerkill = {
                PARENT: [exports.genericTank],
                LABEL: 'Ranger',
                DANGER: 7,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.5,
                    SPEED: base.SPEED * 0.8,
                    FOV: base.FOV * 1.5,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  32,    8.5,     1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.op, g.op, g.op, g.op, g.halfspeed, g.halfspeed, g.lessreload, g.lessreload]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [   5,    8.5,    -1.6,    8,      0,      0,      0,   ], 
                    },
                ],
            };
exports.flatter = {
  PARENT: [exports.genericTank],
  LABEL: 'Flatter',
  SHAPE: 0,
  GUNS: [
    {
      POSITION:[18, 10, 1, 0, 0, 0, 0],
    },
    {
      POSITION:[7, 20, 1, 16, 0, 1, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, g.op, g.op, g.op, g.anni, g.halfspeed]),
        TYPE: exports.bullet,
        STAT_CLACULATOR: gunCalcNames.trap
      }
    }
  ]
};
exports.moddedinfinitustriplet = {
  PARENT: [exports.genericTank],
            DANGER: 6,
  CONTROLLERS: ['onlyAcceptInArc'],
            BODY: {
                FOV: 4,
            },
            LABEL: 'Infinitus Triplet',
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  18,    10,      1,      0,      5,      0,     0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.op, g.op, g.halfspeed]),
                        TYPE: exports.bullet,
                    }, }, { 
                POSITION: [  18,    10,      1,      0,     -5,      0,     0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.op, g.op, g.halfspeed]),
                        TYPE: exports.bullet,
                    }, }, { 
                      
                    POSITION: [  25,     8,      1,      0,      0,      0,      0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.op, g.op, g.lessreload, g.lessreload, g.halfspeed, g.halfspeed]),
                            TYPE: exports.bullet,
                        }, }, { 
                    POSITION: [  23,     8,      1,      0,      0,      0,     0.2, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.op, g.op, g.lessreload, g.lessreload, g.halfspeed, g.halfspeed]),
                            TYPE: exports.bullet,
                        }, }, { 
                    POSITION: [  21,     8,      1,      0,      0,      0,     0.4, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.op, g.op, g.lessreload, g.lessreload, g.halfspeed, g.halfspeed]),
                            TYPE: exports.bullet,
                        }, }, { 
                    POSITION: [  19,     8,      1,      0,      0,      0,     0.6, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.op, g.op, g.lessreload, g.lessreload, g.halfspeed, g.halfspeed]),
                            TYPE: exports.bullet,
                        }, },  { 
                    POSITION: [  17,     8,      1,      0,      0,      0,     0.8, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.op, g.op, g.lessreload, g.lessreload, g.halfspeed, g.halfspeed]),
                            TYPE: exports.bullet,
                        }, }, {
                POSITION: [  13,    10,      1.3,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.op, g.op, g.halfspeed]),
                        TYPE: exports.bullet,
                    }, },
            ],
};
exports.moddedinfinituscarrier = {
  PARENT: [exports.genericTank],
            
  CONTROLLERS: ['onlyAcceptInArc'],
                DANGER: 7,
                STAT_NAMES: statnames.swarm,
                FACING_TYPE: 'locksFacing',
                BODY: {
                    ACCELERATION: base.ACCEL * 0.75,
                    FOV: base.FOV * 1.3,
                },
      LABEL: 'Infinitus Carrier',
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   7,    7.5,    0.6,     7,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.op, g.op]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,
                        }, }, {
                    POSITION: [  16,     8,      1,      0,      3,     30,    0.667, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.op, g.op, g.lessreload, g.halfspeed, g.halfspeed]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [   7,    7.5,    0.6,     7,      2,      40,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.op, g.op]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,    
                        }, }, {
                    POSITION: [  16,     8,      1,      0,      -3,     -30,    0.667, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.op, g.op, g.lessreload, g.halfspeed, g.halfspeed]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [   7,    7.5,    0.6,     7,     -2,     -40,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.op, g.op]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,    
                        }, }, {
                    POSITION: [  19,     8,      1,      0,     -2,    -15,    0.333, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.op, g.op, g.lessreload, g.halfspeed, g.halfspeed]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  19,     8,      1,      0,      2,     15,    0.333, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.op, g.op, g.lessreload, g.halfspeed, g.halfspeed]),
                            TYPE: exports.bullet,
                        }, }, 
                ],
};
exports.moddedinfinitusbullet = {
  PARENT: [exports.missile],
  LABEL: 'missle',
         GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                          AUTOFIRE: true,
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.op, g.lessreload, g.lessreload]),
                            TYPE: exports.bullet,
                            LABEL: 'Front',
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,     -1,      90,     0,   ], 
                        PROPERTIES: {
                          AUTOFIRE: true,
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.op, g.lessreload, g.lessreload]),
                            TYPE: exports.bullet,
                            LABEL: 'Side',
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      1,     -90,     0,   ], 
                        PROPERTIES: {
                          AUTOFIRE: true,
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.op, g.lessreload, g.lessreload]),
                            TYPE: exports.bullet,
                            LABEL: 'Side',
                        }, }, {   
                    POSITION: [  13,     8,      1,      0,     -1,     135,    0.6,  ], 
                        PROPERTIES: {
                          AUTOFIRE: true,
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  13,     8,      1,      0,      1,     225,    0.6,  ], 
                        PROPERTIES: {
                          AUTOFIRE: true,
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     145,    0.1,  ], 
                        PROPERTIES: {
                          AUTOFIRE: true,
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     215,    0.1,  ], 
                        PROPERTIES: {
                          AUTOFIRE: true,
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, },
                ],
            };
exports.moddedinfinitusmissilelauncher = {
  PARENT: [exports.genericTank],
  LABEL: ' missile launcher',
  CONTROLLERS: ['onlyAcceptInArc'],
  GUNS: [
    {
      POSITION: [18, 3, 5.6, 5, 0, 0, 0]
    },
    {
      POSITION: [16, 4, 5.6, 5, 0, 0, 0]
    },
    {
      POSITION: [14, 3, 5.6, 5, 0, 0, 0]
    },
    {
      POSITION: [12, 2, 5.6, 5, 0, 0, 0]
    },
    {
      POSITION: [15, 16, 1.2, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.power, g.mach, g.arty, g.skim, g.anni, g.lessreload, g.op, g.op, g.op, g.anni, g.op, g.op, g.halfspeed, g.halfspeed, g.lessspread, g.lessspread, g.halfspeed, g.halfspeed, g.halfspeed, g.halfspeed, g.lessreload, g.lessreload, g.lessreload, g.lessreload, g.lessreload, g.lessreload]),
        TYPE: exports.moddedinfinitusbullet
      }
    }
  ]
};
exports.infinitusredistributorlayer = (() => {
  let a = 360 / 6;
  return {
  PARENT: [exports.genericTank],
  LABEL: 'Infinitus layer',
  COLOR: 9,
  SHAPE: 3,
  FACING_TYPE: 'autospin',
  TURRETS: [
    {
      POSITION: [15, 9, 0, a, 180, 0],
      TYPE: exports.sniperkill,
    },
     {
      POSITION: [15, 9, 0, a *3, 180, 0],
      TYPE: exports.sniperkill,
    },
     {
      POSITION: [15, 9, 0, a *5, 180, 0],
      TYPE: exports.sniperkill,
    },
    ]
  };
})();
exports.infinitusrangerlayer = (() => {
  let a = 360 / 10;
  return {
  PARENT: [exports.genericTank],
  LABEL: 'Infinitus layer',
  COLOR: 6,
  SHAPE: 5,
  FACING_TYPE: 'autospin',
  TURRETS: [
    {
      POSITION: [6, 9, 0, a, 180, 0],
      TYPE: exports.rangerkill
    },
     {
      POSITION: [6, 9, 0, a *3, 180, 0],
      TYPE: exports.rangerkill
    },
     {
      POSITION: [6, 9, 0, a *5, 180, 0],
      TYPE: exports.rangerkill
    },
     {
      POSITION: [6, 9, 0, a *7, 180, 0],
      TYPE: exports.rangerkill
    },
     {
      POSITION: [6, 9, 0, a *9, 180, 0],
      TYPE: exports.rangerkill
    },
    ]
 };
})();
exports.infinitusflatterlayer = (() => {
  let a = 360 / 14;
  return {
  PARENT: [exports.genericTank],
  LABEL: 'Infinitus layer',
  COLOR: 9,
  SHAPE: 7,
  FACING_TYPE: 'autospin',
  TURRETS: [
    {
      POSITION: [6, 9, 0, a, 180, 0],
      TYPE: exports.flatter
    },
     {
      POSITION: [6, 9, 0, a *3, 180, 0],
      TYPE: exports.flatter
    },
     {
      POSITION: [6, 9, 0, a *5, 180, 0],
      TYPE: exports.flatter
    },
     {
      POSITION: [6, 9, 0, a *7, 180, 0],
      TYPE: exports.flatter
    },
     {
      POSITION: [6, 9, 0, a *9, 180, 0],
      TYPE: exports.flatter
    },
     {
      POSITION: [6, 9, 0, a *11, 180, 0],
      TYPE: exports.flatter
    },
     {
      POSITION: [6, 9, 0, a *13, 180, 0],
      TYPE: exports.flatter
    }
    ]
};
})();
exports.infinitussidewind = (() => {
  let a = 360 / 18;
  return {
  PARENT: [exports.genericTank],
  LABEL: 'Infinitus Layer',
  COLOR: 6,
  SHAPE: 9,
  SIZE: 30,
           BODY: {FOV: 3,},
  CONTROLLERS: ['reversespin'],
                TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                    POSITION: [  7,     10,      0,     a,     190, 0], 
                        TYPE: exports.sidewind2,
                            }, {
                    POSITION: [  7,     10,      0,     a *3,    190, 0], 
                        TYPE: exports.sidewind2,
                            }, {
                    POSITION: [  7,     10,      0,     a *5,    190, 0], 
                        TYPE: exports.sidewind2,
                            }, {
                    POSITION: [  7,     10,      0,     a *7,    190, 0], 
                        TYPE: exports.sidewind2,
                            }, {
                    POSITION: [  7,     10,      0,     a *9,    190, 0], 
                        TYPE: exports.sidewind2,
                            }, {
                    POSITION: [  7,     10,      0,     a *11,    190, 0], 
                        TYPE: exports.sidewind2,
                            }, {
                    POSITION: [  7,     10,      0,     a *13,    190, 0], 
                        TYPE: exports.sidewind2,
                            }, {
                    POSITION: [  7,     10,      0,     a *15,    190, 0], 
                        TYPE: exports.sidewind2,
                            }, {
                    POSITION: [  7,     10,      0,     a *17,    190, 0], 
                        TYPE: exports.sidewind2,
                            },
                ],
  
};
})();
exports.infinitusfactorylayer = (() => {
  let a = 360 / 26;
  return {
  PARENT: [exports.genericTank],
  LABEL: 'Infinitus minion',
  SHAPE: 13,
  COLOR: 9,
  GUNS: [
    {
      POSITION: [12, 10, 0.6, 0, 0, a, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.factory]),
        TYPE: exports.infinitusminion,
        MAX_CHILDREN: 1,
        AUTOFIRE: true
      }
    },
     {
      POSITION: [12, 10, 0.6, 0, 0, a *3, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.factory]),
        TYPE: exports.infinitusminion,
        MAX_CHILDREN: 1,
        AUTOFIRE: true
      }
    },
     {
      POSITION: [12, 10, 0.6, 0, 0, a *5, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.factory]),
        TYPE: exports.infinitusminion,
        MAX_CHILDREN: 1,
        AUTOFIRE: true
      }
    },
     {
      POSITION: [12, 10, 0.6, 0, 0, a *7, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.factory]),
        TYPE: exports.infinitusminion,
        MAX_CHILDREN: 1,
        AUTOFIRE: true
      }
    },
     {
      POSITION: [12, 10, 0.6, 0, 0, a *9, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.factory]),
        TYPE: exports.infinitusminion,
        MAX_CHILDREN: 1,
        AUTOFIRE: true
      }
    },
     {
      POSITION: [12, 10, 0.6, 0, 0, a *11, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.factory]),
        TYPE: exports.infinitusminion,
        MAX_CHILDREN: 1,
        AUTOFIRE: true
      }
    },
     {
      POSITION: [12, 10, 0.6, 0, 0, a *13, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.factory]),
        TYPE: exports.infinitusminion,
        MAX_CHILDREN: 1,
        AUTOFIRE: true
      }
     },
    {
      POSITION: [12, 10, 0.6, 0, 0, a *15, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.factory]),
        TYPE: exports.infinitusminion,
        MAX_CHILDREN: 1,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [12, 10, 0.6, 0, 0, a *17, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.factory]),
        TYPE: exports.infinitusminion,
        MAX_CHILDREN: 1,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [12, 10, 0.6, 0, 0, a *19, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.factory]),
        TYPE: exports.infinitusminion,
        MAX_CHILDREN: 1,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [12, 10, 0.6, 0, 0, a *21, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.factory]),
        TYPE: exports.infinitusminion,
        MAX_CHILDREN: 1,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [12, 10, 0.6, 0, 0, a *23, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.factory]),
        TYPE: exports.infinitusminion,
        MAX_CHILDREN: 1,
        AUTOFIRE: true
      }
    },
    {
      POSITION: [12, 10, 0.6, 0, 0, a *25, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.factory]),
        TYPE: exports.infinitusminion,
        MAX_CHILDREN: 1,
        AUTOFIRE: true
      }
    },
    
  ]
};
})();
exports.infinitustripletlayer = (() => {
  let a = 360 / 30;
  return {
  PARENT: [exports.genericTank],
  LABEL: 'Infinitus layer',
  COLOR: 6,
  SHAPE: 15,
  SIZE: 30,
  FACING_TYPE: 'autospin',
  TURRETS: [
    {
      POSITION: [3.6, 10, 0,  a,180, 0],
      TYPE: exports.moddedinfinitustriplet,
    },
     {
      POSITION: [3.6, 10, 0,  a *3, 180, 0],
      TYPE: exports.moddedinfinitustriplet,
    },
     {
      POSITION: [3.6, 10, 0,  a *5, 180, 0],
      TYPE: exports.moddedinfinitustriplet,
    },
     {
      POSITION: [3.6, 10, 0,  a *7, 180, 0],
      TYPE: exports.moddedinfinitustriplet,
    },
     {
      POSITION: [3.6, 10, 0,  a *9, 180, 0],
      TYPE: exports.moddedinfinitustriplet
    },
    {
      POSITION: [3.6, 10, 0,  a *11, 180, 0],
      TYPE: exports.moddedinfinitustriplet
    },
    {
      POSITION: [3.6, 10, 0,  a *13, 180, 0],
      TYPE: exports.moddedinfinitustriplet,
    },
    {
      POSITION: [3.6, 10, 0,  a *15, 180, 0],
      TYPE: exports.moddedinfinitustriplet,
    },
    {
      POSITION: [3.6, 10, 0,  a *17, 180, 0],
      TYPE: exports.moddedinfinitustriplet,
    },
    {
      POSITION: [3.6, 10, 0,  a *19, 180, 0],
      TYPE: exports.moddedinfinitustriplet,
    },
    {
      POSITION: [3.6, 10, 0,  a *21, 180, 0],
      TYPE: exports.moddedinfinitustriplet,
    },
    {
      POSITION: [3.6, 10, 0,  a *23, 180, 0],
      TYPE: exports.moddedinfinitustriplet,
    },
    {
      POSITION: [3.6, 10, 0,  a *25, 180, 0],
      TYPE: exports.moddedinfinitustriplet,
    },
    {
      POSITION: [3.6, 10, 0,  a *27, 180, 0],
      TYPE: exports.moddedinfinitustriplet,
    },
    {
      POSITION: [3.6, 10, 0,  a *29, 180, 0],
      TYPE: exports.moddedinfinitustriplet,
    },
    ]
};
})();
exports.infinituscarrierlayer = (() => {
  let a = 360 / 34;
  return {
  PARENT: [exports.genericTank],
  LABEL: 'Infinitus layer',
  COLOR: 9,
  SHAPE: 17,
    SIZE: 50,
  FACING_TYPE: 'autospin',
  TURRETS: [
    {
      POSITION: [3, 10, 0,  a,180, 0],
      TYPE: exports.moddedinfinituscarrier
    },
     {
      POSITION: [3, 10, 0,   a *3,180, 0],
      TYPE: exports.moddedinfinituscarrier
    },
     {
      POSITION: [3, 10, 0,   a *5,180, 0],
      TYPE: exports.moddedinfinituscarrier
    },
     {
      POSITION: [3, 10, 0,   a *7,180, 0],
      TYPE: exports.moddedinfinituscarrier
    },
     {
      POSITION: [3, 10, 0,   a *9,180, 0],
      TYPE: exports.moddedinfinituscarrier
    },
    {
      POSITION: [3, 10, 0,   a *11,180, 0],
      TYPE: exports.moddedinfinituscarrier
    },
    {
      POSITION: [3, 10, 0,   a *13,180, 0],
      TYPE: exports.moddedinfinituscarrier
    },
    {
      POSITION: [3, 10, 0,   a *15,180, 0],
      TYPE: exports.moddedinfinituscarrier
    },
    {
      POSITION: [3, 10, 0,   a *17,180, 0],
      TYPE: exports.moddedinfinituscarrier
    },
    {
      POSITION: [3, 10, 0,   a *19,180, 0],
      TYPE: exports.moddedinfinituscarrier
    },
    {
      POSITION: [3, 10, 0,   a *21,180, 0],
      TYPE: exports.moddedinfinituscarrier
    },
    {
      POSITION: [3, 10, 0,   a *23, 180, 0],
      TYPE: exports.moddedinfinituscarrier
    },
    {
      POSITION: [3, 10, 0,   a *25, 180, 0],
      TYPE: exports.moddedinfinituscarrier
    },
    {
      POSITION: [3, 10, 0,   a *27, 180, 0],
      TYPE: exports.moddedinfinituscarrier
    },
    {
      POSITION: [3, 10, 0,   a *29, 180, 0],
      TYPE: exports.moddedinfinituscarrier
    },
    {
      POSITION: [3, 10, 0,   a *31, 180, 0],
      TYPE: exports.moddedinfinituscarrier
    },
    {
      POSITION: [3, 10, 0,   a *33, 180, 0],
      TYPE: exports.moddedinfinituscarrier
    },
    ]
};
})();
exports.infinitusmissilelayer = (() => {
  let a = 360 / 38;
  return {
  PARENT: [exports.genericTank],
  LABEL: 'Infinitus layer',
  COLOR: 6,
  SHAPE: 19,
  SIZE: 70,
  FACING_TYPE: 'autospin',
  TURRETS: [
    {
      POSITION: [3.7, 9.5, 0,  a,180, 0],
      TYPE: exports.moddedinfinitusmissilelauncher 
    },
     {
      POSITION: [3.7, 9.5, 0,   a *3,180, 0],
      TYPE: exports.moddedinfinitusmissilelauncher 
    },
     {
      POSITION: [3.7, 9.5, 0,   a *5,180, 0],
      TYPE: exports.moddedinfinitusmissilelauncher 
    },
     {
      POSITION: [3.7, 9.5, 0,   a *7,180, 0],
      TYPE: exports.moddedinfinitusmissilelauncher 
    },
     {
      POSITION: [3.7, 9.5, 0,   a *9,180, 0],
      TYPE: exports.moddedinfinitusmissilelauncher 
    },
    {
      POSITION: [3.7, 9.5, 0,   a *11,180, 0],
      TYPE: exports.moddedinfinitusmissilelauncher 
    },
     {
      POSITION: [3.7, 9.5, 0,   a *13,180, 0],
      TYPE: exports.moddedinfinitusmissilelauncher 
    },
    {
      POSITION: [3.7, 9.5, 0,   a *15,180, 0],
      TYPE: exports.moddedinfinitusmissilelauncher 
    },
     {
      POSITION: [3.7, 9.5, 0,   a *17,180, 0],
      TYPE: exports.moddedinfinitusmissilelauncher 
    },
    {
      POSITION: [3.7, 9.5, 0,   a *19,180, 0],
      TYPE: exports.moddedinfinitusmissilelauncher 
    },
    {
      POSITION: [3.7, 9.5, 0,   a *21,180, 0],
      TYPE: exports.moddedinfinitusmissilelauncher 
    },
    {
      POSITION: [3.7, 9.5, 0,   a *23,180, 0],
      TYPE: exports.moddedinfinitusmissilelauncher 
    },
    {
      POSITION: [3.7, 9.5, 0,   a *25,180, 0],
      TYPE: exports.moddedinfinitusmissilelauncher 
    },
    {
      POSITION: [3.7, 9.5, 0,   a *27,180, 0],
      TYPE: exports.moddedinfinitusmissilelauncher 
    },
    {
      POSITION: [3.7, 9.5, 0,   a *29,180, 0],
      TYPE: exports.moddedinfinitusmissilelauncher 
    },
    {
      POSITION: [3.7, 9.5, 0,   a *31,180, 0],
      TYPE: exports.moddedinfinitusmissilelauncher 
    },
    {
      POSITION: [3.7, 9.5, 0,   a *33,180, 0],
      TYPE: exports.moddedinfinitusmissilelauncher 
    },
    {
      POSITION: [3.7, 9.5, 0,   a *35,180, 0],
      TYPE: exports.moddedinfinitusmissilelauncher 
    },
    {
      POSITION: [3.7, 9.5, 0,   a *37,180, 0],
      TYPE: exports.moddedinfinitusmissilelauncher 
    },  
  ]
};
})();
exports.Infinitus = (() => {
  let a = 360 / 42;
  return {
    PARENT: [exports.miniboss],
    LABEL: 'Infinitus',
    NAME: 'Infinitus',
    SHAPE: 21,
    VALUE: 100000000000,
    SIZE: 500,
    COLOR: 9,
    BODY: bossStats({
      health: 15000,
      speed: 2,
      regen: 100,
      FOV: 8,
      COLOR: 12,
    }),
    TURRETS: [
    {
      POSITION: [3, 9.5, 0,  a,180, 0],
      TYPE: exports.construct
    },
     {
      POSITION: [3, 9.5, 0,   a *3,180, 0],
      TYPE: exports.construct
    },
     {
      POSITION: [3, 9.5, 0,   a *5,180, 0],
      TYPE: exports.construct
    },
     {
      POSITION: [3, 9.5, 0,   a *7,180, 0],
      TYPE: exports.construct
    },
     {
      POSITION: [3, 9.5, 0,   a *9,180, 0],
      TYPE: exports.construct
    },
    {
      POSITION: [3, 9.5, 0,   a *11,180, 0],
      TYPE: exports.construct
    },
     {
      POSITION: [3, 9.5, 0,   a *13,180, 0],
      TYPE: exports.construct
    },
    {
      POSITION: [3, 9.5, 0,   a *15,180, 0],
      TYPE: exports.construct
    },
     {
      POSITION: [3, 9.5, 0,   a *17,180, 0],
      TYPE: exports.construct
    },
    {
      POSITION: [3, 9.5, 0,   a *19,180, 0],
      TYPE: exports.construct
    },
    {
      POSITION: [3, 9.5, 0,   a *21,180, 0],
      TYPE: exports.construct
    },
    {
      POSITION: [3, 9.5, 0,   a *23,180, 0],
      TYPE: exports.construct
    },
    {
      POSITION: [3, 9.5, 0,   a *25,180, 0],
      TYPE: exports.construct
    },
    {
      POSITION: [3, 9.5, 0,   a *27,180, 0],
      TYPE: exports.construct
    },
    {
      POSITION: [3, 9.5, 0,   a *29,180, 0],
      TYPE: exports.construct
    },
    {
      POSITION: [3, 9.5, 0,   a *31,180, 0],
      TYPE: exports.construct
    },
    {
      POSITION: [3, 9.5, 0,   a *33,180, 0],
      TYPE: exports.construct
    },
    {
      POSITION: [3, 9.5, 0,   a *35,180, 0],
      TYPE: exports.construct
    },
    {
      POSITION: [3, 9.5, 0,   a *37,180, 0],
      TYPE: exports.construct
    },
    {
      POSITION: [3, 9.5, 0,   a *39,180, 0],
      TYPE: exports.construct
    },
    {
      POSITION: [3, 9.5, 0,   a *41,180, 0],
      TYPE: exports.construct
    },
   {
      POSITION: [16, 0, 0, 0, 0, 1],
      TYPE: exports.infinitusmissilelayer, 
    },
    {
      POSITION: [13, 0, 0, 0, 0, 1],
      TYPE: exports.infinituscarrierlayer, 
      
    },
    {
      POSITION: [9.5, 0, 0, 0, 0, 1],
      TYPE: exports.infinitustripletlayer, 
    },
    {
      POSITION: [7, 0, 0, 0, 0, 1],
      TYPE: exports.infinitusfactorylayer
    },
    {
      POSITION: [5, 0, 0, 0, 0, 1],
      TYPE: exports.infinitussidewind, 
    },
      {
      POSITION: [4, 0, 0, 0, 0, 1],
      TYPE: exports.infinitusflatterlayer, 
    },
      {
      POSITION: [3, 0, 0, 0, 0, 1],
      TYPE: exports.infinitusrangerlayer, 
    },
      {
      POSITION: [1.7, 0, 0, 0, 0, 1],
      TYPE: exports.infinitusredistributorlayer, 
    },
  ]
};
})();
exports.acfactory = {
  PARENT: [exports.genericTank],
  LABEL: "Arena Factory",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  SIZE: 100,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: 3,
  },
  MAX_CHILDREN: 12,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, 0, 0],
    },
    {
      POSITION: [2, 14, 1, 15.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.arenac]),
        TYPE: exports.arenaminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [4, 14, 1, 8, 0, 0, 0],
    },
  ],
};
exports.bigauto4gunplexianfinity = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 45, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 135, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 225, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 8, 1, 0, 0, 315, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.bigauto4gunplexianfinityomega = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 4, 0.6, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [25, 4, 0.6, 0, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 7, 1, 0, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [25, 4, 0.6, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 7, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [25, 4, 0.6, 0, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 7, 1, 0, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [25, 4, 0.6, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 7, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [25, 4, 0.6, 0, 0, 225, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 7, 1, 0, 0, 225, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 225, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [25, 4, 0.6, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 7, 1, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [25, 4, 0.6, 0, 0, 315, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 7, 1, 0, 0, 315, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 315, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.auto4gunplet = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 4, 1, 0, -3.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.slow
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 4, 1, 0, 3.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.slow
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12.5, 2, 1, 0, -4.5, 0, 0.166666666666666],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.slow
        ]),
        TYPE: exports.bullet
      }
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12.5, 2, 1, 0, -2.5, 0, 0.3333333333333334],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.slow
        ]),
        TYPE: exports.bullet
      }
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12.5, 2, 1, 0, 4.5, 0, 0.666666666666666],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.slow
        ]),
        TYPE: exports.bullet
      }
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12.5, 2, 1, 0, 2.5, 0, 0.8333333333333334],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.slow
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.auto4gunplex = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 5, 1, 0, -4.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.sniper,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 1.66667, 1, 0, -5.875, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 1.66667, 1, 0, -4.8125, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 1.66667, 1, 0, -3.75, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 5, 1, 0, 4.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.sniper,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 1.66667, 1, 0, 5.875, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 1.66667, 1, 0, 4.8125, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 1.66667, 1, 0, 3.75, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 5, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.sniper,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 1.66667, 1, 0, 1.325, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 1.66667, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 1.66667, 1, 0, -1.325, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.bigauto4gun = {
  PARENT: [exports.genericTank],
  LABEL: "Big Turret",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 5, 1, 0, -4.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 5, 1, 0, 4.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 5, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.bigbigauto4gun = {
  PARENT: [exports.genericTank],
  LABEL: "Terror Big Auto 4 Gun",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 5, 1, 0, -4.5, 0, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 5, 1, 0, 4.5, 0, 1.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 5, 1, 0, -4.5 / 2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 5, 1, 0, 4.5 / 2, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 5, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.bigauto4gunplet = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 5, 1, 0, -4.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.sniper,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 1.66667, 1, 0, -5.875, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 1.66667, 1, 0, -4.8125, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 1.66667, 1, 0, -3.75, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 5, 1, 0, 4.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.sniper,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 1.66667, 1, 0, 5.875, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 1.66667, 1, 0, 4.8125, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 1.66667, 1, 0, 3.75, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 5, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.sniper,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 1.66667, 1, 0, 1.325, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 1.66667, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 1.66667, 1, 0, -1.325, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 5, 1, 0, -4.5, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.sniper,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 1.66667, 1, 0, -5.875, 90, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 1.66667, 1, 0, -4.8125, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 1.66667, 1, 0, -3.75, 90, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 5, 1, 0, 4.5, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.sniper,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 1.66667, 1, 0, 5.875, 90, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 1.66667, 1, 0, 4.8125, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 1.66667, 1, 0, 3.75, 90, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 5, 1, 0, 0, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.sniper,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 1.66667, 1, 0, 1.325, 90, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 1.66667, 1, 0, 0, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 1.66667, 1, 0, -1.325, 90, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 5, 1, 0, -4.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.sniper,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 1.66667, 1, 0, -5.875, 180, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 1.66667, 1, 0, -4.8125, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 1.66667, 1, 0, -3.75, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 5, 1, 0, 4.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.sniper,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 1.66667, 1, 0, 5.875, 180, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 1.66667, 1, 0, 4.8125, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 1.66667, 1, 0, 3.75, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 5, 1, 0, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.sniper,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 1.66667, 1, 0, 1.325, 180, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 1.66667, 1, 0, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 1.66667, 1, 0, -1.325, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 5, 1, 0, -4.5, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.sniper,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 1.66667, 1, 0, -5.875, 270, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 1.66667, 1, 0, -4.8125, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 1.66667, 1, 0, -3.75, 270, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 5, 1, 0, 4.5, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.sniper,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 1.66667, 1, 0, 5.875, 270, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 1.66667, 1, 0, 4.8125, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 1.66667, 1, 0, 3.75, 270, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 5, 1, 0, 0, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.sniper,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 1.66667, 1, 0, 1.325, 270, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 1.66667, 1, 0, 0, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 1.66667, 1, 0, -1.325, 270, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
          g.sniper,
          g.pound,
          g.mach,
          g.destroy,
          g.mach,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.bigauto4gunplex = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 7, 1, 0, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 7, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 7, 1, 0, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 7, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 7, 1, 0, 0, 225, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 225, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 7, 1, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 7, 1, 0, 0, 315, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 315, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.bigauto4gunplexian = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 12, 1, 0, 0, 45, 0.125],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 12, 1, 0, 0, 90, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 12, 1, 0, 0, 135, 0.375],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 12, 1, 0, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 12, 1, 0, 0, 225, 0.625],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 12, 1, 0, 0, 270, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [20, 12, 1, 0, 0, 315, 0.875],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper,
          g.assass,
          g.assass,
          g.faster
        ]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.xspray = {
  PARENT: [exports.genericTank],
  LABEL: "X-Sprayer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 4, 0.6, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.eternal = {
  PARENT: [exports.miniboss],
  LABEL: "Eternal-Crasher",
  COLOR: 5,
  SHAPE: 3,
  SIZE: 192,
  VARIES_IN_SIZE: true,
  VALUE: 500000000,
  BODY: {
    FOV: 1.5,
    SPEED: base.SPEED * 0.5,
    HEALTH: base.HEALTH * 125,
    SHIELD: base.SHIELD * 125,
    REGEN: base.REGEN * 1.75,
    DAMAGE: base.DAMAGE * 125
  }
};
exports.eternal_crasher = {
  PARENT: [exports.eternal],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 16, 1, 6, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator"
      }
    },
    {
      POSITION: [3.5, 5.33334, 1, 6, -5.375, 180, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper
        ]),
        TYPE: exports.bullet,
        LABEL: "Devastator"
      }
    },
    {
      POSITION: [3.5, 5.33334, 1, 6, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper
        ]),
        TYPE: exports.bullet,
        LABEL: "Devastator"
      }
    },
    {
      POSITION: [3.5, 5.33334, 1, 6, 5.375, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper
        ]),
        TYPE: exports.bullet,
        LABEL: "Devastator"
      }
    },
    {
      POSITION: [5, 16, 1, 6, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator"
      }
    },
    {
      POSITION: [3.5, 5.33334, 1, 6, -5.375, 60, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper
        ]),
        TYPE: exports.bullet,
        LABEL: "Devastator"
      }
    },
    {
      POSITION: [3.5, 5.33334, 1, 6, 0, 60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper
        ]),
        TYPE: exports.bullet,
        LABEL: "Devastator"
      }
    },
    {
      POSITION: [3.5, 5.33334, 1, 6, 5.375, 60, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper
        ]),
        TYPE: exports.bullet,
        LABEL: "Devastator"
      }
    },
    {
      POSITION: [5, 16, 1, 6, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator"
      }
    },
    {
      POSITION: [3.5, 5.33334, 1, 6, -5.375, -60, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper
        ]),
        TYPE: exports.bullet,
        LABEL: "Devastator"
      }
    },
    {
      POSITION: [3.5, 5.33334, 1, 6, 0, -60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper
        ]),
        TYPE: exports.bullet,
        LABEL: "Devastator"
      }
    },
    {
      POSITION: [3.5, 5.33334, 1, 6, 5.375, -60, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.destroy,
          g.sniper
        ]),
        TYPE: exports.bullet,
        LABEL: "Devastator"
      }
    }
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [3.5, 7.75, 10.75, 180, 190, 0],
      TYPE: [exports.xspray, { COLOR: 5 }]
    },
    {
      POSITION: [3.5, 7.75, 10.75, 60, 190, 0],
      TYPE: [exports.xspray, { COLOR: 5 }]
    },
    {
      POSITION: [3.5, 7.75, 10.75, -60, 190, 0],
      TYPE: [exports.xspray, { COLOR: 5 }]
    },
    {
      POSITION: [3.5, 7.75, 7.875, 180, 190, 0],
      TYPE: [exports.xspray, { COLOR: 5 }]
    },
    {
      POSITION: [3.5, 7.75, 7.875, 60, 190, 0],
      TYPE: [exports.xspray, { COLOR: 5 }]
    },
    {
      POSITION: [3.5, 7.75, 7.875, -60, 190, 0],
      TYPE: [exports.xspray, { COLOR: 5 }]
    },
    {
      POSITION: [3.5, 7.75, -7.875, 180, 190, 0],
      TYPE: [exports.xspray, { COLOR: 5 }]
    },
    {
      POSITION: [3.5, 7.75, -7.875, 60, 190, 0],
      TYPE: [exports.xspray, { COLOR: 5 }]
    },
    {
      POSITION: [3.5, 7.75, -7.875, -60, 190, 0],
      TYPE: [exports.xspray, { COLOR: 5 }]
    },
    {
      POSITION: [3.5, 7.75, -10.75, 180, 190, 0],
      TYPE: [exports.xspray, { COLOR: 5 }]
    },
    {
      POSITION: [3.5, 7.75, -10.75, 60, 190, 0],
      TYPE: [exports.xspray, { COLOR: 5 }]
    },
    {
      POSITION: [3.5, 7.75, -10.75, -60, 190, 0],
      TYPE: [exports.xspray, { COLOR: 5 }]
    },
    {
      POSITION: [11, 0, 0, 180, 360, 0],
      TYPE: [exports.crasherSpawner]
    },
    {
      POSITION: [11, 0, 0, 60, 360, 0],
      TYPE: [exports.crasherSpawner]
    },
    {
      POSITION: [11, 0, 0, -60, 360, 0],
      TYPE: [exports.crasherSpawner]
    },
    {
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gunplet, { INDEPENDENT: true, COLOR: 5 }]
    },
    {
      POSITION: [5, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gunplex, { INDEPENDENT: true, COLOR: 5 }]
    },
    {
      POSITION: [2.25, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gunplexian, { INDEPENDENT: true, COLOR: 5 }]
    },
    {
      POSITION: [1.02272, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gunplexianfinity, { INDEPENDENT: true, COLOR: 5 }]
    },
    {
      POSITION: [0.46022, 0, 0, 0, 360, 1],
      TYPE: [
        exports.bigauto4gunplexianfinityomega,
        { INDEPENDENT: true, COLOR: 5 }
      ]
    },
    {
      POSITION: [2.4, -5.7025, 10, 0, 360, 1],
      TYPE: [exports.bigauto4gunplet, { INDEPENDENT: true, COLOR: 5 }]
    },
    {
      POSITION: [2.4, -5.7025, -10, 0, 360, 1],
      TYPE: [exports.bigauto4gunplet, { INDEPENDENT: true, COLOR: 5 }]
    },
    {
      POSITION: [2.4, 11.405, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gunplet, { INDEPENDENT: true, COLOR: 5 }]
    },
    {
      POSITION: [1.090909, -5.7025, 10, 0, 360, 1],
      TYPE: [exports.bigauto4gunplex, { INDEPENDENT: true, COLOR: 5 }]
    },
    {
      POSITION: [1.090909, -5.7025, -10, 0, 360, 1],
      TYPE: [exports.bigauto4gunplex, { INDEPENDENT: true, COLOR: 5 }]
    },
    {
      POSITION: [1.090909, 11.405, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gunplex, { INDEPENDENT: true, COLOR: 5 }]
    },
    {
      POSITION: [0.490909, -5.7025, 10, 0, 360, 1],
      TYPE: [exports.bigauto4gunplexian, { INDEPENDENT: true, COLOR: 5 }]
    },
    {
      POSITION: [0.490909, -5.7025, -10, 0, 360, 1],
      TYPE: [exports.bigauto4gunplexian, { INDEPENDENT: true, COLOR: 5 }]
    },
    {
      POSITION: [0.490909, 11.405, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gunplexian, { INDEPENDENT: true, COLOR: 5 }]
    },
    {
      POSITION: [0.22314, -5.7025, 10, 0, 360, 1],
      TYPE: [exports.bigauto4gunplexianfinity, { INDEPENDENT: true, COLOR: 5 }]
    },
    {
      POSITION: [0.22314, -5.7025, -10, 0, 360, 1],
      TYPE: [exports.bigauto4gunplexianfinity, { INDEPENDENT: true, COLOR: 5 }]
    },
    {
      POSITION: [0.22314, 11.405, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gunplexianfinity, { INDEPENDENT: true, COLOR: 5 }]
    },
    {
      POSITION: [0.10041, -5.7025, 10, 0, 360, 1],
      TYPE: [
        exports.bigauto4gunplexianfinityomega,
        { INDEPENDENT: true, COLOR: 5 }
      ]
    },
    {
      POSITION: [0.10041, -5.7025, -10, 0, 360, 1],
      TYPE: [
        exports.bigauto4gunplexianfinityomega,
        { INDEPENDENT: true, COLOR: 5 }
      ]
    },
    {
      POSITION: [0.10041, 11.405, 0, 0, 360, 1],
      TYPE: [
        exports.bigauto4gunplexianfinityomega,
        { INDEPENDENT: true, COLOR: 5 }
      ]
    }
  ]
};
exports.ek1 = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
    TYPE: exports.minion,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true
  };
  return {
    PARENT: [exports.miniboss],
    LABEL: "EK-1",
    COLOR: 6,
    SIZE: 40,
    VALUE: 500000,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 0.1,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3
    },
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [8, 10, 0, 0, 190, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [8, 10, 0, 60, 190, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [8, 10, 0, 120, 190, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [8, 10, 0, 180, 190, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [8, 10, 0, 240, 190, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [8, 10, 0, 300, 190, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [11, 0, 0, 180, 360, 1],
        TYPE: [exports.bigauto4gun, { INDEPENDENT: false, COLOR: 6 }]
      },
      {
        POSITION: [24, 0, 0, 0, 0, 0],
        TYPE: exports.smasherBody
      }
    ]
  };
})();
exports.a = {
  PARENT: [exports.genericTank],
  LABEL: "Struamliiner",
  DANGER: 7,
  BODY: {
    FOV: 1.3
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [23, 8, 1, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 8, 1, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [19, 8, 1, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [17, 8, 1, 0, 0, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 8, 1, 0, 0, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [13, 8, 1, 0, 0, 0, 0.12],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [11, 8, 1, 0, 0, 0, 0.14],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [9, 8, 1, 0, 0, 0, 0.16],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [7, 8, 1, 0, 0, 0, 0.18],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5, 8, 1, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [3, 8, 1, 0, 0, 0, 0.22],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [1, 8, 1, 0, 0, 0, 0.24],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.antitankturret = {
  PARENT: [exports.genericTank],
  LABEL: "Anti Nailgun",
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.1,
    SPEED: base.SPEED * 0.9
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 2, 1, 0, -2.5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
          g.op,
          g.op,
          g.norecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16, 2, 1, 0, 2.5, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
          g.op,
          g.op,
          g.norecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [17.111, 2, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
          g.op,
          g.op,
          g.norecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
    }
  ]
};
exports.antitank = {
  PARENT: [exports.genericTank],
  LABEL: "Anti-Tank Machine Gun",
  NAME: "",
  SIZE: 20,
  SKILL: [1e99, 1e99, 1e99, 1e99, 1e99, 1e99, 1e99, 1e99, 1e99, 1e99],
  SKILL_CAP: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
  SKILL: skillSet({
    rld: 1e99,
    dam: 1e99,
    pen: 1e99,
    str: 1e99,
    spd: 1e99,
    atk: 1e99,
    hlt: 1e99,
    shi: 1e99,
    rgn: 1e99,
    mob: 1e99
  }),
  ACCEPTS_SCORE: true,
  DRAW_HEALTH: false,
  BUFF_VS_FOOD: true,
  DAMAGE_EFFECTS: true,
  CAN_GO_OUTSIDE_ROOM: true,
  IS_NERFED: true,
  IS_BUFFED: true,
  BODY: {
    SHIELD: 1e99,
    REGEN: 1e99,
    RESIST: 1e99,
    HEALTH: 1e99,
    DAMAGE: 1e99,
    PENETRATION: 1e99,
    DENSINY: 1e99,
    RANGE: 5090,
    FOV: 2,
    SPEED: 5,
    INVULNERABLE: true
  },
  TURRETS: [
    { POSITION: [26, 0, 0, 0, 360, 0], TYPE: exports.dominationBody },
    {
      POSITION: [20, 0, 25, 0, 0, 1],
      TYPE: [exports.antitankturret, { INDEPENDENT: false }]
    },
    {
      POSITION: [20, 0, -25, 0, 0, 1],
      TYPE: [exports.antitankturret, { INDEPENDENT: false }]
    }
  ],
  CONTROLLERS: ["nearestDifferentMaster"],
  GUNS: [
    {
      /*** LENGTH WIDTH ASPECT X Y ANGLE DELAY */ POSITION: [
        15,
        2.5,
        1,
        0,
        2,
        0,
        0.2
      ],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.op,
          g.halfrecoil,
          g.halfrecoil,
          g.halfrecoil,
          g.halfrecoil,
          g.halfrecoil,
          g.halfrecoil,
          g.halfrecoil,
          g.halfrecoil,
          g.halfrecoil,
          g.morereload,
          g.morereload,
          g.fast,
          g.fast,
          g.fast,
          g.morereload,
          g.morereload,
          g.norecoil,
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [15, 2.5, 1, 0, -2, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.op,
          g.halfrecoil,
          g.halfrecoil,
          g.halfrecoil,
          g.halfrecoil,
          g.halfrecoil,
          g.halfrecoil,
          g.halfrecoil,
          g.halfrecoil,
          g.fast,
          g.fast,
          g.fast,
          g.norecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [1, 2.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.op,
          g.halfrecoil,
          g.halfrecoil,
          g.halfrecoil,
          g.halfrecoil,
          g.halfrecoil,
          g.halfrecoil,
          g.halfrecoil,
          g.fast,
          g.fast,
          g.fast,
          g.norecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [16.5, 3.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.op,
          g.halfrecoil,
          g.halfrecoil,
          g.halfrecoil,
          g.halfrecoil,
          g.halfrecoil,
          g.halfrecoil,
          g.halfrecoil,
          g.halfrecoil,
          g.fast,
          g.fast,
          g.fast,
          g.norecoil
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [24, 7, -1.3, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.nothing
      }
    },
    {
      POSITION: [24, 7, -1.3, 0, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.nothing
      }
    },
    { POSITION: [5.5, 6.5, -1.8, 6.5, 0, 0, 0] }
  ]
};
//DO NOT EDIT MY TANKS IN ANY WAY
exports.battleshipmk100 = {
PARENT: [exports.genericTank],
LABEL: 'Kulziri 41',
SHAPE: [[5,-3.7],[10,-3],[30,0],[10,3],[5,3.7],[0,4],[-5,4],[-17,3],[-19,0],[-17,-3],[-5,-4],[0,-4]],
DANGER: 10,
SIZE: 25,
HEALTH: 5000,
  DAMAGE: 50,
  REGEN: 5,
  BODY: {
    HEALTH: 5000,
    DAMAGE: 50,
    REGEN: 5,
    FOV: 2,
  },
  TURRETS: [
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    270,     0,      360,     360, 1],
      TYPE: exports.kulzirigun
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    270,     -0,      360,     360, 1],
      TYPE: exports.kulzirigun
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    260,     1,      360,     360, 1],
      TYPE: exports.kulzirigun
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    260,     -1,      360,     360, 1],
      TYPE: exports.kulzirigun
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    250,     2,      360,     360, 1],
      TYPE: exports.kulzirigun
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    250,     -2,      360,     360, 1],
      TYPE: exports.kulzirigun
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    240,     4,      360,     360, 1],
      TYPE: exports.kulzirigun
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    240,     -4,      360,     360, 1],
      TYPE: exports.kulzirigun
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    230,     5,      360,     360, 1],
      TYPE: exports.kulzirigun
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    230,     -5,      360,     360, 1],
      TYPE: exports.kulzirigun
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    220,     7,      360,     360, 1],
      TYPE: exports.kulzirigun
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    220,     -7,      360,     360, 1],
      TYPE: exports.kulzirigun
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    210,     9,      360,     360, 1],
      TYPE: exports.kulzirigun
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    210,     -9,      360,     360, 1],
      TYPE: exports.kulzirigun
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    200,     10,      360,     360, 1],
      TYPE: exports.kulzirigun
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    200,     -10,      360,     360, 1],
      TYPE: exports.kulzirigun
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    190,     11,      360,     360, 1],
      TYPE: exports.kulzirigun
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    190,     -11,      360,     360, 1],
      TYPE: exports.kulzirigun
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    180,     12,      360,     360, 1],
      TYPE: exports.kulzirigun
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    180,     -12,      360,     360, 1],
      TYPE: exports.kulzirigun
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    170,     14,      360,     360, 1],
      TYPE: exports.kulzirigun
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    170,     -14,      360,     360, 1],
      TYPE: exports.kulzirigun
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    160,     16,      360,     360, 1],
      TYPE: exports.kulzirigun
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    160,     -16,      360,     360, 1],
      TYPE: exports.kulzirigun
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    150,     17,      360,     360, 1],
      TYPE: exports.kulzirigun
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    150,     -17,      360,     360, 1],
      TYPE: exports.kulzirigun
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    140,     18,      360,     360, 1],
      TYPE: exports.kulzirigun
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    140,     -18,      360,     360, 1],
      TYPE: exports.kulzirigun
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    130,     20,      360,     360, 1],
      TYPE: exports.kulzirigun
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    130,     -20,      360,     360, 1],
      TYPE: exports.kulzirigun
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    120,     22,      360,     360, 1],
      TYPE: exports.kulzirigun
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    120,     -22,      360,     360, 1],
      TYPE: exports.kulzirigun
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [20,    100,     0,      360,     360, 1],
      TYPE: exports.kulziricannon
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [20,    75,     15,      360,     360, 1],
      TYPE: exports.kulziricannon
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [20,    75,     -15,      360,     360, 1],
      TYPE: exports.kulziricannon
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [20,    50,     25,      360,     360, 1],
      TYPE: exports.kulziricannon
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [20,    50,     -25,      360,     360, 1],
      TYPE: exports.kulziricannon
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [17,    140,     -21,      180,     360, 1],
      TYPE: exports.kulziricannonR
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [17,    140,     21,      180,     360, 1],
      TYPE: exports.kulziricannonL
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [17,    120,     -23,      180,     360, 1],
      TYPE: exports.kulziricannonR
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [17,    120,     23,      180,     360, 1],
      TYPE: exports.kulziricannonL
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [17,    100,     -25,      180,     360, 1],
      TYPE: exports.kulziricannonR
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [17,    100,     25,      180,     360, 1],
      TYPE: exports.kulziricannonL
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [30,    25,     50,      90,     360, 1],
      TYPE: exports.kulzirifactory
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [30,    25,     -50,      270,     360, 1],
      TYPE: exports.kulzirifactory
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [30,    0,     0,      0,     360, 1],
      TYPE: exports.kulzirirailgun
    },
    
  ]
};
exports.bulkzark = {
PARENT: [exports.genericTank],
LABEL: 'Bulkzark',
SHAPE: [[4.406,2.328],[2.83,4.134],[0.597,4.997],[-1.786,4.71],[-3.75,3.34],[-4.866,1.21],[-4.87,-1.19],[-3.76,-3.33],[-1.796,-4.705],[0.58,-4.99],[2.815,-4.147],[4.4,-2.34],[2.947,-1.896],[1.45,-3.18],[-0.51,-3.46],[-2.3,-2.64],[-3.36,-0.977],[-0.934,-0.694],[0.392,-1.13],[1.212,0],[0.392,1.126],[-0.932,0.693],[-3.36,0.993],[-2.29,2.647],[-0.493,3.455],[1.47,3.173],[2.95,1.88]],
DANGER: 10,
SIZE: 25,
HEALTH: 5000,
  DAMAGE: 50,
  REGEN: 5,
  BODY: {
    SHIELD: 1e99,
    REGEN: 1e99,
    RESIST: 99,
    HEALTH: 10000,
    DAMAGE: 20,
    PENETRATION: 100,
    DENSINY: 100,
    FOV: 2,
    SPEED: 1,
  },
  MAX_CHILDREN: 4,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 16, 1, 46, 0, 40, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy, g.anni, g.norecoil]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 16, 1, 46, 0, 320, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy, g.anni, g.norecoil]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 16, 1, 46, 0, 70, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy, g.anni, g.norecoil]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 16, 1, 46, 0, 290, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy, g.anni, g.norecoil]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 16, 1, 46, 0, 97, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy, g.anni, g.norecoil]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 16, 1, 46, 0, 263, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy, g.anni, g.norecoil]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [3, 23, 1, 5, -22, 280, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy, g.anni, g.over]),
        TYPE: exports.drone,
        LABEL: "Devastator",
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [3, 23, 1, 5, 22, 80, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy, g.anni, g.over]),
        TYPE: exports.drone,
        LABEL: "Devastator",
      },
    },
    ],
   TURRETS: [
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    0,     0,      360,     360, 1],
      TYPE: exports.bulkzarkpounddestroyannigun
    },
     {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    43,     0,      320,     360, 1],
      TYPE: exports.machinegungunner
    },
     {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    43,     0,      40,     360, 1],
      TYPE: exports.machinegungunner
    },
     {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    43,     0,      290,     360, 1],
      TYPE: exports.machinedestroyer
    },
     {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    43,     0,      70,     360, 1],
      TYPE: exports.machinedestroyer
    },
     {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    43,     0,      263,     360, 1],
      TYPE: exports.bulkzarkrailgun
    },
     {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    43,     0,      97,     360, 1],
      TYPE: exports.bulkzarkrailgun
    },
     {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    43,     0,      240,     360, 1],
      TYPE: exports.shotgunanni
    },
     {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    43,     0,      120,     360, 1],
      TYPE: exports.shotgunanni
    },
     {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    -40,     0,      360,     360, 1],
      TYPE: exports.bulkzarkconstruct
    },
     {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    -15,     0,      360,     360, 1],
      TYPE: exports.bulkzarkconstruct
    },
    ], //could you tell us why you're in our server and how?
  };
exports.citadel = {
PARENT: [exports.genericTank],
LABEL: 'Citadel', 
SHAPE: [[-20,-20],[20,-20],[20,20],[-20,20],[-20,0],[-15,0],[-15,15],[15,15],[15,-15],[-15,-15],[-15,0],[-20,0]],
HEALTH: 5000,
  DAMAGE: 50,
  REGEN: 5,
  SIZE: 50,
  BODY: {
    SHIELD: 1e99,
    REGEN: 1e99,
    RESIST: 99,
    HEALTH: 10000,
    DAMAGE: 20,
    PENETRATION: 100,
    DENSINY: 100,
    FOV: 2,
    SPEED: 1,
  },
  TURRETS: [
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    -150,     150,      180,     360, 1],
      TYPE: exports.bulkzarkpounddestroyannigun
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    -150,     0,      180,     360, 1],
      TYPE: exports.kulziricannon
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    15,     0,      90,     360, 1],
      TYPE: exports.bulkzarkconstruct
    },
    {      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10,    -15,     0,      90,     360, 1],
      TYPE: exports.bulkzarkconstruct
    },
    ],
};

//DO NOT EDIT ANY OF MY TANKS IN ANY WAY


exports.testbed.UPGRADES_TIER_2 = [
  exports.basic,
  exports.notverybasic,
  exports.arena,
  exports.pages,
  exports.dev,
  exports.bossbranch,
  exports.bad,
  exports.antitank,
];

exports.kulziribranch.UPGRADES_TIER_1 = [
  exports.ship12,
  exports.battleshipmk100,
  exports.kulzirigun,
  exports.kulziricannon,
  exports.kulziricannonR,
  exports.kulziricannonL,
  exports.kulzirifactory,
  exports.kulzirirailgun,
];

exports.pages.UPGRADES_TIER_2 = [
  exports.page2,
  exports.page3,
  exports.page4,
  exports.page5,
  exports.page6,
  exports.page7,
  exports.page8,
  exports.page9,
  exports.page10,
];

exports.infinitusbranch.UPGRADES_TIER_2 = [
  exports.Infinitus,
  exports.infinitusredistributorlayer,
  exports.infinitusrangerlayer,
  exports.infinitusflatterlayer,
  exports.infinitussidewind,
  exports.infinitusfactorylayer,
  exports.infinitustripletlayer,
  exports.infinituscarrierlayer,
  exports.infinitusmissilelayer,
];

exports.bad.UPGRADES_TIER_2 = [
  exports.bushyata,
  exports.abezthibou,
  exports.alphathirteen,
];

exports.arena.UPGRADES_TIER_2 = [
  exports.arenacloser,
  exports.arenabooster,
  exports.arenaanni,
  exports.arenaocto,
  exports.arenaram,
  exports.acfactory,
];

exports.bossbranch.UPGRADES_TIER_2 = [
  exports.palisade, 
  exports.elite_sprayer,
  exports.elite_destroyer,
  exports.elite_gunner,
  exports.elite_drone,
  exports.elite_sprayernew,
  exports.division,
  exports.eligos,
  exports.elite_battleship,
  exports.elite_legion,
  exports.portal,
  exports.ek1,
  exports.eternal_crasher,
  exports.bossbranch2,
];

exports.bossbranch2.UPGRADES_TIER_2 = [
  exports.eternal,
  exports.infinitusbranch,
  exports.kulziribranch,
  exports.plaguestarterbranch,
  exports.bossbranch3,
];

exports.plaguestarterbranch.UPGRADES_TIER_3 = [
  exports.disease,
  exports.infection,
  exports.plaguestarter,
]; 

exports.bossbranch3.UPGRADES_TIER_2 = [
];

exports.spikePound.UPGRADES_TIER_2 = [
  exports.spikeBiggerPound,
  exports.spikedirector,
];

exports.page2.UPGRADES_TIER_2 = [
  exports.pages,
  exports.healer,
  exports.railgun,
  exports.moddedinfinitustriplet,
  exports.moddedinfinituscarrier,
  exports.moddedinfinitusmissilelauncher,
  exports.carnivore,
  exports.blowtorch,
  exports.spitling,
  exports.spewer,
  exports.machinegungunner,
  exports.programmer,
  exports.page3,
];

exports.page3.UPGRADES_TIER_3 = [
  exports.pages,
  exports.pulse,
  exports.sad,
  exports.sus,
  exports.fogger,
  exports.hurricane,
  exports.Tetracontagon,
  exports.underlord,
  exports.collapser, 
  exports.strider,
  exports.e,
  exports.page4,
];

exports.page4.UPGRADES_TIER_3 = [
  exports.pages,
  exports.hover,
  exports.janitor,
  exports.weatherballoon,
  exports.pyromaniac,
  exports.repellant,
  exports.driller,
  exports.pentapenta,
  exports.gas,
  exports.headlesshorseman,
  exports.page5,
];

exports.page5.UPGRADES_TIER_3 = [
  exports.pages,
  exports.gammaray,
  exports.snipingshotgun,
  exports.grenadeshotgun,
  exports.telescope,
  exports.overbliterator,
  exports.page6,
];

exports.page6.UPGRADES_TIER_3 = [
  exports.pages,
  exports.page7,
];

exports.page7.UPGRADES_TIER_3 = [
  exports.pages,
  exports.page8,
];

exports.page8.UPGRADES_TIER_3 = [
  exports.pages,
  exports.page9,
];

exports.page9.UPGRADES_TIER_3 = [
  exports.pages,
  exports.page10,
];

exports.page10.UPGRADES_TIER_3 = [
  exports.pages,
  exports.bulkzarkconstruct,
  exports.bulkzarkpounddestroyannigun,
  exports.bulkzark,
  exports.citadel,
  exports.machinedestroyer,
];