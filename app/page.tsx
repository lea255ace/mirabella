'use client';

import {
    Heading,
    Flex,
    Box,
    Divider,
    HStack,
    VStack,
} from '@chakra-ui/react';
import KeySelector from 'components/keySelector';
import ChordProgression from 'components/chordProgression';
import StyleSelector from 'components/styleSelector';
import InstrumentSelector from 'components/instrumentSelector';
import { Instrument, useInstrumentContext } from 'context/instrumentProvider';
import { useStyleContext } from 'context/styleProvider';
import { StyleName } from 'styles';
import { useState } from 'react';
import Key from 'types/key';

export default function Home() {
    const [currentKey, updateKey] = useState(new Key('C'));
    const {instrument} = useInstrumentContext();
    const {styleName, getSongConfigComponents} = useStyleContext();
    const styleSongOptions = getSongConfigComponents();

    return (
        <Flex height='100vh'>
            <VStack width='15%' mx={4}>
                <Heading as='h2' size='xl'>Style</Heading>
                <StyleSelector />
                <Heading as='h2' size='xl'>Instrument</Heading>
                <InstrumentSelector />
                {styleSongOptions}
                <Heading as='h2' size='xl'>Key</Heading>
                <KeySelector currentKey={currentKey} updateKey={updateKey}/>
            </VStack>
            <Divider orientation='vertical' borderWidth={1} borderColor='gray.400' />
            <VStack flex='1' spacing='0'>
                <Heading as='h2' size='xl'>Chord Progression</Heading>
                <ChordProgression currentKey={currentKey}/>
                <Divider borderWidth={1} borderColor='gray.400' />
                <Box width='100%' height='100%' bg='gray.200' >{Instrument[instrument]}, {styleName}</Box>
            </VStack>
        </Flex>
    );
}
