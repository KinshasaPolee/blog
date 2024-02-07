const express = require('express');
const router = express.Router();

// Routes
router.get('', (req, res) => {
    const locals = {
        title: "Happiness Blog",
        description: "Happiness is the root of all good."
}
});
router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;