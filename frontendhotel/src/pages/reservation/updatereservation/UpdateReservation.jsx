import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { useEffect, useState, useRef } from "react";
import imagephong from "../../../images/roomreservation.jpg"
import axios from "axios";
import moment from "moment";
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';
import { useLocation } from "react-router-dom";
const UpdateReservation = ({ inputs, title }) => {

    let { state } = useLocation();
    const [dataNv, setDataNv] = useState();
    const [idNv, setIdNv] = useState();
    const [dataKh, setDataKh] = useState();
    const [idKh, setIdKh] = useState();
    const [ten_kh, setTen_kh] = useState();
    const [iderror, setIdError] = useState("");
    const [error, setError] = useState("");
    const [mapdd, setMapdd] = useState();
    const tienCoc = useRef()

    const [tienCocDf, setTienCocDf] = useState();
    //date set up
    const [valueDate, setValueDate] = useState([new Date(), new Date()]);
    const handleInputChange = status => {
        //console.log(status);
        setValueDate(status);
    };
    const closeCalender = () => {
        debugger;
        console.log(
            "StartDate:" +
            moment(valueDate[0]).format("YYYY-MM-DD hh:mm:ss") +
            "           EndDate:" +
            moment(valueDate[1]).format("YYYY-MM-DD hh:mm:ss")
        );
    };

    // end date set up

    const handleChangeNV = (e) => {
        setIdNv(e.target.value);
    };

 
    useEffect(() => {
        if (idKh != undefined) {
            const getCustomer = async () => {
                try {
                    const Customer = await axios.get(`/khachhang/find/${idKh}`);
                    setTen_kh(Customer.data.ho_ten)
                    setIdError("");

                } catch (err) {
                    setIdError("*Mã khách hàng không tồn tại*");
                    setTen_kh("")
                }
            };
            getCustomer();
        }
    }, [idKh]);

 

    // get data nhan viên

    useEffect(() => {
        const getNhanvien = async () => {
            try {
                const allNv = await axios.get("/nhanvien/all");
                setDataNv(allNv.data);
            } catch (err) {
                console.log(err);
            }
        };
        getNhanvien();

    }, []);
    console.log(dataNv);

    // get data khach hnag

    useEffect(() => {
        const getKhachhang = async () => {
            try {
                const allKh = await axios.get("/khachhang/all");
                setDataKh(allKh.data);
            } catch (err) {
                console.log(err);
            }
        };
        getKhachhang();

    }, []);
    console.log(dataKh);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        if (!iderror) {
            try {
                const res = await axios.put("/phieudat/update", {
                    id: state.id,
                    id_kh: idKh,
                    id_nv: idNv,
                    ngay_dat: moment(valueDate[0]).format("YYYY-MM-DD hh:mm:ss"),
                    ngay_tra_dk: moment(valueDate[1]).format("YYYY-MM-DD hh:mm:ss"),
                    tien_coc: tienCoc.current.value,
                    maphongdk: mapdd
                });
                res.data && window.location.replace("/reservation");
            } catch (err) {
                setError("Some thing went wrong");
            }
        } else {
            setError("Some thing went wrong");
        }

    };

    //  get data phieu dat
    useEffect(() => {
        const getReservation = async () => {
            try {
                const phieudat = await axios.get(`/phieudat/find/${state.id}`);
                setIdKh(phieudat.data.id_kh);
                setIdNv(phieudat.data.id_nv);
                setTienCocDf(phieudat.data.tien_coc);
                setTen_kh(phieudat.data.ten_kh);
                setMapdd(phieudat.data.maphongdk)
            } catch (err) {

            }
        };
        getReservation();

    }, [state.id]);

    //
    return (
        <div className="addNewReservation">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img
                            src={imagephong}

                        />
                    </div>
                    <div className="right">
                        <form>

                            <div className="dateTime">
                                <label>Ngay đặt và ngày trả phòng</label>
                                <DateTimeRangePicker
                                    onChange={handleInputChange}
                                    value={valueDate}
                                    disableClock={true}
                                    disableCalendar={false}
                                    format={"yyyy-MM-d hh:mm:ss"}
                                    minDate={new Date()}
                                    onCalendarClose={closeCalender}
                                    id="dateTimePicker"
                                />
                            </div>
                            <div className="formInput">
                                <label>Chọn mã nhân viên</label>
                                <select value={idNv} onChange={handleChangeNV} >
                                    <option value=""></option>
                                    {dataNv?.map(nv => <option value={nv.id}>{nv.id}</option>)}
                                </select>
                            </div>
                            <div className="formInput">
                                <label>Nhập mã khách hàng</label>
                                <input type="number" placeholder="1234" min="0" onBlur={e => setIdKh(e.target.value)} defaultValue={idKh} required />
                                <span>{iderror}</span>
                            </div>

                            <div className="formInput">
                                <label>Tên khách hàng</label>
                                <input type="text" defaultValue={ten_kh} required />
                            </div>
                            <div className="formInput">
                                <label>Mã Phòng Đã Đặt</label>
                                <input type="text" defaultValue={mapdd} required />
                            </div>
                            <div className="formInput">
                                <label>Tiền cọc</label>
                                <input type="number" placeholder="1000" min="0" ref={tienCoc} defaultValue={tienCocDf} required />
                            </div>
                            <button className="buttonAddReservation" onClick={handleSubmit}>Cập nhật</button>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default UpdateReservation;
