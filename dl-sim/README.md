
# DPS simulator for Dragalia Lost

## Useful links
- [Python simulator](https://github.com/b1ueb1ues/dl)
- [github/b1ueb1ues](https://github.com/b1ueb1ues/dl/tree/master/framedata/skills)
- [护符对照表 (For Mandarin users)](https://github.com/b1ueb1ues/b1ueb1ues.github.io/blob/master/dl-sim/amulet.csv)

## Setup
- Level 80 adventurers
- 50 mana circles
- Level 31 dojos
- level 35 altars
- All limited event facilities at level 30
- Level 20 dracolith for Gala Mym
- No fafnir statues
- MUB level 100 dragons
- MUB level 100 5-star elemental weapons
- See the chart for dragon and wrymprint choices

## Default combos
- Sword: C3+FS (C2+FS for Xander and Albert)
- Blade: C5+FFS (Failed Force Strike, a technique discovered by me, which means holding FS while C5 is out but release before FS is activated)
- Dagger: C5 (C4+FS when no skills available)
- Axe: C5+FS
- Lance: C5+FFS
- Bow: C5 or C4+FS or C1+FS or roll FS (really depends on adventurer)
- Wand: C5+FFS
- Staff: C5

## Not take into consideration
(This means that you should increase the DPS yourself if the adventurer has any of these abilities)
- Shapeshifting
- Bane skills (Phraeganoth/Physian/Demon/Dragon/etc.)
- Slayer's Strength/Striker's Strength (unless indicated on the special page)

## Special mechanics
- Considers other team members to have a total of 6000 DPS (See the section below for reasoning)
- Considers every 5 team energy stacks to provide 2 skills from the other 2 DPS that boosts 7500*0.5 damage each into team DPS
- Bleed is calculated by averaging 1000 runs of simulation
- Gets dragon claw once during the middle of the fight
- Considers break punisher to have 15% efficiency (e.g. 30% break punisher is 0.3 * 0.15 = 4.5% overall DPS bonus)
- Consider OD punisher to have 35% efficiency (e.g. 30% OD punisher is 0.3 * 0.35 = 10.5% overall DPS bonus)

## Why 6000 team DPS?
- The underestimation of the team DPS is intended since this simulator is assuming perfect rotation, which, in reality is hard to achieve especially if the boss is moving constantly.
- In MG though, you should assume the team buff DPS contribution to be 2 - 3 times higher.

## Author
b1ueb1ues  
tiara (proofreading)  
luciferz2012 (first version of website)  
solofandy (front-end engineering)  
kenchendesign (UI design)  
Matt (rotation improve)  
qwewqa  
haukist  

## Acknowledgement
Totakeke, Shark3143, SanyamBansal, emrysduvent, ZedK, B3GG, 6tennis, CarelessParsley
