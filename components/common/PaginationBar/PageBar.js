import Link from "next/link";

const PageBar = (props) => {
    let pages = [...Array(props.totalPages).keys()];
    console.log(pages, props);
    pages.shift()
    pages.push(props.totalPages)
    return (
        <div className="container mx-auto text-center mt-6 mb-4 flex justify-center">
            {
                pages.map(page => {
                    if (page == props.currentPage) {
                        return (
                            <div>
                                <p className="text-2xl mx-2 rounded-full w-10 h-10 flex flex-col justify-center bg-white">{page}</p>
                            </div>
                        )
                    } else {
                        let pageLink = `/apps/mxene/filter?M1=${props.query.M1}&M2=${props.query.M2}&T1=${props.query.T1}&T2=${props.query.T2}&X=${props.query.X}&currentPage=${page}`;
                        if (props.query.bandGap) {
                            pageLink += `&bandGap=${props.query.bandGap}`;
                        }
                        return (
                            <Link href={pageLink}>
                                <p className="text-2xl text-white mx-2 w-10 h-10 flex flex-col justify-center">{page}</p>
                            </Link>
                        )
                    }



                })
            }
        </div>
    )
}

export default PageBar;