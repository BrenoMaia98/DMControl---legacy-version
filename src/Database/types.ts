export type executeSQLParams = {
  sqlSentence: string;
  errorCallback?(): void;
  successCallback?(): void;
};
