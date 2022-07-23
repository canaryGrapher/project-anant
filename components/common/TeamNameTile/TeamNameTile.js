const TeamNameTile = ({ person, position, link, isLink }) => {
    return (
        <div className="w-full grid grid-cols-2 md:text-left px-3 py-2 my-1 rounded-lg" style={{ backgroundColor: "rgba(0,0,0,0.15)" }}>
            {isLink ? <a href={link} target="_blank" rel="noreferrer noopener" className="my-auto"><p className="text-xl text-left pl-6 my-auto underline">{person}</p></a> : <p className="text-xl text-left pl-6 my-auto">{person}</p>}
            <p className="text-sm pr-6 text-right my-auto text-gray-300">{position}</p>
        </div>
    )
}

export default TeamNameTile