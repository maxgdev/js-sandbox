function existsCharacter(searchCharacter){
    let characters = ['Donald', 'Boris', 'Kim'];
    let exists = characters.find(character => {
        return character === searchCharacter;
    });
    if(exists){
        return 'Yes, the character is part of the list:)';
    } else {
        return 'Sorry, character not found';
    }
}
console.log(existsCharacter('Kim'));
console.log(existsCharacter('Tom'));