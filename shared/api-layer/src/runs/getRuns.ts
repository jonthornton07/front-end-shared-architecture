import API from "../API";

export const getRuns = async () => {
  try {
    const runs = await API.get("/runs");
    console.log(runs);
    return runs;
  } catch (error) {
    console.error(error);
  }
  return [];
};
