'use client';

import {
    Select
} from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import Key from 'types/key';

export default function KeySelector({ currentKey, updateKey }:
    { currentKey: Key, updateKey: (key: Key) => void}) {

    return <>
        <Select size='lg' fontWeight='bold'
            value={currentKey.toString()}
            onChange={e => updateKey(new Key(e.target.value))}
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