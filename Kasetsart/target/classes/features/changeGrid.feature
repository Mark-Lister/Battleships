Feature: changeGrid
  As a player
  I want to be able to change the size of the grid
  to change the times and difficulty of games.

Scenario: Valid grid size
  Given a player with name Mark and grid of size 10
  Then grid was set

Scenario: Too small grid size
  Given a player with name Mark and grid of size 3
  Then grid wasn't set

Scenario: Too large grid size
  Given a player with name Mark and grid of size 22
  Then grid wasn't set

Scenario: Valid size on large limit
  Given a player with name Mark and grid of size 20
  Then grid was set

Scenario: Valid size on small limit
  Given a player with name Mark and grid of size 5
  Then grid was set