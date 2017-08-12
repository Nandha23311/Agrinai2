var User = require('./controllers/UserController.js');

module.exports = function(router)
{
router.post('/agri/v1/login', User.login);
router.post('/agri/v1/newuser',User.newUser);
};