import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { billColumn } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DataBill = ({ bill }) => {
  const [data, setData] = useState(bill);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/hoadon/delete/${id}`);
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
            <div
              className="deleteButton"
              onClick={() => handleDelete( params.row.id)}
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
        Hóa đơn thanh toán
        <Link to="/bill/addnewbill" className="link">
          Thêm Mới
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={billColumn.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DataBill;