var express = require('express');
var router = express.Router();

const anaSayfa=function(req, res, next) {
    res.render('anasayfa', 
    {
    "baslik": 'Anasayfa',
    "sayfaBaslik":{
        "sitead":"MekanBul",
        "slogan":"Civardaki Mekanları Keşfet"
    },
    "mekanlar":[
        {
            "ad":"Starbucks",
            "puan":'1',
            "adres":"Centrum Garden AVM ",
            "imkanlar":["Dünya Kahveleri","Kekler","Pastalar"],
            "mesafe":"1km"    
        },

        {
            "ad":"Köfteci Yusuf",
            "puan":"5",
            "adres":"Çünür Mahallesi",
            "imkanlar":["Köfte","Ayran","Döner"],
            "mesafe":"8km"
        }

        
    ]
});


}
const mekanBilgisi=function(req, res, next) {
    res.render('mekanbilgisi',
    {"baslik": 'Mekan Bilgisi',
    "mekanBaslik":"Starbucks",
    "mekanDetay":{
        "ad":"Starbucks",
        "puan":"1",
        "adres":"Centrum Garden AVM",
        "saatler":[
            {
            "gunler":"Pazartesi-Cuma",
            "acilis":"9:00-23:00",
            "kapalı":"false"
            },

            {
                "gunler":"Cumartesi-Pazar",
                "acilis":"8:00-22:00",
                "kapalı":"false"
            }
            
        ],

        "imkanlar":["Dünya Kahveler","Kekler","Pastalar"],
        "koordinatlar":{
            "enlem":"37.78148",
            "boylam":"30.56523"
        },

        "yorumlar":[
            {
            "yorumYapan":"İsmail Kalkan",
            "yorumMetni":"Kahveler güzel ama pahalı be kardeş",
            "tarih":"20 Ekim 2022",
            "puan":"1"
            }
        ]
     

    }    
    
    
    
    });
}
const yorumEkle=function(req, res, next) {
    res.render('yorumekle', { title: 'Yorum Ekle' });
}

module.exports={
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}