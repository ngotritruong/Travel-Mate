import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState, useRef } from "react";
import imagephong from "../../../images/roomreservation.jpg"
import axios from "axios";
import moment from "moment";
import { useLocation } from "react-router-dom";

const UpdateCustomer = ({ title }) => {
    const [file, setFile] = useState("");
    const [error, setError] = useState();
    const tenkh = useRef();
    const email = useRef();
    const ngaySinh = useRef();
    const sdt = useRef();
    const cccd = useRef();
    const [gioitinh, setGioitinh] = useState();
    const [country, setCountry] = useState("Việt Nam");

    let { state } = useLocation();

    const handleChangeGT = (e) => {
        setGioitinh(e.target.value);
    };

    const handleChangeCT = (e) => {
        setCountry(e.target.value);
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        const birthday = moment(ngaySinh.current.value).format("YYYY-MM-DD");
        setError(false);
        try {
            const res = await axios.put("/khachhang/update", {
                id: state.id,
                ho_ten: tenkh.current.value,
                ngay_sinh: birthday,
                gioi_tinh: gioitinh,
                email: email.current.value,
                sdt: sdt.current.value,
                cccd: cccd.current.value,
                quoc_tich: country
            });
            console.log(res.data)
            res.data && window.location.replace("/customer");
        } catch (err) {
            setError("Some thing went wrong");
            console.log("lỗi")
        }

    };


    //get costomer 

    const [dfcountry, setDfCountry] = useState();
    const [dfbirthday, setDfBirthday] = useState();
    const [dfEmail, setDfEmail] = useState();
    const [dftenKH, setDfTenKH] = useState();
    const [dfgioitinh, setDfGioitinh] = useState();
    const [dfcccd, setDfCccd] = useState();
    const [dfsdt, setDfSdt] = useState();
    useEffect(() => {
        const getCustomer = async () => {
            try {
                const Customer = await axios.get(`/khachhang/find/${state.id}`);
                setDfSdt(Customer.data.sdt);
                setDfBirthday(Customer.data.ngay_sinh);
                setDfCccd(Customer.data.cccd);
                setDfCountry(Customer.data.quoc_tich);
                setDfEmail(Customer.data.email);
                setDfTenKH(Customer.data.ho_ten);
                setDfGioitinh(Customer.data.gioi_tinh);
            } catch (err) {
                console.log(err);
            }
        };
        getCustomer();

    }, [state.id]);

    return (
        <div className="addNewRoom">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : imagephong
                            }
                            alt=""
                        />
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    style={{ display: "none" }}
                                />
                            </div>
                            <div className="formInput">
                                <label>Tên khách hàng</label>
                                <input type="text" placeholder="Ngo Tri Truong" ref={tenkh} defaultValue={dftenKH} />
                            </div>
                            <div className="formInput">
                                <label>Quốc gia</label>
                                <select Value={country} onChange={handleChangeCT}>
                                    <option value="Việt Nam">Viêt Nam</option>
                                    <option value="Thái Lan">Thái Lan</option>
                                    <option value="Lào">Lào</option>
                                    <option value="Trung Quốc">Trung Quốc</option>
                                    <option value="Hàn Quốc">Hàn Quốc</option>
                                </select>
                            </div>
                            <div className="formInput">
                                <label>Ngày sinh</label>
                                <input type="text" ref={ngaySinh} defaultValue={moment(dfbirthday).format("YYYY/MM/DD")} required />
                            </div>
                            <div className="formInput">
                                <label>Số điện thoại</label>
                                <input type="text" placeholder="0765432187" min="0" ref={sdt} defaultValue={dfsdt} required />
                            </div>
                            <div className="formInput">
                                <label>Email</label>
                                <input type="email" placeholder="example@gmail.com" ref={email} defaultValue={dfEmail} required />
                            </div>
                            <div className="formInput">
                                <label>Giới Tính</label>
                                <select defaultValue={dfgioitinh} onChange={handleChangeGT} >
                                    <option value="0">Nữ</option>
                                    <option value="1">Nam</option>
                                </select>
                            </div>
                            <div className="formInput">
                                <label>Số căn cước</label>
                                <input type="number" min="0" placeholder="303030303030" ref={cccd} defaultValue={dfcccd} required />
                            </div>
                            <button onClick={handleSubmit} className="buttonAdd">Cập nhật</button>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default UpdateCustomer;
