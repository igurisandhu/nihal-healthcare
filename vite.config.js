import { defineConfig } from 'vite'

import tailwindcss from '@tailwindcss/vite'

import { resolve } from 'path'

export default defineConfig({

  plugins: [tailwindcss()],

  base: '/',

  build: {

    rollupOptions: {

      input: {

        // MAIN PAGES
        main: resolve(__dirname, 'index.html'),

        about: resolve(__dirname, 'about.html'),

        contact: resolve(__dirname, 'contact.html'),

        history: resolve(__dirname, 'history.html'),

        products: resolve(__dirname, 'products.html'),

        certifications: resolve(__dirname, 'certifications.html'),

        blogs: resolve(__dirname, 'blogs.html'),

        feedback: resolve(__dirname, 'feedback.html'),

        leadership: resolve(__dirname, 'leadership.html'),

        // PRODUCT PAGES
        disposable: resolve(
          __dirname,
          'disposable-syringes.html'
        ),

        safety: resolve(
          __dirname,
          'safety-syringes.html'
        ),

        insulin: resolve(
          __dirname,
          'insulin-syringes.html'
        ),

        // BLOG PAGES
        sterileManufacturing: resolve(
          __dirname,
          'sterile-manufacturing.html'
        ),

        healthcareInnovation: resolve(
          __dirname,
          'healthcare-innovation.html'
        ),

        medicalSafety: resolve(
          __dirname,
          'medical-safety.html'
        ),

        // CATEGORY PAGES
        sterileHypodermicSyringesWithNeedle: resolve(
          __dirname,
          'products/sterile-hypodermic-syringes.html'
        ),

        sterileHypodermicSyringesWithoutNeedle: resolve(
          __dirname,
          'products/sterile-hypodermic-syringes-without-needle.html'
        ),

        sterileHypodermicNeedles: resolve(
          __dirname,
          'products/sterile-hypodermic-needles.html'
        ),

        // VARIANT PAGES - CATEGORY 1 (With Needle)
        variant1mlWithNeedle: resolve(
          __dirname,
          'products/sterile-hypodermic-syringes/1ml-syringe-with-needle.html'
        ),

        variant2mlWithNeedle: resolve(
          __dirname,
          'products/sterile-hypodermic-syringes/2ml-syringe-with-needle.html'
        ),

        variant3mlWithNeedle: resolve(
          __dirname,
          'products/sterile-hypodermic-syringes/3ml-syringe-with-needle.html'
        ),

        variant5mlWithNeedle: resolve(
          __dirname,
          'products/sterile-hypodermic-syringes/5ml-syringe-with-needle.html'
        ),

        variant10mlWithNeedle: resolve(
          __dirname,
          'products/sterile-hypodermic-syringes/10ml-syringe-with-needle.html'
        ),

        variant20mlWithNeedle: resolve(
          __dirname,
          'products/sterile-hypodermic-syringes/20ml-syringe-with-needle.html'
        ),

        variant50mlWithNeedle: resolve(
          __dirname,
          'products/sterile-hypodermic-syringes/50ml-syringe-with-needle.html'
        ),

        // VARIANT PAGES - CATEGORY 2 (Without Needle)
        variant1mlWithoutNeedle: resolve(
          __dirname,
          'products/sterile-hypodermic-syringes-without-needle/1ml-syringe-without-needle.html'
        ),

        variant2mlWithoutNeedle: resolve(
          __dirname,
          'products/sterile-hypodermic-syringes-without-needle/2ml-syringe-without-needle.html'
        ),

        variant3mlWithoutNeedle: resolve(
          __dirname,
          'products/sterile-hypodermic-syringes-without-needle/3ml-syringe-without-needle.html'
        ),

        variant5mlWithoutNeedle: resolve(
          __dirname,
          'products/sterile-hypodermic-syringes-without-needle/5ml-syringe-without-needle.html'
        ),

        variant10mlWithoutNeedle: resolve(
          __dirname,
          'products/sterile-hypodermic-syringes-without-needle/10ml-syringe-without-needle.html'
        ),

        variant20mlWithoutNeedle: resolve(
          __dirname,
          'products/sterile-hypodermic-syringes-without-needle/20ml-syringe-without-needle.html'
        ),

        variant50mlWithoutNeedle: resolve(
          __dirname,
          'products/sterile-hypodermic-syringes-without-needle/50ml-syringe-without-needle.html'
        ),

        // VARIANT PAGES - CATEGORY 3 (Needles)
        variant16gNeedle: resolve(
          __dirname,
          'products/sterile-hypodermic-needles/16g-hypodermic-needle.html'
        ),

        variant18gNeedle: resolve(
          __dirname,
          'products/sterile-hypodermic-needles/18g-hypodermic-needle.html'
        ),

        variant20gNeedle: resolve(
          __dirname,
          'products/sterile-hypodermic-needles/20g-hypodermic-needle.html'
        ),

        variant21gNeedle: resolve(
          __dirname,
          'products/sterile-hypodermic-needles/21g-hypodermic-needle.html'
        ),

        variant22gNeedle: resolve(
          __dirname,
          'products/sterile-hypodermic-needles/22g-hypodermic-needle.html'
        ),

        variant23gNeedle: resolve(
          __dirname,
          'products/sterile-hypodermic-needles/23g-hypodermic-needle.html'
        ),

        variant24gNeedle: resolve(
          __dirname,
          'products/sterile-hypodermic-needles/24g-hypodermic-needle.html'
        ),

        variant25gNeedle: resolve(
          __dirname,
          'products/sterile-hypodermic-needles/25g-hypodermic-needle.html'
        ),

        variant26gNeedle: resolve(
          __dirname,
          'products/sterile-hypodermic-needles/26g-hypodermic-needle.html'
        ),

      },

    },

  },

})