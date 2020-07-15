export interface Run {
  id: number;
  paceInMS: number;
  distance: number;
  timeInMS: number;
  date: string;
  name: string;
}

export interface GetRunsResponse {
  runs: Run[];
}
