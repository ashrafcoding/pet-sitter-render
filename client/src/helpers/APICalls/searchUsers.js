import URL from "./url";

export async function searchUsers({ search }) {
  const fetchOptions = {
    method: "GET",
    credentials: "include",
  };
  return await fetch(`${URL}/users?search=${search}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: "Unable to connect to server. Please try again" },
    }));
}
