export default function ResultCard () {
    return (
        <div className="w-full flex md:flex-row flex-col items-center justify-between md:p-8 p-4 my-2 rounded-md" style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
            <div className="w-full md:border-0 border-t-2 border-b-2 my-2 border-gray-400 md:text-left text-center">
                <p className="text-white text-2xl md:my-0 my-4">Cr Cr C Br Br</p>
            </div>
            <div className="md:w-3/6 w-5/6 flex md:justify-between justify-center mx-2">
                <div className="text-center mx-2">
                    <p className="md:text-xl text-lg text-gray-900">Lattice Constant</p>
                    <p className="text-2xl font-bold text-white">3.269</p>
                </div>
                <div className="text-center mx-2">
                    <p className="md:text-xl text-lg text-gray-900">Band Gap</p>
                    <p className="text-2xl font-bold text-white">0.0</p>
                </div>
            </div>
        </div>
    )
}