Feature: shoot
  As a player
  I want to be able to choose a location to shoot
  so that I have control of the game and can use a strategy to shooting.

Background:
  Given a player with name Mark and grid of size 10
  Given a ship of size 3 called Submarine at 0 0 in N direction
  Given a ship of size 5 called BigShip at 2 4 in N direction

Scenario: Shoot and hit
  Given a shot taken at point 0 0
  Then message is Not over

Scenario: Shoot and miss
  Given a shot taken at point 5 5
  Then message is Not over

Scenario: Shoot same point
  Given a shot taken at point 5 5
  Given a shot taken at point 5 5
  Then message is Already hit

Scenario: Shoot and win
  Given a shot taken at point 0 0
  Given a shot taken at point 0 1
  Given a shot taken at point 0 2
  Given a shot taken at point 2 4
  Given a shot taken at point 2 5
  Given a shot taken at point 2 6
  Given a shot taken at point 2 7
  Given a shot taken at point 2 8
  Then message is Game over
