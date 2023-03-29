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
            name:"ESPN New Orleans",
            artist: "Sports News",
            cover: "https://us0-cdn.onlineradiobox.com/img/l/1/4381.v4.png",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "http://64.78.234.165:8000/KLRZ",
            active: false,
        },
        {
            name:"77 WABC Radio",
            artist: "news talk",
            cover: "https://us0-cdn.onlineradiobox.com/img/l/5/77465.v3.png",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "http://stream.whus.org:8000/whussports",
            active: false,
        },
        {
            name:"790 KABC-AM",
            artist: "news talk",
            cover: "https://apksshare.com/wp-content/uploads/2021/07/US-Breaking-News-Today-Top-Stories-Local-News-App-APK-MOD-Download-2.3.png",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://14013.live.streamtheworld.com/KABCAM_SC?dist=onlineradiobox",
            active: false,
        },
        {
            name:"WHUS Sports",
            artist: "news talk",
            cover: "https://apksshare.com/wp-content/uploads/2021/07/US-Breaking-News-Today-Top-Stories-Local-News-App-APK-MOD-Download-2.3.png",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://14833.live.streamtheworld.com/WMALFM_SC?dist=onlineradiobox",
            active: false,
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
    ];
}

export default chillHop;


