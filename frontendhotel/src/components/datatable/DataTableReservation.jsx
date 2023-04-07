import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { reservationColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

const DataTableReservation = ({ reservation  }) => {
    const [data, setData] = useState(reservation);

    const handleDelete = async (id) => {
        try {
          await axios.delete(`/phieudat/delete/${id}`);
          setData(data.filter((item) => item._id !== id));
          window.location.reload("/reservation");
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
                        <Link  to="/reservation/updatereservation" state={{id: params.row.id}}  style={{ textDecoration: "none" }}>
                            <div className="viewButton">Update</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row.id)}
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
                DANH PHIẾU ĐẶT PHÒNG
                <Link to="/reservation/addreservation" className="link">
                    Thêm phiếu đặt
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={reservationColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    );
};

export default DataTableReservation;
