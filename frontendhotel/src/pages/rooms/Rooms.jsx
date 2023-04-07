import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DatatRoom from "../../components/datatable/DataRoom"
import axios from "axios"
import { useState, useEffect } from "react"

const Rooms = () => {
  const [rooms, setRooms] = useState();
  useEffect(() => {
    const getPins = async () => {
      try {
        const allRooms = await axios.get("/phong/all");
        setRooms(allRooms.data);

      } catch (err) {
        console.log(err);
      }
    };
    getPins();
  }, []);
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        {rooms && <DatatRoom rooms={rooms} />}
      </div>
    </div>
  )
}

export default Rooms