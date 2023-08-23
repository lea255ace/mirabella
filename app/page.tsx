'use client';

import {
    Heading,
    HStack,
    VStack,
} from '@chakra-ui/react';
import KeySelector from 'components/keySelector';
import ChordProgression from 'components/chordProgression';
import { useState } from 'react';
import Key from 'types/key';

export default function Home() {
    const [currentKey, updateKey] = useState(new Key('C'));

    return (
        <HStack margin = '16' spacing='16'>
            <VStack>
                <Heading as='h2' size='xl'>Key</Heading>
                <KeySelector currentKey={currentKey} updateKey={updateKey}/>
            </VStack>
            <VStack>
                <Heading as='h2' size='xl'>Chord Progression</Heading>
                <ChordProgression currentKey={currentKey}/>
            </VStack>
        </HStack>
    );
}
