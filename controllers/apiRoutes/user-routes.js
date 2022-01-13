const router = require('express').Router();;
const { User, Playlist } = require('../../models');

router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password']},
    }).then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

router.get('/', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        },
        attributes: { exclude: ['password']},
        include: [
            {
                model: Playlist,
                attributes: ['id', 'artist', 'song_title', 'genre', 'created_at']
            }
        ]
    }).then(dbUserData => {
        if(!dbUserData){
            res.status(404).json({ message: 'No User found with this id' });
            return;
        }
        res.json(dbUserData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }).then(dbUserData => {
        req.session.save(() => {
            req.session.user_id = dbUserData.id,
            req.session.username = dbUserData.username,
            req.session.loggedIn = true;

            res.json(dbUserData);
        })
    })
});

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUserData => {
        if(!dbUserData){
            res.status(404).json({ message: "No user found with this id"});
            return;
        }
        const validPW = dbUserData.queryPW(req.body.password);

        if(!validPW){
            res.status(400).json({ message: "invalid password for user" });
            return;
        }
        
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json({ user: dbUserData, message: 'You are now logged in!' });
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
});

router.post('/logout', (req, res) => {
    if(req.session.loggedIn){
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

router.put('/:id', (req, res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    }).then(dbUserData => {
        if(!dbUserData){
            res.status(404).json({ message: "No user found with this id"});
            return;
        }
        res.json(dbUserData)
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbUserData => {
        if(!dbUserData){
            res.status(400).json({ message: "No user found with this id"});
            return;
        }
        res.json(dbUserData)
    }).catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

module.exports = router;