$(function(){
        // accordion-01
        $('.acc-list-01 .acc-list-title').on('click', function(){

            $('.acc-list-01 .acc-list-desc').removeClass('active');
    
            $(this).next().addClass('active');
    
        });
    
        // accordion-02
        $('.acc-list-02 .acc-list-title').on('click', function(){
    
            $('.acc-list-02 .acc-list-title').removeClass('active');
    
            $(this).addClass('active');
    
            $('.acc-list-02 .acc-list-desc').removeClass('active');
    
            $(this).next().addClass('active');
    
        });
    
        // tab
        $('.tab-title').on('click', function(){
    
            $('.tab-title').removeClass('active');
    
            $(this).addClass('active');
    
            $('.tab-title').next().removeClass('active');
    
            $(this).next().addClass('active');
    
        });
    
});