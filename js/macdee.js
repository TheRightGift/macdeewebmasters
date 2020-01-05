M.AutoInit();

$('.moreLess').on('click', function(e){
    e.preventDefault();

    let which = $(this).attr('id');
    
    if(which == 'moreLessPara' || which == 'moreLessPara2'){
        let section = $(this).attr('data-section');
        let hasHide = $('#'+section+' .moreLessContainer').hasClass('hide');

        if(hasHide == true){
            $('#'+section+' .moreLessContainer').removeClass('hide').addClass('show');
            $('#'+section+' .moreLess').text('See Less');
        } else if(hasHide == false){
            $('#'+section+' .moreLessContainer').removeClass('show').addClass('hide');
            $('#'+section+' .moreLess').text('See More');
        }
    } else if(which == 'moreLessList') {
        let section = $(this).attr('data-section');
        let hasHide = $('#'+section+' .contentToggle').hasClass('hide');
        
        if(hasHide == true){
            $('#'+section+' .contentToggle').removeClass('hide').addClass('show');
            $('#'+section+' .moreLess').html('<div class="collapsible-header centr">See Less</div>');
        } else if(hasHide == false){
            $('#'+section+' .contentToggle').removeClass('show').addClass('hide');
            $('#'+section+' .moreLess').html('<div class="collapsible-header centr">23 More</div>');
        }
    }
})