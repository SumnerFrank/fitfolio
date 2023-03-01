const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Comment, Post, User, Workout } = require('../../models');

// Gets all users
router.get('/', (req, res) => {
    User.findAll({
        attributes: {
            exclude: ['password']
        }
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Gets individual user 
router.get('/:id', (req, res) => {
    User.findOne({
      attributes: {
          exclude: ['password']
      },
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Post,
          attributes: [
              'id',
              'post_title',
              'post_body',
              'created_at'
          ]
        },
        {
          model: Comment,
          attributes: [
              'id',
              'comment_body',
              'created_at'
          ],
          include: {
              model: Post,
              attributes: ['post_title']
          }
        }
      ]
  })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({ message: 'User ID Not Found.' });
            return;
        } res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Creates a new user 
router.post('/', (req, res) => {
    User.create({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password
    })
    .then(dbUserData => {
        res.json(dbUserData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Deletes an existing user 
router.delete('/:id', (req, res) => {
    User.destroy({ where: {id: req.params.id} })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'User Not Found' });
            return;
        }
    })
    .then(() => {
        res.json({ message:'User Successfully Deleted' })
    })
    .catch(err => res.status(400).json(err));
});

// Logs user in
router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.name = userData.name;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });

// Logs user out 
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });


  module.exports = router;
