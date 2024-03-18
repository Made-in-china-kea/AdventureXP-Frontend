import { API_URL } from "../../settings";
import { makeOptions, handleHttpErrors } from "../fetchUtils";
import { ActivityDto, ReservationDto } from "../../types";
const RESERVATION_URL = API_URL + "/api/reservations";
const ACTIVITY_URL = API_URL + "/api/activities";

let reservations: Array<ReservationDto> = [];
// booleans to check if the lists are updated
let reservationListUpdated: boolean = false;

async function getReservations(): Promise<Array<ReservationDto>> {
  // If we have the reservations in the list and not updated, return it
  if (reservationListUpdated === true || reservations.length === 0) {
    const res = await fetch(RESERVATION_URL).then(handleHttpErrors);
    reservations = [...res];
    // Set the reservationListUpdated to false, so we don't fetch the reservations again
    reservationListUpdated = false;
    return reservations;
  } else {
    return [...reservations];
  }
}

async function getReservation(id: number): Promise<ReservationDto> {
  // If we have the reservation in the list and not updated, return it
  if (reservations.length > 0 && reservationListUpdated === false) {
    const reservation = reservations.find((r) => r.id === id);
    if (reservation) {
      return reservation;
    }
  }
  return fetch(RESERVATION_URL + "/" + id).then(handleHttpErrors);
}

async function createReservation(
  reservation: ReservationDto
): Promise<ReservationDto> {
  const options = makeOptions("POST", reservation);
  // Set the reservationListUpdated to true, so we fetch the reservations again
  reservationListUpdated = true;
  return fetch(RESERVATION_URL, options).then(handleHttpErrors);
}

async function updateReservation(
  reservation: ReservationDto
): Promise<ReservationDto> {
  const options = makeOptions("PUT", reservation);
  // Set the reservationListUpdated to true, so we fetch the reservations again
  reservationListUpdated = true;
  return fetch(RESERVATION_URL + "/" + reservation.id, options).then(
    handleHttpErrors
  );
}

async function cancelReservation(id: number): Promise<ReservationDto> {
  const options = makeOptions("GET", null);
  return fetch(RESERVATION_URL + "/" + id, options).then(handleHttpErrors);
}

async function getActivities(): Promise<Array<ActivityDto>> {
  const options = makeOptions("GET", null);
  const res = await fetch(ACTIVITY_URL + "", options).then(handleHttpErrors);
  return res;
}

async function getAvailableSlots(
  activityId: number,
  date: string
): Promise<Array<number>> {
  const res = await fetch(
    `${RESERVATION_URL}/${date}/${activityId}/availableSlots`
  ).then(handleHttpErrors);
  return res;
}

export {
  getReservations,
  getReservation,
  createReservation,
  updateReservation,
  cancelReservation,
  getActivities,
  getAvailableSlots,
};

// JUST FOR INSPIRATION AND GUIDELINE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// The code below is a suggestion for how to implement the facade pattern
// async function getCategories(): Promise<Array<string>> {
//   // If we have the categories in the list and not updated, return it
//   if (categoryListUpdated === true || categories.length === 0) {
//     const res = await fetch(CATEGORIES_URL).then(handleHttpErrors);
//     categories = [...res];
//     // Set the categoryListUpdated to false, so we don't fetch the categories again
//     categoryListUpdated = false;
//     return categories;
//   } else {
//     return [...categories];
//   }
// }
// async function getRecipes(category: string | null): Promise<Array<Recipe>> {
//   // If we have the recipes in the list and not updated, return it
//   if (recipeListUpdated === true || recipes.length === 0) {
//     console.log("category", category);
//     const queryParams = category ? "?category=" + category : "";
//     const res = await fetch(RECIPE_URL + queryParams).then(handleHttpErrors);
//     recipes = [...res];
//     // Set the recipeListUpdated to false, so we don't fetch the recipes again
//     recipeListUpdated = false;
//     return recipes;
//   } else {
//     return [...recipes];
//   }
// }
// async function getRecipe(id: number): Promise<Recipe> {
//   // If we have the recipe in the list and not updated, return it
//   if (recipes.length > 0 && recipeListUpdated === false) {
//     const recipe = recipes.find((r) => r.id === id);
//     if (recipe) {
//       return recipe;
//     }
//   }
//   return fetch(RECIPE_URL + "/" + id).then(handleHttpErrors);
// }
// async function addRecipe(newRecipe: Recipe): Promise<Recipe> {
//   const method = newRecipe.id ? "PUT" : "POST";
//   const options = makeOptions(method, newRecipe);
//   const URL = newRecipe.id ? `${RECIPE_URL}/${newRecipe.id}` : RECIPE_URL;
//   // Set the recipeListUpdated to true, so we fetch the recipes again
//   recipeListUpdated = true;
//   return fetch(URL, options).then(handleHttpErrors);
// }
// async function deleteRecipe(id: number): Promise<Recipe> {
//   const options = makeOptions("DELETE", null);
//   // delete the recipe from cached list with filter , easier than fetching all again
//   recipes = recipes.filter((r) => r.id !== id);
//   return fetch(`${RECIPE_URL}/${id}`, options).then(handleHttpErrors);
// }

// async function getInfo(): Promise<Info> {
//   return fetch(INFO_URL).then(handleHttpErrors);
// }

// export type { Recipe, Info };
// // eslint-disable-next-line react-refresh/only-export-components
// export {
//   getCategories,
//   getRecipes,
//   getRecipe,
//   addRecipe,
//   deleteRecipe,
//   getInfo,
// };
