/**
 * Entry point for category pages
 */
import { navbar } from './components/navbar/navbar.js';
import { injectGTM } from './utils/gtm.js'
import { footer } from './components/footer/footer.js';
import { navbarAnimation } from './components/navbar/navbarAnimation.js';
import { navbarFunctionality } from './components/navbar/navbarFunctionality.js';
import { footerAnimation } from './components/footer/footerAnimation.js';
import { whatsappButton } from './components/whatsapp/whatsappButton';
import { whatsappButtonFunctionality } from './components/whatsapp/whatsappButtonFunctionality.js';
import { CategoryPage } from './components/products/categoryPage.js';

injectGTM();

export async function initCategoryPage(categoryId) {
  // Get category with variants from database
  const { getCategoryWithVariants } = await import('./data/productsDatabase.js');
  const categoryData = getCategoryWithVariants(categoryId);

  if (!categoryData) {
    console.error(`Category not found: ${categoryId}`);
    return;
  }

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
  const pageRoot = document.getElementById('category-page-root');
  mainElement.innerHTML = CategoryPage(categoryData);
  pageRoot.replaceWith(mainElement);
  document.body.appendChild(footerElement);
  document.body.appendChild(whatsappButtonElement);

  // Initialize animations and functionality
  navbarAnimation();
  navbarFunctionality();
  footerAnimation();
  whatsappButtonFunctionality();

  // Initialize category page animations
  const categoryPageAnimation = (await import('./components/products/categoryAnimation.js')).categoryPageAnimation;
  categoryPageAnimation();
}
