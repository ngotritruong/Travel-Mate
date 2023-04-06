
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import Chart from "../../../components/chart/Chart";

import imageStaff from "../../../images/employee.png";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import DataTableStaff from "../../../components/datatable/DataTableStaff";
const ViewStaff = () => {
    let { state } = useLocation();

    const [dfnSinh, setDfNSinh] = useState();
    const [dfma_cv, setDfMa_cv] = useState();
    const [dftenNv, setDfTenNv] = useState();
    const [dfEmail, setDfEmail] = useState();
    const [tenCv, setTenCv] = useState();
    const [gioitinh, setGioitinh] = useState();
    useEffect(() => {
        const getPins = async () => {
            try {
                const Staff = await axios.get(`/nhanvien/find/${state.id}`);
                console.log(Staff.data);
                setDfNSinh(Staff.data.ngay_sinh);
                setDfTenNv(Staff.data.ten_nv);
                setGioitinh(Staff.data.gioi_tinh);
                setDfEmail(Staff.data.email);
              
                setTenCv(Staff.data.ten_cv);
            } catch (err) {
                console.log(err);
            }
        };
        getPins();

    }, [state.id]);


    const [staff, setStaff] = useState();
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
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img
                                src={imageStaff}
                                alt=""
                                className="itemImg"
                            />
                            <div className="details">
                                <h1 className="itemTitle">{dftenNv}</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">{dfEmail}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Chức vụ</span>
                                    <span className="itemValue">{tenCv}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Giới Tính</span>
                                    <span className="itemValue">
                                        {gioitinh == 1 ? "Nam" : "Nữ"}
                                    </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Ngày Sinh</span>
                                    <span className="itemValue">{dfnSinh}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
                    </div>
                </div>
                <div className="bottom">
                    {staff && <DataTableStaff staff={staff}/>}
                </div>
            </div>
        </div>
    );
};

export default ViewStaff;
