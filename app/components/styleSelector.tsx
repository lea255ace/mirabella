'use client';

import { Select } from '@chakra-ui/react';
import { useStyleContext } from 'context/styleProvider';
import { StyleName } from 'styles';

export default function StyleSelector() {
    const {styleName, updateStyle} = useStyleContext();
    const optionList = (Object.keys(StyleName) as Array<keyof typeof StyleName>).map((style) => {
        const styleString: StyleName = StyleName[style];
        return (<option key={style} value={style}>{styleString}</option>);
    });

    return <>
        <Select size='lg' fontWeight='bold'
            value={StyleName[styleName]}
            onChange={e => updateStyle(e.target.value as StyleName)}
        >
            {optionList}
        </Select>
    </>;
}