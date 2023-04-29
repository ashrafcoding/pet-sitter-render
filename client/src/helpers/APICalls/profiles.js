import URL from "./url";

export async function getProfileDetail(profileId) {
  const fetchOptions = {
    method: "GET",
    credentials: "include",
  };
  return await fetch(`${URL}/profile/${profileId}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: "Unable to connect to server. Please try again" },
    }));
}

export async function createProfile(profileInfo) {
  const fetchOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(profileInfo),
    credentials: "include",
  };

  return await fetch(`${URL}/profile`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: "Unable to connect to server. Please try again" },
    }));
}

export async function getMyProfile() {
  const fetchOptions = {
    method: "GET",
    credentials: "include",
  };
  return await fetch(`${URL}/profile/my-profile`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: "Unable to connect to server. Please try again" },
    }));
}

export async function searchSitters({ city, searchStartDate, searchEndDate }) {
  const fetchOptions = {
    method: "GET",
    credentials: "include",
  };
  return await fetch(
    `${URL}/profile/?city=${city}&searchStartDate=${searchStartDate}&searchEndDate=${searchEndDate}`,
    fetchOptions
  )
    .then((res) => res.json())
    .catch(() => ({
      error: { message: "Unable to connect to server. Please try again" },
    }));
}

export async function updateProfile(profileId, profileInfo) {
  const fetchOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(profileInfo),
    credentials: "include",
  };
  return await fetch(`${URL}/profile/${profileId}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: "Unable to connect to server. Please try again" },
    }));
}
