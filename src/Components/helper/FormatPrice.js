const FormatPrice=({price})=>{
   
    const format= Intl.NumberFormat("en-IN",{
         style:"currency",
         currency:"INR",
         maximumFractionDigits:2,
     }).format(price/1);
     return format;
 };
 
 export default FormatPrice;
