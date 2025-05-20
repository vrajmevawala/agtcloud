import { useLoading } from "@/contexts/LoadingContext";

export default function Contact() {
  const { startLoading, stopLoading } = useLoading();
  // ... other state variables

  const handleSendWhatsApp = async () => {
    startLoading();
    try {
      const text = `Contact Form Submission:%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ASubject: ${subject}%0AMessage: ${message}`;
      const url = `https://wa.me/919558803148?text=${encodeURIComponent(`Contact Form Submission:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`)}`;
      window.open(url, '_blank');
    } finally {
      stopLoading();
    }
  };

  // ... rest of the component
} 