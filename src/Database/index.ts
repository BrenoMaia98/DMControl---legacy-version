/* eslint-disable class-methods-use-this */
import * as SQLite from 'expo-sqlite';
import { SQLStatementCallback, SQLStatementErrorCallback } from 'expo-sqlite';

export interface FoodDTO {
  foodName: string;
  measure: string;
  volumeMlOrGram: string;
  cho: number;
  kcal: number;
}

type multipleArguments = Array<string> | string; // arg1,arg2,arg3,arg4

type selectParms = {
  colums?: multipleArguments;
  table: string;
  condition: string;
};

type insertParams = {
  colums?: multipleArguments;
  table: string;
  values: Array<unknown>;
};

type deleteParams = {
  table: string;
  condition: string;
};

type executeTransaction<T> = {
  data: T;
  successCallback?: SQLStatementCallback;
  errorCallback?: SQLStatementErrorCallback;
};

class DmControlDatabase {
  private db: SQLite.Database;

  constructor() {
    this.db = SQLite.openDatabase('database.DMControl');
  }

  EXECUTE_SQL(sqlSentence: string) {
    return new Promise((resolve, reject) => {
      this.db.transaction((transaction) => {
        transaction.executeSql(
          sqlSentence,
          [],
          (_, result) => {
            resolve(result);
          },
          (_, error) => {
            console.log(`Error executing: ${sqlSentence}\n ${error}`);
            reject(error);
            return false;
          }
        );
      });
    });
  }
  SELECT(params: selectParms) {
    return new Promise((resolve, reject) => {
      let columString = '*';
      const { colums, condition, table } = params;
      if (colums && typeof colums !== 'string') {
        columString = colums.join(', ');
      }

      let sqlSentence = `SELECT ${columString} FROM ${table} WHERE ${condition}`;

      this.db.transaction((transaction) => {
        transaction.executeSql(
          sqlSentence,
          [],
          (_, result) => {
            resolve(result);
          },
          (_, error) => {
            console.log(`Error executing: ${sqlSentence}\n ${error}`);
            reject(error);
            return false;
          }
        );
      });
    });
  }

  INSERT(params: insertParams) {
    return new Promise((resolve, reject) => {
      const { colums, values, table } = params;
      let columString = '';
      let valuesString = '?';

      if (colums && typeof colums !== 'string') {
        columString = colums.join(', ');
      }

      for (let len = 1; len <= values.length; len++) valuesString += ', ?';

      let sqlSentence = `INSERT INTO ${table} (${columString}) VALUES (${valuesString}) `;

      this.db.transaction((transaction) => {
        transaction.executeSql(
          sqlSentence,
          [values],
          (_, result) => {
            resolve(result);
          },
          (_, error) => {
            console.log(`Error executing: ${sqlSentence}\n ${error}`);
            reject(error);
            return false;
          }
        );
      });
    });
  }

  DELETE(params: deleteParams) {
    return new Promise((resolve, reject) => {
      const { condition, table } = params;

      let sqlSentence = `DELETE FROM ${table} WHERE ${condition} `;

      this.db.transaction((transaction) => {
        transaction.executeSql(
          sqlSentence,
          [],
          (_, result) => {
            resolve(result);
          },
          (_, error) => {
            console.log(`Error executing: ${sqlSentence}\n ${error}`);
            reject(error);
            return false;
          }
        );
      });
    });
  }
}
