/*
//uncomment this block and run as stand-alone to test, you can change the contents of the tester arrays
const undividedNamesTester1 = ["Mark", "Darren", "Jason", "Victoria", "Monika"];//odd amount of names
console.log(groupDivision(undividedNamesTester1));
const undividedNamesTester2 = ["Mark", "Darren", "Jason", "Victoria", "Monika", "Chad"];//even amount of names
console.log(groupDivision(undividedNamesTester2));
*/
export function groupDivision (undividedNames){
    const originalArrayLength = undividedNames.length / 2;
    let group1 = [];

    for(let i = 0; i < originalArrayLength; i++){//needs to be originalArrayLength
        const randomIndex = Math.floor(Math.random() * undividedNames.length)//cannot be originalArrayLength because it will then pull on empty containers
        let pulledName = undividedNames.splice(randomIndex, 1);//.splice returns an array containing the name, next line fixes that
        pulledName = pulledName.toString();
        group1.push(pulledName);
    }

    const group2 = undividedNames;
    const result = [group1, group2];//puts group1 and group2 arrays into an array so it can return two variables
    return result;
}