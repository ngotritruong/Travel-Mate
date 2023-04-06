import staffImage from './images/employee.png';
import userImage from './images/user.png';
export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
// phòng
export const roomColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "so_phong",
    headerName: "Số Phòng",
    width: 230
  },
  {
    field: "ten_lp",
    headerName: "Tên Loại Phòng",
    width: 200,
  },
  {
    field: "so_nguoi",
    headerName: "Số người",
    width: 100,
  },
  {
    field: "don_gia",
    headerName: "Giá Phòng",
    width: 100,
  },
  {
    field: "tinh_trang",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
    var sta = "pending";
      if(params.row.tinh_trang === 1){
        sta = "active";
      }else if(params.row.tinh_trang === 0){
        sta = "pending";
      }else{
        sta = "passive";
      }
      return (
        <div className={`cellWithStatus ${sta}`}>
          {sta}
        </div>
      );
    },
  },
];
//staff colum 


export const staffColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "ten_nv",
    headerName: "Tên nhân viên",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={staffImage} alt="avatar" />
          {params.row.ten_nv}
        </div>
      );
    },
  },
  {
    field: "ten_cv",
    headerName: "Tên chức vụ",
    width: 120
  },
  {
    field: "gioi_tinh",
    headerName: "Giới tính",
    width: 160,
    renderCell: (params) => {
    var sta = "Nam";
      if(params.row.gioi_tinh == "1"){
        sta = "Nam";
      }else{
        sta = "Nữ";
      }
      return (
        <div className={`cellWithStatus ${sta}`}>
          {sta}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
  },
  {
    field: "ngay_sinh",
    headerName: "Ngày Sinh",
    width: 190,
  }
  
];
//Customer columns


export const customerColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "ho_ten",
    headerName: "Tên Khách Hàng",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={userImage} alt="avatar" />
          {params.row.ho_ten}
        </div>
      );
    },
  },
  {
    field: "cccd",
    headerName: "Số căn cước",
    width: 100
  },
  {
    field: "gioi_tinh",
    headerName: "Giới tính",
    width: 90,
    renderCell: (params) => {
    var sta = "Nam";
      if(params.row.gioi_tinh == "1"){
        sta = "Nam";
      }else{
        sta = "Nữ";
      }
      return (
        <div className={`cellWithStatus ${sta}`}>
          {sta}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "ngay_sinh",
    headerName: "Ngày Sinh",
    width: 140,
  },
  {
    field: "sdt",
    headerName: "Số điện thoại",
    width: 130,
  } 
];

// Reservation column 

export const reservationColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "ten_kh",
    headerName: "Tên khách hàng",
    width: 180
  },
  {
    field: "ten_nv",
    headerName: "Tên nhân viên",
    width: 180,
  },
  {
    field: "ngay_dat",
    headerName: "Ngày đặt",
    width: 180,
  },
  {
    field: "ngay_tra_dk",
    headerName: "Ngày trả dự kiến",
    width: 180,
  },
  {
    field: "tien_coc",
    headerName: "Tiền cọc",
    width: 120,
  }
  ,{
    field: "maphongdk",
    headerName: "Mã phòng đã đặt",
    width: 120,
  }
  
];

//colume detail reaservation
export const detailVSColumn = [
  { field: "id", headerName: "ID Phòng", width: 200 },
  { field: "pdpid", headerName: "ID Phiếu Đặt Phòng", width: 200 }
];


//Bill 

export const billColumn = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "id_nv",
    headerName: "ID Của nhân viên",
    width: 180
  },
  {
    field: "ten_nv",
    headerName: "Nhân viên lập hóa đơn",
    width: 180,
  },
  {
    field: "ngay_lap",
    headerName: "Ngày Lập hóa đơn",
    width: 180,
  },
  {
    field: "ten_ltt",
    headerName: "Hình thức khách hàng thanh toán",
    width: 240,
  },
  {
    field: "tong_tien",
    headerName: "Số tiền khách hàng thanh toán",
    width: 240,
  }
  
  
];

//bil Detail column

export const billDetailColumn = [
  { field: "id", headerName: "Mã Hóa Đơn", width: 120 },
  {
    field: "pdp",
    headerName: "Mã phiếu đặt phòng",
    width: 180
  },
  {
    field: "phong",
    headerName: "Mã phòng",
    width: 180,
  },
  {
    field: "tien_thue",
    headerName: "Tiền thuê",
    width: 180,
  }
];






//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
];
