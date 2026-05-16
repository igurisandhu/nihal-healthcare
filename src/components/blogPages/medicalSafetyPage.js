import '../../style.css'

import { navbar } from '../navbar/navbar'

import { footer } from '../footer/footer'

import { blogsData } from '../blogs/blogsData'

import { singleBlogHero } from '../blogs/singleBlogHero'

import { singleBlogContent } from '../blogs/singleBlogContent'

const blog = blogsData[2]

document.querySelector('#app').innerHTML = `

  ${navbar()}

  <main>

    ${singleBlogHero(blog)}

    ${singleBlogContent(blog)}

  </main>

  ${footer()}

`