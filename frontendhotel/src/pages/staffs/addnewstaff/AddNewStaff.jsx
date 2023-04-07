import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState, useRef } from "react";
import imagephong from "../../../images/imagephong.jpg"
import './addNewStaff.scss'
import axios from "axios";
import moment from "moment";

const AddNewStaff = ({ title }) => {
  const [file, setFile] = useState("");

  const [chucvu, setChucvu] = useState();
  const [ma_cv, setMa_cv] = useState(1);
  const [tenCv, setTenCv] = useState();
  const [errorlp, setErrorlp] = useState("");
  const [error, setError] = useState("");



  const tenNv = useRef();
  const ngaySinh = useRef();
  const email = useRef();
  const password = useRef();
  const [gioitinh, setGioitinh] = useState();

  const handleChangeGT = (e) => {
    setGioitinh(e.target.value);
  };

  const handleChangeCV = (e) => {
    setMa_cv(e.target.value);
  };

  useEffect(() => {
    const getChucVu = async () => {
      try {
        const allChucVu = await axios.get("/chucvu/all");
        setChucvu(allChucVu.data);
      } catch (err) {
        console.log(err);
      }
    };
    getChucVu();

  }, []);

  useEffect(() => {
    if (ma_cv != undefined) {
      const getInfoCv = async () => {
        try {
          const chucvu = await axios.get(`/chucvu/find/${ma_cv}`);
          setTenCv(chucvu.data.ten_cv);
        } catch (err) {
          console.log(err)
        }
      };
      getInfoCv();
    }
  }, [ma_cv]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const birthday = moment(ngaySinh.current.value).format("YYYY-MM-DD");
    setError(false);
    try {
      const res = await axios.post("/nhanvien/add", {
        id_cv: ma_cv,
        ten_nv: tenNv.current.value,
        ngay_sinh: birthday,
        gioi_tinh: gioitinh,
        mat_khau: password.current.value,
        email: email.current.value
      });
      console.log(res.data)
      res.data && window.location.replace("/staffs");
    } catch (err) {
      setError("Some thing went wrong");
      console.log("lỗi")
    }
  };
  return (
    <div className="addNewStaff">
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
                <label>Tên nhân viên</label>
                <input type="text" placeholder="Ngo Tri Truong" ref={tenNv} />
              </div>
              <div className="formInput">
                <label>Mã chức vụ</label>
                <select value={ma_cv} onChange={handleChangeCV} >
                  {chucvu?.map(mcv => <option value={mcv.id} key={mcv.id}>{mcv.id}</option>)}
                </select>
              </div>
              <div className="formInput">
                <label>Ngày sinh</label>
                <input type="date" placeholder="2001/02/28" ref={ngaySinh} required />
              </div>
              <div className="formInput">
                <label>Tên chức vụ</label>
                <input type="text" placeholder="9" min="0" defaultValue={tenCv} required />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder="example@gmail.com" ref={email} required />
              </div>
              <div className="formInput">
                <label>Giới Tính</label>
                <select value={gioitinh} onChange={handleChangeGT} >
                  <option value="0">Nữ</option>
                  <option value="1">Nam</option>
                </select>
              </div>
              <div className="formInput">
                <label>Mật khẩu</label>
                <input type="password" ref={password} required />
              </div>
              <button onClick={handleSubmit} className="buttonAdd">Thêm nhân viên</button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AddNewStaff;
