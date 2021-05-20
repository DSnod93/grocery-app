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
      price: 15.99,
      quantity: 500,
      comments: [
        {
          writtenBy: 'Pamela',
          commentBody: 'I prefer the bone in' 
        },
        {
          writtenBy: 'Elijah',
          commentBody: 'Bone out is the best' 
        },
        {
          writtenBy: 'Pamela',
          commentBody: 'Stop right there!' 
        }
      ]
    },
    {
      name: 'Beef',
      description:
        'Eaten since prehistoric times and paired with many dishes',
      image: 'beef.jpg',
      category: categories[0]._id,
      price: 15.99,
      quantity: 300,
      comments: [
        {
          writtenBy: 'Sam',
          commentBody: 'I pair this with potatoes' 
        },
        {
          writtenBy: 'Tammy',
          commentBody: 'That is a loaded meal' 
        },
        {
          writtenBy: 'Sam',
          commentBody: 'Yes indeed!' 
        }
      ]
    },
    {
      name: 'Chicken',
      description:
        'Most common and widely used in a variety of dishes',
      image: 'chicken.jpg',
      category: categories[0]._id,
      price: 15.99,
      quantity: 500,
      comments: [
        {
          writtenBy: 'Jim',
          commentBody: 'Kids love it' 
        },
        {
          writtenBy: 'Tim',
          commentBody: 'Can be prepared with any meal' 
        },
        {
          writtenBy: 'Tammy',
          commentBody: 'Ideal for any meal' 
        }
      ]
    },
    {
      name: 'Pork',
      description:
        'Another commonly used meat worldwide',
      image: 'pork.jpg',
      category: categories[0]._id,
      price: 18.99,
      quantity: 500,
      comments: [
        {
          writtenBy: 'Pamela',
          commentBody: 'The best cuts are found here' 
        },
        {
          writtenBy: 'Jim',
          commentBody: 'I agree with Pam!' 
        }
      ]
    },
    {
      name: 'Turkey',
      description:
        'The lighter option and comes straight from the source',
      image: 'turkey.jpg',
      category: categories[0]._id,
      price: 30.99,
      quantity: 500,
      comments: [
        {
          writtenBy: 'Sam',
          commentBody: 'Best for the holidays' 
        }
      ]
    },
    {
      name: 'Milk',
      category: categories[1]._id,
      description:
        'Varieties including plant based',
      image: 'milk.jpg',
      price: 7.99,
      quantity: 20,
      comments: [
        {
          writtenBy: 'Elijah',
          commentBody: 'Get your calcium here' 
        },
        {
          writtenBy: 'Jim',
          commentBody: 'Are there any non dairy options?' 
        },
        {
          writtenBy: 'Pamela',
          commentBody: 'Yes, you just have to look around ' 
        }
      ]
    },
    {
      name: 'Eggs',
      category: categories[1]._id,
      description:
        'From farm raised to free range',
      image: 'eggs.jpg',
      price: 6.99,
      quantity: 50,
      comments: [
        {
          writtenBy: 'Tammy',
          commentBody: 'What is the difference between farm raised and free range?' 
        }
      ]
    },
    {
      name: 'Cheese',
      category: categories[1]._id,
      description:
        'Paired with crackers or even your favorite dishes',
      image: 'cheese.jpg',
      price: 5.99,
      quantity: 100,
      comments: [
        {
          writtenBy: 'Pamela',
          commentBody: 'Gudda I like the best' 
        },
        {
          writtenBy: 'Jim',
          commentBody: 'Great as a snack' 
        },
        {
          writtenBy: 'Sam',
          commentBody: 'Where is the shredded option?' 
        }
      ]
    },
    {
      name: 'Yogurt',
      category: categories[1]._id,
      description:
        'Grab and go to start your morning',
      image: 'yogurt.jpg',
      price: 6.99,
      quantity: 100,
      comments: [
        {
          writtenBy: 'Tammy',
          commentBody: 'I pair mine with granola' 
        }
      ]
    },
    {
      name: 'Butter',
      category: categories[1]._id,
      description:
        'Add to any dish to give it flavor',
      image: 'butter.jpg',
      price: 4.99,
      quantity: 100,
      comments: [
        {
          writtenBy: 'Tim',
          commentBody: 'Make any food taste better' 
        },
        {
          writtenBy: 'Sam',
          commentBody: 'You should butter your chicken' 
        },
        {
          writtenBy: 'Pamela',
          commentBody: 'Yum!' 
        }
      ]
    },
    {
      name: 'Spinach',
      category: categories[2]._id,
      description:
        'Eat your greens!',
      image: 'spinach.jpg',
      price: 5.99,
      quantity: 30,
      comments: [
        {
          writtenBy: 'Elijah',
          commentBody: 'I will be Popeye some day' 
        },
        {
          writtenBy: 'Tammy',
          commentBody: 'How can I spice them up?' 
        }
      ]
    },
    {
      name: 'Lettuce',
      category: categories[2]._id,
      description:
        'Eat your greens!',
      image: 'lettuce.jpg',
      price: 5.99,
      quantity: 30,
      comments: [
        {
          writtenBy: 'Pamela',
          commentBody: 'Pair with a burger' 
        },
        {
          writtenBy: 'Elijah',
          commentBody: 'I can eat this by itself' 
        }
      ]
    },
    {
      name: 'Tomato',
      category: categories[2]._id,
      description:
        'Goes great in salads and pasta',
      image: 'tomatoes.jpg',
      price: 2.99,
      quantity: 30,
      comments: [
        {
          writtenBy: 'Jim',
          commentBody: 'Cherry tomatoes are small and juicy' 
        }
      ]
    },
    {
      name: 'Onion',
      category: categories[2]._id,
      description:
        'Will leave you in tears after cutting',
      image: 'onion.jpg',
      price: 3.99,
      quantity: 30,
      comments: [
        {
          writtenBy: 'Pamela',
          commentBody: 'Remedy for many things outside of cooking' 
        },
        {
          writtenBy: 'Elijah',
          commentBody: 'I do not like cutting these' 
        }
      ]
    },
    {
      name: 'Garlic',
      category: categories[2]._id,
      description:
        'Keeps all the evil spirits away',
      image: 'garlic.jpg',
      price: 3.99,
      quantity: 30,
      comments: [
        {
          writtenBy: 'Tammy',
          commentBody: 'My body rejects this' 
        }
      ]
    },
    {
      name: 'Bread',
      category: categories[3]._id,
      description:
        'Hot commodity since the Kings and Queens',
      image: 'bread.jpg',
      price: 6.99,
      quantity: 100,
      comments: [
        {
          writtenBy: 'Jim',
          commentBody: 'Dutch crunch' 
        },
        {
          writtenBy: 'Elijah',
          commentBody: 'Sourdough here' 
        },
        {
          writtenBy: 'Pamela',
          commentBody: 'Rye' 
        }
      ]
    },
    {
      name: 'Cookies',
      category: categories[3]._id,
      description:
        'Can never go wrong here',
      image: 'cookies.jpg',
      price: 9.99,
      quantity: 100,
      comments: [
        {
          writtenBy: 'Sam',
          commentBody: 'Where are the soft baked?' 
        }
      ]
    },
    {
      name: 'Cupcakes',
      category: categories[3]._id,
      description:
        'Always a welcoming treat',
      image: 'cupcake.jpg',
      price: 9.99,
      quantity: 100,
      comments: [
        {
          writtenBy: 'Tim',
          commentBody: 'Hard time finding these lately' 
        },
        {
          writtenBy: 'Pamela',
          commentBody: 'I will give them a call' 
        }
      ]
    },
    {
      name: 'Bagels',
      category: categories[3]._id,
      description:
        'Pair with eggs and cream cheese',
      image: 'bagel.jpg',
      price: 6.99,
      quantity: 100,
      comments: [
        {
          writtenBy: 'Jim',
          commentBody: 'Bacon egg and cheese' 
        }
      ]
    },
    {
      name: 'Ice cream',
      category: categories[4]._id,
      description: 'Sundays best',
      image: 'ice-cream.jpg',
      price: 1.99,
      quantity: 1000,
      comments: [
        {
          writtenBy: 'Pamela',
          commentBody: 'Bought for a birthday party recently' 
        },
        {
          writtenBy: 'Elijah',
          commentBody: 'Great for parties' 
        },
        {
          writtenBy: 'Tammy',
          commentBody: 'I wish they had more options' 
        }
      ]
    },
    {
      name: 'Frozen Pizza',
      category: categories[4]._id,
      description:
        'Straight out of the oven',
      image: 'pizza.jpg',
      price: 2.99,
      quantity: 1000,
      comments: [
        {
          writtenBy: 'Elijah',
          commentBody: 'Smells different compared to the restaraunt' 
        }
      ]
    },
    {
      name: 'TV Dinner',
      category: categories[4]._id,
      description:
        'Right out of the microwave',
      image: 'frozen-dinner.jpg',
      price: 9.99,
      quantity: 600,
      comments: [
        {
          writtenBy: 'Jim',
          commentBody: 'Stack on these when you are too lazy to cook' 
        },
        {
          writtenBy: 'Elijah',
          commentBody: 'You can never have too many' 
        }
      ]
    },
    {
      name: 'Veggies',
      category: categories[4]._id,
      description:
        'Second best next to produce',
      image: 'frozen-veggies.jpg',
      price: 9.99,
      quantity: 600,
      comments: [
        {
          writtenBy: 'Pamela',
          commentBody: 'Hard to get my children to eat these' 
        },
        {
          writtenBy: 'Tim',
          commentBody: 'I have the same problem' 
        },
        {
          writtenBy: 'Jim',
          commentBody: 'I do as well' 
        }
      ]
    },
    {
      name: 'Mochi',
      category: categories[4]._id,
      description:
        'Melts right in your mouth',
      image: 'mochi.jpg',
      price: 9.99,
      quantity: 600,
      comments: [
        {
          writtenBy: 'Sam',
          commentBody: 'I always eat the whole box' 
        }
      ]
    },
    {
      name: 'Candy Bars',
      category: categories[5]._id,
      description:
        'Grab me at the checkout',
      image: 'candy.jpg',
      price: 1.99,
      quantity: 600,
      comments: [
        {
          writtenBy: 'Pamela',
          commentBody: 'They should put these far from the register' 
        }
      ]
    },
    {
      name: 'Chips',
      category: categories[5]._id,
      description:
        'A party friend',
      image: 'chips.jpg',
      price: 7.99,
      quantity: 600,
      comments: [
        {
          writtenBy: 'Tammy',
          commentBody: 'Anyone have any reccommendations' 
        },
        {
          writtenBy: 'Elijah',
          commentBody: 'Lays' 
        },
        {
          writtenBy: 'Tim',
          commentBody: 'The barbequed lays' 
        }
      ]
    },
    {
      name: 'Snack Bars',
      category: categories[5]._id,
      description:
        'Take one for the long trip ahead',
      image: 'snack-bar.jpg',
      price: 7.99,
      quantity: 600,
      comments: [
        {
          writtenBy: 'Pamela',
          commentBody: 'Pack for a snack later' 
        },
        {
          writtenBy: 'Sam',
          commentBody: 'I eat one after a workout' 
        }
      ]
    },
    {
      name: 'Energy Bars',
      category: categories[5]._id,
      description:
        'Kickstart your day',
      image: 'energy-bar.jpg',
      price: 11.99,
      quantity: 600,
      comments: [
        {
          writtenBy: 'Pamela',
          commentBody: 'Loaded with tons of protein' 
        }
      ]
    },
    {
      name: 'Trail Mix',
      category: categories[5]._id,
      description:
        "I'm a hikers best friend",
      image: 'trail-mix.jpg',
      price: 9.99,
      quantity: 600,
      comments: [
        {
          writtenBy: 'Tim',
          commentBody: 'I prefer the nuts and chews' 
        },
        {
          writtenBy: 'Elijah',
          commentBody: 'Yes the variety is good' 
        }
      ]
    },
    {
      name: 'Soda',
      category: categories[6]._id,
      description:
        'Sugar sugar sugar',
      image: 'soda.jpg',
      price: 1.99,
      quantity: 600,
      comments: [
        {
          writtenBy: 'Pamela',
          commentBody: 'Pepsi or coke' 
        },
        {
          writtenBy: 'Elijah',
          commentBody: 'They kind of taste the same' 
        }
      ]
    },
    {
      name: 'Water',
      category: categories[6]._id,
      description:
        'Hydrate hydrate hydrate',
      image: 'water.jpg',
      price: 1.99,
      quantity: 600,
      comments: [
        {
          writtenBy: 'Sam',
          commentBody: 'Always have for an emergency' 
        }
      ]
    },
    {
      name: 'Juice',
      category: categories[6]._id,
      description:
        'Concentrate concentrate concentrate',
      image: 'juice.jpg',
      price: 3.99,
      quantity: 600,
      comments: [
        {
          writtenBy: 'Tammy',
          commentBody: 'I like the apple juice flavor' 
        },
        {
          writtenBy: 'Elijah',
          commentBody: 'For me it would be grape' 
        },
        {
          writtenBy: 'Pamela',
          commentBody: 'My kids love these' 
        }
      ]
    },
    {
      name: 'Sports Drink',
      category: categories[6]._id,
      description:
        'Fuel up!',
      image: 'sports-drink.jpg',
      price: 3.99,
      quantity: 600,
      comments: [
        {
          writtenBy: 'Pamela',
          commentBody: 'Stack up on those carbs' 
        }
      ]
    },
    {
      name: 'Energy Drink',
      category: categories[6]._id,
      description:
        'Kickstart',
      image: 'energy-drink.jpg',
      price: 4.99,
      quantity: 600,
      comments: [
        {
          writtenBy: 'Jim',
          commentBody: 'Feel great now and crash later' 
        }
      ]
    },
    {
      name: 'Ketchup',
      category: categories[7]._id,
      description:
        'Extra extra',
      image: 'ketchup.jpg',
      price: 6.99,
      quantity: 600,
      comments: [
        {
          writtenBy: 'Jim',
          commentBody: 'BBQ must have' 
        },
        {
          writtenBy: 'Elijah',
          commentBody: 'Agreed' 
        },
      ]
    },
    {
      name: 'Mustard',
      category: categories[7]._id,
      description:
        'Extra',
      image: 'mustard.jpg',
      price: 6.99,
      quantity: 600,
      comments: [
        {
          writtenBy: 'Tim',
          commentBody: 'You can make dressings with this' 
        }
      ]
    },
    {
      name: 'Mayonaise',
      category: categories[7]._id,
      description:
        'Extra extra',
      image: 'mayo.jpg',
      price: 6.99,
      quantity: 600,
      comments: [
        {
          writtenBy: 'Pamela',
          commentBody: 'Just an additional taste' 
        },
        {
          writtenBy: 'Elijah',
          commentBody: 'Helps witht the dryest foods' 
        }
      ]
    },
    {
      name: 'Relish',
      category: categories[7]._id,
      description:
        'Extra extra',
      image: 'relish.jpg',
      price: 6.99,
      quantity: 600,
      comments: [
        {
          writtenBy: 'Sam',
          commentBody: 'Not for my taste buds' 
        },
        {
          writtenBy: 'Elijah',
          commentBody: 'This is bleeeh' 
        },
        {
          writtenBy: 'Pamela',
          commentBody: 'Not a fan' 
        }
      ]
    },
    {
      name: 'Pickles',
      category: categories[7]._id,
      description:
        'Sour and salty',
      image: 'pickles.jpg',
      price: 9.99,
      quantity: 600,
      comments: [
        {
          writtenBy: 'Sam',
          commentBody: 'Very salty' 
        },
        {
          writtenBy: 'Elijah',
          commentBody: 'Do you eat them whole or cut?' 
        }
      ]
    },
    {
      name: 'Beer',
      category: categories[8]._id,
      description:
        'Chugga chugga',
      image: 'beer.jpg',
      price: 9.99,
      quantity: 600,
      comments: [
        {
          writtenBy: 'Jim',
          commentBody: 'Serve chilled' 
        }
      ]
    },
    {
      name: 'Wine',
      category: categories[8]._id,
      description:
        'Grapevine',
      image: 'wine.jpg',
      price: 9.99,
      quantity: 600,
      comments: [
        {
          writtenBy: 'Pamela',
          commentBody: 'I like both the red and white' 
        },
        {
          writtenBy: 'Elijah',
          commentBody: 'Too many decisions' 
        }
      ]
    },
    {
      name: 'Shrimp',
      category: categories[9]._id,
      description:
        'Bottom feeders of the sea',
      image: 'shrimp.jpg',
      price: 9.99,
      quantity: 600,
      comments: [
        {
          writtenBy: 'Pamela',
          commentBody: 'Try these barbequed' 
        },
      ]
    },
    {
      name: 'Crabs',
      category: categories[9]._id,
      description:
        'Catch me if you can',
      image: 'crab.jpg',
      price: 9.99,
      quantity: 600,
      comments: [
        {
          writtenBy: 'Jim',
          commentBody: 'Boil them thoroughly' 
        },
        {
          writtenBy: 'Sam',
          commentBody: 'Takes a while to cook but worth it' 
        }
      ]
    },
    {
      name: 'Lobsters',
      category: categories[9]._id,
      description:
        'Ready to grab you',
      image: 'lobster.jpg',
      price: 9.99,
      quantity: 600,
      comments: [
        {
          writtenBy: 'Pamela',
          commentBody: 'These have become expensive' 
        },
        {
          writtenBy: 'Elijah',
          commentBody: 'Harder to find what I usually buy' 
        }
      ]
    },
    {
      name: 'Fish',
      category: categories[9]._id,
      description:
        'There is a school of us',
      image: 'fish.jpg',
      price: 9.99,
      quantity: 600,
      comments: [
        {
          writtenBy: 'Tammy',
          commentBody: 'Tilapia is the lightest for any meal' 
        },
        {
          writtenBy: 'Elijah',
          commentBody: 'I would disagree with you on that' 
        }
      ]
    },
    {
      name: 'Oysters',
      category: categories[9]._id,
      description:
        'Slimy slimy',
      image: 'oysters.jpg',
      price: 9.99,
      quantity: 600,
      comments: [
        {
          writtenBy: 'Pamela',
          commentBody: 'My kids like them cooked' 
        }
      ]
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
    firstName: 'Sam',
    lastName: 'Butters',
    email: 'butters@testmail.com',
    password: 'password12345'
  });

  await User.create({
    firstName: 'Tammy',
    lastName: 'Fields',
    email: 'fields@testmail.com',
    password: 'password12345'
  });

  await User.create({
    firstName: 'Tim',
    lastName: 'Hunter',
    email: 'hunter@testmail.com',
    password: 'password12345'
  });

  await User.create({
    firstName: 'Jim',
    lastName: 'Clover',
    email: 'clover@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
