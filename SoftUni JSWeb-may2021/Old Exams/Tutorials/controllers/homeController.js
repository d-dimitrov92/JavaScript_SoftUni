const router = require('express').Router();


router.get('/', async (req, res) => {
    const hasUser = Boolean(req.user);
    const courses = await req.storage.getAllCourses(hasUser, req.query);

    courses.hasUser = hasUser;

    res.render('home', { courses });
});

module.exports = router;