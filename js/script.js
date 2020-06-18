//Alert Banner
const alertBanner = document.getElementById('alert');

alertBanner.innerHTML = 
    `
    <div class='alert-banner'>
        <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
        <p class='alert-banner-close'>x</p>
    </div>
    `;

$('.alert-banner-close').click(function() {
    $('.alert-banner').slideUp();
});