$(document).ready(function(){
    $('#e3lan-options').bind('change',function(e){
        if($('e3lan-options').val()== 'car-value'){
            $('#car-options').show();
            $('#motor-optoins').hide();
            $('#mopile-options').hide();


        }
        else if($('#e3lan-options').val()=='mobile'){
            $('#mopile-options').show();
            $('#car-options').hide();
            $('#motor-optoins').hide();
           

        }
        else if($('#e3lan-options').val()=='motor'){
            $('#motor-optoins').show();
            $('#mopile-options').hide();
            $('#car-options').hide();
        }
        else{
            $('#motor-optoins').hide();
            $('#mopile-options').hide();
            $('#car-options').hide();

        }
    }).trigger('change');

});