import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState, useRef } from "react";
import imagephong from "../../../images/roomreservation.jpg"
import axios from "axios";
import moment from "moment";
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';
import './addNewReservation.scss';
const AddReservation = ({ inputs, title }) => {

    const [dataNv, setDataNv] = useState();
    const [idNv, setIdNv] = useState();
    const [dataKh, setDataKh] = useState();
    const [idKh, setIdKh] = useState();
    const [ten_kh, setTen_kh] = useState();
    const [iderror, setIdError] = useState("");
    const [error, setError] = useState("");
    const [dataPhong, setDataPhong] = useState();
    const [maP, setMaP] = useState();
    const tienCoc = useRef()
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
    const handleChangeMp = (e) => {
        setMaP(e.target.value);
    };

    console.log(idKh);
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

    console.log(idKh)

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

    // get data phong

    useEffect(() => {
        const getPhong = async () => {
            try {
                const phong = await axios.get("/phong/all");
                setDataPhong(phong.data);
            } catch (err) {
                console.log(err);
            }
        };
        getPhong();

    }, []);
    console.log(dataPhong);
    //get data khach hnag

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
                const res = await axios.post("/phieudat/add", {
                    id_kh: idKh,
                    id_nv: idNv,
                    ngay_dat: moment(valueDate[0]).format("YYYY-MM-DD hh:mm:ss"),
                    ngay_tra_dk: moment(valueDate[1]).format("YYYY-MM-DD hh:mm:ss"),
                    tien_coc: tienCoc.current.value,
                    maphongdk: maP
                });
                const res2 = await axios.put("/phong/updateTT", {
                    id: maP,
                    tinh_trang: 0
                });
                res.data && window.location.replace("/reservation");
            } catch (err) {
                setError("Some thing went wrong");
            }
        } else {
            setError("Some thing went wrong");
        }

    };

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
                                    format={"d-MM-yyyy HH:mm"}
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
                                <input type="number" placeholder="1234" min="0" onBlur={e => setIdKh(e.target.value)} required />
                                <span>{iderror}</span>
                            </div>

                            <div className="formInput">
                                <label>Tên khách hàng</label>
                                <input type="text" defaultValue={ten_kh} required />
                            </div>
                            <div className="formInput">
                                <label>Chọn mã phòng</label>
                                <select value={maP} onChange={handleChangeMp} >
                                    <option value=""></option>
                                    {dataPhong?.map(p =>
                                       p.tinh_trang == 1 && <option value={p.id}>{p.id}</option>
                                    )}
                                </select>
                            </div>
                            <div className="formInput">
                                <label>Tiền cọc</label>
                                <input type="number" placeholder="1000" min="0" ref={tienCoc} required />
                            </div>
                            <button className="buttonAddReservation" onClick={handleSubmit}>Đặt Phòng</button>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default AddReservation;
