$(document).ready(function() {
		
	//Tabs
	$(".tab-item__list").not(":first").hide();
	$(".main-collection__tabs .tabs__tab").click(function() {
		$(".main-collection__tabs .tabs__tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab-item__list").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".tab-content__1").hide();
	$(".main-collection__tab-item .tab-item__page__1").click(function() {
		$(".tab-content").hide();
		$(".main-collection__tab-item .tab-item__page__1").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab-content__1").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".tab-content").not(":first").hide();
	$(".main-collection__tab-item .tab-item__page").click(function() {
		$(".tab-content__1").hide();
		$(".main-collection__tab-item .tab-item__page").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab-content").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	//Carusel
	function carousel_1() {
		var owl = $(".carousel");
		owl.owlCarousel({
			items : 1,
			loop : true, 
			autoHeight : true,
			dots : true,
			singleItem : true,
			pagination: true, 
			navigation : true, 
			autoPlay : 3000,
			navigationText: [
			"<i class='fa fa-angle-left'></i>",
			"<i class='fa fa-angle-right'></i>"
			] 
		});
	};
	carousel_1();

    //Carusel
	function carousel_2() {
		var owl2 = $(".gallery__carousel");
		owl2.owlCarousel({
			items : 1,
			loop : true, 
			autoHeight : true,
			dots : true,
			singleItem : true,
			pagination: true, 
			navigation : true, 
			autoPlay : 3000,
			navigationText: [
			"<i class='fa fa-angle-left'></i>",
			"<i class='fa fa-angle-right'></i>"
			]
		});
	};
	carousel_2();

	//Carusel
	function carousel_3() {
		var owl3 = $(".main-reviews__carusel");
		owl3.owlCarousel({
			items : 1,
			loop : true, 
			autoHeight : true,
			dots : true,
			singleItem : true,
			pagination: true, 
			navigation : true, 
			autoPlay : 2000,
			navigationText: [
			"<i class='fa fa-angle-left'></i>",
			"<i class='fa fa-angle-right'></i>"
			]
		});
	};
	carousel_3();

	//Ajax
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Ваше сообщение отправленно!");
			$("#form").trigger("reset");
			$("#form").find("input[type='submit']").hide();
		}); 
		return false;
	});
 
	//Slicknav
	$('#menu__slick').slicknav({
		label: '',
		duration: 1000,
		prependTo:'.main-header__navigation'
	});

});

