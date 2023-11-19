'use client';

import {
    createContext,
    useContext,
    useState,
} from 'react';
import { IStyle, StyleBlues, StyleMinorBlues, StyleName } from 'styles';

type StyleContextType = {
    styleName: StyleName,
    updateStyle: (styleName: StyleName) => void,
    getSongConfigComponents: () => JSX.Element
}

const StyleContext = createContext<StyleContextType>({} as StyleContextType);

export function StyleProvider({ children }) {
    const [style, setStyle] = useState<IStyle>(new StyleBlues());

    function updateStyle(styleName: StyleName) {
        switch(StyleName[styleName]) {
        case StyleName.Blues:
            setStyle(new StyleBlues());
            break;
        case StyleName.MinorBlues:
            setStyle(new StyleMinorBlues());
            break;
        }
    }

    const arrowFunction = () => style.getSongConfigComponents();
    return <StyleContext.Provider value={{styleName: style.name, updateStyle, getSongConfigComponents: arrowFunction}}>{children}</StyleContext.Provider>;
}

export function useStyleContext() {
    return useContext(StyleContext);
}