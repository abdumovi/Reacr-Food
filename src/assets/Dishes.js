import dish2 from './images/image2.png'
import dish1 from './images/image1.png'
import dish3 from './images/image3.png'
import dish4 from './images/image4.png'
import dish5 from './images/image5.png'
import dish6 from './images/image6.png'
import dish7 from './images/Food7.jfif'
import dish8 from './images/Food8.jfif'
import dish9 from './images/Food9.jpg'
import Appetizer1 from "./images/Appetizer1.jpg";
import Appetizer2 from "./images/Appetizer2.jpg";
import Appetizer3 from "./images/Appetizer3.jpg";
import Appetizer4 from "./images/Appetizer4.jpg";
import Appetizer5 from "./images/Appetizer5.jpg";
import Appetizer6 from "./images/Appetizer6.jpg";
import Appetizer7 from "./images/Appetizer7.jpg";
import Appetizer8 from "./images/Appetizer8.jpg";
import Appetizer9 from "./images/Appetizer9.jpg";
import Dessert1 from "./images/Dessert1.jfif";
import Dessert2 from "./images/Dessert2.jfif";
import Dessert3 from "./images/Dessert3.jfif";
import Dessert4 from "./images/Dessert4.jfif";
import Dessert5 from "./images/Dessert5.jfif";
import Dessert6 from "./images/Dessert6.jfif";
import Dessert7 from "./images/Dessert7.jfif";
import Dessert8 from "./images/Dessert8.jfif";
import Dessert9 from "./images/Dessert9.jfif";
import Soup1 from "./images/Soup1.jfif";
import Soup2 from "./images/Soup2.jfif";
import Soup3 from "./images/Soup3.png";
import Soup4 from "./images/Soup4.jfif";
import Soup5 from "./images/Soup5.jfif";
import Soup6 from "./images/Soup6.jfif";
import Soup7 from "./images/Soup7.jfif";
import Soup8 from "./images/Soup8.jfif";
import Soup9 from "./images/Soup9.jfif";
import Grill1 from "./images/Grill1.jfif";
import Grill2 from "./images/Grill2.jfif";
import Grill3 from "./images/Grill3.1.jfif";
import Grill4 from "./images/Grill4.jfif";
import Grill5 from "./images/Grill5.jfif";
import Grill6 from "./images/Grill6.jfif";
import Grill7 from "./images/Grill7.jfif";
import Grill8 from "./images/Grill8.jpg";
import Grill9 from "./images/Grill9.jfif";
import cold1 from "./images/Cold1.jfif";
import cold2 from "./images/Cold2.png";
import cold3 from "./images/Cold3.jfif";
import cold4 from "./images/Cold4.jfif";
import cold5 from "./images/Cold5.jfif";
import cold6 from "./images/Cold6.jfif";
import cold7 from "./images/Cold7.1.jfif";
import cold8 from "./images/Cold8.jfif";
import cold9 from "./images/Cold9.jfif";


