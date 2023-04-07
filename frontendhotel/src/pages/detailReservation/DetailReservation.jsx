
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DataDetailReservation from "../../components/datatable/DataDetailReservation"
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const DetailReservation = () => {
    const [reservation, setReservation] = useState();
    useEffect(() => {
        const getReservation = async () => {
            try {
                const allReservation = await axios.get("/ctpdp/all");
                setReservation(allReservation.data?.map(item => ({
                    id: item.id_p,
                    pdpid: item.id_pdp
                })));
            } catch (err) {
                console.log(err);
            }
        };
        getReservation();
    }, []);
    console.log(reservation)
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                {reservation && <DataDetailReservation reservation={reservation} />}
            </div>
        </div>
    )
}

export default DetailReservation