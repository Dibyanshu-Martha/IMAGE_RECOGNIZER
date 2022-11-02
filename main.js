Webcam.set({
    width: 350,
    height: 300,
    image_format:'png',
    png_quality: 100
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function capture() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="img1" src="'+data_uri+'">'
    })
}

tm=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/KuT1CNY36/model.json', model_loaded);
function model_loaded() {
    console.log("ANYTHING")
}

function identify() {
    img1=document.getElementById('img1');
    tm.classify(img1,gotResults); 
}

function gotResults(error,results) {
    if(error){
        console.log(error);
    }
    else
    {
        console.log(results);
        document.getElementById("name").innerHTML=results[0].label;
        document.getElementById("confidence").innerHTML=results[0].confidence.toFixed(3);
    }
}
