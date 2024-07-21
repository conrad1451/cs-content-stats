import React, { Component } from 'react';

import styles from './index.module.scss';

class Table extends Component {
  constructor (props) {
    super(props);

    this.headerRows = [];
  }

  componentDidMount () {
    this.headerRows.forEach((row, i) => {
      const offset = this.calcOffset(i);
      const cells = Array.from(row.children);

      cells.forEach((cell, l) => {
        cell.style.top = `${offset}px`;
      });
    });
  }

  renderHeader = () => {
    const { header: headerData } = this.props.data;

    return headerData.map((row, i) => {
      return (
        <tr key={i} ref={(rowEl) => { this.headerRows[i] = rowEl }}>
          {row.map((cellData, i) => {
            return (
              <th key={i}>
                {cellData}
              </th>
            );
          })}
        </tr>
      );
    });
  }

  renderBody = () => {
    const { body: bodyData } = this.props.data;

    return bodyData.map((row, i) => {
      return (
        <tr key={i}>
          {row.map((cellData, i) => {
            return (
              <td key={i}>
                {cellData}
              </td>
            );
          })}
        </tr>
      );
    });
  }

  calcOffset = (rowIndex) => {
    let offset = 0;

    for (let l = 0; l < rowIndex; l++) {
      offset += this.headerRows[l].clientHeight;
    }

    return offset;
  }

  render () {
    return (
      <div>
        <table className={styles.table}>
          <thead>
            {this.renderHeader()}
          </thead>
  
          <tbody>
            {this.renderBody()}
          </tbody>
        </table>
      </div>
    );
  }
}

export { Table };
