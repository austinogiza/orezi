const baseURL = process.env.NODE_ENV === 'development' ? "http://127.0.0.1:8000/": null

const endpoint = `${baseURL}api`

export const contactUrl = `${endpoint}/contact/`
export const workUrl = `${endpoint}/work/`
export const workProductUrl = `${endpoint}/work/product/`
export const blogUrl = `${endpoint}/blog/`
export const blogPostUrl = slug => `${endpoint}/blog/${slug}/`
export const workflyerUrl = `${endpoint}/work/flyer/`
export const workbrandUrl = `${endpoint}/work/brand/`
export const workpackageUrl = `${endpoint}/work/package/`
export const workcampaignUrl = `${endpoint}/work/campaign/`
export const workcommunicationUrl = `${endpoint}/work/communication/`
export const searchUrl = search => `${endpoint}/search/q?=${search}/`
export const tagUrl = slug => `${endpoint}/tags/${slug}/`




