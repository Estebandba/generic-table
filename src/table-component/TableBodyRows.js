import React from "react";
import PropTypes from "prop-types";

/* 
    TableBodyRows returns each row of the body and 
    checks for cells containing images or text
*/

const TableBodyRows = ({ indexDataRow, tableDataRow, headerFields }) => {
  const checkImageOrText = (tableDataRow, headerField) => {
    const images = [".jpg", ".png", ".svg"];
    const hasImages = images.filter(img =>
      tableDataRow[headerField.toLocaleLowerCase()].endsWith(img)
    );
    return hasImages.length > 0 ? (
      <img src={tableDataRow[headerField.toLocaleLowerCase()]} alt="user" />
    ) : (
      tableDataRow[headerField.toLocaleLowerCase()]
    );
  };
  return (
    <tr key={indexDataRow} data-test="tableBodyRows-component">
      {headerFields.map((headerField, indexHeaderField) => {
        return (
          <React.Fragment key={indexHeaderField}>
            <td>{checkImageOrText(tableDataRow, headerField)}</td>
            {indexHeaderField < headerFields.length - 1 && <td />}
          </React.Fragment>
        );
      })}
    </tr>
  );
};

TableBodyRows.propTypes = {
  tableDataRow: PropTypes.object.isRequired,
  headerFields: PropTypes.array.isRequired,
  indexDataRow: PropTypes.number.isRequired
};

export default TableBodyRows;
