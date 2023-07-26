import StatCard from "./StatCards";

const Stats = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div>
                <h2 className="text-2xl font-bold text-center max-w-7xl leading-10">Revolutionizing the concept of stable coins. Decentralized, self-sustained, automated without liabilities. The first PROOF OF HOLDING consensus mechanism. Users only need to hodl in their own wallet to generate passive income. No staking, no liquidity pools. A true zero risk solution. Guaranteed growth. No owners, totally automated algorithm.</h2>
            </div>
            <div className="flex flex-col md:flex-row mt-10">
                <div className="px-4 py-2">
                    <StatCard title="Reserved" text="Locked" amount="$10000114.88" />
                </div>
                <div className="px-4 py-2">
                    <StatCard title="Next" text="Pulse" amount="$0.0" />
                </div>
                <div className="px-4 py-2">
                    <StatCard title="Total CARAT In The" text="Market" amount="1140326.87" />
                </div>
                <div className="px-4 py-2">
                    <StatCard title="CARAT price" text="Increase" amount="$0.1140" />
                </div>
                <div className="px-4 py-2">
                    <StatCard title="Total SCADS" text="Held" amount="$94441.13" />
                </div>
            </div>
        </div>
    )
};

export default Stats;