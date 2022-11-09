import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import {userRows, userColumns} from "../../datatablesource"

function Datatable() {
    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell:()=>{
                return (
                    <div className="cellAction">
                        <div className="viewButton">View</div>
                        <div className="deleteButton">Delete</div>
                    </div>
                )
            }
        }
    ]
  return (
    <div className="dataTable">
      <div style={{ height: 670, width: "100%" }}>
        <DataGrid
          rows={userRows}
          columns={userColumns.concat(actionColumn)}
          pageSize={11}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
}

export default Datatable;
