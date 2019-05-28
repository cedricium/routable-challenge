import React from 'react'
import './PageDetail.css'

import InfoGroup from '../InfoGroup'
import InfoTag from '../InfoTag'
import PrimaryButton from '../Button'
import InvoiceViewer from '../InvoiceViewer'

const InvoiceDivider = () => {
  return <hr className="invoice-divider" />
}

const PageDetail = () => {
  return (
    <main className="page-detail invoices">
      <section>
        <h2 className="page-title">Invoices</h2>
        <article className="page-body">
          <div className="invoice">
            <h3 className="invoice-title">Final Invoice for May billing period</h3>
            <div className="invoice-section sender">
              <div className="column">
                <InfoGroup label="Invoice Number" value="#1052" />
                <InfoGroup label="Issue Date" value="Friday, May 24, 2019" />
              </div>
              <div className="column">
                <InfoGroup label="Google">
                  <address>
                    <p className="company">Google LLC</p>
                    <p>1600 Amphitheatre Parkway</p>
                    <p>Mountain View, CA 94043</p>
                    <a href="mailto:ar@google.com">ar@google.com</a>
                  </address>
                </InfoGroup>
              </div>
              <div className="column">
                <InfoGroup label="Download Invoice">
                  <InvoiceViewer />
                </InfoGroup>
              </div>
            </div>
            <InvoiceDivider />
            <div className="invoice-section client">
              <div className="column">
                <InfoGroup label="Client">
                  <address>
                    <p className="company">The Coca Cola Company</p>
                    <p>P.O. Box 1734</p>
                    <p>Atlanta, GA 30301</p>
                    <a href="mailto:hr@cocacola.com">hr@cocacola.com</a>
                  </address>
                </InfoGroup>
              </div>
              <div className="column">
                <InfoGroup label="Total Amount" value="$6,081.75" />
                <InfoGroup label="Discount" value="-$1,500.00" />
              </div>
              <div className="column">
                <InfoGroup label="Balance Due" value="$4,581.75" size="large" />
                <InfoTag value="Due date: 06/23/2019" />
                <PrimaryButton value="Pay invoice for $4,581.75" />
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}

export default PageDetail
