// Setting Health, Defense, and Attack variables
let jonSnowAttack = 35
let jamieLannisterAttack = 35

let jonSnowHealth = 50
let jonSnowDefense = 0

let jamieLannisterHealth = 50
let jamieLannisterDefense = 20

// Basic if-statement
if (jonSnowAttack < jamieLannisterAttack){
    console.log('Jamie has the stronger attack!')
}else if(jonSnowAttack > jamieLannisterAttack){
    console.log('Jon has the stronger attack.')
}else if(jonSnowAttack === jamieLannisterAttack){
    console.log('The attacks are equally powerful.')
}


// Jon Snow picks up a shield!
jonSnowDefense += 25

// Loop to show a flurry of attacks by Jamie
for(let i = 0; i < 3; i++){
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)

    if(jonSnowHealth <= 0){
        console.log('Jon Snow has perished in battle')
        break
    }else{
        console.log(`Jon's health is ${jonSnowHealth}`)
    }
}


// Reverse for-loop
for(let i = 10; i > 0; i--){
    console.log(i)
}