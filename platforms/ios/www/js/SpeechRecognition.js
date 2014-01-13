var SpeechRecognition = {
    
start: function () {
    
    console.log("Plugin Called);
    return cordova.exec(null,null,"SpeechRecognition","startRecording",[]);
},

stop: function() {
            console.log("Plugin Called);
          return cordova.exec(null,null,"SpeechRecognition","stopRecording",[]);
}

};