//DATA TYPES //
name = "Zachary" // string
console.log(name)

age = 30                 // int
console.log("age")      //string. Know the difference! this is important
console.log(age)        //variable

isCool=true             // bool
console.log(isCool)

children = ["buck", "bada"]     // array
console.log(children)
console.log(children[0]) // will show buck only
console.log(children[1]) // will show bada only



//BUILDING AN OBJECT
zachary = {
    name: "Zachary",             //notice how we don't finish with semicolon but comma
    age: 30,
    isCool: true,
    children: ["buck", "bada"]
}
console.log(zachary)

isLame=false
zachary2 = {
    name: name ,
    age: age,
    isCool: isLame,    //first one is what is the name of this data? and second one is the actual data itself.
    children: children
}
console.log(zachary2.children[1]) //shows bada






function printName(person) {               // printName is the name of the function that we made
    console.log(person.name)
}

printName(zachary)



ollie = {
    age: 27,
    isCool:true
}

function getAge(person) {
    return person.age
}
olliesAge = getAge(ollie)

console.log(olliesAge)
console.log("ollies age is: " + olliesAge)





//if person is cool, console log out, they are cool
//if person is not cool, console log out, they're not cool.
    function decideIfPersonIsCool(person) {
    

        if (person.isCool) {
            console.log(person.name + " is cool!")
        } else {
            console.log(person.name + " is not cool!")
        }
    
    }
decideIfPersonIsCool(zachary)
decideIfPersonIsCool(ollie)




function addTwoNumbers (a, b) {
    return a + b
}
console.log(addTwoNumbers(4, 7))


    
    


