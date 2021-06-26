const { isUser } = require('../middlewares/guards');

const router = require('express').Router();



router.get('/create', isUser(), (req, res) => {
    res.render('plays/create');
});

router.post('/create', isUser(), async (req, res) => {
    try {
        const playData = {
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            isPublic: Boolean(req.body.isPublic),
            author: req.user._id
        }

        const play = await req.storage.createPlay(playData);
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
            playData: {
                title: req.body.title,
                description: req.body.description,
                imageUrl: req.body.imageUrl,
                isPublic: Boolean(req.body.isPublic)
            }
        }

        res.render('plays/create', ctx);
    }
});

router.get('/details/:id', async (req, res) => {
    try {
        const play = await req.storage.getPlayById(req.params.id);

        play.likes = play.usersLiked.length;
        play.hasUser = Boolean(req.user);
        play.isAuthor = req.user && req.user._id == play.author;
        play.liked = req.user && play.usersLiked.find(u => u._id == req.user._id);

        res.render('plays/details', { play });
    } catch (err) {
        console.log(err.message);
        res.redirect('/404');
    }

});

router.post('/edit/:id', isUser(), async (req, res) => {
    try {
        const play = await req.storage.getPlayById(req.params.id);

        if (req.user._id != play.author) {
            throw new Error('You cannot edit play you haven\'t create')
        }
        console.log(req.body);
        await req.storage.editPlay(req.params.id, req.body);

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
            playData: {
                _id: req.params.id,
                title: req.body.title,
                description: req.body.description,
                imageUrl: req.body.imageUrl,
                isPublic: Boolean(req.body.isPublic)
            }
        }

        res.render('plays/edit', ctx);
    }
});

router.get('/edit/:id', isUser(), async (req, res) => {
    try {
        const playData = await req.storage.getPlayById(req.params.id);

        if (req.user._id != playData.author) {
            throw new Error('You cannot edit play that you haven\'t create')
        }

        res.render('plays/edit', { playData });

    } catch (err) {
        console.log(err.message);
        res.redirect('/plays/details/' + req.params.id);
    }
});

router.get('/delete/:id', isUser(), async (req, res) => {
    try {
        const play = await req.storage.getPlayById(req.params.id);

        if (play.author != req.user._id) {
            throw new Error('Cannot delete play you havent created');
        }

        await req.storage.deletePlay(req.params.id);
        res.redirect('/');
    } catch (err) {
        console.log(err.message);
        res.redirect('/plays/details/' + req.params.id);
    }
});

router.get('/like/:id', isUser(), async (req, res) => {
    try {
        const play = await req.storage.getPlayById(req.params.id);

        if (play.author == req.user._id) {
            throw new Error('Cannot like your own play');
        }

        await req.storage.likePlay(req.params.id, req.user._id);
        res.redirect('/plays/details/' + req.params.id);
    } catch (err) {
        console.log(err.message);
        res.redirect('/plays/details/' + req.params.id);
    }
});

module.exports = router;