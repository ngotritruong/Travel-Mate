import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import imagephong from "../../../images/roomreservation.jpg"
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import DataDetailReservation from "../../../components/datatable/DataDetailReservation";
import DataBillDetail from "../../../components/datatable/DataBillDetail";


const ViewBillDetail = () => {
    
    let { state } = useLocation();
    const [billDT, setBillDT] = useState();
    const [tenkh, setTenKH] = useState();
    const [tennv, setTenVN] = useState();
    const [ngaydat, setNgayDat] = useState();
    const [giaPhong, setGiaPhong] = useState();
    const [tenlp, setTenlp] = useState();
    const [sophong, setSophong] = useState();
    const [tongTien, setTongTien] = useState();
    const [ngaytra, setNgaytra] = useState();
    useEffect(() => {
        const getBillDT = async () => {
            try {
                const allBillDT = await axios.get("/cthd/all");
                setBillDT(allBillDT.data?.map(item => ({
                    id: item.id_hd,
                    pdp: item.id_pdp,
                    phong: item.id_p,
                    tien_thue: item.tien_thue,
                    tien_dv: item.tien_dv
                })))
            } catch (err) {
                console.log(err);
            }
        };
        getBillDT();
    }, []);

    console.log(state.id)


    useEffect(() => {
        const getpd = async () => {
            try {
                const Pdp = await axios.get(`/phieudat/find/${state.pdp}`);
                setTenKH(Pdp.data.ten_kh)
                setTenVN(Pdp.data.ten_nv)
                setNgayDat(Pdp.data.ngay_dat)
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
                setSophong(P.data.so_phong)
                setTenlp(P.data.ten_lp)
                setGiaPhong(P.data.don_gia)
            } catch (err) {
                console.log(err);
            }
        };
        getCustomer();

    }, [state.phong]);

    useEffect(() => {
        const getpd = async () => {
            try {
                const Pdp = await axios.get(`/hoadon/find/${state.id}`);
                setTongTien(Pdp.data.tong_tien)
                setNgaytra(Pdp.data.ngay_lap)
            } catch (err) {
                console.log(err);
            }
        };
        getpd();

    }, [state.id]);

    return (
        <div className="DetailReservation">
            <Sidebar />
            <div className="DetailReservationContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <h1 className="title">Chi tiết hoa đơn thanh toán</h1>
                        <div className="item">
                            <img
                                src={imagephong}
                                alt=""
                                className="itemImg"
                            />
                            <div className="details">
                                <h1 className="itemTitle">Chi tiết hóa đơn thanh toán</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Tên người khách hàng:</span>
                                    <span className="itemValue">{tenkh}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Tên nhân viên:</span>
                                    <span className="itemValue">{tennv}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Ngày nhận phòng:</span>
                                    <span className="itemValue">
                                      {ngaydat}
                                    </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Ngày trả phòng:</span>
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
                                    <span className="itemValue">{tenlp}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Gia phòng một đêm:</span>
                                    <span className="itemValue">{giaPhong}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Tổng tiền phải trả</span>
                                    <span className="itemValue">{tongTien}</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                {billDT && <DataBillDetail billDT={billDT} />}
                </div>
            </div>
        </div>
    );
};

export default ViewBillDetail;