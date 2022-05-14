import Link from "next/link";

const PageBar = ({currPage, numberOfPages, m1, m2, t1, t2, x}) => {
    return (
        numberOfPages > 1 && <div className="flex flex-wrap justify-center items-center">
            {
                ((currPage - 1) > 0) 
                && 
                <Link href={`/apps/mxene/filter?M1=${m1 ? m1 : ""}&M2=${m2 ? m2 : ""}&T1=${t1 ? t1 : ""}&T2=${t2 ? t2 : ""}&X=${x ? x : ""}&currentPage=${currPage - 1}`}>
                    <div className="h-8 w-8 flex items-center justify-center border cursor-pointer rounded-full text-white hover:theme-text hover:bg-gray-100 mx-1">
                        <i className="fa fa-chevron-left"></i>
                    </div>
                </Link>
            }
            {
                [...Array(numberOfPages).keys()].map((page) => {
                    return (
                        <Link href={`/apps/mxene/filter?M1=${m1 ? m1 : ""}&M2=${m2 ? m2 : ""}&T1=${t1 ? t1 : ""}&T2=${t2 ? t2 : ""}&X=${x ? x : ""}&currentPage=${page+1}`}>
                            <div 
                                key={page} 
                                className={`h-8 w-8 flex items-center justify-center cursor-pointer rounded-full text-white ${currPage === page + 1 ? "bg-gray-300 theme-text hover:ring ring-gray-900" : ""} hover:theme-text hover:bg-gray-100 mx-1`}
                            >
                                {page+1}
                            </div>
                        </Link>
                    )
                })
            }
            {
                ((currPage + 1) <= numberOfPages) 
                &&
                <Link href={`/apps/mxene/filter?M1=${m1 ? m1 : ""}&M2=${m2 ? m2 : ""}&T1=${t1 ? t1 : ""}&T2=${t2 ? t2 : ""}&X=${x ? x : ""}&currentPage=${currPage + 1}`}>
                    <div className="h-8 w-8 flex items-center justify-center border cursor-pointer rounded-full text-white hover:theme-text hover:bg-gray-100 mx-1">
                        <i className="fa fa-chevron-right"></i>
                    </div>
                </Link>
            }
        </div>
    )
} 

export default PageBar;