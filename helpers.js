import fs from 'fs';

export const dataFileName = 'data.json';

export const loadData = () => {
  if (!fs.existsSync(dataFileName)) return [];
  return JSON.parse(fs.readFileSync(dataFileName, 'utf-8'));
};

export const updateData = (arr) => {
  const arrJSON = JSON.stringify(arr);
  fs.writeFileSync(dataFileName, arrJSON, 'utf-8');
};
