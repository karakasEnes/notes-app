# node.js & TS project

## How to use this this program?

- git clone https://github.com/karakasEnes/notes-app.git
- cd app-notes
- npm install
- node dist/main.js add --title="title1" --body="body1"
- node dist/main.js add --title="title2" --body="body2"
- node dist/main.js printNotes
- node dist/main.js readNote --title="title2"
- node dist/main.js remove --title="title2"
- node dist/main.js printNotes
- node dist/main.js remove --title="title1"
- node dist/main.js printNotes

## Application also has validation, for instance If you don't provide any title while trying to remove a note, it will inform you about this.
