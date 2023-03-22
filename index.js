/*
	//Note: strictly follow the variable names and function names.

	1. Create a function named printUserInfo() which is able to display a user's to fullname, age, location and other information.
		-invoke the function to display information similar to the expected output in the console.
		-check your spelling
*/
	//first function here:

    function printUserInfo() {
        let fullname = "John Doe";
        let age = 25;
        let location = "123 street, Quezon City";
        let catName = "Joe";
        let dogName = "Danny";

        console.log("Hello, I'm " + fullname + ".");
        console.log("I am " + age + " years old.");
        console.log("I live in " + location);
        console.log("I have a cat named " + catName + ".");
        console.log("I have a dog named " + dogName + ".");
    }

    printUserInfo();

/*
	2. Create a function named printFiveBands which is able to display 5 bands/musical artists.
		-invoke the function to display information similar to the expected output in the console.
		-check your spelling
	
*/
	//second function here:

    function printFiveBands() {
        let band1 = "The Beatles";
        let band2 = "Taylor Swift";
        let band3 = "The Eagles";
        let band4 = "Rivermaya";
        let band5 = "Eraserheads";

        console.log(band1);
        console.log(band2);
        console.log(band3);
        console.log(band4);
        console.log(band5);
    }

    printFiveBands();

/*
	3. Create a function named printFiveMovies which is able to display the name of 5 movies.
		-invoke the function to display information similar to the expected output in the console.
		-check your spelling
	
*/
	
	//third function here:

    function printFiveMovies() {
        let movie1 = "Lion King";
        let movie2 = "Howl's Moving Castle";
        let movie3 = "Meet the Robinsons";
        let movie4 = "School of Rock";
        let movie5 = "Spirited Away";

        console.log(movie1);
        console.log(movie2);
        console.log(movie3);
        console.log(movie4);
        console.log(movie5);
    }

    printFiveMovies();

/*
	4. Debugging Practice - Debug the following codes and functions to avoid errors.
		-check the variable names
		-check the variable scope
		-check function invocation/declaration
		-comment out unusable codes.
		-check your spelling

		-invoke the function to display information similar to the expected output in the console.
*/

function printFriends(){
	let friend1 = "Eugene"; 
	let friend2 = "Dennis"; 
	let friend3 = "Vincent";

	console.log("These are my friends:");
	console.log(friend1); 
	console.log(friend2); 
	console.log(friend3); 
};

printFriends();

// console.log(friend1);
// console.log(friend2);

//Do not modify
//For exporting to test.js
try{
	module.exports = {
		printUserInfo,
		printFiveBands,
		printFiveMovies,
		printFriends
	}
} catch(err){

}
