// Initialize and add the map
function initMap() {
    // Your location
    const loc = { lat: 18.5165009, lng: 73.8451402 };
    // Centered map on location
    const map = new google.maps.Map(document.querySelector('.map'), {
      zoom: 16,
      center: loc
    });
    // The marker, positioned at location
    const marker = new google.maps.Marker({ position: loc, map: map });
  }
  
  $('#navbar a, .btn').on('click', function(event){
      if(this.hash !== ''){
          event.preventDefault();

          const hash = this.hash;

          $('html, body').animate(
              {
                  scrollTop: $(hash).offset().top -100
              }, 
              800
          );
      }
  });


window.addEventListener('scroll', ()=>{

    let anurag = document.getElementById('navbar');
      if(window.scrollY > 130 ){
          anurag.style.opacity = 0.9
      }else {
          anurag.style.opacity = 1
      }
}
)















// window.addEventListener('scroll', ()=>{
//     if(window.scrollY > 100){
//         document.querySelector('#navbar').style.opacity = 0.9;
//     }else{
//         document.querySelector('#navbar').style.opacity = 1;
//     }
// })

//   // Smooth Scrolling
// $('#navbar a, .btn').on('click', function(event) {
//     if (this.hash !== '') {
//       event.preventDefault();
  
//       const hash = this.hash;
  
//       $('html, body').animate(
//         {
//           scrollTop: $(hash).offset().top -100
//         },
//         800
//       );
//     }
//   });