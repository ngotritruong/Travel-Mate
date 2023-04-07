import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { detailVSColumn } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DataDetailReservation = ({ reservation }) => {
  const [data, setData] = useState(reservation);

  const handleDelete = async (idpdp, id) => {
    try {
      await axios.delete(`/ctpdp/delete/${idpdp}/${id}`);
      setData(data.filter((item) => item._id !== id));
      window.location.reload("/detail_reservation");
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
            <Link to="/detail_reservation/viewdetailreservation" state={{pdp: params.row.pdpid, phong: params.row.id}} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete( params.row.pdpid,params.row.id)}
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
        CHI TIẾT PHIẾU ĐẶT PHÒNG
        <Link to="/detail_reservation/addnewdetailrv" className="link">
          Thêm Mới
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={detailVSColumn.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DataDetailReservation;
