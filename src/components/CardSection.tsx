import { Typography, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../constants/Theme';
import PetsIcon from '@mui/icons-material/Pets';
import { CardSectionStyles, ContainerBoxStyles } from '../constants/Styles';
import CardBox from './CardBox';
import { motion } from 'framer-motion';

interface Props {
    cardSectionH2: string;
    cardSectionBg: string;
    cardSectionH2Color: string;
    id: string;
    cardSectionParagraph: string;
    cardSectionIconLightColor: string;
    cardSectionIconDarkColor: string;
    cardSectionFirstIllu: string;
    cardSectionSecondIllu: string;
    cardSectionIlluWidth: number;
    cardSectionIlluWidthOnSmallScreen: number;
    cardSectionIlluInvert: number;
    arrayOfCards: Array<{ Img: string, Title: string, Desc: string, Link: string }>;
    xDirection: number;
    cardBoxColor: string;
    cardTypoColor: string;
}

const CardSection = ({ id, cardSectionH2, cardSectionBg, cardSectionH2Color, cardSectionParagraph, cardSectionIconLightColor, cardSectionIconDarkColor, cardSectionFirstIllu, cardSectionSecondIllu, cardSectionIlluInvert, cardSectionIlluWidth, cardSectionIlluWidthOnSmallScreen, arrayOfCards, xDirection, cardBoxColor, cardTypoColor }: Props) => {

    const cardSectionIlluStyleLeft = {
        position: 'absolute',
        bottom: '0',
        left: '0',
        maxWidth: { xs: cardSectionIlluWidthOnSmallScreen, lg: cardSectionIlluWidth },
        maxHeight: `${cardSectionIlluWidth / 2}px`,
        pointerEvents: 'none',
        filter: `invert(${cardSectionIlluInvert}%)`
    };

    const cardSectionIlluStyleRight = {
        position: 'absolute',
        bottom: '0',
        right: '0',
        maxWidth: { xs: cardSectionIlluWidthOnSmallScreen, lg: cardSectionIlluWidth },
        maxHeight: `${cardSectionIlluWidth / 2}px`,
        pointerEvents: 'none',
        filter: `invert(${cardSectionIlluInvert}%)`
    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                id={id}
                component={motion.section}
                bgcolor={cardSectionBg}
                sx={{
                    ...CardSectionStyles,
                    position: 'relative'
                }}
            >
                <Box component={motion.div}
                    sx={{ ...ContainerBoxStyles, display: 'flex', gap: 3, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
                >
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, x: xDirection }}
                        whileInView={{ opacity: 1, x: 0 }}
                        sx={{ display: 'flex', gap: 2, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <Typography
                            variant='h2'
                            sx={{ textAlign: 'center' }}
                            color={cardSectionH2Color}
                        >

                            {cardSectionH2}
                        </Typography>
                        <PetsIcon
                            component={motion.svg}
                            animate={{
                                rotate: [0, 20, -20, 0, 0],
                                color: [cardSectionIconLightColor, cardSectionIconDarkColor, cardSectionIconDarkColor, cardSectionIconDarkColor, cardSectionIconLightColor,],
                            }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                times: [0, 0.2, 0.5, 0.8, 1],
                                repeat: Infinity,
                                repeatDelay: 1
                            }}
                            sx={{
                                fontSize: '3rem',
                                transformOrigin: 'center!important',
                                transformBox: 'fill-box',
                            }}
                        ></PetsIcon>
                    </Box>

                    <Typography
                        color={cardSectionH2Color}
                        component={motion.p}
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        paragraph={true}
                        sx={{
                            textAlign: 'center',
                            width: { md: '100%', lg: '60%' }
                        }}>

                        {cardSectionParagraph}
                    </Typography>

                    <Box
                        component='div'
                        sx={{ display: 'flex', rowGap: 3, columnGap: 3, flexWrap: 'wrap', alignItems: 'stretch' }}
                    >

                        {arrayOfCards.map((card, index) => {

                            return (
                                <CardBox
                                    key={index}
                                    transitionDelay={'.' + index}
                                    cardImgSrc={card.Img}
                                    cardTextH4={card.Title}
                                    cardTextParagraph={card.Desc}
                                    cardButtonLink={card.Link}
                                    cardBoxColor={cardBoxColor}
                                    cardTypoColor={cardTypoColor}
                                />
                            )
                        })

                        }
                    </Box>

                    <Box
                        component={motion.img}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        src={cardSectionFirstIllu}
                        sx={{ ...cardSectionIlluStyleLeft }}
                    />
                    <Box
                        component={motion.img}
                        src={cardSectionSecondIllu}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        sx={{ ...cardSectionIlluStyleRight }}
                    />

                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default CardSection