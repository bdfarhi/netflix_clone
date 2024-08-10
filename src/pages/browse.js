import React from 'react';
import { useContent } from '../hooks';
import { selectionFilter } from '../utils';
import { BrowseContainer } from '../containers/browse';

export default function Browse(){

    const {series} = useContent('series');

    const { films } = useContent('films');

    const slides = selectionFilter({series, films});


    return (
        // need series and filsm 
        //need slides
        //pass to browse container
        <BrowseContainer slides={slides} />
    );
}