
    $(".range__input").each(function(i, elem) {
        val = $(this).val();
        min = $(this).attr('min');
        max = $(this).attr('max');
        step = $(this).attr('step');
        position = 100 / (max - step) * (val - step);
        $(this).parent().find('.range__track').width(position + "%");
    });
    $(".range__input").on('input', function() {
        val = $(this).val();
        min = $(this).attr('min');
        max = $(this).attr('max');
        step = $(this).attr('step');
        position = 100 / (max - step) * (val - step);
        $(this).parent().find('.range__track').width(position + "%");
    });

    $(window).load(windowSize);
    $(window).resize(windowSize);
