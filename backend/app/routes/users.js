const express = require('express');
const models = require('../models');

const router = express.Router();

/* GET users listing. */
router.get('/', async (req, res) => {
  const users = await models.User.findAll({ attributes: ['name', 'email', 'country'] });
  res.status(200).json(users);
});

/* Get user details. */
router.get('/:email', async (req, res) => {
  const user = await models.User.findOne({ where: { email: req.params.email }, attributes: ['name', 'email', 'country', 'address'] });
  res.status(200).json(user);
});

module.exports = router;
