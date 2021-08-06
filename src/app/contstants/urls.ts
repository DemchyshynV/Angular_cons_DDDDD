import {environment} from "../../environments/environment";

const {API, API2} = environment;

export const urls = {
  cars: `${API}/cars`,
  users: `${API2}/users`
}
