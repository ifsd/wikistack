const router = require('express').Router();
const { Page } = require('../models');
const addPage = require('../views/addPage');


router.get('/', async (req, res) => {
  res.send('hola caracola');
});
router.post('/', (req, res) => {
  const {title, content} = req.body

  try {
    const page = await Page.create({
      title,
      content
    })
  }

  res.redirect('/')

});
router.get('/add', (req, res) => {
  res.send(addPage());
});

module.exports = router;
