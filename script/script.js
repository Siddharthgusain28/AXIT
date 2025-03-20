"use strict";
$(function(){
    
    $(".collapse").click(function(){
        $(".collapse-nav").slideToggle()
        $(".collapse").toggleClass("active")            
    })

    if(screen.width<480){
        $(".collapse-nav a").click(function(e){
            e.preventDefault()
            $(".collapse-nav").slideUp()
            $(".collapse").toggleClass("active")
        })
    }

    $(".part-4 .tab").click(function(){
        $(".tab").removeClass("active")
        $(this).addClass("active")
    })

    $(".tab1").click(function(){
        $(".acc").removeClass("active")
        $(".t1").addClass("active")
    })
    $(".tab2").click(function(){
        $(".acc").removeClass("active")
        $(".t2").addClass("active")
    })
    $(".tab3").click(function(){
        $(".acc").removeClass("active")
        $(".t3").addClass("active")
    })


    $(".sublist a").click(function(e){
        e.preventDefault();
        $(".sublist a").removeClass("active")
        $(this).addClass("active")
        $(".sublists .para").slideUp()
        $(this).next(".para").slideDown()
    })

});