var selected=1;
$(init)
function init() {
    //练习3
	$(".u-tab").click(function (e) {
		let t=e.currentTarget;
		$(t).parent().find('.focus').removeClass('focus');
        $(t).addClass('focus');
        let next = $(t).attr('data_id');
        let contentList = $(t).parent().next().children();
        contentList.map((index,item)=>{
        	let id = $(item).attr('data_id');
        	if(id==selected){
        		$(item).addClass('hide'); 
        	}
        	if(id==next){
        		$(item).removeClass('hide'); 
        	}
        })
        selected=next;
	});
    //练习1
    $('.m-nav').click(function (e) {
        $(".u-box").addClass('hide');
    });    
    $(".u-pic").click(function (e) {
        let t=e.currentTarget;
        let $d = $(t).parent().next();
        $d.removeClass('hide');
        $d.attr('src',$(this).attr('src'));
    });
    //练习2
    var num=0;
    $(".u-add").click(function (e) {
        let t = e.currentTarget;
        let item = `<div class="u-content"><div class="u-no">${++num}</div><div class="u-info"></div><div class="u-del">Delete</div></div>`;
        $(t).prev().append(item);
    });
    $('body').on('click', '.u-del', (e) => {
        console.log(1);
        let t = e.currentTarget;
        $(t).parent().remove();
        num --;
        upload();
    })
    function upload() {
        let contentList = $('.m-data').children();
        let i = num;
        contentList.map((index,item)=>{
            $(item).find('.u-no').text(num - (--i));
        })
    }
}