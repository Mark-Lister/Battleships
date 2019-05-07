$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/shoot.feature");
formatter.feature({
  "line": 1,
  "name": "shoot",
  "description": "As a player\r\nI want to be able to choose a location to shoot\r\nso that I have control of the game and can use a strategy to shooting.",
  "id": "shoot",
  "keyword": "Feature"
});
formatter.before({
  "duration": 112468,
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
  "duration": 10501468,
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
  "duration": 400267,
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
  "duration": 606388,
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
  "duration": 231779,
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
  "duration": 3704187,
  "status": "passed"
});
formatter.before({
  "duration": 64145,
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
  "duration": 192008,
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
  "duration": 581158,
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
  "duration": 292931,
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
  "duration": 354511,
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
  "duration": 1541202,
  "status": "passed"
});
formatter.before({
  "duration": 64145,
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
  "duration": 158225,
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
  "duration": 387011,
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
  "duration": 402406,
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
  "duration": 215956,
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
  "duration": 271549,
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
  "duration": 121021,
  "status": "passed"
});
formatter.before({
  "duration": 67138,
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
  "duration": 235200,
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
  "duration": 233917,
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
  "duration": 437472,
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
  "duration": 145396,
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
  "duration": 331846,
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
  "duration": 453294,
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
  "duration": 175759,
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
  "duration": 178325,
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
  "duration": 224081,
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
  "duration": 189443,
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
  "duration": 320299,
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
  "duration": 87237,
  "status": "passed"
});
});