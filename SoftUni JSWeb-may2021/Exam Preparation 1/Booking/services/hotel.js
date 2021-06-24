const Hotel = require("../models/Hotel");
const User = require("../models/User");


async function createHotel(hotelData) {
    const hotel = new Hotel(hotelData);
    await hotel.save();

    return hotel;
}

async function getAllHotels() {
    const hotels = await Hotel.find({}).sort({ rooms: -1 }).lean();

    return hotels;
}

async function getHotelById(id) {
    const hotel = await Hotel.findById(id).lean();

    return hotel;
}

async function bookHotel(hotelId, userId) {
    const hotel = await Hotel.findById(hotelId);
    const user = await User.findById(userId);

    if (user._id == hotel.owner) {
        throw new Error('Cannot book you own hotel.')
    }

    user.bookedHotels.push(hotel);
    hotel.bookedBy.push(user);

    return Promise.all([user.save(), hotel.save()]);
}

async function deleteHotel(id) {
    const hotel = await Hotel.deleteOne({ _id: id });
    console.log('deleteted');
}

async function editHotel(id, hotelData) {
    const hotel = await Hotel.findById(id);

    hotel.name = hotelData.name;
    hotel.city = hotelData.city;
    hotel.rooms = Number(hotelData.rooms);
    hotel.imageUrl = hotelData.imageUrl;

    return hotel.save();
}

module.exports = {
    createHotel,
    getAllHotels,
    getHotelById,
    bookHotel,
    deleteHotel,
    editHotel
}