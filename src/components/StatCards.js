const StatCard = (props) => {
    return (
        <div className="shadow-lg shadow-orange-200 px-4 py-2 rounded-xl text-center w-72">
            <h1 className="text-xl text-slate-600">{props.title}</h1>
            <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-400">{props.text}</span>
            <p className="text-2xl text-slate-900 mt-5">{props.amount}</p>
        </div>
    )
};

export default StatCard;