const TeamNameTile = ({person, position, institute}) => {
    return (
        <div className="w-full grid grid-cols-2 md:text-left px-3 py-2 my-1 rounded-lg" style={{backgroundColor: "rgba(0,0,0,0.15)"}}>
            <p className="text-xl text-left">{person}</p>
            <p className="text-xl px-6 text-right">{position}</p>
        </div>
    )
}

export default TeamNameTile