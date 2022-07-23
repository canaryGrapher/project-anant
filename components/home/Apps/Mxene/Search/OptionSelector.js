import { M_Values, X_Values, T_Values } from "../../../../../data/PeriodicTableData"

const OptionSelector = (props) => {

    const functionExecution = (target, item) => {
        props.set_value(target, item)
    }

    return (
        <div className="bg-[#ffffff33] px-5 mt-2 rounded-sm select-none py-5 h-full hidden lg:flex flex-col text-center">
            {props.formSelected === "" && <div className="flex flex-col justify-center h-full"><p className="text-xl text-white">Select an input box to show available options</p></div>}
            {props.formSelected != "" && <p className="text-lg text-white">Select a value for <span className="font-bold">{props.formSelected}</span>:</p>}
            {props.formSelected.length != "" ?
                <SelectorGroup option={props.formSelected} associated_function={functionExecution} />
                : null}
        </div>
    )
}

const SelectorGroup = (selector) => {
    const Value = selector.option === "M1" || selector.option === "M2" ? M_Values : selector.option === "X" ? X_Values : T_Values
    const Grids = Value === X_Values ? 2 : Value === M_Values ? 3 : Value === T_Values ? 4 : 1;
    const renderer = Value.map((item, index) => {
        return <Selector key={index} value={item} clickFunction={() => selector.associated_function(selector.option, item)} />
    })
    return (
        <div className={`grid grid-cols-${Grids} gap-2 pt-2`}>{renderer}</div >
    )
}

const Selector = (item) => {
    const color = M_Values.includes(item.value) ? "#EF5455" : T_Values.includes(item.value) ? "#FCD200" : "#00C9B8"
    const classValues = `border border-black rounded-md font-medium px-5 py-3 bg-[${color}] text-white cursor-pointer hover:bg-white hover:text-black`
    return (
        <p className={classValues} onClick={item.clickFunction}>{item.value}</p>
    )
}

export default OptionSelector;