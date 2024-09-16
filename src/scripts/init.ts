import { getData } from "./get-data";

export async function init() {
  const data = await getData();
  console.log(data)
}