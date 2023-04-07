
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DataTableStaff from "../../components/datatable/DataTableStaff"
import { useEffect, useState } from "react"
import axios from "axios"

const Staffs = () => {
  const [staff , setStaff] = useState();
  useEffect(() => {
    const getPins = async () => {
      try {
        const allStaff = await axios.get("/nhanvien/all");
        setStaff(allStaff.data);
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
        {staff && <DataTableStaff staff={staff}/>}
      </div>
    </div>
  )
}

export default Staffs