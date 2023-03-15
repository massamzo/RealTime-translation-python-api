document.addEventListener("DOMContentLoaded", events);

function events(){
    
    document.getElementById("inizia").addEventListener('click', transcriptssa);
}

function transcriptssa(){
   
    var langs = {
        "English":'en',
        "Italiano":'it',
        "Français": 'fr',
        "Espagnol":'es',
        "Deutsch":'de',
        "arabic":'ar'
    }

    var src_lang = document.getElementById("start_lang").value;
    var end_lang = document.getElementById("end_lang").value;

    if(src_lang.indexOf('.') != -1 || end_lang.indexOf('.') != -1){
       
        alert("seleziona una lingua");
    }else{

    
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;
    const rec = new SpeechRecognition();
    rec.lang = langs[src_lang];
    rec.interimResults = true;

    rec.onresult = (event) => {
        const color = event.results[0][0].transcript;
        document.getElementById("testo").innerHTML = color;

        var data = [
            {"testo" : color},
            {"src": langs[src_lang]},
            {"dest": langs[end_lang]}
        ];

        $.ajax({
            type:"POST",
            url: "https://fastsave.ga/process_data",
            data: JSON.stringify(data),
            contentType : "application/json",
            dataType: 'json',
        });

        $.ajax({
            type:"POST",
            url: "https://fastsave.ga/process_data",
            data: JSON.stringify(data),
            contentType : "application/json",
            dataType: 'json',
            success:  function(result){
               document.getElementById("translated").innerHTML = result['testo'];
            }
        });
    }

    if(speech == true){
        rec.start();
        
    }

}
}