
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DataTableReservation from "../../components/datatable/DataTableReservation"
import { useEffect, useState } from "react"
import axios from "axios"

const Reservation = () => {
  const [reservation , setReservation] = useState();
  useEffect(() => {
    const getReservation = async () => {
      try {
        const allReservation = await axios.get("/phieudat/all");
        setReservation(allReservation.data);
      } catch (err) {
        console.log(err);
      }
    };
    getReservation();
  }, []);
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        {reservation && <DataTableReservation reservation={reservation}/>}
      </div>
    </div>
  )
}

export default Reservation