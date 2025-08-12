import { NextRequest, NextResponse } from 'next/server'
import * as nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { projectTitle, linkType, linkUrl } = await request.json()

    // Create transporter using Gmail app password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: '6846jenishpatel@gmail.com',
        pass: 'qzqmrmtslcqiirky'
      }
    })

    // Email content
    const mailOptions = {
      from: '6846jenishpatel@gmail.com',
      to: 'pateljenish2021@gmail.com',
      subject: `Portfolio Link Clicked - ${projectTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Someone clicked on your portfolio link!
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Project Details:</h3>
            <p><strong>Project:</strong> ${projectTitle}</p>
            <p><strong>Link Type:</strong> ${linkType}</p>
            <p><strong>URL:</strong> <a href="${linkUrl}" style="color: #007bff;">${linkUrl}</a></p>
          </div>
          
          <div style="background-color: #e7f3ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #0056b3;">
              <strong>Timestamp:</strong> ${new Date().toLocaleString()}
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px;">
              This notification was sent automatically when someone clicked on your portfolio link.
            </p>
          </div>
        </div>
      `
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully' 
    })

  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send email' 
      },
      { status: 500 }
    )
  }
} 