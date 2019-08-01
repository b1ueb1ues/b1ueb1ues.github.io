
# dps numbers indicate the neutral element damage. ( x1.5 for on-ele )


## simulator in python
[github/b1ueb1ues](https://github.com/b1ueb1ues/dl)

## skill frame
[github/b1ueb1ues](https://github.com/b1ueb1ues/dl/tree/master/framedata/skills)

## 护符对照表
[护符对照表](https://github.com/b1ueb1ues/b1ueb1ues.github.io/blob/master/dl-sim/amulet.csv)


## stat
- Level 80, circle node(50/50) adventurer.
- Dojo(31/31) altar(35/35) 
- Have all limited facilities in level 30.
- Including dracolith for g\_mym , except fafnir.
- Equiped skill damage dragon if exist. Otherwise 60% str dragon. Unless mentioned. Both in max level.
- Equiped MUB 5star element weapon

## WP
- Most common used WP is RR

### first WP
- Equiped MUB level100 "Resounding Rendition". (Since WP is additive with Dragon, 15% str provide less than 10% damage. And for most character, skill damage is more than half of all damage.)

### second WP
- Equiped MUB level80 "Fresh Perspective" for sword user.
- Equiped MUB level100 "Crystalian Envoy" for blade user.
- Equiped MUB level100 "Kung Fu Masters"+ MUB level80 "Flower in the Fray" for axe user.
- Equiped MUB level100 "Crystalian Envoy" for lancer.
- Equiped MUB level100 "Flash of Genius" for wand/bow/dagger characters.
- remove resist WP select for 3\*. (all offense setup now)


## commen combo chain the simulation use:
- sword: c3+fs, c2+fs(for Xander and Albert)
- blade: c5+fs(failed) (that kind of technique introduced by me) [reference](https://www.bilibili.com/video/av38956687/)
- dagger: use c5+skill as more as possible, c4+fs when no skill can active.
- axe: c5+fs / plain c5 (if mentioned that unit don't use fs)
- lance: c5+fs / c5+fs(failed) (if mentioned that unit don't use fs)
- bow: plain c5 or c4+fs or c1+fs
- wand: c5+fs(failed)
- staff: c5 (no frame difference between c5 and c5fsf)

## Not take into consideration: 
#### (means that you should add some score yourself to unit have that kind of abilities)
- Shapeshift
- Phraeganoth/Physian/Demon Bane
- Slayer's Strength/Striker's Strength except for special page

## Conditional dps is reference to :
#### (means that you should reduce this part of dps to unit have that kind of abilities by your own opinion)
- Full HP = Strength/Crit
- HP 70% = Strength/Crit
- Flurry Strength/Crit
- Flurry Debilitator
- 30 Hits = Energy Level Up
- Affliction and damage boost from affliction.
- Trigger Last Offense at simulation start

## special mechanics
- Consider other teammember have a total of 6000 (affect by co-abs, bladex1.1, wandx1.08, daggerx1.07, bowx1.05) dps.
- Consider every 5 team energy stacks to provide 2 skills(other 2 dps) that boost 7500x0.5 damage for each into team dps.
- Simulate unit that have bleed 1000 times, and show the average DPS. 
- Get dragon claw once at middle of fight.
- Consider break punisher to have 15% efficiency.
- Consider od punisher to have 35% efficiency.

## why 6000 team?
- The underestimate of team dps is intend.
- This chart is not always for people who aimming at HDT, someone just want to know who can deal more damage to decide who to invest. I don't think eli/melody is good for investment outside HDT, their most power need no equip to archieve.
- It's pretty easy for those who only care about HDT preformance to do teamdps / 6000 * whateverYouWant
- Buff decrease more after reduce active action time. (btw so does bleed). Unlike Xania will lose 50% damage if you take off her 50% damage time to dodge. Buff is likely to lose 75% damage when you take off 50% active action time, because buff loss 50% uptime by the mean time the action buffed by this buff lose 50%.


## Author
b1ueb1ues,  
tiara (proofreading),  
luciferz2012(first version of website),  
Matt(rotation improve),
qwewqa,
haukist

## Acknowledgement
Totakeke, Shark3143, SanyamBansal, emrysduvent, ZedK, B3GG, 6tennis, CarelessParsley
