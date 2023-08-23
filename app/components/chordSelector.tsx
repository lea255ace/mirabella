'use client';

import {
    Select
} from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import Chord from 'types/chord';

const chordList = new Map();
chordList.set('C', ['C4', 'E4', 'G4']);
chordList.set('Dm', ['D4', 'F4', 'A4']);
chordList.set('Em', ['E4', 'G4', 'B4']);
chordList.set('F', ['F4', 'A4', 'C5']);
chordList.set('G', ['G4', 'B4', 'D5']);
chordList.set('Am', ['A4', 'C5', 'E5']);
chordList.set('Bdim', ['B4', 'D5', 'F5']);

export default function ChordSelector({ selectedChord, updateChord }: {
        selectedChord: Chord,
        updateChord: Dispatch<SetStateAction<Chord>>
    }) {

    return <>
        <Select size='lg' fontWeight='bold'
            value={selectedChord.toString()}
            onChange={e => updateChord(new Chord({ chordName: e.target.value, chordNotes: chordList.get(e.target.value) }))}
        >
            <option value='C'>C</option>
            <option value='Dm'>Dm</option>
            <option value='Em'>Em</option>
            <option value='F'>F</option>
            <option value='G'>G</option>
            <option value='Am'>Am</option>
            <option value='Bdim'>Bdim</option>
        </Select>
    </>;
}