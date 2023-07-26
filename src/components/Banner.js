import arrowDown from '../images/down-arrow-svgrepo-com.svg';

const Banner = () => {
    return (
        <div className="container mx-auto">
            <div className="text-center">
                <h1 className="text-5xl md:text-7xl font-bold">It Is Inevitable</h1>
                <p className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-400">Decentralized & Dependable</p>
                <div className="flex justify-center">
                    <p className="text-3xl max-w-7xl md:text-5xl font-extrabold">The Future of Stablecoins, the First <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-400'>PROOF OF HOLD (POH)</span>,
                        Non Dollar Based</p>
                </div>
                <div className="mt-11 flex justify-center">
                    <div className="px-1">
                        <button className="bg-transparent backdrop-blur-lg font-semibold border rounded-lg border-orange-600 text-lg uppercase px-5 py-2 duration-150 hover:bg-orange-600 hover:text-white hover:scale-110">scads</button>
                    </div>
                    <div className="px-1">
                        <button className="bg-transparent backdrop-blur-lg font-semibold border rounded-lg border-orange-600 text-lg uppercase px-5 py-2 duration-150 hover:bg-orange-600 hover:text-white hover:scale-110">carat</button>
                    </div>
                    <div className="px-1">
                        <button className="bg-transparent backdrop-blur-lg font-semibold border rounded-lg border-orange-600 text-lg uppercase px-5 py-2 duration-150 hover:bg-orange-600 hover:text-white hover:scale-110">pulse</button>
                    </div>
                </div>
                <div className="mt-11">
                    <button className="bg-transparent backdrop-blur-lg font-semibold shadow-xl shadow-orange-600 rounded-lg text-lg uppercase px-6 py-2 duration-150 hover:scale-110"><img src={arrowDown} width={28} height={38} alt="" /></button>
                </div>
            </div>
        </div>
    )
};

export default Banner;