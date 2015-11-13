$( function ()
{
    // QQ ¡¥Ω”£∫
    // tencent://Message/?Uin={{QQ∫≈¬Î}}&websiteName={{Õ¯’æµÿ÷∑}}=&Menu=yes
    var tophtml = '<div id="izl_rmenu" class="izl-rmenu"> \
                        <div class="btn btn-qq"> \
                            <div class="contact-detail"> \
                                abc \
                            </div> \
                        </div> \
                        <div class="btn btn-wx"> \
                            <img class="pic" src="../images/TwoDimensionCode.jpg"/> \
                        </div> \
                        <div class="btn btn-phone"> \
                            <div class="phone">400-691-2126</div> \
                        </div> \
                        <div class="btn btn-top"></div> \
                    </div>';

    $( "head" ).append( '<link type="text/css" rel="stylesheet" href="../css/lrtk.css" />' );
    $( tophtml ).appendTo( "body" );

    $( "#izl_rmenu" ).each( function ()
    {
        $( this ).find( ".btn-wx" ).mouseenter( function ()
        {
            $( this ).find( ".pic" ).fadeIn( "fast" );
        } ).mouseleave( function ()
        {
            $( this ).find( ".pic" ).fadeOut( "fast" );
        } );

        $( this ).find( ".btn-phone" ).mouseenter( function ()
        {
            $( this ).find( ".phone" ).fadeIn( "fast" );
        } ).mouseleave( function ()
        {
            $( this ).find( ".phone" ).fadeOut( "fast" );
        } );

        $( this ).find( ".btn-top" ).click( function ()
        {
            $( "html, body" ).animate( {
                "scroll-top": 0
            }, "fast" );
        } );
    } );

    var lastRmenuStatus = false;

    $( window ).scroll( function ()
    {//bug
        var _top = $( window ).scrollTop();
        if ( _top > 200 )
        {
            $( "#izl_rmenu" ).data( "expanded", true );
        } else
        {
            $( "#izl_rmenu" ).data( "expanded", false );
        }
        if ( $( "#izl_rmenu" ).data( "expanded" ) != lastRmenuStatus )
        {
            lastRmenuStatus = $( "#izl_rmenu" ).data( "expanded" );
            if ( lastRmenuStatus )
            {
                $( "#izl_rmenu .btn-top" ).slideDown();
            } else
            {
                $( "#izl_rmenu .btn-top" ).slideUp();
            }
        }
    } );
} );