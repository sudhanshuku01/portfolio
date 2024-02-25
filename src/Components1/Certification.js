

import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

import javascriptPDF from '../CertificatesPdf/frontend.pdf';

const Certification =() =>{
  
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  return (
    <div>
      <Document
        file={javascriptPDF}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document> 
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default Certification
