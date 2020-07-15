import { GetRunsResponse } from "shared-api-models/src/models";
import API from "../API";

export const getRuns = async () => {
  try {
    const response = await API.get<GetRunsResponse>("/runs");
    const runs = response.data.runs;
    console.log(runs);
    return runs;
  } catch (error) {
    console.error(error);
  }
  return [];
};
