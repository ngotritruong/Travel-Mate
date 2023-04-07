import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import DataBill from "../../components/datatable/DataBill";

const Bill = () => {
    const [bill, setBill] = useState();
    useEffect(() => {
        const getBill = async () => {
            try {
                const allBill = await axios.get("/hoadon/all");
                setBill(allBill.data)
            } catch (err) {
                console.log(err);
            }
        };
        getBill();
    }, []);
    console.log(bill)
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                {bill && <DataBill bill={bill} />}
            </div>
        </div>
    )
}

export default Bill