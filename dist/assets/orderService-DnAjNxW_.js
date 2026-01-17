import{c as m,A as a}from"./index-U2gKBT2E.js";/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],f=m("arrow-left",u);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],h=m("message-square",y);class d{formatMessage(e,s){throw new Error("Method formatMessage must be implemented")}}class $ extends d{formatMessage(e,s){let t=`*Order from ${a.websiteName}*

`;e.forEach((r,c)=>{t+=`${c+1}. *${r.name}*
`,t+=`   Qty: ${r.quantity} ${r.unit}
`,t+=`   Price: ${a.currencySymbol}${r.price.toLocaleString()}

`}),t+=`*Total Amount: ${a.currencySymbol}${s.toLocaleString()}*

`,t+="Please confirm availability and delivery time.";const o=encodeURIComponent(t);return`https://wa.me/${a.whatsAppNumber}?text=${o}`}}class g extends d{formatMessage(e,s){let t=`Order Summary - ${a.websiteName}`,o=`Hello,

I would like to place an order for the following items:

`;e.forEach((l,i)=>{o+=`${i+1}. ${l.name} (Qty: ${l.quantity} ${l.unit})
`}),o+=`
Total Estimated Amount: ${a.currencySymbol}${s.toLocaleString()}

`,o+=`Please contact me for further details.

Thank you.`;const r=encodeURIComponent(t),c=encodeURIComponent(o);return`mailto:${a.businessEmail}?subject=${r}&body=${c}`}}const b={getWhatsAppLink:(n,e)=>new $().formatMessage(n,e),getEmailLink:(n,e)=>new g().formatMessage(n,e)};export{f as A,h as M,b as o};
