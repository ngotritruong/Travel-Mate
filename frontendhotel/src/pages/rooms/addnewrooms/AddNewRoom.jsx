import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState, useRef } from "react";

import imagephong from "../../../images/imagephong.jpg"
import './addNewRoom.scss'
import axios from "axios";
const AddNewRoom = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [loaiphong, setLoaiPhong] = useState();
  const [lp, setLp] = useState();
  const [mt, setMt] = useState();
  const [tenlp, setTlp] = useState();
  const [tt, setTt] = useState();
  const sp = useRef();
  const sn = useRef();
  const dg = useRef();
  const [errorlp, setErrorlp] = useState("");
  const [error, setError] = useState("");

  const handleChangeMLP = (e) => {
    setLp(e.target.value);
  };

  const handleChangeTT = (e) => {
    setTt(e.target.value);
  };

  //
  useEffect(() => {
    const getAllLoaiPhong = async () => {
      try {
        const lpRooms = await axios.get("/loaiphong/all");
        setLoaiPhong(lpRooms.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllLoaiPhong();

  }, []);

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
      const res = await axios.post("/phong/add", {
        id_lp: lp,
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
                <label>Mã Loại Phòng</label>
                <select value={lp} onChange={handleChangeMLP} >
                  <option></option>
                  {loaiphong?.map(mlp => <option value={mlp.id}>{mlp.id}</option>)}
                </select>
                <span>{errorlp}</span>
              </div>
              <div className="formInput">
                <label>Số Phòng</label>
                <input type="number" placeholder="1234" min="0" ref={sp} required />
              </div>
              <div className="formInput">
                <label>Tên loại phòng</label>
                <input type="text" placeholder="VIP" value={tenlp} required />
              </div>
              <div className="formInput">
                <label>Số Người</label>
                <input type="number" placeholder="9" min="0" ref={sn} required />
              </div>
              <div className="formInput">
                <label>Mô tả loại phòng</label>
                <input type="text" value={mt} required />
              </div>
              <div className="formInput">
                <label>Đơn Giá</label>
                <input type="number" placeholder="12334455" min="0" ref={dg} required />
              </div>
              <div className="formInput">
                <label>Tình trạng</label>
                <select value={tt} onChange={handleChangeTT} >
                  <option></option>
                  <option value="0">Đã Được Thuê</option>
                  <option value="1">Đang Trống</option>
                </select>
              </div>
              <button onClick={handleSubmit} className="buttonAdd">Thêm Phòng</button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AddNewRoom;
