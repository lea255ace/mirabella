'use client';

import {
    createContext,
    useContext,
    useState,
} from 'react';

export enum Instrument {
    Piano = 'Piano',
    Guitar = 'Guitar',
}

type InstrumentContextType = {
    instrument: Instrument,
    setInstrument: (instrument: Instrument) => void,
}

const InstrumentContext = createContext<InstrumentContextType>({} as InstrumentContextType);

export function InstrumentProvider({ children }) {
    const [instrument, setInstrument] = useState<Instrument>(Instrument.Piano);
    return <InstrumentContext.Provider value={{instrument, setInstrument}}>{children}</InstrumentContext.Provider>;
}

export function useInstrumentContext() {
    return useContext(InstrumentContext);
}