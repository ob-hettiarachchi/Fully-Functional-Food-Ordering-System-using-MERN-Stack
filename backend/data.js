import bcrypt from 'bcryptjs';

const data = {

    users: [
        {
          name: 'Dilan',
          email: 'admin@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
          name: 'John',
          email: 'user@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
      ],

    products:[
        {
           
            name: 'a',
            category: 'Rice',
            image: '/images/f1.jpg',
            price: 120,
            countInStock:10,
            brand: 'BREEZE',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality food'
        },
        {
           
            name: 'b',
            category: 'Rice',
            image: '/images/f2.jpg',
            price: 120,
            countInStock:0,
            brand: 'BREEZE',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality food'
        },
        {
           
            name: 'c',
            category: 'Rice',
            image: '/images/f3.jpg',
            price: 120,
            countInStock:30,
            brand: 'BREEZE',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality food'
        },
        {
            
            name: 'd',
            category: 'Rice',
            image: '/images/f4.jpg',
            price: 120,
            countInStock:40,
            brand: 'BREEZE',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality food'
        },
        {
            
            name: 'e',
            category: 'Rice',
            image: '/images/f5.jpg',
            price: 120,
            countInStock:50,
            brand: 'BREEZE',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality food'
        },
        {
           
            name: 'f',
            category: 'Rice',
            image: '/images/f6.jpg',
            price: 120,
            countInStock:60,
            brand: 'BREEZE',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality food'
        },
        {
           
            name: 'g',
            category: 'Rice',
            image: '/images/f7.jpg',
            price: 120,
            countInStock:60,
            brand: 'BREEZE',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality food'
        },
        {
            
            name: 'h',
            category: 'Rice',
            image: '/images/f8.jpg',
            price: 120,
            countInStock:60,
            brand: 'BREEZE',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality food'
        },
        {
            
            name: 'i',
            category: 'Rice',
            image: '/images/f9.jpg',
            price: 120,
            countInStock:60,
            brand: 'BREEZE',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality food'
        },
        {
            
            name: 'j',
            category: 'Rice',
            image: '/images/f10.jpg',
            price: 120,
            countInStock:60,
            brand: 'BREEZE',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality food'
        },
        {
            
            name: 'k',
            category: 'Rice',
            image: '/images/f11.jpg',
            price: 120,
            countInStock:60,
            brand: 'BREEZE',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality food'
        },
        {
            
            name: 'l',
            category: 'Rice',
            image: '/images/f12.jpg',
            price: 120,
            countInStock:60,
            brand: 'BREEZE',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality food'
        },


    ],
};

export default data;