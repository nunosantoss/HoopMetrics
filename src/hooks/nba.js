const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.API_KEY,
    "X-RapidAPI-Host": process.env.API_HOST,
  },
};

export const getSeasonsAsync = async () => {
  const url = `${process.env.API_HOST}/seasons`;

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Failed to fetch data`);
    }
    const result = await response.json();
    // Assuming 'response' is an array of years
    const years = result.response;
    return years;
  } catch (error) {
    console.error(error);
    return []; // Return an empty array if there's an error
  }
};

export const getLeaguesAsync = async () => {
  const url = `${process.env.API_HOST}/leagues`;

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Failed to fetch data`);
    }
    const result = await response.json();
    // Assuming 'response' is an array of years
    const leagues = result.response;

    return leagues;
  } catch (error) {
    console.error(error);
    return []; // Return an empty array if there's an error
  }
};

export const getTeamsAsync = async () => {
  const url = `${process.env.API_HOST}/teams`;

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Failed to fetch data`);
    }
    const result = await response.json();
    // Assuming 'response' is an array of years
    const teams = result.response;
    return teams;
  } catch (error) {
    console.error(error);
    return []; // Return an empty array if there's an error
  }
};

export const getTeamAsync = async ({
  id,
  name,
  code,
  league,
  conference,
  division,
  search,
}) => {
  let queryParams = "";
  if (id) queryParams += `?id=${id}&`;
  if (name) queryParams += `name=${name}&`;
  if (code) queryParams += `code=${code}&`;
  if (league) queryParams += `league=${league}&`;
  if (conference) queryParams += `conference=${conference}&`;
  if (division) queryParams += `division=${division}&`;
  if (search) queryParams += `search=${search}&`;

  const url = `${process.env.API_HOST}/teams${queryParams}`;

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Failed to fetch data`);
    }
    const result = await response.json();
    // Assuming 'response' is an array of years
    const teams = result.response;
    return teams;
  } catch (error) {
    console.error(error);
    return []; // Return an empty array if there's an error
  }
};
