import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { pageMetadata } from './src/utils/pageMetadata.js'
import { productsDatabase } from './src/data/productsDatabase.js'

const BASE_URL = 'https://nihalhealthcare.com'
const OG_IMAGE = `${BASE_URL}/assets/images/brand/og-image-nihal-healthcare.jpg`

// Maps each static page HTML path → key in pageMetadata
const PAGE_META_MAP = {
  '/index.html': 'home',
  '/about.html': 'about',
  '/products.html': 'products',
  '/contact.html': 'contact',
  '/blogs.html': 'blogs',
  '/certifications.html': 'certifications',
  '/leadership.html': 'leadership',
  '/history.html': 'history',
  '/feedback.html': 'feedback',
  '/sterile-manufacturing.html': 'sterileManufacturing',
  '/healthcare-innovation.html': 'healthcareInnovation',
  '/medical-safety.html': 'medicalSafety',
}

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
}

/** Builds the meta tag HTML string from a normalised meta object. */
function buildTagsHtml({ title, description, keywords, ogImage, canonical, ogType }) {
  const img = ogImage || OG_IMAGE
  const url = canonical || BASE_URL
  return [
    `  <meta name="description" content="${escapeHtml(description)}" />`,
    `  <meta name="keywords" content="${escapeHtml(keywords)}" />`,
    `  <meta name="robots" content="index, follow" />`,
    `  <meta name="author" content="Nihal Healthcare" />`,
    `  <meta property="og:title" content="${escapeHtml(title)}" />`,
    `  <meta property="og:description" content="${escapeHtml(description)}" />`,
    `  <meta property="og:image" content="${escapeHtml(img)}" />`,
    `  <meta property="og:url" content="${escapeHtml(url)}" />`,
    `  <meta property="og:type" content="${ogType || 'website'}" />`,
    `  <meta property="og:locale" content="en_US" />`,
    `  <meta name="twitter:card" content="summary_large_image" />`,
    `  <meta name="twitter:title" content="${escapeHtml(title)}" />`,
    `  <meta name="twitter:description" content="${escapeHtml(description)}" />`,
    `  <meta name="twitter:image" content="${escapeHtml(img)}" />`,
    `  <link rel="canonical" href="${escapeHtml(url)}" />`,
    `  <link rel="icon" type="image/x-icon" href="/assets/favicons/favicon.ico" />`,
    `  <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicons/favicon-32x32.png" />`,
    `  <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicons/favicon-16x16.png" />`,
    `  <link rel="apple-touch-icon" href="/assets/favicons/apple-touch-icon.png" />`,
    `  <link rel="icon" type="image/png" sizes="192x192" href="/assets/favicons/android-chrome-192x192.png" />`,
    `  <link rel="icon" type="image/png" sizes="512x512" href="/assets/favicons/android-chrome-512x512.png" />`,
  ].join('\n')
}

/** Build meta for a product category page from productsDatabase. */
function buildCategoryMeta(cat) {
  return {
    title: `${cat.name} | Nihal Healthcare - Medical Supplies`,
    description: cat.description,
    keywords: `${cat.name}, sterile syringes, hypodermic needles, medical devices, CE, ETO sterilized, bulk ordering`,
    ogImage: cat.image ? `${BASE_URL}${cat.image}` : OG_IMAGE,
    canonical: `${BASE_URL}/products/${cat.slug}.html`,
    ogType: 'website',
  }
}

/** Build meta for a product variant page from productsDatabase. */
function buildVariantMeta(variant) {
  const gaugeInfo = variant.needleGauges?.length
    ? `${variant.needleGauges.length} gauge options`
    : variant.gauge || 'multiple sizes'
  return {
    title: `${variant.name} | Medical Syringes & Needles | Nihal Healthcare`,
    description: `${variant.briefDescription}. Available with ${gaugeInfo}. CE certified. ETO sterilized. Contact for quote.`,
    keywords: `${variant.name}, ${variant.categoryName}, ${variant.size || variant.gauge || ''}, sterile syringe, hypodermic needle, medical device, CE`,
    ogImage: variant.image ? `${BASE_URL}${variant.image}` : OG_IMAGE,
    canonical: `${BASE_URL}/products/${variant.categoryId}/${variant.slug}.html`,
    ogType: 'product',
  }
}

/**
 * Injects meta tags into every HTML file at build time so crawlers and
 * social-media scrapers see correct tags without requiring JS execution.
 * Sources:
 *   - Static pages  → pageMetadata.js (via PAGE_META_MAP)
 *   - Category pages → productsDatabase.categories (pattern: /products/{id}.html)
 *   - Variant pages  → productsDatabase.variants   (pattern: /products/{cat}/{id}.html)
 */
function injectMetaTagsPlugin() {
  return {
    name: 'vite-plugin-inject-meta',
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        let meta = null

        // 1. Static pages (home, about, blogs, blog articles, etc.)
        const metaKey = PAGE_META_MAP[ctx.path]
        if (metaKey && pageMetadata[metaKey]) {
          const m = pageMetadata[metaKey]
          meta = {
            title: m.title,
            description: m.description,
            keywords: m.keywords,
            ogImage: m.ogImage || OG_IMAGE,
            canonical: m.canonical || BASE_URL,
            ogType: m.ogType || 'website',
          }
        }

        // 2. Product category pages: /products/{categorySlug}.html
        if (!meta) {
          const catMatch = ctx.path.match(/^\/products\/([^/]+)\.html$/)
          if (catMatch) {
            const cat = productsDatabase.categories.find(c => c.id === catMatch[1])
            if (cat) meta = buildCategoryMeta(cat)
          }
        }

        // 3. Product variant pages: /products/{categorySlug}/{variantSlug}.html
        if (!meta) {
          const varMatch = ctx.path.match(/^\/products\/[^/]+\/([^/]+)\.html$/)
          if (varMatch) {
            const variant = productsDatabase.variants[varMatch[1]]
            if (variant) meta = buildVariantMeta(variant)
          }
        }

        if (!meta) return html

        const tags = buildTagsHtml(meta)
        return html.replace(/(<\/head>)/, `${tags}\n  $1`)
      },
    },
  }
}
export default defineConfig({

  plugins: [tailwindcss(), injectMetaTagsPlugin()],

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

        // PRODUCT PAGES (removed - these pages no longer exist)

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