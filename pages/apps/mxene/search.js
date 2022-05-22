import { useState } from "react"
import { useRouter } from "next/router";
import Head from 'next/head';

import SearchForm from "../../../components/home/Apps/Mxene/Search/SearchForm";
import PeriodicTable from "../../../components/home/Apps/Mxene/Search/PeriodicTable";
import { M_Values, T_Values, X_Values } from "../../../data/PeriodicTableData";
import toast, { Toaster } from "react-hot-toast";

export default function MxeneSearch() {
    const router = useRouter();
    // function to handle the search
    const [m1, setM1] = useState("");
    const [m2, setM2] = useState("");
    const [t1, setT1] = useState("");
    const [t2, setT2] = useState("");
    const [x, setX] = useState("");
    const [bandGap, setBandGap] = useState();

    const handleSearch = async () => {
        // have at least element filled
        if (m1 === "" && m2 === "" && t1 === "" && t2 === "" && x === "") {
            toast('Please select at least 1 element to search', { type: "error" });
        } else {
            if (bandGap) {
                router.push({
                    pathname: '/apps/mxene/filter',
                    query: {
                        M1: m1,
                        M2: m2,
                        T1: t1,
                        T2: t2,
                        X: x,
                        bandGap: bandGap,
                        currentPage: 1
                    }
                });
            }

        }
    }

    const setAllFieldsEmpty = () => {
        setM1("");
        setM2("");
        setT1("");
        setT2("");
        setX("");
    }

    const setValueM = (value) => {
        if (M_Values.includes(value)) {
            if (m1 === "") {
                setM1(value);
            } else {
                setM2(value);
            }
        }
    }

    const setValueT = (value) => {
        if (T_Values.includes(value)) {
            if (t1 === "") {
                setT1(value);
            } else {
                setT2(value);
            }
        }
    }

    const setValueX = (value) => {
        if (X_Values.includes(value)) {
            setX(value);
        }
    }

    const setValueBandGap = (value) => {
        setBandGap(value);
    }

    return (
        <div className="w-screen min-h-screen pt-16 flex flex-col items-center justify-start">
            <Head>
                <title>Mxene Search | Project Anant</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="mt-8 mb-3">
                <h2 className="md:text-4xl text-2xl text-white text-center">MXene Search</h2>
                <div className="w-56 mx-auto my-2 h-1 bg-gray-100"></div>
                <p className="text-white text-lg px-4 text-center">Use the periodic table given below to search for MXenes</p>
            </div>
            <div className="w-screen flex flex-col justify-start py-1 md:px-16 px-6">
                {/* The design for forms */}
                <SearchForm resetFunction={setAllFieldsEmpty} searchFunction={handleSearch} BandGap={bandGap} SetBandGap={setValueBandGap} M1={m1} M2={m2} T1={t1} T2={t2} X={x} />
                <PeriodicTable set_M={setValueM} set_T={setValueT} set_X={setValueX} />
                <Toaster position="top-right" toastOptions={{
                    className: 'mt-20',
                }} />
            </div >
        </div >
    )
} 