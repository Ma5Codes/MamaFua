import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import moment from 'moment';

import { getPriceFormmated } from '@/lib/formatters';

import { LogoBase64 } from '@/components/fetch/logo';

import { getLabelService } from '@/constant/services';

import { Transaction } from '@/types/api';

interface DataTotalResponse {
  totalPrice: string;
  totalWeight: string;
  totalDeposit: string;
  totalAmountPayment: string;
  totalAmountPaymentToday: string;
  dateStart: string;
}
const PdfGenerator = (
  name: string = '',
  data: Transaction[],
  summary: DataTotalResponse,
) => {
  const listData = [
    ...data.map((item, i) => [
      i + 1,
      item.notaId,
      item.name,
      getLabelService(item.service),
      item.status,
      item.amountPayment,
      item.datePayment != null
        ? moment(item.datePayment).format('yyyy-MM-DD')
        : '-',
      item.price,
    ]),
  ];

  function downloadInvoice() {
    const doc = new jsPDF();
    doc.addImage(LogoBase64, 'JPEG', 10, 5, 20, 20);
    doc.setLineWidth(1);
    doc.line(10, 30, 200, 30);

    autoTable(doc, {
      startY: 6,
      margin: {
        left: 32,
      },
      body: [
        [
          {
            content:
              'Printed by' +
              'Administator' +
              '\nMamaFua' +
              '\n Kiharu, Muranga, Kenya' +
              '\n94118',
            styles: {
              halign: 'left',
            },
          },
        ],
      ],
      theme: 'plain',
    });

    autoTable(doc, {
      head: [
        [
          'No.',
          'No. Note',
          'Name',
          'Category',
          'Status',
          'Paid',
          'Paid Date',
          'Total',
        ],
      ],
      body: listData,
      theme: 'striped',
      headStyles: {
        fillColor: '#343a40',
      },
    });

    autoTable(doc, {
      body: [
        [
          {
            content: 'Total Weight:',
            styles: {
              halign: 'right',
            },
          },
          {
            content: summary.totalWeight + ' Kg',
            styles: {
              halign: 'right',
            },
          },
        ],
        [
          {
            content: 'Total Omzet: ',
            styles: {
              halign: 'right',
            },
          },
          {
            content: getPriceFormmated(Number(summary.totalPrice)),
            styles: {
              halign: 'right',
            },
          },
        ],
        [
          {
            content: 'Total Payment: ',
            styles: {
              halign: 'right',
            },
          },
          {
            content: getPriceFormmated(Number(summary.totalAmountPayment)),
            styles: {
              halign: 'right',
            },
          },
        ],
        [
          {
            content: 'Total deposit:',
            styles: {
              halign: 'right',
            },
          },
          {
            content: getPriceFormmated(Number(summary.totalDeposit)),
            styles: {
              halign: 'right',
            },
          },
        ],
      ],
      theme: 'plain',
    });

    autoTable(doc, {
      body: [
        [
          {
            content: 'Print at : ' + new Date().toLocaleString('id'),
            styles: {
              halign: 'left',
            },
          },
        ],
      ],
      theme: 'plain',
    });

    return doc.save(name);
  }
  downloadInvoice();
};

export default PdfGenerator;
