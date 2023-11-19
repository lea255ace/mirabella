'use client';

import { Select } from '@chakra-ui/react';
import { Instrument, useInstrumentContext } from 'context/instrumentProvider';

export default function InstrumentSelector() {
    const {instrument, setInstrument} = useInstrumentContext();
    const optionList = (Object.keys(Instrument) as Array<keyof typeof Instrument>).map((instrument) => {
        const instrumentString: Instrument = Instrument[instrument];
        return (<option key={instrument} value={instrument}>{instrumentString}</option>);
    });

    return <>
        <Select size='lg' fontWeight='bold'
            value={instrument}
            onChange={e => setInstrument(e.target.value as Instrument)}
        >
            {optionList}
        </Select>
    </>;
}