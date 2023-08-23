import {
    Text,
    VStack,
} from '@chakra-ui/react';
import Key from 'types/key';
import Chord from 'types/chord';

export default function ChordDisplay( { chord, currentKey }: { chord: Chord, currentKey: Key }) {
    return (
        <VStack>
            <Text>{chord.toString()}</Text>
            <Text>{chord.toString() == currentKey.toString() ? 'Tonic' : 'Other'}</Text>
        </VStack>
    );
}