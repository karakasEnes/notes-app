import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import { addNote, removeNote, printNotes, readNote } from './utils.js';
const yargsInstance = yargs(hideBin(process.argv));
yargsInstance
    .command('add', 'Adding New Note', {
    title: {
        describe: 'note title bro!',
        demandOption: true,
        type: 'string',
    },
    body: {
        describe: 'note body bro!',
        demandOption: true,
        type: 'string',
    },
}, (argv) => {
    addNote(argv.title, argv.body);
})
    .command('remove', 'Removing Single Note', {
    title: {
        describe: 'Note title to be remmoved',
        type: 'string',
        demandOption: true,
    },
}, (argv) => {
    removeNote(argv.title);
})
    .command('printNotes', 'printing All Note Titles', {}, () => {
    printNotes();
})
    .command('readNote', 'getting a note by title', {
    title: {
        type: 'string',
        demandOption: true,
        describe: 'note title',
    },
}, (argv) => {
    readNote(argv.title);
});
yargsInstance.parse();
