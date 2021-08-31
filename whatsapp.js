<script>
function gotowhatsapp() {
    
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    // var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    // var service = document.getElementById("service").value;

    var url = "https://wa.me/send/phone=918789529215?text=" 
    + "Name: " + firstname + "%0a"
    + "Name: " + lastname + "%0a"
    // + "Phone: " + phone + "%0a"
    + "Email: " + email  + "%0a"
    // + "Service: " + service; 

    window.open(url, '_blank').focus();
}
</script>