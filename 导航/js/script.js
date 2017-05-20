
	$('.nav #hover').on('mouseenter',function(){
		console.log(this.innerHTML	)
		$(this).find('ul').addClass('active')
	})
	$('.nav #hover').on('mouseleave',function(){
		console.log('mouseleave')
		$(this).find('ul').removeClass('active')
	})