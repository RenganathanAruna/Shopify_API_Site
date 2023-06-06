$.ajax({
    url: "https://fakestoreapi.com/products",
    method: "GET",
     success: function (response) 
     {
       console.log(response);
       
       $.each(response, function (index,value)
       {
        
                 // creating car div
                 const cardDiv = document.createElement("div");
                 cardDiv.classList.add("col-sm-12", "col-md-6", "col-lg-4", "flip-card");
   
                 // Create a new card element
                 const card = document.createElement('div');
                 card.classList.add("card","mb-3","carddim");
   
   
   //---------------------------------------Adding data to card--------------------------------------------//
                // To center the img we are creating a div
                const imgdiv = document.createElement("div")

                // Adding image to card
                const ProductImage = document.createElement("img");
                ProductImage.src = value.image;
                ProductImage.alt = value.id;
                ProductImage.className = "card-img-top product_img_size mb-3";
                imgdiv.appendChild(ProductImage);
                card.appendChild(imgdiv);

                // Adding title to card
                const title = document.createElement("span");
                title.innerText = value.title;
                title.className = "Card_title mb-3";
                card.appendChild(title);

                // Adding price to card
                const price = document.createElement("h2");
                price.innerHTML = "$ " + value.price + " <h6 class='DisplayInline'>onwards</h6>";
                price.className = "Card_price mb-3";
                card.appendChild(price);

                // Adding free delevery 

                const deliverydiv = document.createElement("div")
                const delivery = document.createElement("span");
                delivery.className = "Card_devilery mb-3 badge bg-secondary";
                delivery.innerHTML = "Free delivery";
                deliverydiv.appendChild(delivery);
                card.appendChild(deliverydiv);

                // Adding rating to card
                const rating = document.createElement("span");
                rating.innerHTML = "<b class='DisplayInline rating'>"+value.rating.rate + ' <i class="fa-solid fa-star"></i>'+ "</b>" + " " + value.rating.rate * 1000 + " Ratings";
                rating.className = "Card_rating mb-3";
                card.appendChild(rating);

                

                
   //---------------------------------------Adding data to card--------------------------------------------//
   
   
                 // Append card to card div
                 cardDiv.appendChild(card);
   
                 // Append the carddiv to a respective caterogy div in the HTML
                 if(value.category == "men's clothing")
                 {
                  const section = document.getElementById('mens clothings');
                  section.appendChild(cardDiv);
                 }
                 else if(value.category == "women's clothing")
                 {
                  const section = document.getElementById('women clothings');
                  section.appendChild(cardDiv);
                 }
                 else if(value.category == "electronics")
                 {
                  const section = document.getElementById('electronics');
                  section.appendChild(cardDiv);
                 }
                 else if(value.category == "jewelery")
                 {
                  const section = document.getElementById('jeweleres');
                  section.appendChild(cardDiv);
                 }
        });
      },
   
    error: function (e)
     { 
       console.log(e);
     },
   
   });

   // ===== for fixed navbar ==== 

   window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.NavPositon');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      navbar.classList.add('fixed');
    } else {
      navbar.classList.remove('fixed');
    }
  });
  

// ===== Changing the active navbar link when selected ==== 
const links = document.querySelectorAll('#ul li a');

links.forEach(link => {
  link.addEventListener('click', function(event) {

    links.forEach(link => {
      link.classList.remove('activeLink');
    });

    this.classList.add('activeLink');
  });
});


// ===== Scroll to Top appears ==== 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        
      $('#return-to-top').fadeIn(200);    
  } else {
      $('#return-to-top').fadeOut(200);  
  }
});

// ===== Scrolling to top ==== 
$('#return-to-top').click(function() {    
  $('body,html').animate({
      scrollTop : 0                      
  }, 0);

// ===== Removing the current active class When scrolling==== 

  links.forEach(link => {
    link.classList.remove('activeLink');
  });
});
