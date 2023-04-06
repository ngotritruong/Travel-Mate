import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { useRef } from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import moment from "moment";
const AddBillDetail = ({ title }) => {

    const idHoaDon = useRef();
    const idPdp = useRef();
    const idPhong = useRef();
    const tienThue = useRef();
    const TienDv = useRef();
    const [error, setError] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("/cthd/add", {
                id_hd: idHoaDon.current.value,
                id_pdp: idPdp.current.value,
                id_p: idPhong.current.value,
                tien_thue: 0,
                tien_dv: 0
            });
            console.log(res.data)
            setError("");
            res.data && window.location.replace("/billdetail");
        } catch (err) {
            setError("Thông tin thanh toán không chính đúng");
            console.log("lỗi")
        }

    };
    return (
        <div className="addNewBill">
            <Sidebar />
            <div className="addNewBillContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label>Nhập mã hóa đơn</label>
                                <input type="number" min={0} placeholder="123" ref={idHoaDon} required />
                            </div>
                            <div className="formInput">
                                <label>Nhập mã phiếu đặt phòng</label>
                                <input type="number" min={0} ref={idPdp} required />
                            </div>
                            <div className="formInput">
                                <label>Nhập mã phòng</label>
                                <input type="number" min={0} ref={idPhong} required />
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

export default AddBillDetail;
