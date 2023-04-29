import URL from "./url";

export const createRequest = async (
  profileId,
  sitterProfileId,
  startDate,
  endDate
) => {
  const fetchOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sitterProfileId, profileId, startDate, endDate }),
    credentials: "include",
  };

  try {
    const fetchData = await fetch(`${URL}/request`, fetchOptions);
    return await fetchData.json();
  } catch (e) {
    return {
      error: { message: "Unable to connect to server. Please try again" },
    };
  }
};

export const getRequests = async () => {
  const fetchOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  };

  const timeStamp = new Date().getTime();
  try {
    const fetchData = await fetch(`${URL}/request/${timeStamp}`, fetchOptions);
    const { success } = await fetchData.json();
    return success;
  } catch (e) {
    return {
      error: { message: "Unable to connect to server. Please try again" },
    };
  }
};

export const updateStatus = async (status, requestId) => {
  const fetchOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status, requestId }),
    credentials: "include",
  };

  try {
    const fetchData = await fetch(`${URL}/request`, fetchOptions);
    return await fetchData.json();
  } catch (e) {
    return {
      error: { message: "Unable to connect to server. Please try again" },
    };
  }
};
