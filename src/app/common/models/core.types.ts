export enum DataStatus {
  IDLE = 0,
  LOADING = 10,
  LOADED = 15,
  UPDATING = 20,
  UPDATED = 25,
  PENDING = 30,
  ERROR = 100
}

export enum DataResponse {
  FAILURE = 0,
  SUCCESS = 1,
}
