import React, { useRef } from 'react';
import {useReactToPrint} from "react-to-print";

import { Table } from '../../components';

export const ComponentToPrint = ({ data }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <button onClick={handlePrint}>Print</button>

      <Table data={data} ref={componentRef} />
    </div>
  );
};
