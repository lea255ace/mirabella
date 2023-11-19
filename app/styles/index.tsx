import KeySelector from 'components/keySelector';
import Key from 'types/key';
import React from 'react';

export enum StyleName {
    Blues = 'Blues',
    MinorBlues = 'Minor Blues',
}

export interface IStyle {
    name: StyleName;

    getSongConfigComponents: () => JSX.Element
}

export class StyleBlues extends React.Component implements IStyle {
    name: StyleName;
    key: Key;

    constructor(props) {
        super(props);
        this.state = {
            name: StyleName.Blues,
            key: new Key('C')
        };
    }

    getSongConfigComponents() {
        return <KeySelector currentKey={this.state.key} updateKey={(val: Key) => {
            this.setState({name: StyleName.Blues, key: new Key('F')});    
        }} />;
    }
}

export class StyleMinorBlues implements IStyle {
    name: StyleName = StyleName.MinorBlues;
    key: Key = new Key('C');

    getSongConfigComponents() {
        return <KeySelector currentKey={this.key} updateKey={(val: Key) => {this.key = val;}} />;
    }
}