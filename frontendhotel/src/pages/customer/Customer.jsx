import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { useEffect, useState } from "react"
import axios from "axios"
import DataTableCustomer from "../../components/datatable/DataTableCustomer"

const Customer = () => {
  const [customer , setCustomer] = useState();
  useEffect(() => {
    const getPins = async () => {
      try {
        const allCustomer = await axios.get("/khachhang/all");
        setCustomer(allCustomer.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPins();
  }, []);
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        {customer && <DataTableCustomer customer={customer}/>}
      </div>
    </div>
  )
}

export default Customer