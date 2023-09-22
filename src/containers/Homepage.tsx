import { motion, useScroll, useSpring } from 'framer-motion';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../constants/Theme';
import CardSection from '../components/CardSection';
import ContactSection from '../components/ContactSection';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PriceSection from '../components/PriceSection';
import { DiscoverObjects } from '../constants/DiscoverObjects';
import { EventObjects } from '../constants/EventObjects';
import { Images } from '../constants/Images';
import { Colors } from '../constants/Styles';

const Homepage = () => {

    //destructuring colors from Colors
    const { primary, secondary, light, dark } = Colors;

    //for progress bar on top of page when scrolling
    const { scrollYProgress } = useScroll();
    //framer motion setting for 'easing-animation' on scroll
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <ThemeProvider theme={theme}>
            <motion.div
                className="progress-bar"
                style={{ scaleX }}
            />
            <HeroSection
                backgroundImage={Images.Fox2}
                h1TextFirstSlice="Welcome to the"
                h1Span="Fox Village"
                h1TextSecondSlice="of Zsámbék!"
                pText="Explore our mythical village of wonders in the city of Zsámbék, located in Hungary!"
                primaryBtnText="Explore"
                primaryBtnLink="/#explore"
                primaryBtnIcon="explore"
                secondaryBtnText="Contact"
                secondaryBtnLink="/foxvillage/#/#contact"
                secondaryBtnIcon="mail"
            ></HeroSection>
            <CardSection
                id='explore'
                xDirection={-100}
                cardSectionBg='primary.main'
                cardSectionH2='Events'
                cardSectionH2Color='secondary.light'
                cardSectionParagraph='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis non, explicabo fugiat natus veritatis distinctio recusandae exercitationem modi adipisci voluptas!'
                cardSectionIconLightColor={light}
                cardSectionIconDarkColor={secondary}
                cardSectionFirstIllu={Images.FoxSilhouette4}
                cardSectionSecondIllu={Images.FoxSilhouette2}
                cardSectionIlluInvert={100}
                cardSectionIlluWidth={300}
                cardSectionIlluWidthOnSmallScreen={200}
                cardBoxColor={light}
                cardTypoColor='primary.main'
                arrayOfCards={EventObjects}
            ></CardSection>
            <CardSection
                id='discover'
                xDirection={100}
                cardSectionBg='secondary.light'
                cardSectionH2='Discover'
                cardSectionH2Color='primary.main'
                cardSectionParagraph='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis non, explicabo fugiat natus veritatis distinctio recusandae exercitationem modi adipisci voluptas!'
                cardSectionIconLightColor={dark}
                cardSectionIconDarkColor={secondary}
                cardSectionFirstIllu={Images.Forest1}
                cardSectionSecondIllu={Images.Forest2}
                cardSectionIlluInvert={0}
                cardSectionIlluWidth={300}
                cardSectionIlluWidthOnSmallScreen={300}
                cardBoxColor={primary}
                cardTypoColor='secondary.light'
                arrayOfCards={DiscoverObjects}
            ></CardSection>
            <PriceSection
                xDirection={100}
                priceSectionParagraph='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis non, explicabo fugiat natus veritatis distinctio recusandae exercitationem modi adipisci voluptas!'
                priceSectionIconLightColor={light}
                priceSectionIconDarkColor={secondary}
                priceSectionFirstIllu={Images.Forest3}
                priceSectionIlluMaxHeight={100}
                priceSectionIlluInvert={100}
            />
            <AboutSection
                xDirection={-100}
                aboutSectionIconLightColor={dark}
                aboutSectionIconDarkColor={secondary}
                aboutSectionFirstIllu={Images.Forest1}
                aboutSectionSecondIllu={Images.Forest2}
                aboutSectionIlluInvert={0}
                aboutSectionIlluWidth={300}
                aboutSectionIlluWidthOnSmallScreen={300}
            />
            <ContactSection
                xDirection={100}
                contactSectionParagraph='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis non, explicabo fugiat natus veritatis distinctio recusandae exercitationem modi adipisci voluptas!'
                contactSectionIconLightColor={light}
                contactSectionIconDarkColor={secondary}
                contactSectionFirstIllu={Images.Forest4}
                contactSectionIlluInvert={100}
            />
        </ThemeProvider>
    )
}

export default Homepage