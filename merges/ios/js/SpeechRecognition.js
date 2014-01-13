var SpeechRecognition = {
    
start: function () {
    
    console.log("Plugin Called);
    return cordova.exec(null,null,"SpeechRecognition","startRecording",[]);
},

stop: function(success,fail) {
            console.log("Plugin Called);
          return cordova.exec(success,fail,"SpeechRecognition","stopRecording",[]);
},
showOutput:function(success,fail) {
        console.log("Plugin Called);
        return cordova.exec(success,fail,"SpeechRecognition","showOutput",[])
}

};