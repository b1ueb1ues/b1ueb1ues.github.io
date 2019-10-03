
# DPS numbers shown indicate neutral elemental damage
(Multiplied by 1.5 to get on-element damage).

## The simulator in python
[github/b1ueb1ues](https://github.com/b1ueb1ues/dl)

## Skill frames
[github/b1ueb1ues](https://github.com/b1ueb1ues/dl/tree/master/framedata/skills)

## 护符对照表 (For Mandarin users)
[护符对照表](https://github.com/b1ueb1ues/b1ueb1ues.github.io/blob/master/dl-sim/amulet.csv)


## Templates
- Level 80 with 50 mana circles for adventurers
- Level 31 dojos and level 35 altars
- Having all of the limited event facilities at level 30
- Level 20 dracolith for Gala Mym, all fafnir statues are EXCLUDED
- Max unbind level 100 skill damage dragons are used if available, if not then pure strength dragons are used unless otherwise mentioned
- MUB level 100 5 star elemental weapons

### First WP
- MUB level 100 Resounding rendition (wrymprint bonuses are calculated additively with dragon bonuses, so 15% str provides less than 10% damage, and for most characters skill damage is more than half of all damage)

### second WP
- MUB level 80 “Fresh Perspective” for sword users.
- MUB level 100 “Crystalian Envoy” for blade users.
- MUB level 80 “Kung Fu Masters”+”Flower in the Fray” for axe users.
- Equipped MUB level100 "Crystalian Envoy" for lancer.
- MUB level 100 “Crystalian Envoy” for lance users.
- MUB level 80 “Flash of Genius” for bow/wand/dagger users.
- Removed the resistance WP setup for 3 stars(everyone has a full offense build now)

## Common combo chains the simulation uses
- Sword: C3+FS, C2+FS (for Xander and Albert)
- Blade: C5+FS(failed) (a technique discovered by me)
- Dagger: Use C5+skill as much as possible, C4+FS when no skills are available
- Axe: C5+FS / plain C5 (If mentioned that this unit doesn’t use FS)
- Lance: C5+FS / C5+FS(failed) (If mentioned that this unit doesn’t use FS)
- Bow: plain C5 or C4+FS or C1+FS
- Wand: C5+FS(failed)
- Staff: C5 (there is no frame difference between C5 and C5+FS(failed))

## Not take into consideration
(This means that you should add some extra damage yourself if your unit has these abilities)
- Shapeshifting
- Bane skills (Phraeganoth/Physian/Demon/Dragon/etc.)
- Slayer's Strength/Striker's Strength (except for the special page)

## Conditional DPS is reference to
(This means that you should reduce this part accordingly if you think that your unit may not meet the requirements)
- HP X% = Strength/Crit
- X Hits = Strength/Crit/Energy Level Up
- Affliction and damage boost from affliction
- Last Offense

## Special mechanics
- Considers other team members to have a total of 6000 DPS (affected by co-abs, blade:x1.1, wand:x1.08, dagger:x1.07, bow:x1.05)
- Considers every 5 team energy stacks to provide 2 skills from the other 2 DPS that boosts 7500x0.5 damage each into team DPS
- Bleed is calculated by averaging 1000 times of simulation
- Gets dragon claw once during the middle of the fight
- Considers break punisher to have 15% efficiency (30% break punisher is 0.30.15=4.5% more overall damage)
- Consider OD punisher to have 35% efficiency.

## Why calculating team buff based on 6000 team DPS
- This underestimation of the team DPS is intended since this simulator is assuming perfect rotation, which, in reality is hard to achieve especially if the boss is moving constantly.
- In MG though, you should assume the team buff DPS contribution will be at 2-3 times higher.


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
