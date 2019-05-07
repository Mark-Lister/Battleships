Feature: placeShip
  As a player
  I want to be able to place my ships
  in case I have a placement strategy I like.

Background:
  Given a player with name Mark and grid of size 10

Scenario: Place ship on valid coordinate but incorrect direction
  Given a ship of size 3 called Submarine at 0 0 in S direction
  Then ship wasn't placed

Scenario: Place ship correctly
  Given a ship of size 5 called BigShip at 2 4 in N direction
  Then ship was placed
	
Scenario: Place at invalid coordinates
  Given a ship of size 2 called BigShip at 2 11 in N direction
  Then ship wasn't placed
