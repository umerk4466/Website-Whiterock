$(document).on('submit', '#emailmailData', function(e) {
    e.preventDefault();
    $.ajax({
        url: "contact_us.php",
        type: "POST",
        data: 'name=' + $("#name").val() + '&email=' +
            $("#email").val() + '&message=' +
            $("#message").val(),

    }).done(function(data) {
        if (data == 1) {
            $('#first_row').after("<div class='alert alert-success alert-dismissible fade show' role='alert'> <strong>Thank you for getting in touch! </strong>We have received your message and would like to thank you for writing to us. We will reply by email as soon as possible.<button type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>&times;</span> </button></div>")
            resetForm();
            $('html,body').animate({ scrollTop: 0 }, 'slow');
        } else {
            $('#first_row').after("<div class='alert alert-danger alert-dismissible fade show' role='alert'> <strong>Error! </strong> Something is wrong please try again. We could not receive your Message.<button type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>&times;</span> </button></div>")
            $('html,body').animate({ scrollTop: 0 }, 'slow');
        }
        return false;
    });
});

// reset the form after email sent successful
function resetForm() {
    $("#name").val("")
    $("#email").val("")
    $("#message").val("")
}