import TeamNameTile from "../components/common/TeamNameTile/TeamNameTile";

const TeamPage = () => {

    return (
        <div className="min-h-screen bg-theme text-gray-50">
            <div className="text-center flex md:flex-row flex-col justify-center min-h-screen px-6 py-6 pt-20">
                <div className="h-full w-full mt-20">
                    <h1 className="text-3xl mb-5">Meet the team</h1>
                    <TeamNameTile isLink={false} position={"Project Lead"} person={"Prof Abhishek Kumar Singh"} />
                    <div className="mt-10">
                        <h3 className="text-2xl font-medium">Anant Version 1</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-2">
                            <TeamNameTile isLink={false} position={"IISc"} person={"Rohith KMS"} />
                            <TeamNameTile isLink={false} position={"IISc"} person={"Arun CR"} />
                            <TeamNameTile isLink={false} position={"IISc"} person={"Avinash Mishra"} />
                        </div>
                    </div>
                    <div className="mt-10">
                        <h3 className="text-2xl font-medium">Anant Version 2</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-2">
                            <TeamNameTile isLink={false} position={"IISc"} person={"Ashutosh Srivastava"} />
                            <TeamNameTile isLink={false} position={"IISc"} person={"Nikhil Khatavkar"} />
                            <TeamNameTile isLink={false} position={"IISc"} person={"Sucheta Swetlana"} />
                            <TeamNameTile isLink={false} position={"IISc"} person={"Shibu Meher"} />
                            <TeamNameTile isLink={false} position={"IISc"} person={"Subhendu Mishra"} />
                        </div>
                    </div>
                    <div className="mt-10">
                        <h3 className="text-2xl font-medium">Web Development Team Version 2</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-2">
                            <TeamNameTile isLink={true} link={"https://yasharyan.com/"} position={"Frontend & Backend Developer"} person={"Yash Aryan"} />
                            <TeamNameTile isLink={true} link={"https://parthivmenon.com/"} position={"Frontend & Backend Developer"} person={"Parthiv Menon"} />
                            <TeamNameTile isLink={false} position={"UI Designer"} person={"Nithin Chowdary"} />
                            <TeamNameTile isLink={false} position={"Frontend Developer"} person={"Pal Chheda"} />
                        </div>
                    </div>
                    <div className="mt-10">
                        <h3 className="text-2xl font-medium">Special Thanks</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-2">
                            <TeamNameTile isLink={false} position={"IISc"} person={"Rinkle Juneja"} />
                            <TeamNameTile isLink={false} position={"IISc"} person={"Swanti Satsangi"} />
                            <TeamNameTile isLink={false} position={"IISc"} person={"Madhubanti Mukherjee"} />
                            <TeamNameTile isLink={false} position={"IISc"} person={"Ritesh Kumar"} />
                            <TeamNameTile isLink={false} position={"IISc"} person={"Ranjan Kumar Barik"} />
                            <TeamNameTile isLink={false} position={"IISc"} person={"Manoj Dey"} />
                            <TeamNameTile isLink={false} position={"IISc"} person={"Nikhilesh Maity"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamPage;