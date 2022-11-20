var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");
function openTab(tabName) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }

    for (tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}




var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

// -------------- google sheet ------------- 

{/* <script>
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyB9C5Hw-7MRMS9U_xXEN9fYyMrCJznNqqzv8TqFWN-GSIbNP8ncqKj9aiwKHYmo29x/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
        e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
      .then(response => {
        MessageChannel.innerHTML = "Message sent successfully"
        setTimeout(function(){
        msg.innerHTML = ""
    },5000)
    form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
</script> */}