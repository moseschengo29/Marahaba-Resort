export async function getHotels() {
  const res = await fetch(`http://localhost:3000/hotels`);
  if (!res.ok) throw new Error("Could not fetch hotels");

  const data = await res.json();
  return data;
}

export async function addHotel(data) {
  const res = await fetch("http://localhost:3000/hotels", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Could not create new hotel");
}

export async function deleteHotel(id) {
  await fetch(`http://localhost:3000/hotels/${id}`, {
    method: "DELETE",
  });
}
