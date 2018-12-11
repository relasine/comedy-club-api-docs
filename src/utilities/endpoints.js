export const cityEndpoints = [
  {
    type: "GET",
    url: "/api/v1/cities",
    params: "N/A",
    body: "N/A",
    successStatus: 200,
    returns: "fetches an array of city objects",
    failureStatus: 422,
    failureMessage: "<error message>"
  },
  {
    type: "GET",
    url: "/api/v1/cities/:id",
    params: "city id (number)",
    body: "N/A",
    successStatus: 200,
    returns:
      "fetches an array with a specific city object matching the id parameter",
    failureStatus: "N/A",
    failureMessage: "N/A"
  },
  {
    type: "POST",
    url: "/api/v1/cities",
    params: "N/A",
    body:
      "an object with city (string), state (string), primary_airport (string), population (number), and tourism_website (string) key/value pairs.",
    successStatus: 201,
    returns:
      "fetches an object with a key/value pair of 'id' and the id number",
    failureStatus: 422
  },
  {
    type: "PATCH",
    url: "/api/v1/cities/:id",
    params: "city id (number)",
    body: "an object with a tourism_website (string) key/value pair",
    successStatus: 204,
    returns: "fetches the number of rows affected by the patch (1)",
    failureStatus: 415,
    failureMessage: "<error message>"
  },
  {
    type: "DELETE",
    url: "/api/v1/cities/:id",
    params: "city id (number)",
    body: "N/A",
    successStatus: 202,
    returns: "fetches the id number of the city",
    failureStatus: "N/A",
    failureMessage: "N/A"
  }
];

export const comedyClubEndpoints = [
  {
    type: "GET",
    url: "/api/v1/comedy_clubs",
    params: "N/A",
    body: "N/A",
    successStatus: 200,
    returns: "fetches an array of all comedy club objects",
    failureStatus: "N/A",
    failureMessage: "N/A"
  },
  {
    type: "GET",
    url: "/api/v1/comedy_clubs/:club_id",
    params: "comedy club id (number)",
    body: "N/A",
    successStatus: 200,
    returns: "fetches an array with a specific comedy club object",
    failureStatus: 415,
    failureMessage: "<error message>"
  },
  {
    type: "GET",
    url: "/api/v1/cities/:city_id/comedy_clubs",
    params: "city id (number)",
    body: "N/A",
    successStatus: 201,
    returns: "fetches an array of comedy club objects",
    failureStatus: 422,
    failureMessage: "<error message>"
  },
  {
    type: "POST",
    url: "/api/v1/cities/:city_id/comedy_clubs",
    params: "city id (number)",
    body:
      "an object with name (string), street_address (string), zip_code (number), and rating (number) key/value pairs",
    successStatus: 201,
    returns: "fetches the entire body object",
    failureStatus: 422,
    failureMessage: "<error message>"
  },
  {
    type: "PATCH",
    url: "/api/v1/comedy_clubs/:club_id",
    params: "comedy club id (number)",
    body: "on object with the rating (number) key/value pair",
    successStatus: 204,
    returns: "fetches the id of the created club",
    failureStatus: 415,
    failureMessage: "<error message>"
  },
  {
    type: "DELETE",
    url: "/api/v1/cities/:city_id/comedy_clubs/:club_id",
    params: "city id (number), comedy club id (number)",
    body: "N/A",
    successStatus: 202,
    returns: "fetches the id number of the comedy club",
    failureStatus: "N/A",
    failureMessage: "N/A"
  }
];
