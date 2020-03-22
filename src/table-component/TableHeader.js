import React from "react";
import PropTypes from "prop-types";
import ColumnResizer from "react-column-resizer";
/* 
  TableHeader will display the header for each column of the table.
  Note: ColumnResizer will be rendered in each cell starting at the 
  second cell until the start of the last cell.
*/

const TableHeader = ({ headerFields, sortedColumn, arrow, sortColumns }) => {
  return (
    <thead data-test="table-header-component">
      <tr>
        <th className="header-title" colSpan={headerFields.length * 2}>Generic Table</th>
      </tr>
      <tr>
        {headerFields.map((headerField, indexHeaderField) => {
          return (
            <React.Fragment key={indexHeaderField}>
              <th
                id={headerField}
                onClick={event => sortColumns(event)}
                className="stickyHeader"
              >
                {headerField}
                {headerField === sortedColumn && (
                  <span id={headerField} className="arrow"> {arrow} </span>
                )}
              </th>
              {indexHeaderField < headerFields.length - 1 && (
                <ColumnResizer className="resizer" minWidth={0} />
              )}
            </React.Fragment>
          );
        })}
      </tr>
    </thead>
  );
};

TableHeader.prototype = {
  headerFields: PropTypes.array.isRequired,
  sortedColumn: PropTypes.string.isRequired,
  arrow: PropTypes.string.isRequired,
  sortColumns: PropTypes.func.isRequired
};

export default TableHeader;
