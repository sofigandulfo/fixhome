import Image from "next/image"
import "./Button.css"

function Button({ text, showImage = true, phoneNumber, message }) {
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="button-wpp">
      {showImage && (
        <Image className="button-wpp-img" src="/WhatsApp.svg" alt="Icono de WhatsApp" width={20} height={20} />
      )}
        <p className="button-wpp-text">{text}</p>
    </a>
  )
}

export default Button