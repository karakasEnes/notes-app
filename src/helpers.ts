import fs from 'fs';

import { Note } from './utils';
export const dataFileName = 'data.json';

type DataNotesJSON = Note[];

export const loadData = (): DataNotesJSON => {
  if (!fs.existsSync(dataFileName)) return [];
  return JSON.parse(fs.readFileSync(dataFileName, 'utf-8'));
};

export const updateData = (arr: DataNotesJSON): void => {
  const arrJSON = JSON.stringify(arr);
  fs.writeFileSync(dataFileName, arrJSON, 'utf-8');
};
