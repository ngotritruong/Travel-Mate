import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState, useRef } from "react";
import imagephong from "../../../images/imagephong.jpg"
import './updateRoom.scss'
import axios from "axios";
import { useLocation } from "react-router-dom";
const AddNewRoom = () => {
    const [file, setFile] = useState("");
    const [loaiphong, setLoaiPhong] = useState();
    const [lp, setLp] = useState();
    const [mt, setMt] = useState();
    const [tenlp, setTlp] = useState();
    const [tt, setTt] = useState(0);
    const sp = useRef();
    const sn = useRef();
    const dg = useRef();
    const [errorlp, setErrorlp] = useState("");
    const [error, setError] = useState("");
    let { state } = useLocation();

    const [getRoom, setRoom] = useState()


    //get room by id

    const [maloaiphong, setMaloaiphong] = useState("");
    const [sophong, setSophong] = useState("");
    const [songuoi, setSonguoi] = useState("");
    const [dongia, setDongia] = useState("");
    const [tinhtrang, setTinhtrang] = useState("");




    //
    const handleChangeTT = (e) => {
        setTt(e.target.value);
    };

    const handleChangeMLP = (e) => {
        setLp(e.target.value);
      };

    useEffect(() => {
        const getPins = async () => {
            try {
                const lpRooms = await axios.get("/loaiphong/all");
                setLoaiPhong(lpRooms.data);
            } catch (err) {
                console.log(err);
            }
        };
        getPins();

    }, []);

    useEffect(() => {
        const getPins = async () => {
            try {
                const Rooms = await axios.get(`/phong/find/${state.id}`);
                setMaloaiphong(Rooms.data.id_lp);
                setSophong(Rooms.data.so_phong);
                setSonguoi(Rooms.data.so_nguoi);
                setDongia(Rooms.data.don_gia);
                setTinhtrang(Rooms.data.tinh_trang);
                setTlp(Rooms.data.ten_lp);
            } catch (err) {
                console.log(err);
            }
        };
        getPins();

    }, []);
    console.log(getRoom)
    useEffect(() => {
        const getLp = () => {
            if (lp) {
                
            }
        };
        getLp();
    }, [lp]);

    useEffect(() => {
        if (lp != undefined) {
            const getLoaiPhong = async () => {
                try {
                    const category = await axios.get(`/loaiphong/find/${lp}`);
                    setTlp(category.data.ten_lp);
                    setMt(category.data.mo_ta);
                } catch (err) {
                    console.log(err)
                }
            };
            getLoaiPhong();
        }
    }, [lp]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.put("/phong/update", {
                id: state.id,
                id_lp: lp,
                ten_lp: tenlp,
                so_phong: sp.current.value,
                so_nguoi: sn.current.value,
                don_gia: dg.current.value,
                tinh_trang: tt
            });
            res.data && window.location.replace("/rooms");
        } catch (err) {
            setError("Some thing went wrong");
        }
    };


    return (
        <div className="addNewRoom">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    {/* <h1>{title}</h1> */}
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
                                <label>Mã Loại Phòng</label>
                                <select defaultValue={maloaiphong} onChange={handleChangeMLP} >
                                    {loaiphong?.map(mlp => <option value={mlp.id}>{mlp.id}</option>)}
                                </select>
                                <span>{errorlp}</span>
                            </div>
                            <div className="formInput">
                                <label>Số Phòng</label>
                                <input type="number" placeholder="1234" min="0" ref={sp} defaultValue={sophong} required
                                />
                            </div>
                            <div className="formInput">
                                <label>Tên loại phòng</label>
                                <input type="text" placeholder="VIP" Value={tenlp} required/>
                            </div>
                            <div className="formInput">
                                <label>Số Người</label>
                                <input type="number" placeholder="9" min="0" ref={sn} defaultValue={songuoi} required/>
                            </div>
                            <div className="formInput">
                                <label>Mô tả loại phòng</label>
                                <input type="text" Value={mt} />
                            </div>
                            <div className="formInput">
                                <label>Đơn Giá</label>
                                <input type="number" placeholder="12334455" min="0" ref={dg} defaultValue={dongia} required/>
                            </div>
                            <div className="formInput">
                                <label>Tình trạng</label>
                                <select defaultValue={tinhtrang} onChange={handleChangeTT} >
                                    <option value="0">Đã Được Thuê</option>
                                    <option value="1">Đang Trống</option>
                                </select>
                            </div>
                            <button onClick={handleSubmit} className="buttonAdd">Cập nhật</button>

                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default AddNewRoom;
