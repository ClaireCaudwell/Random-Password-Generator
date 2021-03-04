const generateRandomPassword = () => {
    const randomPasswordArray = [];
    for(let i = 0; i < 12; i++){
        // Using math random to generate a random 12 character password using ascii code rather than writing a long array of numbers, letters and special characters
        // Pushing each password element to an empty array
        randomPasswordArray.push(String.fromCharCode(Math.random() * 93 + 33));
    }
    //Then joining together each of the string password elements
    const randomPassword = randomPasswordArray.join("");

    // Check that the password has at least one number, lower and upper case letter and special character
    let regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{1,}$/;
    //The match method returns an array
    const regExpArray = randomPassword.match(regExp);

    //If the array returned is null i.e. doesn't meet the above requirements then the function will be called, the button will be automatically clicked again
    //Else it'll print the approved password
    if(regExpArray === null){
        generateRandomPassword();
    } else {
        console.log(randomPassword);
        document.getElementById("randomPassword").innerText = randomPassword;
    }
};

const clearPassword = () => {
    const clearString = "";
    document.getElementById("randomPassword").innerText = clearString;
};
