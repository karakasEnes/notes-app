import chalk from 'chalk';
import { string } from 'yargs';
import { loadData, updateData } from './helpers.js';

export type Note = {
  title: string;
  body: string;
};

type NoteGeneralFn = (title?: string, body?: string) => void;

export const addNote = (title: string, body: string): void => {
  const currentNotes = loadData();

  const isTitleExists = currentNotes.find((note: Note) => note.title === title);

  if (isTitleExists) {
    console.log(chalk.red('This Note is Already Exists!'));
  } else {
    currentNotes.push({
      title,
      body,
    });
    updateData(currentNotes);
    console.log(chalk.green('New Note Added Success!'));
  }
};

export const removeNote: NoteGeneralFn = (title) => {
  const notes = loadData();
  const filteredNotes = notes.filter((note: Note) => note.title !== title);

  if (filteredNotes.length === notes.length) {
    console.log(chalk.red.inverse("Didn't find any note that provided"));
  } else {
    updateData(filteredNotes);
    console.log(chalk.green.inverse(`Title: ${title} has been removed!`));
  }
};

export const printNotes: NoteGeneralFn = () => {
  const data = loadData();
  if (data.length === 0) {
    console.log(chalk.red("There isn't any note!"));
    return;
  }

  console.log(chalk.inverse('All your notes are printing...'));
  data.forEach((note: Note) => {
    console.log(`Title: ${note.title}, Body: ${note.body}`);
  });
};

export const readNote: NoteGeneralFn = (title) => {
  const notes = loadData();

  const note = notes.find((note: Note) => note.title === title);
  if (!note) {
    console.log(chalk.red("Note didn't find"));
  } else {
    console.log(chalk.green(`title: ${title}, body: ${note.body}`));
  }
};
