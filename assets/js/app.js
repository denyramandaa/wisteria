(function () {
  $(document).ready(function() {
    let sidebarStatus = false
    $('.burger-button').click(() => {
        sidebarStatus ? $('.sidebar').removeClass('show') : $('.sidebar').addClass('show');
        console.log('anjing')
        sidebarStatus=!sidebarStatus
    })
  })
}(jQuery));