import disposableImg from '../../assets/images/product-1.jpg'

import safetyImg from '../../assets/images/product-2.jpg'

import insulinImg from '../../assets/images/product-3.jpg'

export const productData = {

  disposable: {

    title: 'Disposable Syringes',

    image: disposableImg,

    desc: `
      High precision disposable syringes manufactured
      using advanced medical-grade materials ensuring
      sterility, smooth administration, and patient safety.
    `,

    features: [

      'Sterile & Single Use',
      'Leak Resistant Design',
      'Smooth Plunger Motion',
      'ETO Sterilized',
      'Medical Grade Material',
      'ISO Certified',

    ],

    specifications: [

      {
        label: 'Material',
        value: 'Polypropylene'
      },

      {
        label: 'Sterilization',
        value: 'ETO Sterilized'
      },

      {
        label: 'Classification',
        value: 'Class IIa'
      },

      {
        label: 'Usage',
        value: 'Single Use'
      },

    ],

    sizes: [
      '1ml',
      '2ml',
      '3ml',
      '5ml',
      '10ml',
      '20ml',
      '50ml',
    ],

    regulatory: [

      {
        label: 'EMDN Code',
        value: 'A020102'
      },

      {
        label: 'GMDN Code',
        value: '47017'
      },

      {
        label: 'Certification',
        value: 'ISO 13485'
      },

      {
        label: 'UDI-DI',
        value: 'Available'
      },

    ],

  },

  safety: {

    title: 'Safety Syringes',

    image: safetyImg,

    desc: `
      Advanced safety syringes designed to prevent
      accidental needle-stick injuries and improve
      healthcare safety during medical procedures.
    `,

    features: [

      'Needle Protection',
      'Enhanced Healthcare Safety',
      'Single Use Design',
      'Medical Grade Material',
      'Sterile Packaging',
      'WHO Standards',

    ],

    specifications: [

      {
        label: 'Material',
        value: 'Medical Polymer'
      },

      {
        label: 'Sterilization',
        value: 'ETO Sterilized'
      },

      {
        label: 'Classification',
        value: 'Class IIa'
      },

      {
        label: 'Usage',
        value: 'Single Use'
      },

    ],

    sizes: [
      '1ml',
      '3ml',
      '5ml',
      '10ml',
    ],

    regulatory: [

      {
        label: 'EMDN Code',
        value: 'A020102'
      },

      {
        label: 'GMDN Code',
        value: '47017'
      },

      {
        label: 'Certification',
        value: 'ISO 13485'
      },

      {
        label: 'UDI-DI',
        value: 'Available'
      },

    ],

  },

  insulin: {

    title: 'Insulin Syringes',

    image: insulinImg,

    desc: `
      Reliable insulin syringes engineered for
      accurate dosage administration and enhanced
      patient comfort in diabetic care.
    `,

    features: [

      'Precise Dosage Delivery',
      'Smooth Injection',
      'Fine Needle Technology',
      'Sterile Packaging',
      'Single Use',
      'Enhanced Comfort',

    ],

    specifications: [

      {
        label: 'Material',
        value: 'Medical Grade Polymer'
      },

      {
        label: 'Sterilization',
        value: 'ETO Sterilized'
      },

      {
        label: 'Classification',
        value: 'Class IIa'
      },

      {
        label: 'Usage',
        value: 'Single Use'
      },

    ],

    sizes: [
      '0.3ml',
      '0.5ml',
      '1ml',
    ],

    regulatory: [

      {
        label: 'EMDN Code',
        value: 'A020102'
      },

      {
        label: 'GMDN Code',
        value: '47017'
      },

      {
        label: 'Certification',
        value: 'ISO 13485'
      },

      {
        label: 'UDI-DI',
        value: 'Available'
      },

    ],

  },

}