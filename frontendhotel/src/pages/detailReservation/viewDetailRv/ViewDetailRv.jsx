import "./viewDetailRv.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import imagephong from "../../../images/roomreservation.jpg"
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import DataDetailReservation from "../../../components/datatable/DataDetailReservation";


const ViewDetailRv = () => {
    const [viewPdp, setViewPdp] = useState();
    const [ten_kh, setTen_kh] = useState();
    const [ten_nv, setTen_nv] = useState();
    const [ngaydat, setNgaydat] = useState();
    const [ngaytra, setNgaytra] = useState();
    const [sophong, setSophong] = useState();
    const [coc, setCoc] = useState();
    const [giaPhong, setGiaPhong] = useState();
    const [tlp, setTlp] = useState();
    let { state } = useLocation();
    const [reservation, setReservation] = useState();
    useEffect(() => {
        const getReservation = async () => {
            try {
                const allReservation = await axios.get("/ctpdp/all");
                setReservation(allReservation.data?.map(item => ({
                    id: item.id_p,
                    pdpid: item.id_pdp
                })));
            } catch (err) {
                console.log(err);
            }
        };
        getReservation();
    }, []);
    useEffect(() => {
        const getpd = async () => {
            try {
                const Pdp = await axios.get(`/phieudat/find/${state.pdp}`);
                setViewPdp(Pdp.data)
                setTen_kh(Pdp.data.ten_kh)
                setTen_nv(Pdp.data.ten_nv)
                setNgaydat(Pdp.data.ngay_dat)
                setNgaytra(Pdp.data.ngay_tra_dk)
                setCoc(Pdp.data.tien_coc)
            } catch (err) {
                console.log(err);
            }
        };
        getpd();

    }, [state.pdp]);
    useEffect(() => {
        const getCustomer = async () => {
            try {
                const P = await axios.get(`/phong/find/${state.phong}`);
                console.log(P.data)
                setSophong(P.data.so_phong)
                setTlp(P.data.ten_lp)
                setGiaPhong(P.data.don_gia)
            } catch (err) {
                console.log(err);
            }
        };
        getCustomer();

    }, [state.phong]);

    return (
        <div className="DetailReservation">
            <Sidebar />
            <div className="DetailReservationContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <h1 className="title">Chi tiết phiếu đặt phòng</h1>
                        <div className="item">
                            <img
                                src={imagephong}
                                alt=""
                                className="itemImg"
                            />
                            <div className="details">
                                <h1 className="itemTitle">Chi tiết phiếu đặt phòng</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Tên người đặt:</span>
                                    <span className="itemValue">{ten_kh}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Thên nhân viên:</span>
                                    <span className="itemValue">{ten_nv}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Ngày Đặt:</span>
                                    <span className="itemValue">
                                        {ngaydat}
                                    </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Ngày trả dự kiến:</span>
                                    <span className="itemValue">
                                        {ngaytra}
                                    </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Số phòng đã đặt:</span>
                                    <span className="itemValue">{sophong}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Tên loại phòng:</span>
                                    <span className="itemValue">{tlp}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Tiền khách hàng đã cọc:</span>
                                    <span className="itemValue">{coc}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Giá phòng thuê một đêm:</span>
                                    <span className="itemValue">{giaPhong}</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    {reservation && <DataDetailReservation reservation={reservation} />}
                </div>
            </div>
        </div>
    );
};

export default ViewDetailRv;