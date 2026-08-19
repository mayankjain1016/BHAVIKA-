import { NextRequest, NextResponse } from 'next/server'

// Google Apps Script Web App Endpoint for Bhavika Manpower Contact Leads
const GOOGLE_SCRIPT_WEB_APP_URL =
  'https://script.google.com/macros/s/AKfycbyoglm8KfXCLg9uDX4yUmW3Md_wXO7V_5QF7CfMNuMqdOufOCzqNEnmuSOQG3O8kESL/exec'

export interface ContactFormData {
  name: string
  email: string
  phone: string
  businessName: string
  industryType: string
  location: string
  timestamp?: string
}

export async function POST(req: NextRequest) {
  try {
    const body: Partial<ContactFormData> = await req.json()

    const { name, email, phone, businessName, industryType, location } = body

    // 1. Validate required fields
    if (!name || !email || !phone || !businessName || !industryType || !location) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields. Please ensure name, email, phone, businessName, industryType, and location are provided.'
        },
        { status: 400 }
      )
    }

    const payload: ContactFormData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      businessName: businessName.trim(),
      industryType: industryType.trim(),
      location: location.trim(),
      timestamp: new Date().toISOString()
    }

    // 2. Prepare payload for Google Apps Script Web App
    const formData = new URLSearchParams()
    formData.append('name', payload.name)
    formData.append('email', payload.email)
    formData.append('phone', payload.phone)
    formData.append('businessName', payload.businessName)
    formData.append('industryType', payload.industryType)
    formData.append('location', payload.location)
    formData.append('timestamp', payload.timestamp || '')

    // 3. Forward request to Google Apps Script Web App securely
    const response = await fetch(GOOGLE_SCRIPT_WEB_APP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData.toString()
    })

    const rawResponseText = await response.text().catch(() => '')

    return NextResponse.json({
      success: true,
      message: 'Contact requirements successfully recorded in Google Sheets.',
      data: payload,
      scriptResponse: rawResponseText || 'OK'
    })
  } catch (error: any) {
    console.error('Contact API Route Error:', error)
    return NextResponse.json(
      {
        success: false,
        error: error?.message || 'Internal Server Error while forwarding to Google Apps Script.'
      },
      { status: 500 }
    )
  }
}
