
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import Chart from "../../../components/chart/Chart";

import imageCustomer from "../../../images/user.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import DataTableCustomer from "../../../components/datatable/DataTableCustomer";
const ViewCustomer = () => {
    let { state } = useLocation();

    const [country, setCountry]= useState();
    const [birthday, setBirthday]= useState();
    const [Email, setEmail] = useState();
    const [tenKH, setTenKH] = useState();
    const [gioitinh, setGioitinh] = useState();
    const [cccd, setCccd] = useState();
    const [sdt, setSdt] = useState();
    useEffect(() => {
        const getCustomer = async () => {
            try {
                const Customer = await axios.get(`/khachhang/find/${state.id}`);
                setSdt(Customer.data.sdt);
                setBirthday(Customer.data.ngay_sinh);
                setCccd(Customer.data.cccd);
                setCountry(Customer.data.quoc_tich);
                setEmail(Customer.data.email);
                setTenKH(Customer.data.ho_ten);
                setGioitinh(Customer.data.gioi_tinh);
            } catch (err) {
                console.log(err);
            }
        };
        getCustomer();

    }, [state.id]);


    const [customer, setCustomer] = useState();
    useEffect(() => {
        const getAllCustomer = async () => {
            try {
                const allCustomer = await axios.get("/khachhang/all");
                setCustomer(allCustomer.data);
            } catch (err) {
                console.log(err);
            }
        };
        getAllCustomer();
    }, []);
    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <Link to="/customer/updatecustomer" state={{id: state.id}} className="editButton">Edit</Link>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img
                                src={imageCustomer}
                                alt=""
                                className="itemImg"
                            />
                            <div className="details">
                                <h1 className="itemTitle">{tenKH}</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">{Email}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Số điện thoại</span>
                                    <span className="itemValue">{sdt}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Căn cước số</span>
                                    <span className="itemValue">{cccd}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Giới Tính</span>
                                    <span className="itemValue">
                                        {gioitinh == 1 ? "Nam" : "Nữ"}
                                    </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Ngày Sinh</span>
                                    <span className="itemValue">{birthday}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Quốc gia</span>
                                    <span className="itemValue">{country}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
                    </div>
                </div>
            
                <div className="bottom">
                    {customer && <DataTableCustomer customer={customer}/>}
                </div>
            </div>
        </div>
    );
};

export default ViewCustomer;
