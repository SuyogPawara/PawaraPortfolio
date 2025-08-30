/*interface EmailParams {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (params: EmailParams): Promise<boolean> => {
  try {
    // EmailJS configuration
    const serviceId = process.env.VITE_EMAILJS_SERVICE_ID || 'service_dyc3p6r';
    const templateId = process.env.VITE_EMAILJS_TEMPLATE_ID || 'template_nlk5gje';
    const publicKey = process.env.VITE_EMAILJS_PUBLIC_KEY || 'iPSOZYyfk6oQ7MS0i';

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
};*/
interface EmailParams {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (params: EmailParams): Promise<boolean> => {
  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_dyc3p6r";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_nlk5gje";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "iPSOZYyfk6oQ7MS0i";

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: params,
      }),
    });

    if (response.ok) {
      console.log("✅ Email sent successfully!");
      return true;
    } else {
      const errorText = await response.text();
      console.error("❌ Failed to send email:", errorText);
      return false;
    }
  } catch (error) {
    console.error("❌ Error while sending email:", error);
    return false;
  }
};



