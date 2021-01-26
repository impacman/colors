window.addEventListener('load', function() {
    const loader = document.querySelector('.load');
    loader.className += ' hidden';

    function colors() {
        function colorsTitle() {
            $('#colors-1 h2').text('Голубой');
            $('#colors-2 h2').text('Персиковый');
            $('#colors-3 h2').text('Розовый');
            $('#colors-4 h2').text('Темно серые');
            $('#colors-5 h2').text('Светло серые');
        }
        colorsTitle();
        
        function colorsCode() {
            $('#color-1-1 .color__code').text('#E5F0FF');
            $('#color-1-2 .color__code').text('#B7D4FF');
            $('#color-1-3 .color__code').text('#7EB3FF');
            $('#color-1-4 .color__code').text('#51EAFF');
            $('#color-1-5 .color__code').text('#BDCCFF');
            $('#color-1-6 .color__code').text('#7AB1FF');
            $('#color-1-7 .color__code').text('#64C7FF');
            $('#color-1-8 .color__code').text('#D7FFFE');
            $('#color-1-9 .color__code').text('#D7E1E9');
            $('#color-1-10 .color__code').text('#F2F8FD');
            $('#color-1-11 .color__code').text('#AFCFEA');
            $('#color-1-12 .color__code').text('#1EC9E8');
            
            $('#color-1-1 .color__palette').css({'background': '#E5F0FF'})
            $('#color-1-2 .color__palette').css({'background': '#B7D4FF'})
            $('#color-1-3 .color__palette').css({'background': '#7EB3FF'})
            $('#color-1-4 .color__palette').css({'background': '#51EAFF'})
            $('#color-1-5 .color__palette').css({'background': '#BDCCFF'})
            $('#color-1-6 .color__palette').css({'background': '#7AB1FF'})
            $('#color-1-7 .color__palette').css({'background': '#64C7FF'})
            $('#color-1-8 .color__palette').css({'background': '#D7FFFE'})
            $('#color-1-9 .color__palette').css({'background': '#D7E1E9'})
            $('#color-1-10 .color__palette').css({'background': '#F2F8FD'})
            $('#color-1-11 .color__palette').css({'background': '#AFCFEA'})
            $('#color-1-12 .color__palette').css({'background': '#1EC9E8'})
    
    
            $('#color-2-1 .color__code').text('#FBE7B5');
            $('#color-2-2 .color__code').text('#FBCEB5');
            $('#color-2-3 .color__code').text('#FE9E76');
            $('#color-2-4 .color__code').text('#FFE0BC');
            $('#color-2-5 .color__code').text('#FF756B');
            $('#color-2-6 .color__code').text('#F85C50');
            $('#color-2-7 .color__code').text('#FB9F82');
            $('#color-2-8 .color__code').text('#FFA96B');
            
            $('#color-2-1 .color__palette').css({'background': '#FBE7B5'});
            $('#color-2-2 .color__palette').css({'background': '#FBCEB5'});
            $('#color-2-3 .color__palette').css({'background': '#FE9E76'});
            $('#color-2-4 .color__palette').css({'background': '#FFE0BC'});
            $('#color-2-5 .color__palette').css({'background': '#FF756B'});
            $('#color-2-6 .color__palette').css({'background': '#F85C50'});
            $('#color-2-7 .color__palette').css({'background': '#FB9F82'});
            $('#color-2-8 .color__palette').css({'background': '#FFA96B'});
    
            
            $('#color-3-1 .color__code').text('#FFDFDC');
            $('#color-3-2 .color__code').text('#E8D5D5');
            $('#color-3-3 .color__code').text('#F5B2AC');
            $('#color-3-4 .color__code').text('#FF9CA1');
            $('#color-3-5 .color__code').text('#DCABAE');
            $('#color-3-6 .color__code').text('#FEAC92');
            $('#color-3-7 .color__code').text('#FF7272');
            $('#color-3-8 .color__code').text('#E85668');
            $('#color-3-9 .color__code').text('#FF2970');
            $('#color-3-10 .color__code').text('#DB6B88');
            $('#color-3-11 .color__code').text('#BE5D77');
            $('#color-3-12 .color__code').text('#F59BAF');
            $('#color-3-13 .color__code').text('#F6DDDF');
            $('#color-3-14 .color__code').text('#DEC0C1');
            $('#color-3-15 .color__code').text('#FF008B');
            $('#color-3-16 .color__code').text('#FF005C');
    
            $('#color-3-1 .color__palette').css({'background': '#FFDFDC'});
            $('#color-3-2 .color__palette').css({'background': '#E8D5D5'});
            $('#color-3-3 .color__palette').css({'background': '#F5B2AC'});
            $('#color-3-4 .color__palette').css({'background': '#FF9CA1'});
            $('#color-3-5 .color__palette').css({'background': '#DCABAE'});
            $('#color-3-6 .color__palette').css({'background': '#FEAC92'});
            $('#color-3-7 .color__palette').css({'background': '#FF7272'});
            $('#color-3-8 .color__palette').css({'background': '#E85668'});
            $('#color-3-9 .color__palette').css({'background': '#FF2970'});
            $('#color-3-10 .color__palette').css({'background': '#DB6B88'});
            $('#color-3-11 .color__palette').css({'background': '#BE5D77'});
            $('#color-3-12 .color__palette').css({'background': '#F59BAF'});
            $('#color-3-13 .color__palette').css({'background': '#F6DDDF'});
            $('#color-3-14 .color__palette').css({'background': '#DEC0C1'});
            $('#color-3-15 .color__palette').css({'background': '#FF008B'});
            $('#color-3-16 .color__palette').css({'background': '#FF005C'});
            
    
            $('#color-4-1 .color__code').text('#231F20');
            $('#color-4-2 .color__code').text('#414042');
            $('#color-4-3 .color__code').text('#58595B');
            $('#color-4-4 .color__code').text('#6D6E71');
            $('#color-4-5 .color__code').text('#808285');
            $('#color-4-6 .color__code').text('#939598');
    
            $('#color-4-1 .color__palette').css({'background': '#231F20'});
            $('#color-4-2 .color__palette').css({'background': '#414042'});
            $('#color-4-3 .color__palette').css({'background': '#58595B'});
            $('#color-4-4 .color__palette').css({'background': '#6D6E71'});
            $('#color-4-5 .color__palette').css({'background': '#808285'});
            $('#color-4-6 .color__palette').css({'background': '#939598'});
            
    
            $('#color-5-1 .color__code').text('#FFFFFF');
            $('#color-5-2 .color__code').text('#F1F2F2');
            $('#color-5-3 .color__code').text('#E6E7E8');
            $('#color-5-4 .color__code').text('#D1D3D4');
            $('#color-5-5 .color__code').text('#BCBEC0');
    
            $('#color-5-1 .color__palette').css({'background': '#FFFFFF'});
            $('#color-5-2 .color__palette').css({'background': '#F1F2F2'});
            $('#color-5-3 .color__palette').css({'background': '#E6E7E8'});
            $('#color-5-4 .color__palette').css({'background': '#D1D3D4'});
            $('#color-5-5 .color__palette').css({'background': '#BCBEC0'});
    
    
            $('#gradient-1 .color__code').text('#D3CCE3 #E9E4F0');
            $('#gradient-2 .color__code').text('#DEDDF0 #B6BCF2');
            $('#gradient-3 .color__code').text('#FFCFC5 #F2F3BC');
            $('#gradient-4 .color__code').text('#FF9966 #FF5E62');
            $('#gradient-5 .color__code').text('#F3BAE3 #9CBAED');
            $('#gradient-6 .color__code').text('#206CEB #2F0166');
            $('#gradient-7 .color__code').text('#64C8BD #094A6F');
            $('#gradient-8 .color__code').text('#35C8CB #7B2DD6');
            $('#gradient-9 .color__code').text('#6F86D6 #48C6EF');
            $('#gradient-10 .color__code').text('#09203F #537895');
            $('#gradient-11 .color__code').text('#606C88 #3F4C6B');
            $('#gradient-12 .color__code').text('#FF9966 #FF5E62');
            $('#gradient-13 .color__code').text('#FF9A8B #EB7389');
            $('#gradient-14 .color__code').text('#F794A4 #FDD6BD');
            $('#gradient-15 .color__code').text('#C5F0F8 #FFDED5');
            $('#gradient-16 .color__code').text('#ADCDFE #A5B7D2');
            $('#gradient-17 .color__code').text('#141E30 #28416F');
            $('#gradient-18 .color__code').text('#B8ADFE #676BC2');
            
            $('#gradient-1 .color__palette').css({'background': 'linear-gradient(#D3CCE3, #E9E4F0)'});
            $('#gradient-2 .color__palette').css({'background': 'linear-gradient(#DEDDF0, #B6BCF2)'});
            $('#gradient-3 .color__palette').css({'background': 'linear-gradient(#FFCFC5, #F2F3BC)'});
            $('#gradient-4 .color__palette').css({'background': 'linear-gradient(#FF9966, #FF5E62)'});
            $('#gradient-5 .color__palette').css({'background': 'linear-gradient(#F3BAE3, #9CBAED)'});
            $('#gradient-6 .color__palette').css({'background': 'linear-gradient(#206CEB, #2F0166)'});
            $('#gradient-7 .color__palette').css({'background': 'linear-gradient(#64C8BD, #094A6F)'});
            $('#gradient-8 .color__palette').css({'background': 'linear-gradient(#35C8CB, #7B2DD6)'});
            $('#gradient-9 .color__palette').css({'background': 'linear-gradient(#6F86D6, #48C6EF)'});
            $('#gradient-10 .color__palette').css({'background': 'linear-gradient(#09203F, #537895)'});
            $('#gradient-11 .color__palette').css({'background': 'linear-gradient(#606C88, #3F4C6B)'});
            $('#gradient-12 .color__palette').css({'background': 'linear-gradient(#FF9966, #FF5E62)'});
            $('#gradient-13 .color__palette').css({'background': 'linear-gradient(#FF9A8B, #EB7389)'});
            $('#gradient-14 .color__palette').css({'background': 'linear-gradient(#F794A4, #FDD6BD)'});
            $('#gradient-15 .color__palette').css({'background': 'linear-gradient(#C5F0F8, #FFDED5)'});
            $('#gradient-16 .color__palette').css({'background': 'linear-gradient(#ADCDFE, #A5B7D2)'});
            $('#gradient-17 .color__palette').css({'background': 'linear-gradient(#141E30, #28416F)'});
            $('#gradient-18 .color__palette').css({'background': 'linear-gradient(#B8ADFE, #676BC2)'});
        }
        colorsCode();
    }
    colors();
    
    function copyCodeColor() {
        const clipboard = new ClipboardJS('.color__copy-btn');
    
        const copyCode = $('.color__code');
    
        copyCode.each(function(i, item) {
            $(item).addClass('color__code_copy' + i);
    
            const Yes = $(`
                <div class="yes-copy"><span class="icon-star"></span><span>Цвет скопирован!</span></div>
            `)
            $(item).after(Yes);
    
            const copyBtn = $(`
                <button class="color__copy-btn" data-clipboard-target=".color__code_copy` + i + `"><span class="icon-Copy"></span></button>
            `)
            $(item).after(copyBtn);
    
    
            copyBtn.each(function() {
                $(this).on('click', function() {
                    const yes = $('.yes-copy');
    
                    $(this).next(yes).addClass('active');
                
                    yes.each(function(i, item) {
                        if ($(item).hasClass('active')) {            
                            setTimeout(function() {
                                $(item).removeClass('active');
                            }, 1000)
                        };
                    });
                });   
            });
        }); 
    }
    copyCodeColor();

    function viewColor() {
        $('.color').each(function(i) {
            $(this).on('click', function() {                     
                $('.fullscreen-palette__code span').text($('.color__code').eq(i).text());
            });

            $('.color__palette').each(function() {
                $(this).on('click', function() {     
                    $('body').addClass('overflow-for-color-plette');
                    $('.fullscreen-palette').addClass('active');

                    const bgColor = $(this).attr('style');

                    $('.fullscreen-palette').attr({
                        'style': bgColor
                    }); 
                });
            });
        });

        $('.fullscreen-palette__close').on('click', function() {
            $('.fullscreen-palette').removeClass('active');
            $('body').removeClass('overflow-for-color-plette');
        });

        const 
            clipboard = new ClipboardJS('.fullscreen-palette__btn'),
            copyBtnColor = $('.fullscreen-palette__btn');

        copyBtnColor.on('click', function() {
            const yes = $('.yes-copy');

            $(this).prev(yes).addClass('active');
        
            yes.each(function(i, item) {
                if ($(item).hasClass('active')) {            
                    setTimeout(function() {
                        $(item).removeClass('active');
                    }, 1000)
                };
            });
        });  
    };
    viewColor();

    function navBar() {
        const 
            navBarMenuOpen = document.querySelector('.nav-bar-link'),
            navBarMenuClose = document.querySelector('.nav-bar__close'),
            navBarMenu = document.querySelector('.nav-bar'),
            navBarMenuBpdy = document.querySelector('.nav-bar__body'),
            mainPage = document.querySelector('.page'),
            body = document.querySelector('body');
            menuLink = document.querySelectorAll('.menu__link')
    
        navBarMenuOpen.addEventListener('click', function() {
            this.classList.add('opacity');
            navBarMenu.classList.add('active');
            navBarMenuBpdy.classList.add('active');
            mainPage.classList.add('active');
            body.classList.add('overflow');
        });
        navBarMenuClose.addEventListener('click', function() {
            navBarMenuOpen.classList.remove('opacity');
            navBarMenu.classList.remove('active');
            navBarMenuBpdy.classList.remove('active');
            mainPage.classList.remove('active');
            body.classList.remove('overflow');
        });

        menuLink.forEach(item => {
            item.addEventListener('click', function() {
                navBarMenuOpen.classList.remove('opacity');
                navBarMenu.classList.remove('active');
                navBarMenuBpdy.classList.remove('active');
                mainPage.classList.remove('active');
                body.classList.remove('overflow');
            });
        });
    };
    navBar();

    function modal() {
        const 
            openModal = document.querySelector('.open-modal'),
            closeModal = document.querySelector('.modal__close'),
            modal = document.querySelector('.modal');

        openModal.addEventListener('click', function(e) {
            e.preventDefault();
            modal.classList.add('active');
        });
        closeModal.addEventListener('click', function() {
            modal.classList.remove('active');
        });
    };
    modal();

    function tabs() {
        $('ul.colors__tabs').on('click', 'li:not(.active)', function() {
            $(this).addClass('active').siblings().removeClass('active').closest('.colors').find('.colors__content').removeClass('active').eq($(this).index()).addClass('active');
        });
    }
    tabs();

    $('.menu__link').each(function() {
        $(this).on('click', function() {
            $('ul.colors__tabs li:nth-of-type(1)').addClass('active').siblings().removeClass('active').closest('.colors').find('.colors__content').removeClass('active').eq($(this).index()).addClass('active');
        });
    })

    const colorPalette = $('.color__palette');

    colorPalette.each(function() {
        $(this).on('click', function() {
            const thisColor = $(this).attr('style');
            if ((thisColor == 'background: rgb(255, 255, 255);') || (thisColor == 'background: rgb(242, 248, 253);')) {
                $('.fullscreen-palette__code').addClass('border');
                $('.fullscreen-palette__btn').addClass('border');
                $('.fullscreen-palette__close').addClass('border');
                $('.yes-copy ').addClass('border');
            } else {
                $('.fullscreen-palette__code').removeClass('border');
                $('.fullscreen-palette__btn').removeClass('border');
                $('.fullscreen-palette__close').removeClass('border');
                $('.yes-copy ').removeClass('border');
            }
        });
    });
    
    $('.logo').addClass('active');
    $('.header__content').addClass('active');
});