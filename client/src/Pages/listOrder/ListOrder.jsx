// import "./listOrder.scss"

import { useEffect, useState } from "react";
import DataTableOrder from "../../components/DataTableOrder";
import axios from 'axios';
import { useCookies } from "react-cookie";

const ListOrder = () => {
  const [cookies, setCookie] = useCookies(['iduser']);
  const [reserva, setReserva] = useState();
  useEffect(() => {
    const getPins = async () => {
      try {
        const allRooms = await axios.get("/reserva");
            setReserva(allRooms.data?.map(item=> {
              if(item.id_kh == cookies.iduser){
                return item;
              }
            })?.filter((el) => {
            
              if (el === undefined) {
                return false;
              }
            
            return true;
          }))
      } catch (err) {
        console.log(err);
      }
    };
    getPins();
  }, [cookies]);
 
    

    
  console.log(reserva?.map(item=> {
    if(item.id_kh == cookies.iduser){
      return item;
    }
  })?.filter((el) => {
  
    if (el === undefined) {
      return false;
    }
  
  return true;
}))
  return (
    <div className="list">  
      <div className="listContainer">{
          reserva && <DataTableOrder reserva={reserva}/>
      }
        
      </div>
    </div>
  )
}

export default ListOrder