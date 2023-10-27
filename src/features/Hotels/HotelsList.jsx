import { useState } from "react";
import HotelItem from "./HotelItem";
import { useHotels } from "./useHotels";
import AddHotelForm from "./AddHotelForm";

function HotelsList() {
  const [showModal, setShowModal] = useState(false);
  const { hotels = [], isLoading, error } = useHotels();
  console.log(hotels);

  function handleShowForm() {
    setShowModal((show) => !show);
  }

  function close() {
    setShowModal(false);
  }

  return (
    <>
      <ul>
        {hotels.map((hotel) => (
          <HotelItem hotel={hotel} key={hotel.id} />
        ))}
      </ul>
      {showModal && <AddHotelForm close={close} />}
      <button onClick={() => handleShowForm()}>Add Hotel</button>
    </>
  );
}

export default HotelsList;
