$(function () {
    prettyPrint()
    function resetToDefaults() {
        topbar.config({
            autoRun: true,
            barThickness: 5,
            barColors: {
                '0': 'rgba(77, 204, 141, .9)',
                '.25': 'rgba(77, 204, 141, .9)',
                '.50': 'rgba(77, 204, 141,  .9)',
                '.75': 'rgba(77, 204, 141,  .9)',
                '1.0': 'rgba(77, 204, 141,   .9)'
            },
            shadowBlur: 10,
            shadowColor: 'rgba(255,255,255,.6)'
        })
    }

    // Page load
    resetToDefaults()
    topbar.show()
    setTimeout(function () {
        $('#main_content').fadeIn('slow')
        topbar.hide()
    }, 1500)

    // Simple Demo
    $('#btnStartSimple').click(function () {
        resetToDefaults()
        topbar.show()
    })
    $('#btnStopSimple').click(function () {
        topbar.hide()
    })

    // Advanced Demo
    $('#btnStartAdvanced').click(function () {
        resetToDefaults()
        topbar.config({
            autoRun: false,
            barThickness: 5,
            barColors: {
                '0': 'rgba(10, 72, 209, .7)',
                '.3': 'rgba(17, 131, 251, .7)',
                '1.0': 'rgba(210, 227, 251,  .7)'
            },
            shadowBlur: 5,
            shadowColor: 'rgba(255, 255, 255, .5)'
        })
        topbar.show();
        (function step() {
            setTimeout(function () {
                if (topbar.progress('+.01') < 1) step()
            }, 16)
        })()
    })
    $('#btnStopAdvanced').click(function () {
        topbar.hide()
    })
})