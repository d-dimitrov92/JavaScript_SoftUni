const router = require('express').Router();

const { isUser } = require('../middlewares/guards');


router.get('/create', isUser(), async (req, res) => {
    const hotels = await req.storage.getAllHotels();

    res.render('hotel/create', { hotels });
});

router.post('/create', isUser(), async (req, res) => {
    const hotelData = {
        name: req.body.name,
        city: req.body.city,
        imageUrl: req.body.imageUrl,
        rooms: req.body.rooms,
        bookedBy: [],
        owner: req.user._id
    }
    try {
        await req.storage.createHotel(hotelData);

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
            hotelData: {
                name: req.body.name,
                city: req.body.city,
                imageUrl: req.body.imageUrl,
                rooms: req.body.rooms
            }
        }

        res.render('hotel/create', ctx);
    }
});

router.get('/details/:id', isUser(), async (req, res) => {
    try {
        const hotel = await req.storage.getHotelById(req.params.id);

        hotel.hasUser = Boolean(req.user);
        hotel.isAuthor = req.user && req.user._id == hotel.owner;
        hotel.isBooked = req.user && hotel.bookedBy.find(x => x == req.user._id);

        res.render('hotel/details', { hotel });
    } catch (err) {
        console.log(err.message);
        res.redirect('/404');
    }
});

router.post('/edit/:id', isUser(), async (req, res) => {
    try {
        const hotel = await req.storage.getHotelById(req.params.id);

        if (req.user._id != hotel.owner) {
            throw new Error('You cannot edit hotel you haven\'t create')
        }

        await req.storage.editHotel(req.params.id, req.body);

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
            hotel: {
                _id: req.params.id,
                name: req.body.name,
                city: req.body.city,
                imageUrl: req.body.imageUrl,
                rooms: req.body.rooms
            }
        }

        res.render('hotel/edit', ctx);
    }
});

router.get('/edit/:id', isUser(), async (req, res) => {
    try {
        const hotel = await req.storage.getHotelById(req.params.id);

        if (req.user._id != hotel.owner) {
            throw new Error('You cannot edit hotel that you haven\'t create')
        }

        res.render('hotel/edit', { hotel });

    } catch (err) {
        console.log(err.message);
        res.redirect('/');
    }
});

router.get('/book/:id', isUser(), async (req, res) => {
    try {
        await req.storage.bookHotel(req.params.id, req.user._id);

        res.redirect('/hotel/details/' + req.params.id);

    } catch (err) {
        console.log(err.message);
        res.redirect('/');
    }

});

router.get('/delete/:id', isUser(), async (req, res) => {
    try {
        await req.storage.deleteHotel(req.params.id);
        res.redirect('/');
    } catch (err) {
        console.log(err.message);
        res.reditect('/404');
    }

});

module.exports = router;