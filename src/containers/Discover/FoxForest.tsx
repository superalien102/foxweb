import { ThemeProvider } from '@emotion/react';
import React from 'react';
import HeroSectionVideo from '../../components/HeroSectionVideo';
import { theme } from '../../constants/Theme';
import { Videos } from '../../constants/Videos';

const FoxForest = () => {
    return (
        <ThemeProvider theme={theme}>
            <HeroSectionVideo
                h1TextFirstSlice='Enjoy the beauty of'
                h1Span='Fox Forest'
                h1TextSecondSlice='!'
                h1Color='secondary.light'
                pText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem ipsa blanditiis impedit porro quasi architecto enim veniam dolores illo!'
                pColor='secondary.light'
                brTrue={true}
                primaryBtnText='Explore'
                primaryBtnLink=''
                primaryBtnIcon='forest'
                secondaryBtnText='Animals'
                secondaryBtnLink='/foxvillage/#/discover/animals'
                secondaryBtnIcon='paw'
                videoBackground={Videos.FoxForestVideo}
            />
        </ThemeProvider>
    )
}

export default FoxForest