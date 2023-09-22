import { ThemeProvider } from '@emotion/react';
import React from 'react';
import HeroSectionVideo from '../../components/HeroSectionVideo';
import { theme } from '../../constants/Theme';
import { Videos } from '../../constants/Videos';

const Animals = () => {
    return (
        <ThemeProvider theme={theme}>
            <HeroSectionVideo
                h1TextFirstSlice='Come and see the'
                h1Span='glory of wildlife'
                h1TextSecondSlice='!'
                h1Color='secondary.light'
                pText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem.'
                pColor='secondary.light'
                brTrue={true}
                primaryBtnText='Habitants'
                primaryBtnLink=''
                primaryBtnIcon='paw'
                secondaryBtnText='Fox Forest'
                secondaryBtnLink='/foxvillage/#/discover/fox-forest'
                secondaryBtnIcon='forest'
                videoBackground={Videos.AnimalsVideo}
            />
        </ThemeProvider>
    )
}

export default Animals;