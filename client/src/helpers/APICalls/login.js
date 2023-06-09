import URL from "./url";

const login = async (email, password) => {
  const fetchOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  };
  // return await fetch(`${URL}/auth/login`, fetchOptions)
  //   .then((res) =>res.json())
  //   .catch(() => ({
  //     error: { message: 'Unable to connect to server. Please try again' },
  //   }));
  try {
    let response = await fetch(`${URL}/auth/login`, fetchOptions);
    let result = await response.json();
    return result;
  } catch (error) {
    return {
      error: { message: "Unable to connect to server. Please try again" },
    };
  }
};

export default login;
