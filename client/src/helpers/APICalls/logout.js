import URL from "./url";

const logout = async () => {
  const fetchOptions = {
    method: "GET",
    credentials: "include",
  };
  return await fetch(`${URL}/auth/logout`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: "Unable to connect to server. Please try again" },
    }));
};

export default logout;
