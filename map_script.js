var map;
var marker;
var center = {
    lat: 35.170694, // Üx
    lng: 136.881637 // ox
};

function initMap() {
    map = new google.maps.Map(document.getElementById('sample'), {
        center: center, // n}ÌSðwè
        zoom: 6 // n}ÌY[ðwè
    });
// pathÌCÝè
    var path_line = new google.maps.Polyline({
        map: map,
        path:[
// å_
            new google.maps.LatLng(35.3669998,136.6175494),
// ¼Ã®
            new google.maps.LatLng(35.1709142,136.8816447),
// àR
            new google.maps.LatLng(35.1429282,136.9012195),
// K
            new google.maps.LatLng(36.1143387,137.9481023),
// ªJ
            new google.maps.LatLng(36.0570347,138.0453799),
// Cì
            new google.maps.LatLng(35.9845957,137.9978725),
// L´
            new google.maps.LatLng(34.7629304,137.381926),
// xm
            new google.maps.LatLng(35.151486,138.6511946),
// b{
            new google.maps.LatLng(35.6670765,138.5690546),
// ª¤q
            new google.maps.LatLng(35.6556399,139.3388915),
// ´{
            new google.maps.LatLng(35.5949215,139.3450528),
// è
            new google.maps.LatLng(35.3303085,139.406848),
// åD
            new google.maps.LatLng(35.3544937,139.5315814),
// ¡l
            new google.maps.LatLng(35.4657885,139.6223299),
// _Þì
            new google.maps.LatLng(35.4779787,139.6333869),
// ß©
            new google.maps.LatLng(35.5082528,139.6763195),
//  ¬
            new google.maps.LatLng(35.5766373,139.6594584),
// Kè
            new google.maps.LatLng(35.5315627,139.6842527),
// ìè
            new google.maps.LatLng(35.5313531,139.6968913),
// iì
            new google.maps.LatLng(35.6284888,139.7387767),
// ãXØ
            new google.maps.LatLng(35.6841068,139.7021759),
// äm
            new google.maps.LatLng(35.6994603,139.7652079),
// _c
            new google.maps.LatLng(35.6918216,139.770935),
// 
            new google.maps.LatLng(35.6811957,139.767251),
// sìl
            new google.maps.LatLng(35.6664838,139.9236774),
// ìD´
            new google.maps.LatLng(35.6817774,139.9958289),
// hä
            new google.maps.LatLng(35.5815282,140.1310471),
// åÔ
            new google.maps.LatLng(35.522508,140.3110421),
// ¬
            new google.maps.LatLng(35.6083855,140.4108524),
// ¼Ý
            new google.maps.LatLng(35.7395434,140.7952883),
// æ
            new google.maps.LatLng(35.8979327,140.5322812),
// ¬c
            new google.maps.LatLng(35.7773313,140.3135312),
// ²q
            new google.maps.LatLng(35.7095572,140.2259731),
// çt
            new google.maps.LatLng(35.6129299,140.1134652),
// ¼D´
            new google.maps.LatLng(35.7074664,139.9590826),
// Ñ¬
            new google.maps.LatLng(35.6971445,139.81384),
// Ht´
            new google.maps.LatLng(35.698362,139.7733021),
// úé¢
            new google.maps.LatLng(35.7281575,139.770638),
// V¼Ë
            new google.maps.LatLng(35.8255382,139.9211025),
// ìYa
            new google.maps.LatLng(35.8481784,139.6687818),
//  Ya
            new google.maps.LatLng(35.845352,139.6468681),
// ÔH
            new google.maps.LatLng(35.7776795,139.7209883),
// c[
            new google.maps.LatLng(35.7383571,139.7607333),
// rÜ
            new google.maps.LatLng(35.729487,139.7109997),
// Vh
            new google.maps.LatLng(35.6894597,139.700537),
// ¼ª
            new google.maps.LatLng(35.6997996,139.4657707),
// {{¬
            new google.maps.LatLng(35.6661875,139.4772291),
// §ì
            new google.maps.LatLng(35.6982051,139.4137788),
// q
            new google.maps.LatLng(35.7210899,139.343634),
// å{
            new google.maps.LatLng(35.9063453,139.6231198),
// ¬R
            new google.maps.LatLng(36.3128947,139.8064972),
// VO´
            new google.maps.LatLng(36.379033,139.0469116),
// aì
            new google.maps.LatLng(36.4913158,139.0088),
// {à
            new google.maps.LatLng(37.4220999,138.8402313),
// Oð
            new google.maps.LatLng(37.6285143,138.9736524),
// VÃ
            new google.maps.LatLng(37.8004686,139.1212473),
// V­c
            new google.maps.LatLng(37.9440569,139.3350935),
// V
            new google.maps.LatLng(37.91209,139.0617442),
// gc
            new google.maps.LatLng(37.6871131,138.8786033),
// è
            new google.maps.LatLng(37.3637096,138.5562887),
// ¼]Ã
            new google.maps.LatLng(37.1702506,138.242039),
        ],
        strokeColor: "rgb(0 ,51,204)", //üF(def:#000000)
        strokeOpacity: 0.5, //§¾x0`1(def:1)
        strokeWeight: 5, //pxwèidef:1)
        zIndex: 1 //dÈè
        }
    );
// wÌ}[J[Ýè
    var markers = [
// å_
        {
            position : { lat: 35.3669998, lng: 136.6175494 },
            title: "å_",
            label_text: "0",
            color: "blue"
        },
// ¼Ã®
        {
            position : { lat: 35.1709142, lng: 136.8816447 },
            title: "¼Ã®",
            label_text: "1",
            color: "blue"
        },
// àR
        {
            position : { lat: 35.1429282, lng: 136.9012195 },
            title: "àR",
            label_text: "2",
            color: "blue"
        },
// K
        {
            position : { lat: 36.1143387, lng: 137.9481023 },
            title: "K",
            label_text: "3",
            color: "blue"
        },
// ªJ
        {
            position : { lat: 36.0570347, lng: 138.0453799 },
            title: "ªJ",
            label_text: "4",
            color: "blue"
        },
// Cì
        {
            position : { lat: 35.9845957, lng: 137.9978725 },
            title: "Cì",
            label_text: "5",
            color: "blue"
        },
// L´
        {
            position : { lat: 34.7629304, lng: 137.381926 },
            title: "L´",
            label_text: "6",
            color: "blue"
        },
// xm
        {
            position : { lat: 35.151486, lng: 138.6511946 },
            title: "xm",
            label_text: "7",
            color: "blue"
        },
// b{
        {
            position : { lat: 35.6670765, lng: 138.5690546 },
            title: "b{",
            label_text: "8",
            color: "blue"
        },
// ª¤q
        {
            position : { lat: 35.6556399, lng: 139.3388915 },
            title: "ª¤q",
            label_text: "9",
            color: "blue"
        },
// ´{
        {
            position : { lat: 35.5949215, lng: 139.3450528 },
            title: "´{",
            label_text: "10",
            color: "blue"
        },
// è
        {
            position : { lat: 35.3303085, lng: 139.406848 },
            title: "è",
            label_text: "11",
            color: "blue"
        },
// åD
        {
            position : { lat: 35.3544937, lng: 139.5315814 },
            title: "åD",
            label_text: "12",
            color: "blue"
        },
// ¡l
        {
            position : { lat: 35.4657885, lng: 139.6223299 },
            title: "¡l",
            label_text: "13",
            color: "blue"
        },
// _Þì
        {
            position : { lat: 35.4779787, lng: 139.6333869 },
            title: "_Þì",
            label_text: "14",
            color: "blue"
        },
// ß©
        {
            position : { lat: 35.5082528, lng: 139.6763195 },
            title: "ß©",
            label_text: "15",
            color: "blue"
        },
//  ¬
        {
            position : { lat: 35.5766373, lng: 139.6594584 },
            title: " ¬",
            label_text: "16",
            color: "blue"
        },
// Kè
        {
            position : { lat: 35.5315627, lng: 139.6842527 },
            title: "Kè",
            label_text: "17",
            color: "blue"
        },
// ìè
        {
            position : { lat: 35.5313531, lng: 139.6968913 },
            title: "ìè",
            label_text: "18",
            color: "blue"
        },
// iì
        {
            position : { lat: 35.6284888, lng: 139.7387767 },
            title: "iì",
            label_text: "19",
            color: "blue"
        },
// ãXØ
        {
            position : { lat: 35.6841068, lng: 139.7021759 },
            title: "ãXØ",
            label_text: "20",
            color: "blue"
        },
// äm
        {
            position : { lat: 35.6994603, lng: 139.7652079 },
            title: "äm",
            label_text: "21",
            color: "blue"
        },
// _c
        {
            position : { lat: 35.6918216, lng: 139.770935 },
            title: "_c",
            label_text: "22",
            color: "blue"
        },
// 
        {
            position : { lat: 35.6811957, lng: 139.767251 },
            title: "",
            label_text: "23",
            color: "blue"
        },
// sìl
        {
            position : { lat: 35.6664838, lng: 139.9236774 },
            title: "sìl",
            label_text: "24",
            color: "blue"
        },
// ìD´
        {
            position : { lat: 35.6817774, lng: 139.9958289 },
            title: "ìD´",
            label_text: "25",
            color: "blue"
        },
// hä
        {
            position : { lat: 35.5815282, lng: 140.1310471 },
            title: "hä",
            label_text: "26",
            color: "blue"
        },
// åÔ
        {
            position : { lat: 35.522508, lng: 140.3110421 },
            title: "åÔ",
            label_text: "27",
            color: "blue"
        },
// ¬
        {
            position : { lat: 35.6083855, lng: 140.4108524 },
            title: "¬",
            label_text: "28",
            color: "blue"
        },
// ¼Ý
        {
            position : { lat: 35.7395434, lng: 140.7952883 },
            title: "¼Ý",
            label_text: "29",
            color: "blue"
        },
// æ
        {
            position : { lat: 35.8979327, lng: 140.5322812 },
            title: "æ",
            label_text: "30",
            color: "blue"
        },
// ¬c
        {
            position : { lat: 35.7773313, lng: 140.3135312 },
            title: "¬c",
            label_text: "31",
            color: "blue"
        },
// ²q
        {
            position : { lat: 35.7095572, lng: 140.2259731 },
            title: "²q",
            label_text: "32",
            color: "blue"
        },
// çt
        {
            position : { lat: 35.6129299, lng: 140.1134652 },
            title: "çt",
            label_text: "33",
            color: "blue"
        },
// ¼D´
        {
            position : { lat: 35.7074664, lng: 139.9590826 },
            title: "¼D´",
            label_text: "34",
            color: "blue"
        },
// Ñ¬
        {
            position : { lat: 35.6971445, lng: 139.81384 },
            title: "Ñ¬",
            label_text: "35",
            color: "blue"
        },
// Ht´
        {
            position : { lat: 35.698362, lng: 139.7733021 },
            title: "Ht´",
            label_text: "36",
            color: "blue"
        },
// úé¢
        {
            position : { lat: 35.7281575, lng: 139.770638 },
            title: "úé¢",
            label_text: "37",
            color: "blue"
        },
// V¼Ë
        {
            position : { lat: 35.8255382, lng: 139.9211025 },
            title: "V¼Ë",
            label_text: "38",
            color: "blue"
        },
// ìYa
        {
            position : { lat: 35.8481784, lng: 139.6687818 },
            title: "ìYa",
            label_text: "39",
            color: "blue"
        },
//  Ya
        {
            position : { lat: 35.845352, lng: 139.6468681 },
            title: " Ya",
            label_text: "40",
            color: "blue"
        },
// ÔH
        {
            position : { lat: 35.7776795, lng: 139.7209883 },
            title: "ÔH",
            label_text: "41",
            color: "blue"
        },
// c[
        {
            position : { lat: 35.7383571, lng: 139.7607333 },
            title: "c[",
            label_text: "42",
            color: "blue"
        },
// rÜ
        {
            position : { lat: 35.729487, lng: 139.7109997 },
            title: "rÜ",
            label_text: "43",
            color: "blue"
        },
// Vh
        {
            position : { lat: 35.6894597, lng: 139.700537 },
            title: "Vh",
            label_text: "44",
            color: "blue"
        },
// ¼ª
        {
            position : { lat: 35.6997996, lng: 139.4657707 },
            title: "¼ª",
            label_text: "45",
            color: "blue"
        },
// {{¬
        {
            position : { lat: 35.6661875, lng: 139.4772291 },
            title: "{{¬",
            label_text: "46",
            color: "blue"
        },
// §ì
        {
            position : { lat: 35.6982051, lng: 139.4137788 },
            title: "§ì",
            label_text: "47",
            color: "blue"
        },
// q
        {
            position : { lat: 35.7210899, lng: 139.343634 },
            title: "q",
            label_text: "48",
            color: "blue"
        },
// å{
        {
            position : { lat: 35.9063453, lng: 139.6231198 },
            title: "å{",
            label_text: "49",
            color: "blue"
        },
// ¬R
        {
            position : { lat: 36.3128947, lng: 139.8064972 },
            title: "¬R",
            label_text: "50",
            color: "blue"
        },
// VO´
        {
            position : { lat: 36.379033, lng: 139.0469116 },
            title: "VO´",
            label_text: "51",
            color: "blue"
        },
// aì
        {
            position : { lat: 36.4913158, lng: 139.0088 },
            title: "aì",
            label_text: "52",
            color: "blue"
        },
// {à
        {
            position : { lat: 37.4220999, lng: 138.8402313 },
            title: "{à",
            label_text: "53",
            color: "blue"
        },
// Oð
        {
            position : { lat: 37.6285143, lng: 138.9736524 },
            title: "Oð",
            label_text: "54",
            color: "blue"
        },
// VÃ
        {
            position : { lat: 37.8004686, lng: 139.1212473 },
            title: "VÃ",
            label_text: "55",
            color: "blue"
        },
// V­c
        {
            position : { lat: 37.9440569, lng: 139.3350935 },
            title: "V­c",
            label_text: "56",
            color: "blue"
        },
// V
        {
            position : { lat: 37.91209, lng: 139.0617442 },
            title: "V",
            label_text: "57",
            color: "blue"
        },
// gc
        {
            position : { lat: 37.6871131, lng: 138.8786033 },
            title: "gc",
            label_text: "58",
            color: "blue"
        },
// è
        {
            position : { lat: 37.3637096, lng: 138.5562887 },
            title: "è",
            label_text: "59",
            color: "blue"
        },
// ¼]Ã
        {
            position : { lat: 37.1702506, lng: 138.242039 },
            title: "¼]Ã",
            label_text: "60",
            color: "blue"
        },
    ];
// ¡Ì}[J[ðzu
    for (var m of markers){
        var marker = new google.maps.Marker({
            map: map,
            position: m.position,
            icon: {
                fillColor: m.color, //hè×µF
                fillOpacity: 0.8, //hè×µ§ß¦
                path: google.maps.SymbolPath.CIRCLE, //~ðwè
                scale: 8, //~ÌTCY
                strokeColor: m.color, //gÌF
                strokeWeight: 1.0 //gÌ§ß¦
            },
            title: m.title,
            label: {
                text: m.label_text, //x¶
                color: '#FFFFFF', //¶ÌF
                fontSize: '10px' //¶ÌTCY
            }
        });
    }
}
