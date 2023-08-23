'use client';

import {
    HStack,
    Button,
} from '@chakra-ui/react';
import { useState } from 'react';
import Chord from 'types/chord';
import Key from 'types/key';
import ChordDisplay from 'components/chordDisplay';
import AddChord from 'components/addChord';
import * as Tone from 'tone';

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

    async function playProgression() {
        //TODO(MW): This code doesn't check if it's currently playing and will happily double up on itself.
        await Tone.start();
        const synth = new Tone.PolySynth().toDestination();
        synth.set({'volume': -12});
        progression.forEach((element, index) =>
            synth.triggerAttackRelease(element.chord.chordNotes, '0:3:3', '+' + index + 'm')
        );
    }

    const listItems = progression.map(item =>
        <ChordDisplay key={item.id} chord={item.chord} currentKey={currentKey} />
    );

    if (progression.length > 0) {
        listItems.unshift(
            <Button onClick={playProgression}>Play</Button>
        );
    }
    listItems.push(<AddChord appendChord={appendChord} />);

    return (
        <HStack>
            {listItems}
        </HStack>
    );
}