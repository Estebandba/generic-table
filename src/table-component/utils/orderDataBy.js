import _ from "lodash";

const orderDataBy = (orderType, tableData, columnSelected) => {
  return _.orderBy(
    tableData,
    [`${columnSelected}`.toLocaleLowerCase()],
    [orderType]
  );
};

export default orderDataBy;