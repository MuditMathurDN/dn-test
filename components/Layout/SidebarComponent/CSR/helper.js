import dynamic from 'next/dynamic';
const html2pdf = dynamic(() => import('html2pdf.js'), { ssr: false });

export const EleToPdf = (html)=>{

    // console.log("html",html);
    let ele = document.createElement("html");
    let body = document.createElement('body');
    ele.append(body);
    body.innerHTML=html;
    
    
    // console.log('---- ele----',body);
    const pdf = html2pdf(body);


}