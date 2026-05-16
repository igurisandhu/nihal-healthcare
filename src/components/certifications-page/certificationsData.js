import certificate1 from '../../assets/images/certificates/certificate1.png'
import certificate2 from '../../assets/images/certificates/certificate2.png'
import certificate3 from '../../assets/images/certificates/certificate3.png'
import certificate4 from '../../assets/images/certificates/certificate4.png'
import certificate5 from '../../assets/images/certificates/certificate5.png'
import certificate6 from '../../assets/images/certificates/certificate6.png'
import certificate7 from '../../assets/images/certificates/certificate7.png'

import cePdf from '../../assets/images/certificates/551118 - NIHAL HEALTHCARE - CERTIFICATE - englisch - 2025-04-07 - MDR2017Q.pdf'
import bisPdf from '../../assets/images/certificates/BIS LICENCE.pdf'
import iso13485Pdf from '../../assets/images/certificates/En ISO 13485 latestr.PDF'
import icmedPdf from '../../assets/images/certificates/icmed 13485  renewal.pdf'
import iso9001Pdf from '../../assets/images/certificates/ISO 9001-2015 RENUAL 2023 (1).PDF'
import drugPdf from '../../assets/images/certificates/NEW DRUG LICENCE.PDF'
import gstPdf from '../../assets/images/certificates/GST - Copy.PDF'

export const certificationsData = [

  {
    title: "CE Certification",
    desc: "European healthcare manufacturing compliance certification.",
    image: certificate1,
    file: cePdf,
  },

  {
    title: "ISO 9001 Certification",
    desc: "International quality management systems certification.",
    image: certificate2,
    file: iso9001Pdf,
  },

  {
    title: "GMP Certification",
    desc: "Good Manufacturing Practice certified operations.",
    image: certificate3,
    file: icmedPdf,
  },

  {
    title: "BIS Licence",
    desc: "Indian standards certification for syringe manufacturing.",
    image: certificate4,
    file: bisPdf,
  },

  {
    title: "EN ISO 13485",
    desc: "Medical devices quality management certification.",
    image: certificate5,
    file: iso13485Pdf,
  },

  {
    title: "Drug Licence",
    desc: "Certified healthcare manufacturing drug licence approval.",
    image: certificate6,
    file: drugPdf,
  },

  {
    title: "GST Registration",
    desc: "Official GST registration certification.",
    image: certificate7,
    file: gstPdf,
  },

]