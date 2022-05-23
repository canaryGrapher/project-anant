import { TableLayout, M_Values, X_Values, T_Values } from "../../../../../data/PeriodicTableData"



const PeriodicTable = (props) => {
    return (
        <div className="bg-[#ffffff33] px-5 py-10 rounded-sm mt-5 select-none">
            {
                TableLayout.map((row, index) => {
                    return (
                        <div key={index} className="grid my-2" style={{ gridTemplateColumns: 'repeat(18, minmax(0, 1fr))' }}>
                            {
                                row.map((element, index) => {
                                    if (element === "_") {
                                        return <Box item={' '} type="empty" />
                                    }
                                    else if (element === "") {
                                        return <Box item={' '} type="null" />
                                    }
                                    else {
                                        return <Box item={element} type="element" associatedFunctionM={props.set_M} associatedFunctionT={props.set_T} associatedFunctionX={props.set_X} />
                                    }
                                })
                            }
                        </div>
                    )
                })

            }
        </div >
    )
}

const Box = (subProps) => {
    if (subProps.type === "empty") {
        return (
            <div className="hidden md:flex h-[100%] w-[100%] bg-white text-white mx-2 border-2 border-gray-500 mt-5 text-center min-h-20">
                {"_"}
            </div>
        )
    }
    else if (subProps.type === "null") {
        return (
            <div className="hidden md:flex h-[100%] w-[100%] text-transparent bg-transparent mx-2 mt-5 text-center">
                {"_"}
            </div>
        )
    }
    else {
        const functionExecution = () => {
            if (M_Values.includes(subProps.item)) {
                subProps.associatedFunctionM(subProps.item)
            }
            else if (T_Values.includes(subProps.item)) {
                subProps.associatedFunctionT(subProps.item)
            }
            else if (X_Values.includes(subProps.item)) {
                subProps.associatedFunctionX(subProps.item)
            }

        }
        let colorValue;
        if (M_Values.includes(subProps.item)) {
            colorValue = "bg-green-300"
        } else if (X_Values.includes(subProps.item)) {
            colorValue = "bg-red-300"
        } else {
            colorValue = "bg-yellow-400"
        }
        return (
            <div className={`hover:bg-black-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:text-white cursor-pointer h-[100%] w-[100%] ${colorValue} mx-2 border-2 border-gray-400 mt-5 text-center flex flex-col justify-center`}
                onClick={functionExecution}>
                {subProps.item}
            </div>
        )
    }

}

export default PeriodicTable