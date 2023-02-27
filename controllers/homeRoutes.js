const router = require('express').Router();

const { Post, User, Comment } = require('../models')

router.get('/example', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'post_title',
            'post_body',
            'user_id',
            'created_at'
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
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('example', {
            posts, 
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
    
    res.render('homepage.handlebars');
});
//render feed page at localhost:3001/feed
router.get('/feed', (req, res) => {
    
    res.render('feed.handlebars');
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