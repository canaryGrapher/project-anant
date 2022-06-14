import Link from "next/link";

const PageBar = (props) => {
    let pages = [...Array(props.totalPages).keys()];
    pages.shift()
    pages.push(props.totalPages)
    return (
        <div className="container mx-auto text-center mt-6 mb-4 flex justify-center items-center">
            {
                ((props.currentPage - 1) > 0)
                &&
                <Link href={`/apps/mxene/filter?M1=${props.query.M1}&M2=${props.query.M2}&T1=${props.query.T1}&T2=${props.query.T2}&X=${props.query.X}&currentPage=${parseInt(props.currentPage) - 1}`}>
                    <div className="h-8 w-8 flex items-center justify-center border cursor-pointer rounded-full text-white hover:theme-text hover:bg-gray-100 mx-1">
                        <i className="fa fa-chevron-left"></i>
                    </div>
                </Link>
            }
            {
                pages.map((page, index) => {
                    if (page == props.currentPage) {
                        return (
                            <div key={index}>
                                <p className="text-2xl mx-2 rounded-full w-10 h-10 flex flex-col justify-center bg-white cursor-pointer">{page}</p>
                            </div>
                        )
                    } else {
                        let pageLink = `/apps/mxene/filter?M1=${props.query.M1}&M2=${props.query.M2}&T1=${props.query.T1}&T2=${props.query.T2}&X=${props.query.X}&currentPage=${page}`;
                        if (props.query.bandGap) {
                            pageLink += `&bandGap=${props.query.bandGap}`;
                        }
                        return (
                            <Link href={pageLink} key={index} >
                                <p className="text-2xl text-white mx-2 w-10 h-10 flex flex-col justify-center cursor-pointer">{page}</p>
                            </Link>
                        )
                    }
                })
            }
            {
                ((parseInt(props.currentPage) + 1) <= props.totalPages)
                &&
                <Link href={`/apps/mxene/filter?M1=${props.query.M1}&M2=${props.query.M2}&T1=${props.query.T1}&T2=${props.query.T2}&X=${props.query.X}&currentPage=${parseInt(props.currentPage) + 1}`}>
                    <div className="h-8 w-8 flex items-center justify-center border cursor-pointer rounded-full text-white hover:theme-text hover:bg-gray-100 mx-1">
                        <i className="fa fa-chevron-right"></i>
                    </div>
                </Link>
            }
        </div>
    )
}

export default PageBar;