const baseURL = process.env.NODE_ENV === 'development' ? "http://127.0.0.1:8000/": null

const endpoint = `${baseURL}api`

export const contactUrl = `${endpoint}/contact/`
export const blogUrl = `${endpoint}/blog/`
export const blogPostUrl = slug => `${endpoint}/blog/${slug}/`

