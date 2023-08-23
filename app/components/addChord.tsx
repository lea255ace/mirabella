import {
    Popover,
    PopoverTrigger,
    Button,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    HStack,
} from '@chakra-ui/react';
import Chord from 'types/chord';
import ChordSelector from 'components/chordSelector';
import { useState } from 'react';

export default function AddChord ({ appendChord }: { appendChord: ({ chord }: { chord: Chord }) => void }) {
    const [selectedChord, updateChord] = useState(new Chord('C'));

    return (
        <Popover>
            {({ onClose }) => (
                <>
                    <PopoverTrigger>
                        <Button>Add Chord</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Select Chord To Add</PopoverHeader>
                        <PopoverBody>
                            <HStack>
                                <ChordSelector selectedChord={selectedChord} updateChord={updateChord}/>
                                <Button onClick={() => {
                                    appendChord({ chord: selectedChord });
                                    onClose();
                                    //TODO(MW): This change is visible, do I need to put it inside a useEffect delay
                                    //          to hide the change until the popover is gone?
                                    //updateChord(new Chord('C'));
                                }}>
                                    Confirm
                                </Button>
                            </HStack>
                        </PopoverBody>
                    </PopoverContent>
                </>
            )}
        </Popover>
    );
}