'use client';

import {
    Select
} from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import Chord from 'types/chord';

export default function ChordSelector({ selectedChord, updateChord }: {
        selectedChord: Chord,
        updateChord: Dispatch<SetStateAction<Chord>>
    }) {

    return <>
        <Select size='lg' fontWeight='bold'
            value={selectedChord.toString()}
            onChange={e => updateChord(new Chord(e.target.value))}
        >
            <option value='C'>C</option>
            <option value='D'>D</option>
            <option value='E'>E</option>
            <option value='F'>F</option>
            <option value='G'>G</option>
            <option value='A'>A</option>
            <option value='B'>B</option>
        </Select>
    </>;
}