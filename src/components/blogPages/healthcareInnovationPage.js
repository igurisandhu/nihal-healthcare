import '../../style.css'


import { navbar } from '../navbar/navbar'

import { footer } from '../footer/footer'

import { blogsData } from '../blogs/blogsData'

import { singleBlogHero } from '../blogs/singleBlogHero'

import { singleBlogContent } from '../blogs/singleBlogContent'
import { injectGTM } from '../../utils/gtm.js';
import { injectMeta, injectMultipleSchemas, generateArticleSchema, generateBreadcrumbSchema } from '../../utils/seoMeta.js';
import { getPageMetadata } from '../../utils/pageMetadata.js';

injectGTM();

const blog = blogsData[1]
const pageMeta = getPageMetadata('healthcareInnovation')
injectMeta(pageMeta)

injectMultipleSchemas([
  generateArticleSchema({
    title: blog.title,
    description: pageMeta.description,
    publishedDate: pageMeta.publishedDate,
    modifiedDate: pageMeta.modifiedDate,
    keywords: pageMeta.articleKeywords,
    category: pageMeta.articleCategory,
    url: pageMeta.canonical,
  }),
  generateBreadcrumbSchema([
    { name: 'Home', url: 'https://nihalhealthcare.com/' },
    { name: 'Blogs', url: 'https://nihalhealthcare.com/blogs.html' },
    { name: blog.title },
  ]),
])

document.querySelector('#app').innerHTML = `

  ${navbar()}

  <main>

    ${singleBlogHero(blog)}

    ${singleBlogContent(blog)}

  </main>

  ${footer()}

`