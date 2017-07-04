window.onload=function  (){
    left()
    right()
}

function left (){
    //获取需要的元素
    var lisrH=$('.nav ul li').height();
    var maxT=$('.nav').height()-$('.nav ul').height();
    var maxH=maxT-100;
    $('.nav ul li').each(function (index,e){//遍历每一个li ,在点击的时候,点击哪一个,哪一个显示高亮效果,并且ul移动.
        $(e).tap(function  (){
            $(this).addClass('current').siblings().removeClass('current');
            $('.nav ul').css({transform:'translateY('+-index*lisrH+'px)'});
            $('.nav ul').css({transition:'all 0.3s'});
            var y=-index*lisrH;//ul移动的距离
            if(y<=maxT){
                y=maxT;
            }
            $('.nav ul').css({transform:'translateY('+y+'px)'});
        })
    })
    var tartY=0;
    var moveY=0;
    var disY=0;
    var current=0;
    $('.nav ul')[0].addEventListener('touchstart',function  (e){
            tartY= e.targetTouches[0].pageY;

    })
    $('.nav ul')[0].addEventListener('touchmove',function  (e){
        moveY= e.targetTouches[0].pageY;
        disY=moveY-tartY;

        var x=disY+current;
        console.log(x)
        if(x>100){
            x=100
        }
        if(x<maxH){
            x=maxH
        }
        $('.nav ul').css({transition:'none'})
        $('.nav ul').css({transform:'translateY('+x+'px)'})
    })
    $('.nav ul')[0].addEventListener('touchend',function  (e){
            current=current+disY
            if(current>0){
                current=0
            }
            if(current<maxT){
                current=maxT
            }
            $('.nav ul').css({transition:'all 0.3s'})
            $('.nav ul').css({transform:'translateY('+current+'px)'})
        tartY=0;
        moveY=0;
        disY=0;
    })
}

function right (){
    //获取需要的元素
    var maxT=$('.main').height()-$('.main .marin-a').height();
    var maxH=maxT-100;

    var tartY=0;
    var moveY=0;
    var disY=0;
    var current=0;
    $('.main .marin-a')[0].addEventListener('touchstart',function  (e){
            tartY= e.targetTouches[0].pageY;
    })
    $('.main .marin-a')[0].addEventListener('touchmove',function  (e){
        moveY= e.targetTouches[0].pageY;
        disY=moveY-tartY;

        var x=disY+current;
        if(x>100){
            x=100
        }
        if(x<maxH){
            x=maxH
        }
        $('.main .marin-a').css({transition:'none'})
        $('.main .marin-a').css({transform:'translateY('+x+'px)'})
    })
    $('.main .marin-a')[0].addEventListener('touchend',function  (e){
            current=current+disY
            console.log(current)
            if(current>0){
                current=0
            }
            if(current<maxT){
                current=maxT
            }
            $('.main .marin-a').css({transition:'all 0.3s'})
            $('.main .marin-a').css({transform:'translateY('+current+'px)'})
        tartY=0;
        moveY=0;
        disY=0;
    })
}