const Dishes = [
    {
        id:1,
        item:[
            {
                id: 1,
                foodImg: cold1,
                foodName: "Bowtie Chicken Caesar Salad - The Girl Who Ate Everything",
                foodPrice: 5.90,
                isAvailable: "10 Bowls available",
                count:1,
                totalPrice:5.90,
            },
            {
                id: 2,
                foodImg: cold2,
                foodName: "Veggie burrito bowls with grilled mango",
                foodPrice: 5.10,
                isAvailable: "15 Bowls available",
                count:1,
                totalPrice:5.10,
            },
            {
                id: 3,
                foodImg: cold3,
                foodName: "Skinny Chicken Salad",
                foodPrice: 2.95,
                isAvailable: "5 Bowls available",
                count:1,
                totalPrice:2.95,
            },
            {
                id: 4,
                foodImg: cold4,
                foodName: "Whole Wheat Pita with Kale and Asiago",
                foodPrice: 5.29,
                isAvailable: "14 Bowls available",
                count:1,
                totalPrice:5.29,
            },
            {
                id: 5,
                foodImg: cold5,
                foodName: "Crab Salad",
                foodPrice: 11.15,
                isAvailable: "16 Bowls available",
                count:1,
                totalPrice:11.15,
            },
            {
                id: 6,
                foodImg: cold6,
                foodName: "Greek Chicken Roll Salad",
                foodPrice: 4.20,
                isAvailable: "50 Bowls available",
                count:1,
                totalPrice:4.20,
            },
            {
                id: 7,
                foodImg: cold7,
                foodName: "Watermelon and Feta Salad",
                foodPrice: 4.14,
                isAvailable: "27 Bowls available",
                count:1,
                totalPrice:4.14,
            },
            {
                id: 8,
                foodImg: cold8,
                foodName: "Caesar Gazpacho",
                foodPrice: 13.29,
                isAvailable: "12 Bowls available",
                count:1,
                totalPrice:13.29,
            },
            {
                id: 9,
                foodImg: cold9,
                foodName: "Apple and Blue Cheese on Endive",
                foodPrice: 14.18,
                isAvailable: "17 Bowls available",
                count:1,
                totalPrice:14.18,
            },
        ]
    },
    {
        id:2,
        item:[
            {
                id: 10,
                foodImg: Soup1,
                foodName: "Cheesy Potato Soup",
                foodPrice: 4.21,
                isAvailable: "14 Bowls available",
                count:1,
                totalPrice:4.21,
            },
            {
                id: 11,
                foodImg: Soup2,
                foodName: "Slow Cooker Chicken and Potato Soup",
                foodPrice: 4.23,
                isAvailable: "27 Bowls available",
                count:1,
                totalPrice:4.23,
            },
            {
                id: 12,
                foodImg: Soup3,
                foodName: "Onion, Kale, Chickpea, and Chicken Soup",
                foodPrice: 7.14,
                isAvailable: "7 Bowls available",
                count:1,
                totalPrice: 7.14,
            },
            {
                id: 13,
                foodImg: Soup4,
                foodName: "Soulful Chicken Soup",
                foodPrice: 6.13,
                isAvailable: "11 Bowls available",
                count:1,
                totalPrice:6.13,
            },
            {
                id: 14,
                foodImg: Soup5,
                foodName: "Chicken and Cornbread Dumplings",
                foodPrice: 9.49,
                isAvailable: "7 Bowls available",
                count:1,
                totalPrice:9.49,
            },
            {
                id: 15,
                foodImg: Soup6,
                foodName: "Slow Cooker Chicken Chili",
                foodPrice: 2.14,
                isAvailable: "17 Bowls available",
                count:1,
                totalPrice:2.14,
            },
            {
                id: 16,
                foodImg: Soup7,
                foodName: "Creamy Leek and Parsnip Soup",
                foodPrice: 3.78,
                isAvailable: "13 Bowls available",
                count:1,
                totalPrice:3.78,
            },
            {
                id: 17,
                foodImg: Soup8,
                foodName: "Smoky Ham and Split Pea Soup",
                foodPrice: 5.45,
                isAvailable: "6 Bowls available",
                count:1,
                totalPrice:5.45,
            },
            {
                id: 18,
                foodImg: Soup9,
                foodName: "Black Garlic and Lentil Soup",
                foodPrice: 6.47,
                isAvailable: "19 Bowls available",
                count:1,
                totalPrice:6.47,
            }
        
        ]
    },
    {
        id:3,
        item:[
            {
                id: 19,
                foodImg: Grill1,
                foodName: "New York Strip",
                foodPrice: 20.50,
                isAvailable: "5 Bowls available",
                count:1,
                totalPrice:20.50,
            },
            {
                id: 20,
                foodImg: Grill2,
                foodName: "Ribye",
                foodPrice: 19.80,
                isAvailable: "2 Bowls available",
                count:1,
                totalPrice:19.80,
            },
            {
                id: 21,
                foodImg: Grill3,
                foodName: "Veal",
                foodPrice: 19.30,
                isAvailable: "7 Bowls available",
                count:1,
                totalPrice:19.30,
            },
            {
                id: 22,
                foodImg: Grill4,
                foodName: "Pork Chops",
                foodPrice: 15.70,
                isAvailable: "4 Bowls available",
                count:1,
                totalPrice:15.70
            },
            {
                id: 23,
                foodImg: Grill5,
                foodName: "Baby ribs and shrip",
                foodPrice: 18.00,
                isAvailable: "14 Bowls available",
                count:1,
                totalPrice:18.00
            },
            {
                id: 24,
                foodImg: Grill6,
                foodName: "Salmon fillet",
                foodPrice: 17.40,
                isAvailable: "3 Bowls available",
                count:1,
                totalPrice:17.40,
            },
            {
                id: 25,
                foodImg: Grill7,
                foodName: "Tuna Steak",
                foodPrice: 24.00,
                isAvailable: "2 Bowls available",
                count:1,
                totalPrice:24.00,
            },
            {
                id: 26,
                foodImg: Grill8,
                foodName: "Country-Style Ribs with Quick-Pickled Watermelon",
                foodPrice: 30.25,
                isAvailable: "5 Bowls available",
                count:1,
                totalPrice:30.25,
            },
            {
                id: 27,
                foodImg: Grill9,
                foodName: "Grilled Kielbasa Tacos",
                foodPrice: 27.90,
                isAvailable: "1 Bowls available",
                count:1,
                totalPrice: 27.90,
            },
        ]
    },
    {
        id:4,
        item:[
            {
                id: 28,
                foodImg: dish1,
                foodName: "Spicy seasoned seafood noodles",
                foodPrice: 2.29,
                isAvailable: "20 Bowls available",
                count:1,
                totalPrice:2.29,
            },
        
            {
                id: 29,
                foodImg: dish2,
                foodName: "Salted Pasta with mushroom sauce",
                foodPrice: 2.69,
                isAvailable: "11 Bowls available",
                count:1,
                totalPrice:2.69,
            },
        
            {
                id: 30,
                foodImg: dish3,
                foodName: "Beef dumpling in hot and sour soup",
                foodPrice: 2.99,
                isAvailable: "16 Bowls available",
                count:1,
                totalPrice: 2.99,
            },
        
            {
                id: 31,
                foodImg: dish4,
                foodName: "Healthy noodle with spinach leaf",
                foodPrice: 3.29,
                isAvailable: "22 Bowls available",
                count:1,
                totalPrice:3.29,
            }, 
            {
                id: 32,
                foodImg: dish5,
                foodName: "Spicy seasoned seafood noodles",
                foodPrice: 2.29,
                isAvailable: "20 Bowls available",
                count:1,
                totalPrice:2.29,
            },
        
            {
                id: 33,
                foodImg: dish6,
                foodName: "Salted Pasta with mushroom sauce",
                foodPrice: 2.69,
                isAvailable: "11 Bowls available",
                count:1,
                totalPrice:2.69,
            },
            {
                id: 35,
                foodImg: dish8,
                foodName: "Spicy instant noodle with special omelette",
                foodPrice: 3.59,
                isAvailable: "17 Bowls available",
                count:1,
                totalPrice:3.59,
            },
            {
                id: 36,
                foodImg: dish9,
                foodName: "Parmesan Spinach Mushroom Pasta Skillet",
                foodPrice: 4.25,
                isAvailable: "20 Bowls available",
                count:1,
                totalPrice:4.25,
            },
            {
                id: 37,
                foodImg: dish4,
                foodName: "Garlic Mushrooms",
                foodPrice: 5.60,
                isAvailable: "12 Bowls available",
                count:1,
                totalPrice:5.60,
            },
            {
                id: 38,
                foodImg: dish5,
                foodName: "Baked Honey Cilantro Lime Salmon",
                foodPrice: 10.30,
                isAvailable: "5 Bowls available",
                count:1,
                totalPrice:10.30,
            }
        
        ]
    },
    {
        id:5,
        item:[
            {
                id: 39,
                foodImg: Dessert1,
                foodName: "Mixed berry mousse",
                foodPrice: 7.90,
                isAvailable: "7 Bowls available",
                count:1,
                totalPrice:7.90
            },
            {
                id: 40,
                foodImg: Dessert2,
                foodName: "Mango and coconut soufflé",
                foodPrice: 3.45,
                isAvailable: "17 Bowls available",
                count:1,
                totalPrice:3.45
            },
            {
                id: 41,
                foodImg: Dessert3,
                foodName: "Homemade carrot cake",
                foodPrice: 14.00,
                isAvailable: "19 Bowls available",
                count:1,
                totalPrice:14.00
            },
            {
                id: 42,
                foodImg: Dessert4,
                foodName: "Matcha cake",
                foodPrice: 25.60,
                isAvailable: "3 Bowls available",
                count:1,
                totalPrice:25.60
            },
            {
                id: 43,
                foodImg: Dessert5,
                foodName: "Vegan chocolate cake",
                foodPrice: 8.45,
                isAvailable: "15 Bowls available",
                count:1,
                totalPrice:8.45
            },
            {
                id: 44,
                foodImg: Dessert6,
                foodName: "Praline and ganache cake",
                foodPrice: 11.60,
                isAvailable: "7 Bowls available",
                count:1,
                totalPrice:11.60
            },
            {
                id: 45,
                foodImg: Dessert7,
                foodName: "Blondie with vanilla ice cream",
                foodPrice: 5.50,
                isAvailable: "6 Bowls available",
                count:1,
                totalPrice:5.50
            },
            {
                id: 46,
                foodImg: Dessert8,
                foodName: "Re-invented cheesecake",
                foodPrice: 17.50,
                isAvailable: "10 Bowls available",
                count:1,
                totalPrice:17.50
            },
            {
                id: 47,
                foodImg: Dessert9,
                foodName: "XL lemon meringue pie",
                foodPrice: 9.47,
                isAvailable: "9 Bowls available",
                count:1,
                totalPrice:9.47
            }
        ]
    },
    {
        id:6,
        item:[
            {
                id: 48,
                foodImg: Appetizer1,
                foodName: "The Only Salsa You Need",
                foodPrice: 5.00,
                isAvailable: "14 Bowls available",
                count:1,
                totalPrice:5.00
            },
            {
                id: 49,
                foodImg: Appetizer2,
                foodName: "Curried Peanut Dip",
                foodPrice: 3.00,
                isAvailable: "2 Bowls available",
                count:1,
                totalPrice:3.00
            },
            {
                id: 50,
                foodImg: Appetizer3,
                foodName: "Giardiniera Antipasto Platter",
                foodPrice: 3.47,
                isAvailable: "4 Bowls available",
                count:1,
                totalPrice:3.47
            },
            {
                id: 51,
                foodImg: Appetizer4,
                foodName: "Mala Fried Peanuts",
                foodPrice: 3.20,
                isAvailable: "37 Bowls available",
                count:1,
                totalPrice:3.20
            },
            {
                id: 52,
                foodImg: Appetizer5,
                foodName: "Relish Tray with D.I.Y. Eggs",
                foodPrice: 2.15,
                isAvailable: "26 Bowls available",
                count:1,
                totalPrice:2.15
            },
            {
                id: 53,
                foodImg: Appetizer6,
                foodName: "Crispy Cheese Twists",
                foodPrice: 3.78,
                isAvailable: "14 Bowls available",
                count:1,
                totalPrice:3.78
            },
            {
                id: 54,
                foodImg: Appetizer7,
                foodName: "Spinach and Feta Tarte Soleil",
                foodPrice: 7.94,
                isAvailable: "16 Bowls available",
                count:1,
                totalPrice:7.94
            },
            {
                id: 55,
                foodImg: Appetizer8,
                foodName: "Ham and Cheese Feuilleté",
                foodPrice: 4.41,
                isAvailable: "7 Bowls available",
                count:1,
                totalPrice:4.41
            },
            {
                id: 56,
                foodImg: Appetizer9,
                foodName: "Cashew Nam Prik",
                foodPrice: 1.98,
                isAvailable: "42 Bowls available",
                count:1,
                totalPrice:1.98
            }
        ]
    }
]

export {Dishes}


