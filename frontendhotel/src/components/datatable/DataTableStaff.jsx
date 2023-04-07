import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { staffColumns} from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

const DataTableStaff = ({ staff }) => {
    const [data, setData] = useState(staff);

    const handleDelete = async (id) => {
        try {
          await axios.delete(`/nhanvien/delete/${id}`);
          setData(data.filter((item) => item._id !== id));
          window.location.reload("/staffs");
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
                        <Link to="/staffs/viewstaff" state={{id: params.row.id}}  style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link>
                        <Link  to="/staffs/updatestaff" state={{id: params.row.id}}  style={{ textDecoration: "none" }}>
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
                DANH SÁCH NHÂN VIÊN
                <Link to="/staffs/addnewstaff" className="link">
                    Thêm nhân viên
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={staffColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    );
};

export default DataTableStaff;
