/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)

FindAreaOfAPizza(13) /* first pizza "13" */
FindAreaOfAPizza(17) /* second pizza "17" */

function FindAreaOfAPizza(pizzaSize) {
    const pizzaRadius = pizzaSize / 2;
    const areaOfAPizza = Math.PI * Math.pow(pizzaRadius, 2);
    console.log(`Q1 - Area of the ${pizzaSize} inch pizza is `, areaOfAPizza, "inchs")
}

// 2. What is the cost per square inch of each pizza?

CostPerSquareInch(13, 16.99) /* for the first pizza */
CostPerSquareInch(17, 19.99) /* for the second pizza */

function CostPerSquareInch(pizzaSize, price) {
    const pizzaRadius = pizzaSize / 2;
    const areaOfAPizza = Math.PI * Math.pow(pizzaRadius, 2);
    const priceOfAPizzaPerSquareInch = price / areaOfAPizza;
    console.log(`Q2 - Price of ${pizzaSize} inch pizza per square inch is `, priceOfAPizzaPerSquareInch)
}

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)

GetRandomCard("Q3")

function GetRandomCard(QuestionNum) {
    const TOTAL_CARDS = 12;
    var RandomCard = Math.round(Math.random() * TOTAL_CARDS) + 1;
    if(QuestionNum == "Q3") {
        console.log("Q3 - Get random card ", RandomCard);
    } else if (QuestionNum == "Q4-1") {
        console.log("Q4 - First Random Card ", RandomCard);
        return RandomCard
    } else if (QuestionNum == "Q4-2") {
        console.log("Q4 - Second Random Card ", RandomCard);
        return RandomCard
    } else if (QuestionNum == "Q4-3") {
        console.log("Q4 - Third Random Card ", RandomCard);
        return RandomCard
    }
}

// 4. Draw 3 cards and use Math to determine the highest
// card

const Card1 = GetRandomCard("Q4-1")
const Card2 = GetRandomCard("Q4-2")
const Card3 = GetRandomCard("Q4-3")

GetMaximumCard()

function GetMaximumCard() {
    const Result = Math.max(Card1, Card2, Card3)
    console.log("Q4 - Highest card from three cards ",  Result)
}

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.

const firstName = "Boaz";
const lastName = "Dejene";
const streetAddress = "1234 5th Ave";
const city = "Seattle";
const state = "WA";
const zipCode = "12345";

console.log(`${firstName} ${lastName}
${streetAddress}
${city} ${state} ${zipCode}`)

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring

const ADDRESS = `${firstName} ${lastName}
${streetAddress}
${city} ${state} ${zipCode}`

const fName = ADDRESS.split(" ")[0]

console.log(fName)
/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
// const endDate = new Date(2019, 1, 4);
const date1 = new Date(2020, 1, 4);
const date2 = new Date(2020, 1, 1);

const CalculateMidPoint = new Date((date1.getTime() + date2.getTime()) / 2);
console.log(CalculateMidPoint)

// var middate = new Date((startdate.getTime() + enddate.getTime()) / 2);