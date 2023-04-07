import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { roomColumns} from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

const DataRoom = ({ rooms }) => {
    const [data, setData] = useState(rooms);

    const handleDelete = async (id) => {
        try {
          await axios.delete(`/phong/delete/${id}`);
          setData(data.filter((item) => item._id !== id));
          window.location.reload("/rooms");
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
                        <Link to="/users/test" style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link>
                        <Link  to="/rooms/updateroom" state={{id: params.row.id}}  style={{ textDecoration: "none" }}>
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
                DANH SÁCH PHÒNG
                <Link to="/rooms/addnewroom" className="link">
                    Thêm Phòng
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={roomColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    );
};

export default DataRoom;
