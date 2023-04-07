import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { reservationColumns } from "../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const DataTableOrder = ({reserva}) => {
  const [data, setData] = useState(reserva);
 
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
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

export default DataTableOrder;
