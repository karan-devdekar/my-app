import React from 'react';
import './DynamicTable.css';  

const DynamicTable = ({ data }) => {
    //create array of regular columns
  const getRegularColumns = () => {
    if (data.length === 0) return [];
    const firstRecord = data[0];
    return Object.keys(firstRecord).filter(
      key => key !== 'guaranteed' && key !== 'nonGuaranteed'
    );
  };
  // create array of grouped columns
  const getGuaranteedColumns = () => {
    if (data.length === 0 || !data[0].guaranteed) return [];
    return Object.keys(data[0].guaranteed);
  };

  const regularColumns = getRegularColumns();
  const guaranteedColumns = getGuaranteedColumns();

  return (
    <div className="table-container">
      <table className="responsive-table">
        <thead>
          <tr>
            {/* render regular columns */}
            {regularColumns.map((col, idx) => (
              <th style={headerStyle} key={idx}>{col}</th>
            ))}
            {/* creates space for grouped columns */}
            <th style={headerStyle} colSpan={guaranteedColumns.length}>Guaranteed</th>
            <th style={headerStyle}>Non Guaranteed</th>
          </tr>
          {/* second row for grouped columns */}
          <tr>
            {/* empty space for regular columns */}
            {regularColumns.map((col, idx) => (
              <th style={headerStyle} key={idx}></th>
            ))}
            {/* render grouped column fields */}
            {guaranteedColumns.map((col, idx) => (
              <th style={headerStyle} key={idx}>{col}</th>
            ))}
            <th style={headerStyle}></th>
          </tr>
        </thead>
        {/* render data */}
        <tbody>
          {data.map((record, idx) => (
            <tr key={idx}>
              {/* Regular column data */}
              {regularColumns.map((col, colIdx) => (
                <td key={colIdx}>{record[col]}</td>
              ))}
              {/* grouped columns data */}
              {guaranteedColumns.map((col, colIdx) => (
                <td key={colIdx}>{record.guaranteed[col]}</td>
              ))}
              <td>{record.nonGuaranteed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Header style applied to th elements
const headerStyle = {
  backgroundColor: '#FFA500', 
  color: 'white', 
  padding: '8px', 
  textAlign: 'center', 
  borderBottom: 'none',
  border: '1px solid #ddd', 
};

export default DynamicTable;
