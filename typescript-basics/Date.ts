const today: Date = new Date();

const dates = {
  date: today.getDate(),       
  month: today.getMonth(),          
  year: today.getFullYear(),
englishDate : function():string{
    return `${dates.date}/${dates.month}/${dates.year}`;
}, email: function(): string {
    
    return `${Name}${DateNow}${domain}`;
  }

}
const Name="gajanan"
 const DateNow= Date.now();
 const domain="@example.com";
//const englishDate = `${dates.date}/${dates.month}/${dates.year}`;

console.log(dates.englishDate());  
console.log(dates.email());
//console.log(today.getDate());      
//.log(today.toDateString());  
//.log(dates);
