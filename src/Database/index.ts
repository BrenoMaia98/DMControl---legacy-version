/* eslint-disable class-methods-use-this */
import * as SQLite from 'expo-sqlite';

export interface FoodDTO {
  foodName: string;
  measure: string;
  volumeMlOrGram: string;
  cho: number;
  kcal: number;
}

type multipleArguments = Array<string> | string; // arg1,arg2,arg3,arg4

class DmControlDatabase {
  private db: SQLite.Database;

  constructor() {
    this.db = SQLite.openDatabase('database.DMControl');
  }

  SELECT(colums: multipleArguments, table: string, condition: string) {
    let columString = '*';
    if (colums && typeof colums !== 'string') {
      columString = colums.join(', ');
    }

    return `SELECT ${columString} FROM ${table} WHERE ${condition}`;
  }

  INSERT() {
    return ``;
  }

  DELETE() {
    return ``;
  }

  executeSQL(
    sqlSentence: string,
    errorCallback?: () => void,
    successCallback?: () => void
  ) {
    this.db.transaction((transaction) => {
      transaction.executeSql(sqlSentence, errorCallback, successCallback);
    });
  }
}

export const DMControlConnection = new DmControlDatabase();
