import HeroSection from '../../components/HeroSection';
import { Images } from '../../constants/Images';

interface Props {
    title: string;
}

const PoultryYard = ({ title }: Props) => {

    document.title = title;

    return (
        <HeroSection
            backgroundImage={Images.Hen1}
            h1TextFirstSlice="Discover our lovely"
            h1Span="Poultry Yard"
            h1TextSecondSlice="!"
            pText="Our poultry yard is one of the most family-friendly place where you can see our tiny, lovely guests!"
            primaryBtnText="Our guests"
            primaryBtnLink="#guests"
            primaryBtnIcon="paw"
            secondaryBtnText="The Fox Forest"
            secondaryBtnLink="/discover/fox-forest"
            secondaryBtnIcon="forest"
        ></HeroSection>
    )
}

export default PoultryYard