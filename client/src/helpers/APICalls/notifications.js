import URL from "./url";
export const createNotification = async (type, title, description) => {
  const fetchOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type, title, description }),
    credentials: "include",
  };

  try {
    const fetchData = await fetch(`${URL}/notification`, fetchOptions);
    return fetchData.json();
  } catch (e) {
    return {
      error: { message: "Unable to connect to server. Please try again" },
    };
  }
};

export const getNotifications = async (page, limit, onlyUnread) => {
  const fetchOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  };

  let url = "/notification/?";
  if (page >= 0) url = url.concat(`page=${page}&`);
  if (limit >= 0) url = url.concat(`limit=${limit}&`);
  if (onlyUnread) url = url.concat(`unread=true`);

  try {
    const fetchData = await fetch(`${URL}${url}`, fetchOptions);
    const { success } = await fetchData.json();
    return success;
  } catch (e) {
    return {
      error: { message: "Unable to connect to server. Please try again" },
    };
  }
};

export const getCount = async (onlyUnread) => {
  const fetchOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  };

  let url = "/notification/count";
  if (onlyUnread) url = url.concat(`?unread=true`);

  try {
    const fetchData = await fetch(`${URL}${url}`, fetchOptions);
    const { success } = await fetchData.json();
    return success;
  } catch (e) {
    return {
      error: { message: "Unable to connect to server. Please try again" },
    };
  }
};

export const updReadNotifications = async (notificationsToUpd) => {
  const fetchOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ notificationsToUpd }),
    credentials: "include",
  };

  try {
    const fetchData = await fetch(`${URL}/notification`, fetchOptions);
    return await fetchData.json();
  } catch (e) {
    return {
      error: { message: "Unable to connect to server. Please try again" },
    };
  }
};
