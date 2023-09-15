const router = require('express').Router();

const {
  showUserInfo,
  updateProfile,
} = require('../controllers/users');

const { userUpdateValidate } = require('../middlewares/validation');

router.get('/me/', showUserInfo);
router.patch('/me/', userUpdateValidate, updateProfile);

module.exports = router;
