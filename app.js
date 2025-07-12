// ========================================================
//               nav bar coor & stuck
// ========================================================              
 // Get the navbar element
        const navbar = document.querySelector('.navbar');

        // Listen for scroll events
        window.addEventListener('scroll', function() {
            if (document.documentElement.scrollTop > 20) {
                navbar.classList.add('white-background');
            } else {
                navbar.classList.remove('white-background');
            }
        });


// =========================================================
//         counter Selection
// ==========================================================        
 document.addEventListener("DOMContentLoaded",()=>{
  
    function counter(id, duration, start, end){
         let obj = document.getElementById(id),
         current = start;
        //  range =end -start,
         increment = end > start ? 1 : -1;

     let  timer = setInterval(()=>{
          current += increment;
         obj.innerText= current;
          if(current == end){
            clearInterval(timer);
          }
       },duration);
    }
     
    counter("count1",5, 0 , 1200);
    counter("count2",6, 0 , 4020);
    counter("count3",4, 0 , 3020);
    counter("count4",7, 0 , 5020);
 });



// window.onload = function() {
//     document.getElementById("count1").innerText = "100";
//     document.getElementById("count2").innerText = "200";
//     document.getElementById("count3").innerText = "300";
//     document.getElementById("count4").innerText = "400";
//   };
