import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { customerColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

const DataTableCustomer = ({ customer }) => {
    const [data, setData] = useState(customer);

    const handleDelete = async (id) => {
        try {
          await axios.delete(`/khachhang/delete/${id}`);
          setData(data.filter((item) => item._id !== id));
          window.location.reload("/customer");
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
                        <Link to="/customer/viewcustomer" state={{id: params.row.id}}  style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link>
                        <Link  to="/customer/updatecustomer" state={{id: params.row.id}}  style={{ textDecoration: "none" }}>
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
                DANH SÁCH KHÁCH HÀNG
                <Link to="/customer/addnewcustomer" className="link">
                    Thêm khách hàng
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={customerColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    );
};

export default DataTableCustomer;
