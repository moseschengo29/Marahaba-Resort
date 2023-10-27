import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteHotel } from "../../services/apiHotels";
import { toast } from "react-hot-toast";

function HotelItem({ hotel }) {
  const { id, image, name, description } = hotel;
  const queryClient = useQueryClient();

  const { mutate: deleteHotelApi, isLoading: isDeleting } = useMutation({
    mutationFn: deleteHotel,
    onSuccess: () => {
      toast.success("Hotel deleted successfully");
      queryClient.invalidateQueries({
        queryKey: ["hotels"],
      });
    },
    onError: () => {
      toast.error("Could not delete the hotel");
    },
  });

  function handleDelete(hotelId) {
    deleteHotelApi(hotelId);
  }

  return (
    <li>
      <img src={image} alt="/" />
      <h1>{name}</h1>
      <p>{description}</p>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </li>
  );
}

export default HotelItem;
