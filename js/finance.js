/**
 *
 * Created by Chris on 16/10/11.
 */
(function () {
    $('.finance-block').click(function () {
        $('.finance-alert').css('display','block');
    });
    $('.alertfalse').click(function () {
        $('.finance-alert').css('display','none');
    });
    var mydate = new Date();
    $('.timechose option').eq(0).text(mydate.getFullYear()+"年"+(mydate.getMonth()-4)+"月");
    $('.timechose option').eq(1).text(mydate.getFullYear()+"年"+(mydate.getMonth()-3)+"月");
    $('.timechose option').eq(2).text(mydate.getFullYear()+"年"+(mydate.getMonth()-2)+"月");
    $('.timechose option').eq(3).text(mydate.getFullYear()+"年"+(mydate.getMonth()-1)+"月");
    $('.timechose option').eq(4).text(mydate.getFullYear()+"年"+mydate.getMonth()+"月");
    $('.timechose option').eq(5).text(mydate.getFullYear()+"年"+(mydate.getMonth()+1)+"月");
})();