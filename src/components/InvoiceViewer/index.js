import React from 'react'
import './InvoiceViewer.css'
import invoiceDocument from '../../assets/invoice.pdf'

const InvoiceViewer = () => {
  return (
    <a
      className="invoice-link"
      href={invoiceDocument}
      target="_blank"
      rel="noopener noreferrer"
    >
      May 2019 Invoice
    </a>
  )
}

export default InvoiceViewer
