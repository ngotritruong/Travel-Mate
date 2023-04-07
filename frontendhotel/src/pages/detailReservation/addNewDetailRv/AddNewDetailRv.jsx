import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import "./addNewDetailRv.scss"
import { useRef } from "react";
import axios from "axios";
import { useState } from "react";
const AddNewDetailRv = ({ title }) => {

    const idphong = useRef();
    const idpdp = useRef();
    const [error, setError] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
       
        try {
            const res = await axios.post("/ctpdp/add", {
                id_pdp: idpdp.current.value,
                id_p: idphong.current.value
            });
            console.log(res.data)
            setError("");
            res.data && window.location.replace("/detail_reservation");
        } catch (err) {
            setError("Mã đặt khòng hoặc mã phòng không tồn tại");
            console.log("lỗi")
        }
      
    };
    return (
        <div className="addNewDetailRv">
            <Sidebar />
            <div className="addNewDetailRvContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label>Nhập ID mã đặt phòng</label>
                                <input type="text" ref={idpdp} min={0} placeholder="123" required />
                            </div>
                            
                            <div className="formInput">
                                <label>Nhập ID mã phòng</label>
                                <input type="number" ref={idphong} min={0} placeholder="123" required />
                            </div>
                            <span>{error}</span>
                            <button className="buttonAddReservation" onClick={handleSubmit}>Đặt Phòng</button>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default AddNewDetailRv;
