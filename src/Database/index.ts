import * as SQLite from 'expo-sqlite';

export interface FoodDTO {
  foodName: string;
  measure: string;
  volumeMlOrGram: string;
  cho: number;
  kcal: number;
}

export class DmControlDB {
  private db: SQLite.Database;

  constructor() {
    this.db = SQLite.openDatabase('database.DMControl');
  }

  private getConnection() {
    return this.db;
  }
}
