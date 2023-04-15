import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    next(error);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Hotel deleted" });
  } catch (error) {
    next(error);
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

export const getHotels = async (req, res, next) => {
  const { min, max, ...rest } = req.query;
  // console.log(req.query);
  let limit = req.query.limit ? parseInt(req.query.limit) : 5;
  // console.log(limit);
  try {
    const hotels = await Hotel.find({
      ...rest,
      cheapestPrice: { $gte: min || 1, $lte: max || 800 },
    }).limit(limit);
    res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
};

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map(async (city) => {
        return await Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};

export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });
    const glampingCount = await Hotel.countDocuments({ type: "glamping" });
    const ryokanCount = await Hotel.countDocuments({ type: "ryokan" });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "resort", count: resortCount },
      { type: "apartment", count: apartmentCount },
      { type: "villa", count: villaCount },
      { type: "cabin", count: cabinCount },
      { type: "glamping", count: glampingCount },
      { type: "ryokan", count: ryokanCount },
    ]);
  } catch (error) {}
};

export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};
