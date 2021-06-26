const router = require('express').Router();

const { isUser } = require('../middlewares/guards')


router.get('/create', isUser(), async (req, res) => {
    res.render('course/create');
});

router.post('/create', isUser(), async (req, res) => {
    try {
        const courseData = {
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            duration: req.body.duration,
            author: req.user._id
        }

        await req.storage.createCourse(courseData);
        res.redirect('/');
    } catch (err) {
        let errors;
        if (err.errors) {
            errors = Object.values(err.errors).map(e => e.properties.message);
        } else {
            errors = [err.message];
        }

        const ctx = {
            errors,
            courseData: {
                title: req.body.title,
                description: req.body.description,
                imageUrl: req.body.imageUrl,
                duration: req.body.duration
            }
        }

        res.render('course/create', ctx);
    }
});

router.get('/details/:id', isUser(), async (req, res) => {
    const course = await req.storage.getCourseById(req.params.id);

    course.enrolls = course.usersEnrolled.length;
    course.hasUser = req.user;
    course.isAuthor = req.user && req.user._id == course.author;
    course.enrolled = req.user && course.usersEnrolled.find(u => u._id == req.user._id);

    res.render('course/details', { course })
});

router.get('/edit/:id', isUser(), async (req, res) => {
    try {
        const courseData = await req.storage.getCourseById(req.params.id);

        if (req.user._id != courseData.author) {
            throw new Error('You cannot edit course you haven\'t create')
        }

        res.render('course/edit', { courseData });

    } catch (err) {
        console.log(err.message);
        res.redirect('/course/details/' + req.params.id);
    }

});

router.post('/edit/:id', isUser(), async (req, res) => {
    try {
        const courseData = await req.storage.getCourseById(req.params.id);

        if (req.user._id != courseData.author) {
            throw new Error('You cannot edit course you haven\'t create')
        }

        await req.storage.editCourse(req.params.id, req.body);

        res.redirect('/course/details/' + req.params.id);

    } catch (err) {
        let errors;

        if (err.errors) {
            errors = Object.values(err.errors).map(e => e.properties.message);
        } else {
            errors = [err.message];
        }

        const ctx = {
            errors,
            courseData: {
                title: req.body.title,
                description: req.body.description,
                imageUrl: req.body.imageUrl,
                duration: req.body.duration
            }
        }

        res.render('course/edit', ctx);
    }
});

router.get('/delete/:id', isUser(), async (req, res) => {
    try {
        const course = await req.storage.getCourseById(req.params.id);

        if (course.author != req.user._id) {
            throw new Error('Cannot delete course you havent created');
        }

        await req.storage.deleteCourse(req.params.id);
        res.redirect('/');
    } catch (err) {
        console.log(err.message);
        res.redirect('/course/details/' + req.params.id);
    }
});

router.get('/enroll/:id', isUser(), async (req, res) => {
    try {
        const course = await req.storage.getCourseById(req.params.id);

        if (course.author == req.user._id) {
            throw new Error('Cannot enroll your own course');
        }

        await req.storage.enrollCourse(req.params.id, req.user._id);
        res.redirect('/course/details/' + req.params.id);
    } catch (err) {
        console.log(err.message);
        res.redirect('/course/details/' + req.params.id);
    }
});

module.exports = router;