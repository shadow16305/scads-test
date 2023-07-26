import Navbar from './Navbar';
import Banner from './Banner';
import backgroundVideo from '../images/lp-light-graphics-amechain-1.mp4'

const Header = () => {
    return (
        <div className='h-screen'>
            <Navbar />
            <video autoPlay loop muted playsInline className='absolute object-cover h-full w-full z-0 top-0 left-0 saturate-75'>
                <source src={backgroundVideo} type='video/mp4' />
            </video>
            <div className='relative z-10 flex mt-10'>
                <Banner />
            </div>
        </div>
    )
};

export default Header;