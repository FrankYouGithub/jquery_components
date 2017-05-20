$('.tab>li').on('click',function(){
	var $this = $(this)
	var $aColor = $this.parents('.ct').find('.tab a')
	var index = $this.index()
	
	$this.siblings().removeClass('tab-active')
	$this.addClass('tab-active')

	for(var i=0;i<$aColor.length;i++){
		$($aColor[i]).removeClass('tab-color')
	}
	$aColor.eq(index).addClass('tab-color')

	$this.parents('.ct').find('.tab_container>li').removeClass('items_active')
	$this.parents('.ct').find('.tab_container>li').eq(index).addClass('items_active')
})