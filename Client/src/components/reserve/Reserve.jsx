import React, { useContext, useEffect, useState } from "react";
import "./reserve.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import axios, { all } from "axios";
import { SearchContext } from "../../context/SearchContext";

const Reserve = ({ setOpen, hotelId }) => {
  //   const { data, isPending, error, reFetch } = useFetch(
  //     `/hotels/find/${hotelId}`
  //   );
  //   console.log(data);

  const [rooms, setRooms] = useState([]);
  const { dates } = useContext(SearchContext);

  useEffect(() => {
    const roomFetch = async () => {
      const newData = await axios.get(`/hotels/room/${hotelId}`);
      console.log(newData.data);
      setRooms(newData.data);
    };
    roomFetch();
  }, []);

  console.log(rooms);

  const [selectedRoom, setSelectedRoom] = useState([]);

  const handleChange = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRoom(
      checked
        ? [...selectedRoom, value]
        : selectedRoom.filter((room) => room !== value)
    );
  };

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());

    let dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);

      // date += 86400000
    }
    return dates;
  };

  const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvialable = (roomNumber) => {
    // const reserved = roomNumber.reserved;
    // const isAvailable = allDates.every((date) => !reserved.includes(date));
    // return isAvailable;

    const isFound = roomNumber.unavailableDates.some((date) => {
      allDates.includes(new Date(date).getTime());
    });
    return !isFound;
  };

  const handleClick = async () => {
    try {
        await Promise.all(selectedRoom.map((roomId) => {
        const res = axios.put("")
    }) catch (error) {
        
    })
  };
}

  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="close"
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms</span>
        {rooms.map((room) => (
          <div className="rItem">
            <div className="rItemInfo">
              <div className="rTitle">{room.title}</div>
              <div className="rDesc">{room.desc}</div>
              <div className="rMax">
                Max people: <b>{room.maxPeople}</b>
              </div>
              <div className="rPrice">
                Price: <b>${room.price}</b>
              </div>
            </div>
            {room.roomNumbers.map((roomNumber) => (
              <div className="room">
                <label>{roomNumber.number}</label>
                <input
                  type="checkbox"
                  value={roomNumber.id}
                  onchange={handleChange}
                  disabled={!isAvialable(roomNumber)}
                />
              </div>
            ))}
          </div>
        ))}
        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Reserve;
