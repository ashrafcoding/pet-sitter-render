import URL from "./url";

const loginWithCookies = async () => {
  const fetchOptions = {
    method: "GET",
    credentials: "include",
  };
  // return await fetch(`${URL}/auth/user`, fetchOptions)
  //   .then((res) => res.json())
  //   .catch(() => ({
  //     error: { message: 'Unable to connect to server. Please try again' },
  //   }));
  try {
    let response = await fetch(`${URL}/auth/user`, fetchOptions);
    let result = await response.json();
    return result;
  } catch (error) {
    return {
      error: { message: "Unable to connect to server. Please try again" },
    };
  }
};

export default loginWithCookies;
