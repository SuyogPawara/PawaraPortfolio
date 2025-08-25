interface EmailParams {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (params: EmailParams): Promise<boolean> => {
  try {
    // EmailJS configuration
    const serviceId = process.env.VITE_EMAILJS_SERVICE_ID || 'default_service';
    const templateId = process.env.VITE_EMAILJS_TEMPLATE_ID || 'default_template';
    const publicKey = process.env.VITE_EMAILJS_PUBLIC_KEY || 'default_key';

    // Simulate EmailJS send function
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: params,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};
