const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Deli' },
    { name: 'Dairy' },
    { name: 'Produce' },
    { name: 'Bakery' },
    { name: 'Frozen' },
    { name: 'Snacks'},
    { name: 'Beverages'},
    { name:'Condiments'},
    { name: 'Alcohol'},
    { name: 'Seafood'}
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Ham',
      description:
        'Bone in or bone out. Sliced or unsliced',
      image: 'ham.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500,
      comments: [
        {
          writtenBy: 'Pamela',
          commentBody: 'This is a test' 
        },
        {
          writtenBy: 'Elijah',
          commentBody: 'This is also a test' 
        },
        {
          writtenBy: 'Pamela',
          commentBody: 'This is yet another test' 
        }
      ]
    },
    {
      name: 'Beef',
      description:
        'Eaten since prehistoric times and paired with many dishes',
      image: 'beef.jpg',
      category: categories[0]._id,
      price: 5.99,
      quantity: 500
    },
    {
      name: 'Chicken',
      description:
        'Most common and widely used in a variety of dishes',
      image: 'chicken.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'Pork',
      description:
        'Another commonly used meat worldwide',
      image: 'pork.jpg',
      category: categories[0]._id,
      price: 5.99,
      quantity: 500
    },
    {
      name: 'Turkey',
      description:
        'The lighter option and comes straight from the source',
      image: 'turkey.jpg',
      category: categories[0]._id,
      price: 1.99,
      quantity: 500
    },
    {
      name: 'Milk',
      category: categories[1]._id,
      description:
        'Varieties including plant based',
      image: 'milk.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Eggs',
      category: categories[1]._id,
      description:
        'From farm raised to free range',
      image: 'eggs.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Cheese',
      category: categories[1]._id,
      description:
        'Paired with crackers or even your favorite dishes',
      image: 'cheese.jpg',
      price: 5.99,
      quantity: 100
    },
    {
      name: 'Yogurt',
      category: categories[1]._id,
      description:
        'Grab and go to start your morning',
      image: 'yogurt.jpg',
      price: 6.99,
      quantity: 100
    },
    {
      name: 'Butter',
      category: categories[1]._id,
      description:
        'Add to any dish to give it flavor',
      image: 'butter.jpg',
      price: 4.99,
      quantity: 100
    },
    {
      name: 'Spinach',
      category: categories[2]._id,
      description:
        'Eat your greens!',
      image: 'spinach.jpg',
      price: 5.99,
      quantity: 30
    },
    {
      name: 'Lettuce',
      category: categories[2]._id,
      description:
        'Eat your greens!',
      image: 'lettuce.jpg',
      price: 5.99,
      quantity: 30
    },
    {
      name: 'Tomato',
      category: categories[2]._id,
      description:
        'Goes great in salads and pasta',
      image: 'tomatoes.jpg',
      price: 2.99,
      quantity: 30
    },
    {
      name: 'Onion',
      category: categories[2]._id,
      description:
        'Will leave you in tears after cutting',
      image: 'onion.jpg',
      price: 3.99,
      quantity: 30
    },
    {
      name: 'Garlic',
      category: categories[2]._id,
      description:
        'Keeps all the evil spirits away',
      image: 'garlic.jpg',
      price: 3.99,
      quantity: 30
    },
    {
      name: 'Bread',
      category: categories[3]._id,
      description:
        'Hot commodity since the Kings and Queens',
      image: 'bread.jpg',
      price: 6.99,
      quantity: 100
    },
    {
      name: 'Cookies',
      category: categories[3]._id,
      description:
        'Can never go wrong here',
      image: 'cookies.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Cupcakes',
      category: categories[3]._id,
      description:
        'Always a welcoming treat',
      image: 'cupcake.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Bagels',
      category: categories[3]._id,
      description:
        'Pair with eggs and cream cheese',
      image: 'bagel.jpg',
      price: 6.99,
      quantity: 100
    },
    {
      name: 'Ice cream',
      category: categories[4]._id,
      description: 'Sundays best',
      image: 'ice-cream.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Frozen Pizza',
      category: categories[4]._id,
      description:
        'Straight out of the oven',
      image: 'pizza.jpg',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'TV Dinner',
      category: categories[4]._id,
      description:
        'Right out of the microwave',
      image: 'frozen-dinner.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Frozen Vegetables',
      category: categories[4]._id,
      description:
        'Second best next to produce',
      image: 'frozen-veggies.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Mochi',
      category: categories[4]._id,
      description:
        'Melts right in your mouth',
      image: 'mochi.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Candy Bars',
      category: categories[5]._id,
      description:
        'Grab me at the checkout',
      image: 'candy.jpg',
      price: 1.99,
      quantity: 600
    },
    {
      name: 'Chips',
      category: categories[5]._id,
      description:
        'A party friend',
      image: 'chips.jpg',
      price: 7.99,
      quantity: 600
    },
    {
      name: 'Snack Bars',
      category: categories[5]._id,
      description:
        'Take one for the long trip ahead',
      image: 'snack-bar.jpg',
      price: 7.99,
      quantity: 600
    },
    {
      name: 'Energy Bars',
      category: categories[5]._id,
      description:
        'Kickstart your day',
      image: 'energy-bar.jpg',
      price: 11.99,
      quantity: 600
    },
    {
      name: 'Trail Mix',
      category: categories[5]._id,
      description:
        "I'm a hikers best friend",
      image: 'trail-mix.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Soda',
      category: categories[6]._id,
      description:
        'Sugar sugar sugar',
      image: 'soda.jpg',
      price: 1.99,
      quantity: 600
    },
    {
      name: 'Water',
      category: categories[6]._id,
      description:
        'Hydrate hydrate hydrate',
      image: 'water.jpg',
      price: 1.99,
      quantity: 600
    },
    {
      name: 'Juice',
      category: categories[6]._id,
      description:
        'Concentrate concentrate concentrate',
      image: 'juice.jpg',
      price: 3.99,
      quantity: 600
    },
    {
      name: 'Sports Drink',
      category: categories[6]._id,
      description:
        'Fuel up!',
      image: 'sports-drink.jpg',
      price: 3.99,
      quantity: 600
    },
    {
      name: 'Energy Drink',
      category: categories[6]._id,
      description:
        'Kickstart',
      image: 'energy-drink.jpg',
      price: 4.99,
      quantity: 600
    },
    {
      name: 'Ketchup',
      category: categories[7]._id,
      description:
        'Extra extra',
      image: 'ketchup.jpg',
      price: 6.99,
      quantity: 600
    },
    {
      name: 'Mustard',
      category: categories[7]._id,
      description:
        'Extra',
      image: 'mustard.jpg',
      price: 6.99,
      quantity: 600
    },
    {
      name: 'Mayonaise',
      category: categories[7]._id,
      description:
        'Extra extra',
      image: 'mayo.jpg',
      price: 6.99,
      quantity: 600
    },
    {
      name: 'Relish',
      category: categories[7]._id,
      description:
        'Extra extra',
      image: 'relish.jpg',
      price: 6.99,
      quantity: 600
    },
    {
      name: 'Pickles',
      category: categories[7]._id,
      description:
        'Sour and salty',
      image: 'pickles.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Beer',
      category: categories[8]._id,
      description:
        'Chugga chugga',
      image: 'beer.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Wine',
      category: categories[8]._id,
      description:
        'Grapevine',
      image: 'wine.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Shrimp',
      category: categories[9]._id,
      description:
        'Bottom feeders of the sea',
      image: 'shrimp.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Crabs',
      category: categories[9]._id,
      description:
        'Catch me if you can',
      image: 'crab.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Lobsters',
      category: categories[9]._id,
      description:
        'Ready to grab you',
      image: 'lobster.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Fish',
      category: categories[9]._id,
      description:
        'There is a school of us',
      image: 'fish.jpg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Oysters',
      category: categories[9]._id,
      description:
        'Slimy slimy',
      image: 'oysters.jpg',
      price: 9.99,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  await User.create({
    firstName: 'Test',
    lastName: 'User',
    email: 'test@email.com',
    password: 'password'
  });

  console.log('users seeded');

  process.exit();
});
