import { APP_CONFIG } from '../config/appConfig';

/**
 * Strategy pattern for Order Channels
 */
class OrderStrategy {
  formatMessage(cart, total) {
    throw new Error('Method formatMessage must be implemented');
  }
}

class WhatsAppStrategy extends OrderStrategy {
  formatMessage(cart, total) {
    let message = `*Order from ${APP_CONFIG.websiteName}*\n\n`;
    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      message += `   Qty: ${item.quantity} ${item.unit}\n`;
      message += `   Price: ${APP_CONFIG.currencySymbol}${item.price.toLocaleString()}\n\n`;
    });
    message += `*Total Amount: ${APP_CONFIG.currencySymbol}${total.toLocaleString()}*\n\n`;
    message += `Please confirm availability and delivery time.`;
    
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${APP_CONFIG.whatsAppNumber}?text=${encodedMessage}`;
  }
}

class EmailStrategy extends OrderStrategy {
  formatMessage(cart, total) {
    let subject = `Order Summary - ${APP_CONFIG.websiteName}`;
    let body = `Hello,\n\nI would like to place an order for the following items:\n\n`;
    
    cart.forEach((item, index) => {
      body += `${index + 1}. ${item.name} (Qty: ${item.quantity} ${item.unit})\n`;
    });
    
    body += `\nTotal Estimated Amount: ${APP_CONFIG.currencySymbol}${total.toLocaleString()}\n\n`;
    body += `Please contact me for further details.\n\nThank you.`;
    
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    return `mailto:${APP_CONFIG.businessEmail}?subject=${encodedSubject}&body=${encodedBody}`;
  }
}

// Order Service context
export const orderService = {
  getWhatsAppLink: (cart, total) => new WhatsAppStrategy().formatMessage(cart, total),
  getEmailLink: (cart, total) => new EmailStrategy().formatMessage(cart, total)
};
