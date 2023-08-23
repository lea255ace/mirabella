export default class Chord {
    chordName: string;
    chordNotes: string[];

    constructor({ chordName, chordNotes }: { chordName: string, chordNotes: string[] }) {
        this.chordName = chordName;
        this.chordNotes = chordNotes;
    }

    getNotes() {
        return this.chordNotes;
    }

    toString() {
        return this.chordName;
    }
}