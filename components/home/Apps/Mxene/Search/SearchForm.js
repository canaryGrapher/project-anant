const SearchForm = (props) => {
    return (
        <div className="bg-[#ffffff33] py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 px-5 rounded-sm">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-[#FAFAFA] text-xl font-medium mt-4 md:mt-1">Transition Elements</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 text-left">
                        <div className="flex flex-col justify-center">
                            <p className="text-[#FAFAFA] mt-3">M1</p>
                            <input type="text" className="p-2 my-1 rounded-sm" placeholder="M1" value={props.M1} />
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-[#FAFAFA] mt-3">M2</p>
                            <input type="text" className="p-2 my-1 rounded-sm" placeholder="M2" value={props.M2} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-[#FAFAFA] text-xl font-medium mt-4 md:mt-1">Carbon / Nitrogen</p>
                    <div className="grid grid-cols-1 gap-x-5 text-left">
                        <div className="flex flex-col justify-center">
                            <p className="text-[#FAFAFA] mt-3">X</p>
                            <input type="text" className="p-2 my-1 rounded-sm" placeholder="X" value={props.X} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-[#FAFAFA] text-xl font-medium mt-4 md:mt-1">Functional Groups</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 text-left">
                        <div className="flex flex-col justify-center">
                            <p className="text-[#FAFAFA] mt-3">T1</p>
                            <input type="text" className="p-2 my-1 rounded-sm" placeholder="T1" value={props.T1} />
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-[#FAFAFA] mt-3">T2</p>
                            <input type="text" className="p-2 my-1 rounded-sm" placeholder="T2" value={props.T2} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-x-5 px-8 rounded-sm">
                <p className="text-[#FAFAFA] mt-3">Band Gap</p>
                <input type="text" className="p-2 my-1 rounded-sm" placeholder="Band Gap value" value={props.BandGap} onChange={(e) => props.SetBandGap(e.target.value)} />
            </div>
            <div className="flex flex-row justify-center px-5 mt-5">
                <button className="bg-white hover:bg-[#163F65] hover:text-white text-[#163F65] font-bold py-2 px-4 rounded-sm ml-5"
                    onClick={props.resetFunction}>
                    Reset
                </button>
                <button className="bg-[#163F65] hover:bg-red-700 text-white font-bold py-2 px-4 rounded-sm ml-5"
                    onClick={props.searchFunction}>
                    Search
                </button>
            </div>
        </div>
    )
}

export default SearchForm;