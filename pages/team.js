import TeamNameTile from "../components/common/TeamNameTile/TeamNameTile";

const TeamPage = () => {
    
    return (
        <div className="min-h-screen bg-theme text-gray-50">
            <div className="text-center flex md:flex-row flex-col justify-center min-h-screen lg:px-10 px-6 py-6 pt-20">
                <div className="h-full lg:w-1/2 w-full md:mx-6 lg:p-6 p-1">
                    <img src="https://talentclick.com/wp-content/uploads/2021/08/placeholder-image.png" className="my-1"></img>
                    <img src="https://talentclick.com/wp-content/uploads/2021/08/placeholder-image.png" className="my-1"></img>
                </div>
                <div className="h-full lg:w-1/2 w-full my-3">
                    <div className="flex flex-col justify-center lg:items-start items-center">
                        <TeamNameTile position={"Project Lead"} person={"Prof Abhishek Kumar Singh"}/>
                    </div>
                    <div className="flex flex-col justify-center lg:items-start items-center my-3">
                        <h3 className="text-2xl font-black underline">Anant Version 1</h3>
                        <TeamNameTile position={"IISc"} person={"Rohith KMS"}/>
                        <TeamNameTile position={"IISc"} person={"Arun CR"}/>
                        <TeamNameTile position={"IISc"} person={"Avinash Mishra"}/>
                    </div>
                    <div className="flex flex-col justify-center lg:items-start items-center my-3">
                        <h3 className="text-2xl font-black underline">Anant Version 2</h3>
                        <TeamNameTile position={"IISc"} person={"Ashutosh Srivastava"}/>
                        <TeamNameTile position={"IISc"} person={"Nikhil Khatavkar"}/>
                        <TeamNameTile position={"IISc"} person={"Sucheta Swetlana"}/>
                        <TeamNameTile position={"IISc"} person={"Shibu Meher"}/>
                        <TeamNameTile position={"IISc"} person={"Subhendu Mishra"}/>
                    </div>
                    <div className="flex flex-col justify-center lg:items-start items-center my-3">
                        <h3 className="text-2xl font-black underline">Web Development Team Version 2</h3>
                        <TeamNameTile position={"Frontend and Backend Developer"} person={"Yash Aryan"}/>
                        <TeamNameTile position={"Frontend and Backend Developer"} person={"Parthiv Menon"}/>
                        <TeamNameTile position={"UI Designer"} person={"Nithin Chowdary"}/>
                        <TeamNameTile position={"Frontend Developer"} person={"Pal Chheda"}/>
                    </div>
                    <div className="flex flex-col justify-center lg:items-start items-center">
                        <h3 className="text-2xl font-black underline">Special Thanks</h3>
                        <TeamNameTile position={"IISc"} person={"Rinkle Juneja"}/>
                        <TeamNameTile position={"IISc"} person={"Swanti Satsangi"}/>
                        <TeamNameTile position={"IISc"} person={"Madhubanti Mukherjee"}/>
                        <TeamNameTile position={"IISc"} person={"Ritesh Kumar"}/>
                        <TeamNameTile position={"IISc"} person={"Ranjan Kumar Barik"}/>
                        <TeamNameTile position={"IISc"} person={"Manoj Dey"}/>
                        <TeamNameTile position={"IISc"} person={"Nikhilesh Maity"}/>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default TeamPage;