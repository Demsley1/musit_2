const {User}= require('../models')

const userData=[
    {
        username: 'B.D',
        email: 'test1@yahoo.com',
        password: 'password'
    },
    {
        username: 'C.D',
        email: 'test2@mail.com',
        password: 'password'
    },
    {
        username: 'D.E',
        email: 'test3@hotmail.com',
        password: 'password'
    },
    {
        username: 'L.B.C',
        email: 'test4@gmail.com',
        password: 'password'
    },
    {
        username: 'R.B',
        email: 'test5@gmail.com',
        password: 'password'
    }
    /*{
        username: 'Ash',
        email: 'test6@gmail.com',
        password: 'password'
    },
    {
        username: 'Roby',
        email: 'test7@gmail.com',
        password: 'password'
<<<<<<< HEAD
    }*/
=======
    }
>>>>>>> 3739e302b596547686e8581ba0b1c27b14b7aa58

]

const seedUser = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUser;