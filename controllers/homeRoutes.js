const router = require('express').Router();

const { Post, User, Comment, Workout } = require('../models')

router.get('/posts', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'post_title',
            'post_body',
            'user_id'
        ], 
        include: [
            {
                model: Comment,
                attributes: [
                    'id',
                    'comment_body',
                    'post_id',
                    'user_id',
                ],
                include: {
                    model: User,
                    attributes: ['userName']
                }
            },
            {
                model: User,
                attribute: ['userName']
            }
        ]
    })
    .then(dbPostData => {
        const feed = dbPostData.map(post => post.get({ plain: true }));
        console.log(feed);
        res.render('feed', {
            feed, 
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
// WORKOUTS/EXERCISE ROUTES

router.get('/exercise', (req, res) => {
    Workout.findAll({
        // include: [
        //     {
        //         model: Comment,
        //         attributes: [
        //             'id',
        //             'comment_body',
        //             'post_id',
        //             'user_id',
        //         ],
        //         include: {
        //             model: User,
        //             attrubutes: ['userName']
        //         }
        //     },
        //     {
        //         model: User,
        //         attribute: ['userName']
        //     }
        // ]
        // TO DO: REVIEW THIS
    })
    .then(dbPostData => {
        const exercises = dbPostData.map(post => post.get({ plain: true }));
        console.log(exercises);
        res.render('exercise', {
            exercises, 
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET REQUEST FOR CREATED WORKOUT
// router.get('/exercise', (req, res) => {
//     // res.render('exercise'),
//     console.log('exercise')
// TO DO: GET ALL WORKOUTS WILL NEED MORE WORK

router.get('/index', (req, res) => {
    Workout.findAll({
        // include: [
        //     {
        //         model: Comment,
        //         attributes: [
        //             'id',
        //             'comment_body',
        //             'post_id',
        //             'user_id',
        //         ],
        //         include: {
        //             model: User,
        //             attrubutes: ['userName']
        //         }
        //     },
        //     {
        //         model: User,
        //         attribute: ['userName']
        //     }
        // ]
        // TO DO: REVIEW THIS
    })
    .then(dbPostData => {
        const indexStats = dbPostData.map(post => post.get({ plain: true }));
        console.log(indexStats);
        res.render('index', {
            indexStats, 
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});



//landing page at localhost:3001/
router.get('/', (req, res) => {
    
    res.render('homepage.handlebars', {
        loggedIn: req.session.loggedIn
    });

});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
})

// when a user comes to this route
router.get('/dashboard', (req, res) => {
    // get the users id
    const user_id = 1 // 
    // call the db to get all the user workouts
    Workout.findAll({
        where: {
            user_id: user_id 
        }
    }).then((workouts) => {
        // console log workouts
        console.log('workouts');
        console.log(workouts);
        // render the page w/ that data
        res.render('dashboard');
    }).catch((err) => {
        console.error(err)
    })

});

module.exports = router;