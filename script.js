Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 Webcam.attach( '#webcam' );

 function TakeSnapshot() {
    Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById('result').innerHTML ='<img id="captured_image" src="'+data_uri+'"/>';
    } );
 }

 console.log("ml5 version -",ml5.version);

 classifier = ml5.imageClassifier("https://storage.googleapis.com/tm-model/RQI2nP68a/model.json",model_loaded);

 function model_loaded() {
     console.log("Model has loaded!");
 }