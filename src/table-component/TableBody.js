import React from "react";
import PropTypes from "prop-types";
import TableBodyRows from "./TableBodyRows";

/* 
  TableBody iterates the TableBodyRows component and contains the 
  intersection observer feature to load more data when is required
*/

const TableBody = ({ tableData, headerFields, loading }) => {
  return (
    <tbody data-test="table-body-component">
      {tableData.map((tableDataRow, indexDataRow) => {
        return (
          <TableBodyRows
            key={indexDataRow}
            indexDataRow={indexDataRow}
            tableDataRow={tableDataRow}
            headerFields={headerFields}
          />
        );
      })}
      <tr id="observe">
        <td style={{ display: loading ? "block" : "none" }}> Loading </td>
      </tr>
    </tbody>
  );
};

TableBody.propTypes = {
  tableData: PropTypes.array.isRequired,
  headerFields: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default TableBody;
