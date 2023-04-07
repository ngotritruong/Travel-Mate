import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"

import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

import DataBillDetail from "../../components/datatable/DataBillDetail";

const BillDetail = () => {
    const [billDT, setBillDT] = useState();
    useEffect(() => {
        const getBillDT = async () => {
            try {
                const allBillDT = await axios.get("/cthd/all");
                setBillDT(allBillDT.data?.map(item => ({
                    id: item.id_hd,
                    pdp: item.id_pdp,
                    phong: item.id_p,
                    tien_thue: item.tien_thue,
                    tien_dv: item.tien_dv
                })))
            } catch (err) {
                console.log(err);
            }
        };
        getBillDT();
    }, []);
    console.log(billDT)
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                {billDT && <DataBillDetail billDT={billDT} />}
            </div>
        </div>
    )
}

export default BillDetail