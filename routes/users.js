const router = require('express').Router();

// router.get('/', (req, res) => {
//   res.send('hola caracola');
// });
router.post('/', (req, res) => {
  res.send(req.body);
});
// router.get('/add', (req, res) => {
//   res.send(addPage());
// });

module.exports = router;
