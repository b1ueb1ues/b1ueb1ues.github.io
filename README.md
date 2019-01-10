# README for dl simulation


## changelog
add g_sarris

add addis with 20% skill haste, in which case he can do 2 s1 in one s2, (s2 c2 s1 c5 fs(fail) c4 s1 /or/ s2 c2 s1 c5 fs(succ) c3 s1)



## stat
- Level 80, circle node(50/50) adventurer.
- Dojo(30/30) altar(30/30) 
- Have Wind Shrine/Yuletree/Sweet Retreat level 30, so wind/water/light unit have more str than flame/shadow
- No dracolith, no fafnir statue.
- Equiped level100 str 60% dragon except water unit, which use "Dragonyule Jeanne". if you don't have "Dragonyule Jeanne", water unit will lose about 4% DPS.
- Equiped MUB level100 "Resounding Rendition". Since WP is additive with Dragon, 15% str provide less than 10% damage.
- Equiped MUB 5star element weapon

## commen combo chain the simulation use:
- sword: c3+fs
- blade: c5+fs(failed) (that kind of technique introduced by me) [reference](https://www.bilibili.com/video/av38956687/)
- dagger: c5+fs(3hits) (you can hold FS reverse to change your direct in the c5 jump)
- axe: c5+fs / plain c5 (if mentioned that unit don't use fs)
- lance: c5+fs / c5+fs(failed) (if mentioned that unit don't use fs)
- bow: plain c5 and c1+fs, simulate 2 times
- wand: plain c5

## Not take into consideration: 
#### (means that you should add some score yourself to unit have that kind of abilities)
- co-abilities
- Shapeshift
- Dragon's Law
- Phraeganoth/physian/Demon Bane
- Last Offense 
- Slayer's Strength/Striker's Strength

## Conditional boost that the simulation assumed as 100% uptime : 
#### (means that you should reduce some score to unit have that kind of abilities by your own opinion)
- Flurry Strength 
- Full HP = Strengt
- HP 70% = Strength
- 30 Hits = Energy Level Up
- One type of Affliction can proc 3 times in one battle. (Since you can't proc any affliction to High dragon)

## special mechanics
- Not take energies into teamwide DPS
- Simulate unit that have bleed 1000 times, and show the average DPS. Min and Max DPS is list after his name.

## skill frame
[github/b1ueb1ues](https://github.com/b1ueb1ues/dl/tree/master/framedata/skills)
