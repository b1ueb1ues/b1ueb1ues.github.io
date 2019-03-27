# README for dl simulation


## simulator in python
[github/b1ueb1ues](https://github.com/b1ueb1ues/dl)

## skill frame
[github/b1ueb1ues](https://github.com/b1ueb1ues/dl/tree/master/framedata/skills)



## stat
- Level 80, circle node(50/50) adventurer.
- Dojo(30/30) altar(30/30) 
- Have all facilities in level 30, so wind/water/light unit have more str than flame/shadow
- No dracolith, no fafnir statue.
- Equiped level100 str 60% dragon except water unit, which use "Dragonyule Jeanne". if you don't have "Dragonyule Jeanne", water unit will lose about 4% DPS.
- Equiped MUB 5star element weapon

## WP
- Most common used WP set is RR+LC
- Will leave comment if the WP set is not default.

### first WP
- Equiped MUB level100 "Resounding Rendition". Since WP is additive with Dragon, 15% str provide less than 10% damage.

### second WP
- Equiped MUB level80 "Fresh Perspective" for sword user.
- Equiped MUB level100 "Kung Fu Masters" for axe user.
- Equiped MUB level100 "Levin's Champion" for others.


## commen combo chain the simulation use:
- sword: c3+fs, c2+fs(for Xander and Albert)
- blade: c5+fs(failed) (that kind of technique introduced by me) [reference](https://www.bilibili.com/video/av38956687/)
- dagger: c5+fs(3hits) (you can hold FS reverse to change your direct in the c5 jump)
- axe: c5+fs / plain c5 (if mentioned that unit don't use fs)
- lance: c5+fs / c5+fs(failed) (if mentioned that unit don't use fs)
- bow: plain c5 or c4+fs or c1+fs
- wand: c5+fs(failed)

## Not take into consideration: 
#### (means that you should add some score yourself to unit have that kind of abilities)
- Ex-skills(Co-abilities)
- Shapeshift
- Dragon's Law
- Phraeganoth/Physian/Demon Bane
- Slayer's Strength/Striker's Strength

## Conditional dps is reference to :
#### (means that you should reduce this part of dps to unit have that kind of abilities by your own opinion)
- Full HP = Strength/Crit
- HP 70% = Strength/Crit
- Flurry Strength/Crit
- Flurry Debilitator
- 30 Hits = Energy Level Up
- Affliction and damage boost from affliction. One type of Affliction can proc 3 times in one simulation. (You can't proc any affliction to High Dragon Trial)
- Trigger Last Offense at simulation start

## special mechanics
- Consider other teammember have a total of 3500 dps.
- Consider every 5 team energy stacks to provide 2 skills(other 2 dps) that boost 2500 damage for each into team dps.
- Simulate unit that have bleed 1000 times, and show the average DPS. 

## Author
b1ueb1ues, tiara, luciferz2012

## Acknowledgement
Totakeke, Shark3143
