/**
 * Contact Service - Submits contact form data to Google Apps Script Web App
 */

export const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbx1mayRGG6yhHDBLYnS8CgfWh2g72EWnXQIktwp2ygDTEt8b8tw4tXgS16Q4EN7kqXS/exec'

/**
 * Submits the 6-field contact form payload to Google Apps Script
 * Maps to all possible header variations: Name, Email, Number/Phone, Business Name, Industry Type, Location
 * @param {Object} formData
 * @returns {Promise<{ success: boolean }>}
 */
export async function submitContactForm(formData) {
  const name = formData.name?.trim() || ''
  const email = formData.email?.trim() || ''
  const phone = formData.phone?.trim() || ''
  const businessName = formData.businessName?.trim() || ''
  const industryType = formData.industryType || ''
  const location = formData.location?.trim() || ''
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })

  // Build comprehensive mapping supporting both exact sheet headers and camelCase keys
  const dataMapping = {
    // Exact sheet headers from Google Sheet
    'Timestamp': timestamp,
    'Name': name,
    'Email': email,
    'Number': phone,
    'Business Name': businessName,
    'Industry Type': industryType,
    'Location': location,

    // CamelCase and standard keys
    'timestamp': timestamp,
    'name': name,
    'email': email,
    'phone': phone,
    'number': phone,
    'businessName': businessName,
    'industryType': industryType,
    'location': location
  }

  // Create FormData and URLSearchParams for maximum Google Apps Script compatibility
  const formDataObj = new FormData()
  const urlParams = new URLSearchParams()

  Object.entries(dataMapping).forEach(([key, value]) => {
    formDataObj.append(key, value)
    urlParams.append(key, value)
  })

  try {
    // 1. Primary submission using URL-encoded POST with redirect follow
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: urlParams.toString(),
      mode: 'no-cors'
    })

    return { success: true }
  } catch (err) {
    console.warn('URLSearchParams submission warning, attempting FormData:', err)
    try {
      // 2. Fallback using multipart FormData
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formDataObj,
        mode: 'no-cors'
      })

      return { success: true }
    } catch (fallbackError) {
      console.error('Contact Form Final Submission Error:', fallbackError)
      throw fallbackError
    }
  }
}
