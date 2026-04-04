import{t as e}from"./index-By_CtJcA.js";var t=class{formatMessage(e,t){throw Error(`Method formatMessage must be implemented`)}},n=class extends t{formatMessage(t,n){let r=`*Order from ${e.websiteName}*\n\n`;t.forEach((t,n)=>{r+=`${n+1}. *${t.name}*\n`,r+=`   Qty: ${t.quantity} ${t.unit||`pcs`}\n`,r+=`   Price: ${e.currencySymbol}${t.price.toLocaleString()}\n\n`}),r+=`*Total Amount: ${e.currencySymbol}${n.toLocaleString()}*\n\n`,r+=`Please confirm availability and delivery time.`;let i=encodeURIComponent(r);return`https://wa.me/${e.whatsAppNumber}?text=${i}`}},r=class extends t{formatMessage(t,n){let r=`Order Summary - ${e.websiteName}`,i=`Hello,

I would like to place an order for the following items:

`;t.forEach((e,t)=>{i+=`${t+1}. ${e.name} (Qty: ${e.quantity} ${e.unit||`pcs`})\n`}),i+=`\nTotal Estimated Amount: ${e.currencySymbol}${n.toLocaleString()}\n\n`,i+=`Please contact me for further details.

Thank you.`;let a=encodeURIComponent(r),o=encodeURIComponent(i);return`mailto:${e.businessEmail}?subject=${a}&body=${o}`}},i={getWhatsAppLink:(e,t)=>new n().formatMessage(e,t),getEmailLink:(e,t)=>new r().formatMessage(e,t)};export{i as t};