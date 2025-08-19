$(function () {
    const $sidebar = $('nav.sidebar');
    const $hamburger = $('.hamburger');
    const $backdrop = $('<div class="backdrop" aria-hidden="true"></div>').appendTo('body');

    function openDrawer() {
        $sidebar.addClass('is-open');
        $backdrop.addClass('show');
        $hamburger.attr('aria-expanded', 'true');
        $('body').addClass('has-drawer');
    }
    function closeDrawer() {
        $sidebar.removeClass('is-open');
        $backdrop.removeClass('show');
        $hamburger.attr('aria-expanded', 'false');
        $('body').removeClass('has-drawer');
    }

    $hamburger.on('click', function (e) {
        e.preventDefault();
        $sidebar.hasClass('is-open') ? closeDrawer() : openDrawer();
    });

    $backdrop.on('click', closeDrawer);
    $(document).on('keydown', function (e) { if (e.key === 'Escape') closeDrawer(); });
    $('.sidebar').on('click', '.menu-item', closeDrawer);

    $(window).on('resize', function () {
        if (window.innerWidth > 1024) closeDrawer();
    });
});