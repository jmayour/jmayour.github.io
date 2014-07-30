$(function(){

	$('#mainnav > .main > ul > li').each(function(index,item){

		var li = $(item);
		var a = li.children('a');

		li.bind('mouseover',function(){
			li.siblings().each(function(){
				$(this).find('a').removeClass('hover').next().hide();
			});
			a.addClass('hover').next().show();
		});

		li.bind('mouseout',function(){
			li.siblings().add(li).each(function(){
				$(this).find('a').removeClass('hover').next().hide();
			});
		});

		a.bind('focus',function(){
			li.trigger('mouseover');
		});

		if (li.is(':last-child')) {

			last = a.next().find('a').last();

			last.bind('blur',function(){
				li.trigger('mouseout');
			});

		}

	});

});