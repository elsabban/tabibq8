// let hit = $('.search-box').outerHeight();
// $('.search-box').css('min-height',hit);
$(window).on('load',function() {
	$(".loader").fadeOut("fast");
  $("#overlayer").fadeOut("fast");
  $('body').removeClass('loading');

  
});
$(".navbar-toggler").click(function(event) {

  event.preventDefault();
})
$(window).scroll(function () {
  if ($(window).scrollTop() > $('.top-bar').outerHeight()) {
    $('header').addClass('fix-head');
    $('body').css('margin-top',$('header').outerHeight());
  }else {
    $('header').removeClass('fix-head');
    $('body').css('margin-top','auto');
  }
})
$('.advanced').css('display','none');

    $('.docsearch').click(function () {
      
      $('.advanced').slideToggle('slow');
    })


let prev = `<div class="pre">
<div class="arr">
  <i class='fas fa-long-arrow-alt-left'></i>
</div>
<div class="arrtext">
  <span aria-label='Previous'>prev</span>

</div>

</div>`;
let nxt = `<div class="nxt">

<div class="arrtext">
  <span aria-label='Previous'>next</span>
  
</div>
<div class="arr">
  <i class='fas fa-long-arrow-alt-right'></i>
</div>
</div>`;

$('#main').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  items:1,
  nav:true,
  dots:false,
  autoplay:true,
  autoplaySpeed:1500,
  smartSpeed:1500,
  navText:[prev, nxt],
  autoplayHoverPause:true,
});

$('#clinic').owlCarousel({
  nav:true,
  dots:false,
  autoplaySpeed:1500,
  smartSpeed:1500,
  autoplay:true,
  autoplayHoverPause:true,
  items:3,
  loop:true,
  margin:5,
   navText:[prev, nxt],
  responsive:{
      0:{
          items:1
      },
      501:{
        items:2
      },
      991:{
        items:3
      },
  },
 
 
});


$('#equip').owlCarousel({
  nav:true,
  dots:false,
  autoplaySpeed:1500,
  smartSpeed:1500,
  autoplay:true,
  autoplayHoverPause:true,
  items:3,
  loop:true,
  margin:5,
   navText:[prev, nxt],
  responsive:{
    0:{
      items:1
  },
  501:{
    items:2
  },
  991:{
    items:3
  },
  },
 
 
});
// $('[data-toggle="collapse"]').on('click',function(){
//   if($(this).hasClass('arrow')) {
//     $(this).removeClass('arrow');
//   }else {
//     $(this).addClass('arrow');
//   }
  
//   $('.collapse.show').collapse('hide');

//   $('[data-toggle="collapse"]').not($(this)).removeClass('arrow');
 
// });
// $('.cls').on('click',function(){
//   $('.arrow').removeClass('arrow')
//   $(this).parents('.collapse').collapse('hide');
// })


$(document).ready(function () {
  // $('#sidebarCollapse').hide()
  // $('#sidebarCollapse').addClass('left');
  // $('#sidebarCollapsesm').addClass('left');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      // $('#sidebarCollapse ,#sidebar').show(500);
      // $('#sidebarCollapse').addClass('left');
      // $('#sidebarCollapsesm').addClass('left');
      // setTimeout(function () {
      //   $('#sidebarCollapse').css('left','-135px');
      //   console.log('hello');
      // }, 3000);
    }else {
      // $('#sidebarCollapse').removeClass('left');
      // $('#sidebarCollapse').hide(500);
    }
    
  })
  $("#sidebar ul ul").mCustomScrollbar({
      theme: "my-theme"
  });

  $('#sidebarCollapse').on('click', function () {
      $('#sidebar,#sidebarCollapse').toggleClass('active');
      $('.collapse.in').toggleClass('in');
      $('a[aria-expanded=true]').attr('aria-expanded', 'false');
      if($(this).hasClass('active')) {
        $(this).children().removeClass('fas fa-bars').addClass('fas fa-times');
      }else {
        $(this).children().removeClass('fas fa-times').addClass('fas fa-bars');
      }
  });



  $(window).on('click',function (event) {
    if ($(event.target).closest('#sidebarCollapse').length == 0 && $(event.target).closest('#sidebar').length == 0 ){
   
       $('#sidebar, #sidebarCollapse').removeClass('active')
       
        $("#sidebarCollapse").children().removeClass('fas fa-times').addClass('fas fa-bars');
      
    }
    var container = $(".collapse");
    if (!container.is(event.target) && container.has(event.target).length === 0) 
    {
        container.collapse('hide');
    }
  })

 

  $('.collapse').on('shown.bs.collapse', function() {
      $(this).parent().find(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
   
  })
  .on('hidden.bs.collapse', function() {
      $(this).parent().find(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
  });
});



const myOptions = [
  {
    label: "doctor",
    value: "doctor",
  },
  {
    label: "doctor",
    value: "doctor",
  },
  {
    label: "doctor",
    value: "doctor",
  },
  {
    label: "doctor",
    value: "NJdoctor",
  },
  {
    label: "doctor",
    value: "doctor",
  },
];


// input tags
var instance1 = new SelectPure(".tags1", {
  options: myOptions,
  multiple: true, // default: false
  autocomplete: true, // default: false
  icon: "fa fa-times", // uses Font Awesome
  inlineIcon: false, // custom cross icon for multiple select.
  onChange: value => { console.log(value);},
  placeholder: false,
  classNames: {
    select: "select-pure__select",
    dropdownShown: "select-pure__select--opened",
    multiselect: "select-pure__select--multiple",
    label: "select-pure__label",
    placeholder: "select-pure__placeholder",
    dropdown: "select-pure__options",
    autocompleteInput: "select-pure__autocomplete",
    option: "select-pure__option",
    selectedLabel: "select-pure__selected-label",
    selectedOption: "select-pure__option--selected",
    placeholderHidden: "select-pure__placeholder--hidden",
    optionHidden: "select-pure__option--hidden",
  }
});

var instance2 = new SelectPure(".tags2", {
  options: myOptions,
  multiple: true, // default: false
  autocomplete: true, // default: false
  icon: "fa fa-times", // uses Font Awesome
  inlineIcon: false, // custom cross icon for multiple select.
  onChange: value => { console.log(value);},
  placeholder: false,
  classNames: {
    select: "select-pure__select",
    dropdownShown: "select-pure__select--opened",
    multiselect: "select-pure__select--multiple",
    label: "select-pure__label",
    placeholder: "select-pure__placeholder",
    dropdown: "select-pure__options",
    autocompleteInput: "select-pure__autocomplete",
    option: "select-pure__option",
    selectedLabel: "select-pure__selected-label",
    selectedOption: "select-pure__option--selected",
    placeholderHidden: "select-pure__placeholder--hidden",
    optionHidden: "select-pure__option--hidden",
  }
});
instance1.value();
instance2.value();




// upload image 
function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
          $('#imagePreview').css('background-image', 'url('+e.target.result +')');
          $('#imagePreview').hide();
          $('#imagePreview').fadeIn(650);
      }
      reader.readAsDataURL(input.files[0]);
  }
}
$("#imageUpload").change(function() {
  readURL(this);
});


// checkbox
let chk = document.getElementById("defaultCheck1");
let sub = document.getElementById("joinsub");

chk.addEventListener('click',function () {
  console.log(chk.checked);
if (chk.checked) {
  sub.removeAttribute('disabled');
}else {
  sub.disabled = true;
}
})

  
