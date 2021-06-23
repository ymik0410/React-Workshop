import React from 'react';
import Button from './button.js';

export default function Table(props) {
  const { tableData, tableHeader1, tableHeader2, onRemove } = props;

  const tableHeader = () => {
    return (
      <thead className={'table'}>
        <tr>
          <th className={'row'}>{tableHeader1}</th>
          <th className={'row'}>{tableHeader2}</th>
          <th className={'row'}>Delete</th>
        </tr>
      </thead>
    );
  };

  const tableBody = () => {
    const rows = tableData.map((row, index) => {
      return (
        <tr key={index}>
          <td className={'row'}>{row.name}</td>
          <td className={'row'}>{row.type}</td>
          <td className={'row'}>
            <Button clickAction={() => onRemove(index)} />
          </td>
        </tr>
      );
    });
    return <tbody>{rows}</tbody>;
  };

  return (
    <div>
      <table>
        {tableHeader()}
        {tableBody()}
      </table>
    </div>
  );
}
