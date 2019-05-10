$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/shoot.feature");
formatter.feature({
  "line": 1,
  "name": "shoot",
  "description": "As a player\r\nI want to be able to choose a location to shoot\r\nso that I have control of the game and can use a strategy to shooting.",
  "id": "shoot",
  "keyword": "Feature"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "a player with name Mark and grid of size 10",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "a ship of size 3 called Submarine at 0 0 in N direction",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "a ship of size 5 called BigShip at 2 4 in N direction",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Mark",
      "offset": 19
    },
    {
      "val": "10",
      "offset": 41
    }
  ],
  "location": "StepDefATM.create_grid_and_player(String,int)"
});
formatter.result({
  "duration": 5270189,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    },
    {
      "val": "Submarine",
      "offset": 24
    },
    {
      "val": "0",
      "offset": 37
    },
    {
      "val": "0",
      "offset": 39
    },
    {
      "val": "N",
      "offset": 44
    }
  ],
  "location": "StepDefATM.place_ship(int,String,int,int,String)"
});
formatter.result({
  "duration": 301484,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 15
    },
    {
      "val": "BigShip",
      "offset": 24
    },
    {
      "val": "2",
      "offset": 35
    },
    {
      "val": "4",
      "offset": 37
    },
    {
      "val": "N",
      "offset": 42
    }
  ],
  "location": "StepDefATM.place_ship(int,String,int,int,String)"
});
formatter.result({
  "duration": 274970,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Shoot and hit",
  "description": "",
  "id": "shoot;shoot-and-hit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "a shot taken at point 0 0",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "message is Not over",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 22
    },
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "StepDefATM.shoot(int,int)"
});
formatter.result({
  "duration": 251450,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not over",
      "offset": 11
    }
  ],
  "location": "StepDefATM.shoot_response(String)"
});
formatter.result({
  "duration": 3728561,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "a player with name Mark and grid of size 10",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "a ship of size 3 called Submarine at 0 0 in N direction",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "a ship of size 5 called BigShip at 2 4 in N direction",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Mark",
      "offset": 19
    },
    {
      "val": "10",
      "offset": 41
    }
  ],
  "location": "StepDefATM.create_grid_and_player(String,int)"
});
formatter.result({
  "duration": 422932,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    },
    {
      "val": "Submarine",
      "offset": 24
    },
    {
      "val": "0",
      "offset": 37
    },
    {
      "val": "0",
      "offset": 39
    },
    {
      "val": "N",
      "offset": 44
    }
  ],
  "location": "StepDefATM.place_ship(int,String,int,int,String)"
});
formatter.result({
  "duration": 258292,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 15
    },
    {
      "val": "BigShip",
      "offset": 24
    },
    {
      "val": "2",
      "offset": 35
    },
    {
      "val": "4",
      "offset": 37
    },
    {
      "val": "N",
      "offset": 42
    }
  ],
  "location": "StepDefATM.place_ship(int,String,int,int,String)"
});
formatter.result({
  "duration": 260003,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Shoot and miss",
  "description": "",
  "id": "shoot;shoot-and-miss",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "a shot taken at point 5 5",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "message is Not over",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 22
    },
    {
      "val": "5",
      "offset": 24
    }
  ],
  "location": "StepDefATM.shoot(int,int)"
});
formatter.result({
  "duration": 8331210,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not over",
      "offset": 11
    }
  ],
  "location": "StepDefATM.shoot_response(String)"
});
formatter.result({
  "duration": 82106,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "a player with name Mark and grid of size 10",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "a ship of size 3 called Submarine at 0 0 in N direction",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "a ship of size 5 called BigShip at 2 4 in N direction",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Mark",
      "offset": 19
    },
    {
      "val": "10",
      "offset": 41
    }
  ],
  "location": "StepDefATM.create_grid_and_player(String,int)"
});
formatter.result({
  "duration": 210824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    },
    {
      "val": "Submarine",
      "offset": 24
    },
    {
      "val": "0",
      "offset": 37
    },
    {
      "val": "0",
      "offset": 39
    },
    {
      "val": "N",
      "offset": 44
    }
  ],
  "location": "StepDefATM.place_ship(int,String,int,int,String)"
});
formatter.result({
  "duration": 292503,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 15
    },
    {
      "val": "BigShip",
      "offset": 24
    },
    {
      "val": "2",
      "offset": 35
    },
    {
      "val": "4",
      "offset": 37
    },
    {
      "val": "N",
      "offset": 42
    }
  ],
  "location": "StepDefATM.place_ship(int,String,int,int,String)"
});
formatter.result({
  "duration": 357931,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Shoot same point",
  "description": "",
  "id": "shoot;shoot-same-point",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "a shot taken at point 5 5",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "a shot taken at point 5 5",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "message is Already hit",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 22
    },
    {
      "val": "5",
      "offset": 24
    }
  ],
  "location": "StepDefATM.shoot(int,int)"
});
formatter.result({
  "duration": 230923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 22
    },
    {
      "val": "5",
      "offset": 24
    }
  ],
  "location": "StepDefATM.shoot(int,int)"
});
formatter.result({
  "duration": 282668,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Already hit",
      "offset": 11
    }
  ],
  "location": "StepDefATM.shoot_response(String)"
});
formatter.result({
  "duration": 104771,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "a player with name Mark and grid of size 10",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "a ship of size 3 called Submarine at 0 0 in N direction",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "a ship of size 5 called BigShip at 2 4 in N direction",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Mark",
      "offset": 19
    },
    {
      "val": "10",
      "offset": 41
    }
  ],
  "location": "StepDefATM.create_grid_and_player(String,int)"
});
formatter.result({
  "duration": 208259,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    },
    {
      "val": "Submarine",
      "offset": 24
    },
    {
      "val": "0",
      "offset": 37
    },
    {
      "val": "0",
      "offset": 39
    },
    {
      "val": "N",
      "offset": 44
    }
  ],
  "location": "StepDefATM.place_ship(int,String,int,int,String)"
});
formatter.result({
  "duration": 270694,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 15
    },
    {
      "val": "BigShip",
      "offset": 24
    },
    {
      "val": "2",
      "offset": 35
    },
    {
      "val": "4",
      "offset": 37
    },
    {
      "val": "N",
      "offset": 42
    }
  ],
  "location": "StepDefATM.place_ship(int,String,int,int,String)"
});
formatter.result({
  "duration": 315595,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Shoot and win",
  "description": "",
  "id": "shoot;shoot-and-win",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "a shot taken at point 0 0",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "a shot taken at point 0 1",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "a shot taken at point 0 2",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "a shot taken at point 2 4",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "a shot taken at point 2 5",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "a shot taken at point 2 6",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "a shot taken at point 2 7",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "a shot taken at point 2 8",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "message is Game over",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 22
    },
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "StepDefATM.shoot(int,int)"
});
formatter.result({
  "duration": 190726,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 22
    },
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "StepDefATM.shoot(int,int)"
});
formatter.result({
  "duration": 259575,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 22
    },
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "StepDefATM.shoot(int,int)"
});
formatter.result({
  "duration": 347241,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 22
    },
    {
      "val": "4",
      "offset": 24
    }
  ],
  "location": "StepDefATM.shoot(int,int)"
});
formatter.result({
  "duration": 237766,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 22
    },
    {
      "val": "5",
      "offset": 24
    }
  ],
  "location": "StepDefATM.shoot(int,int)"
});
formatter.result({
  "duration": 173192,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 22
    },
    {
      "val": "6",
      "offset": 24
    }
  ],
  "location": "StepDefATM.shoot(int,int)"
});
formatter.result({
  "duration": 193291,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 22
    },
    {
      "val": "7",
      "offset": 24
    }
  ],
  "location": "StepDefATM.shoot(int,int)"
});
formatter.result({
  "duration": 192864,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 22
    },
    {
      "val": "8",
      "offset": 24
    }
  ],
  "location": "StepDefATM.shoot(int,int)"
});
formatter.result({
  "duration": 254872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Game over",
      "offset": 11
    }
  ],
  "location": "StepDefATM.shoot_response(String)"
});
formatter.result({
  "duration": 93652,
  "status": "passed"
});
});