const router = require('express').Router();

const { Post, User, Comment } = require('../models')

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
                    attrubutes: ['userName']
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

module.exports = router;