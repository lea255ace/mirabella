'use client';

import {
    HStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import Chord from 'types/chord';
import Key from 'types/key';
import ChordDisplay from 'components/chordDisplay';
import AddChord from 'components/addChord';

export default function ChordProgression({ currentKey }: { currentKey: Key }) {
    const [progression, updateProgression] = useState<{id: number, chord: Chord}[]>([]);
    const [nextId, updateId] = useState(0);

    function appendChord({ chord }: { chord: Chord }) {
        updateProgression([
            ...progression,
            {
                id: nextId,
                chord: chord
            }
        ]);
        updateId(nextId + 1);
    }

    const listItems = progression.map(item =>
        <ChordDisplay key={item.id} chord={item.chord} currentKey={currentKey} />
    );
    listItems.push(<AddChord appendChord={appendChord} />);

    return (
        <HStack>
            {listItems}
        </HStack>
    );
}