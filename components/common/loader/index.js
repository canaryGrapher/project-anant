const Loader = () => {
    let circleCommonClasses = 'h-5 w-5 bg-white rounded-full';

    return (
        <div className='fixed h-screen w-screen top-0 flex flex-col justify-center text-center select-none' style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
            <div className="w-1/2 h-1/2 bg-black mx-auto flex flex-col justify-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}>
                <div className="flex flex-row justify-center">
                    <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
                    <div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
                    <div className={`${circleCommonClasses} animate-bounce400`}></div>
                </div>
                <p className="text-2xl font-medium text-white">Loading...</p>
            </div>
        </div>
    );
};

export default Loader;