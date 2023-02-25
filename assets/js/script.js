// Modal Section
const popup = document.querySelector(".popup")
const textModal = document.querySelector(".content-modal")
const titleModal = document.querySelector(".title-modal")
const closeModal  = document.querySelector(".close-btn")


// Place
const placeImage = document.querySelectorAll(".image-content")
const titlePlace = document.querySelectorAll(".title-place")

// Aboutme section
const myImage = document.querySelector(".image-me")



myImage.addEventListener("click" , function (event) {
    popup.classList.remove("hidden")
    titleModal.textContent  = "It's me, Rafly"
    textModal.style.fontSize = "15px"
    textModal.style.textAlign = "justify"
    textModal.textContent = "Halo, Nama saya adalah muhammad Rafly Afrizal Pratama, saya tinggal di bekasi tepatnya di Bekasi Utara. Saat ini saya merupakan seorang mahasiswa semester 6 di Universitas Yarsi. Program Studi yang sedang saya tempuh adalah Teknik Informatika"

})

closeModal.addEventListener("click" , function () {
    popup.classList.add("hidden")
})


document.addEventListener('keydown', function (event) {

    if (event.key === 'Escape' && !popup.classList.contains('hidden')) {
        popup.classList.add("hidden")
    }
});


//loop images

for (let i = 0; i < placeImage.length; i++) {
    placeImage[i].addEventListener("click" , function () {
        popup.classList.remove("hidden")
        titleModal.textContent = titlePlace[i].textContent
        textModal.style.textAlign = "center";
        if(titleModal.textContent === "PULAU BALI"){

            textModal.innerHTML = "⭐⭐⭐⭐ <br> GOOD PLACE"
            textModal.style.fontSize = "40px"
        }else {
            textModal.innerHTML = "⭐⭐⭐⭐⭐ <br> BEST PLACE"
            textModal.style.fontSize = "40px"
        }

    })
}