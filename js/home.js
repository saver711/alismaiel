jQuery(document).ready(function($){$('#my-slider').sliderPro({arrows:true,fade:true,autoplay:true,width:'100%',rightToLeft:true,waitForLayers:true,buttons:false});});$('.iso-grid').isotope({itemSelector:'.grid-item',layoutMode:'fitRows',isOriginLeft:false});$('.button-group button').click(function(){$('.button-group button').removeClass('active');$(this).addClass('active');var selector=$(this).attr('data-filter');$('.iso-grid').isotope({filter:selector});return false;});$('.branch__title').on('click',function(){$(this).siblings('.branch__img').children('img').slideToggle();$(this).children('.fas').toggleClass('d-none');$(this).parent('.branch').siblings('.branch').children('.branch__img').children('img').slideUp();$(this).parent('.branch').siblings('.branch').children('.branch__title').children('.fa-minus').addClass('d-none');$(this).parent('.branch').siblings('.branch').children('.branch__title').children('.fa-plus').removeClass('d-none');}); $('.contactUs .alert i').on('click',function(){$('.contactUs .alert').slideUp(100)})