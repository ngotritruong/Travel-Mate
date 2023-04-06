import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { billDetailColumn } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DataBillDetail = ({ billDT }) => {
  const [data, setData] = useState(billDT);

  const handleDelete = async (id,pdp,phong) => {
    try {
      await axios.delete(`/cthd/delete/${id}/${pdp}/${phong}`);
      setData(data.filter((item) => item._id !== id));
      window.location.reload("/hoadon");
    } catch (err) {
        console.log(err)
    }
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/billdetail/viewbilldetail" state={{id: params.row.id, phong: params.row.phong, pdp: params.row.pdp}} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete( params.row.id,params.row.pdp, params.row.phong)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Chi tiết hóa đơn thanh toán
        <Link to="/billdetail/addnewbillDetail" className="link">
          Thêm Mới
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={billDetailColumn.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DataBillDetail;