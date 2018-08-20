var i = 1;
var name = new Vue({
    el:'#name',
    data:{
        titleName:'Lucy Web',
    },
});
var test = new Vue({
    el:'#girl',
    data:{
        view: 0,
        image:'images/Girl/Walk (1).png'
    },
    watch:{
        view:function(){
            if(this.view >= 1000 && this.view <= 1030){
                if(i >= 30){
                    i = 1;
                } else {
                    i += 1;
                    this.image = 'images/Girl/Jump ('+ i +').png';
                } 
            } else {
                if(i >= 20){
                    i = 1;
                } else {
                    i += 1;
                    this.image = 'images/Girl/Walk ('+ i +').png';
                } 
            }


        }
    }
}); 
$(function(){
    $(window).scroll(function () {
        test.view = $(this).scrollTop();
        console.log(test.view);
    });
});