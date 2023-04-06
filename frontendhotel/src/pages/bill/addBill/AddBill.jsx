import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import "./addBill.scss"
import { useRef } from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import moment from "moment";
const AddBill = ({ title }) => {

    // const idphong = useRef();
    // const idpdp = useRef();
    const [ngayLap, setNgayLap] = useState(new Date());
    const [ma_nv, setMa_nv] = useState();
    const [ten_nv, setTen_nv] = useState();
    const [error, setError] = useState();
    const [idError, setIdError] = useState();
    const sotien = useRef();
    const [tt, setTt] = useState();
    useEffect(() => {
        if (ma_nv != undefined) {
            const getCustomer = async () => {
                try {
                    const Customer = await axios.get(`/nhanvien/find/${ma_nv}`);
                    setTen_nv(Customer.data.ten_nv)
                    console.log(Customer.data)
                    setIdError("")
                } catch (err) {
                    setIdError("*Mã nhân viên không tồn tại*");
                    setTen_nv("")
                }
            };
            getCustomer();
        }
    }, [ma_nv]);
    console.log(moment(ngayLap).format("YYYY-MM-DD hh:mm:ss"));

    const handleChangeTT = (e) => {
        setTt(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("/hoadon/add", {
                id_nv: ma_nv,
                id_ltt: tt,
                ngay_lap: moment(ngayLap).format("YYYY-MM-DD hh:mm:ss"),
                tong_tien: sotien.current.value
            });
            console.log(res.data)
            setError("");
            res.data && window.location.replace("/bill");
        } catch (err) {
            setError("Lỗi");
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
                                <label>Nhập mã nhân viên</label>
                                <input type="number" min={0} placeholder="123" onBlur={e => setMa_nv(e.target.value)} required />
                            </div>
                            <p>{idError}</p>
                            <div className="formInput">
                                <label>Tên nhân viên</label>
                                <input type="text" defaultValue={ten_nv} required />
                            </div>
                            <div className="formInput">
                                <select value={tt} onChange={handleChangeTT}  >
                                    <option ></option>
                                    <option value="1">Tiền mặt</option>
                                    <option value="2">Momo</option>
                                    <option value="3">Chuyển khoản ngân hàng</option>
                                </select>
                            </div>

                            <div className="formInput">
                                <label>Nhập số tiền khách hàng thanh toán</label>
                                <input type="number" min={0} placeholder="123" ref={sotien} required />
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

export default AddBill;
