/**
 * Entry point for variant detail pages
 */
import { navbar } from './components/navbar/navbar.js';
import { injectGTM } from './utils/gtm.js'
import { footer } from './components/footer/footer.js';
import { navbarAnimation } from './components/navbar/navbarAnimation.js';
import { navbarFunctionality } from './components/navbar/navbarFunctionality.js';
import { footerAnimation } from './components/footer/footerAnimation.js';
import { whatsappButton } from './components/whatsapp/whatsappButton';
import { whatsappButtonFunctionality } from './components/whatsapp/whatsappButtonFunctionality.js';
import { VariantDetailPage } from './components/products/variantDetailPage.js';
import { injectMetaTags, injectSchema, generateMetaTags, generateProductSchema, addBreadcrumbsToProductDetail, injectMultipleSchemas } from './utils/seoMeta.js';

injectGTM();

export async function initVariantDetailPage(variantSlug) {
  // Get variant from database
  const { getVariantBySlug } = await import('./data/productsDatabase.js');
  const variantData = getVariantBySlug(variantSlug);

  if (!variantData) {
    console.error(`Variant not found: ${variantSlug}`);
    return;
  }

  // Inject SEO metadata
  const metaTags = generateMetaTags(variantData, true);
  injectMetaTags(metaTags);

  // Inject JSON-LD schemas (Product + BreadcrumbList)
  const productSchema = generateProductSchema(variantData);
  
  // Generate breadcrumb schema
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products.html' },
    { name: variantData.categoryName, url: `/products/${variantData.categoryId}.html` },
    { name: variantData.name, url: `/products/${variantData.categoryId}/${variantSlug}.html` }
  ];
  const breadcrumbSchema = addBreadcrumbsToProductDetail(breadcrumbItems);
  
  // Inject both schemas
  injectMultipleSchemas([productSchema, breadcrumbSchema]);

  // Initialize navbar and footer
  const navElement = document.createElement('div');
  const mainElement = document.createElement('main');
  const whatsappButtonElement = document.createElement('div');
  const footerElement = document.createElement('div');

  mainElement.className = 'pt-24 pb-20';
  navElement.innerHTML = navbar();
  whatsappButtonElement.innerHTML = whatsappButton()
  footerElement.innerHTML = footer();

  // Insert into DOM
  document.body.insertBefore(navElement, document.querySelector('main') || document.body.firstChild);
  const pageRoot = document.getElementById('variant-detail-root');
  mainElement.innerHTML = VariantDetailPage(variantData);
  pageRoot.replaceWith(mainElement);
  document.body.appendChild(footerElement);
  document.body.appendChild(whatsappButtonElement);

  // Initialize animations and functionality
  navbarAnimation();
  navbarFunctionality();
  footerAnimation();
  whatsappButtonFunctionality();

  // Initialize variant detail page animations
  const variantDetailAnimation = (await import('./components/products/variantDetailAnimation.js')).variantDetailAnimation;
  variantDetailAnimation();
}
