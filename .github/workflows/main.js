Webcam.set({
height:300,
image_format:'png',
png_quality:90
});

camera = document.getElementById("camera")

Webcam.attach('#camera')

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}


console.log('ml5.version',ml5.version);

clssifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/MuGbkMoW9/model.json',modeLoaded);

function modeLoaded() {
console.log('Model_Loaded!')
}

function speak() {
var synth = window.SpeechSynthesis
speak_data_1 = "and the first prediction is" + prediction_1;
speak_data_2 = "and the second prediction is" + prediction_2;  
var utterThis =  new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
synth.speak(utterThis); 
}
