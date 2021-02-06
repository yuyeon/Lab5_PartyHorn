// main.js
const vol_num = document.getElementById("volume-number");
const vol_slider = document.getElementById("volume-slider");
const vol_image = document.getElementById("volume-image");

const honk_button = document.getElementById("honk-btn");

const horn_sound = document.getElementById("horn-sound");
const horn_image = document.getElementById("sound-image");

const air_horn = document.getElementById("radio-air-horn");
const car_horn = document.getElementById("radio-car-horn");
const party_horn = document.getElementById("radio-party-horn");

vol_num.addEventListener("change", function(event) {
    update_volume(vol_num.value);
    event.preventDefault();
});
vol_slider.addEventListener("change", function(event) {
    update_volume(vol_slider.value);
    event.preventDefault();
});

function update_volume(volume){
    horn_sound.volume = volume / 100;
    vol_slider.value = volume;
    vol_num.value = volume;
    
    honk_button.disabled = false;

    if(volume == 0){
        honk_button.disabled = true;
        vol_image.src = "./assets/media/icons/volume-level-0.svg";
    }
    else if(volume <= 33){
        vol_image.src = "./assets/media/icons/volume-level-1.svg";
    }
    else if(volume <= 66){
        vol_image.src = "./assets/media/icons/volume-level-2.svg";
    }
    else if(volume <= 100){
        vol_image.src = "./assets/media/icons/volume-level-3.svg";
    }
}

air_horn.addEventListener("click", function() {
    horn_sound.src = "./assets/media/audio/air-horn.mp3";
    horn_image.src = "./assets/media/images/air-horn.svg";

})

car_horn.addEventListener("click", function() {
    horn_sound.src = "./assets/media/audio/car-horn.mp3"
    horn_image.src = "./assets/media/images/car.svg";
})

party_horn.addEventListener("click", function() {
    horn_sound.src = "./assets/media/audio/party-horn.mp3";
    horn_image.src = "./assets/media/images/party-horn.svg";
})

honk_button.addEventListener("click", function(event) {
    horn_sound.play();
    event.preventDefault();
})
// TODO
