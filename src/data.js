import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"The Ticket Sports Network",
            artist: "Sports News",
            cover: "https://us0-cdn.onlineradiobox.com/img/l/2/29292.v8.png",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "http://72.215.141.182:8000/stream/2/",
            active: true,
        },
        {
            name:"Fox Radio 910",
            artist: "Sports News",
            cover: "https://us0-cdn.onlineradiobox.com/img/l/0/16280.v3.png",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://crystalout.surfernetwork.com:8001/WFJX_MP3",
            active: true,
        },        
        {
            name:"ESPN New Orleans",
            artist: "Sports News",
            cover: "https://us0-cdn.onlineradiobox.com/img/l/1/4381.v4.png",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "http://64.78.234.165:8000/KLRZ",
            active: false,
        },
        {
            name:"WHUS Sports",
            artist: "Sports News",
            cover: "http://stream.whus.org:8000/whussports",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://14833.live.streamtheworld.com/WMALFM_SC?dist=onlineradiobox",
            active: false,
        },
        {
            name:"KDUS AM 1060",
            artist: "Sports News",
            cover: "https://us0-cdn.onlineradiobox.com/img/l/7/28187.v3.png",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://17853.live.streamtheworld.com/KDUSAM_SC?dist=onlineradiobox",
            active: true,
        },        
        {
            name:"Eagle 107",
            artist: "Sports News",
            cover: "https://us0-cdn.onlineradiobox.com/img/l/1/20131.v4.png",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://prod-54-211-226-228.wostreaming.net/sunbury-weghfmmp3-imc2?session-id=8fc43fffb7431a812b0209fe849965ec",
            active: false,
        },
        {
            name:"1240 Joe Radio",
            artist: "sports entertainment",
            cover: "https://us0-cdn.onlineradiobox.com/img/l/8/110628.v3.png",
            id: uuidv4(),
            color: ["#191516", "#82698E"],
            audio: "https://us9.maindigitalstream.com/ssl/KEJO",
            active: false,
        },
        {
            name:"93.9 The Score",
            artist: "Sports News",
            cover: "https://us0-cdn.onlineradiobox.com/img/l/9/77939.v7.png",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://icecast.939thescore.com/stream/939live.mp3",
            active: false,
        },
        {
            name:"95.3 The Ticket",
            artist: "Sports News",
            cover: "https://us0-cdn.onlineradiobox.com/img/l/5/32145.v2.png",
            id: uuidv4(),
            color: ["#FDE1A9", "#A46874"],
            audio: "http://hemnos.cdnstream.com/1417_64",
            active: false,
        },
        {
            name:"Sports Radio 93.1",
            artist: "Sports News",
            cover: "https://us0-cdn.onlineradiobox.com/img/l/8/110968.v1.png",
            id: uuidv4(),
            color: ["#FDE1A9", "#A46874"],
            audio: "https://s48.myradiostream.com/:11304/listen.mp3?nocache=1641475480",
            active: false,
        },        
    ];
}

export default chillHop;


