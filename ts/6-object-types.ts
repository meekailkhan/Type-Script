function sayName(fullName : {first : string,last : string}){
    console.log(`first name is ${fullName.first}`);
    console.log(`last name is ${fullName.last}`)
}

sayName({first: 'meekai',last : 'aslam'})

function friends(friends : { first : string , second? : string}){
    console.log(friends.first.toUpperCase());

    // -------------------
    console.log(friends.second?.toUpperCase());

    if(friends.second !== undefined){
        console.log(friends.second.toUpperCase())
    }
    // --------------------------
    // they both are same

}

friends({first : 'arbaaz'});