/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
         dom: [
         {
            id:'football_by_zbjanet-d33s6t52',
            type:'image',
            rect:[0,0,667,445],
            fill:["rgba(0,0,0,0)",im+"football_by_zbjanet-d33s6t52.jpeg"],
            transform:[[28,209],[0,0],[0],[1.023,1.023]]
         },
         {
            id:'equipos2',
            type:'image',
            rect:[0,0,730,518],
            fill:["rgba(0,0,0,0)",im+"equipos2.jpeg"],
            transform:[[4,177],[0,0],[0],[1,1]]
         },
         {
            id:'reloj2',
            type:'image',
            rect:[0,0,600,900],
            fill:["rgba(0,0,0,0)",im+"reloj2.jpg"],
            transform:[[61,-481],[0,0],[0],[1.193,1.193]]
         },
         {
            id:'Euro-2008-ball',
            type:'image',
            rect:[0,0,600,600],
            fill:["rgba(0,0,0,0)",im+"Euro-2008-ball.png"],
            transform:[[-204,-94],[],[],[0.316,0.316]]
         },
         {
            id:'copa3',
            type:'image',
            rect:[0,0,764,191],
            opacity:0,
            fill:["rgba(0,0,0,0)",im+"copa3.png"],
            transform:[[-24,114],[0,0],[0],[1,1]]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_reloj2}": [
            ["transform", "translateX", '61.98px'],
            ["transform", "scaleX", '1.19333'],
            ["style", "clip", [500,600,500,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "translateY", '-481.99px'],
            ["transform", "scaleY", '1.19333']
         ],
         "${_copa3}": [
            ["style", "opacity", '0'],
            ["transform", "translateY", '114.99px'],
            ["transform", "translateX", '-24px']
         ],
         "${_football_by_zbjanet-d33s6t52}": [
            ["transform", "translateX", '33.32px'],
            ["style", "clip", [130,654,138,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "scaleX", '1.03928'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '82.72px'],
            ["transform", "scaleY", '1.03928']
         ],
         "${_equipos2}": [
            ["style", "clip", [230,690,230,9], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "opacity", '1'],
            ["transform", "translateY", '177.77px'],
            ["transform", "translateX", '4px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,0.00)'],
            ["style", "height", '421px'],
            ["style", "width", '717px']
         ],
         "${_Euro-2008-ball}": [
            ["transform", "translateX", '-254.97px'],
            ["transform", "rotateZ", '-121deg'],
            ["transform", "scaleX", '0.15678'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-89.03px'],
            ["transform", "scaleY", '0.15678']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 9500,
         autoPlay: true,
         labels: {
            "1in": 3284
         },
         timeline: [
            { id: "eid205", tween: [ "style", "${_football_by_zbjanet-d33s6t52}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 236, easing: "easeOutQuad" },
            { id: "eid255", tween: [ "style", "${_football_by_zbjanet-d33s6t52}", "opacity", '0', { fromValue: '1'}], position: 4836, duration: 118, easing: "easeOutQuad" },
            { id: "eid228", tween: [ "style", "${_reloj2}", "clip", [500,583,734,18], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [500,600,500,0]}], position: 4273, duration: 681, easing: "easeOutQuad" },
            { id: "eid239", tween: [ "style", "${_reloj2}", "clip", [500,581,609,16], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [500,581,733,16]}], position: 6659, duration: 750, easing: "easeOutQuad" },
            { id: "eid251", tween: [ "style", "${_reloj2}", "clip", [500,580,500,15], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [500,580,608,15]}], position: 8750, duration: 643, easing: "easeOutQuad" },
            { id: "eid202", tween: [ "style", "${_football_by_zbjanet-d33s6t52}", "clip", [52,651,323,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [129,652,137,0]}], position: 2000, duration: 790, easing: "easeOutQuad" },
            { id: "eid215", tween: [ "style", "${_football_by_zbjanet-d33s6t52}", "clip", [321,650,322,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [51,650,322,0]}], position: 4296, duration: 658, easing: "easeOutQuad" },
            { id: "eid8", tween: [ "style", "${_Euro-2008-ball}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 670, easing: "easeOutQuad" },
            { id: "eid156", tween: [ "transform", "${_Euro-2008-ball}", "scaleY", '0.15678', { fromValue: '0.15678'}], position: 1370, duration: 0, easing: "easeOutQuad" },
            { id: "eid253", tween: [ "style", "${_equipos2}", "opacity", '0', { fromValue: '1'}], position: 9327, duration: 66, easing: "easeOutQuad" },
            { id: "eid242", tween: [ "style", "${_equipos2}", "clip", [93,691,229,11], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [230,690,230,9]}], position: 6659, duration: 750, easing: "easeOutQuad" },
            { id: "eid249", tween: [ "style", "${_equipos2}", "clip", [226,688,226,8], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [91,690,227,9]}], position: 8750, duration: 643, easing: "easeOutQuad" },
            { id: "eid257", tween: [ "style", "${_copa3}", "opacity", '1', { fromValue: '0.000000'}], position: 750, duration: 829, easing: "easeOutQuad" },
            { id: "eid5", tween: [ "transform", "${_Euro-2008-ball}", "translateX", '-146.69px', { fromValue: '-254.97px'}], position: 0, duration: 1370, easing: "easeOutQuad" },
            { id: "eid206", tween: [ "transform", "${_Euro-2008-ball}", "translateX", '-146.69px', { fromValue: '-146.69px'}], position: 4160, duration: 0, easing: "easeOutQuad" },
            { id: "eid229", tween: [ "transform", "${_Euro-2008-ball}", "translateX", '-146.69px', { fromValue: '-146.69px'}], position: 6409, duration: 0, easing: "easeOutQuad" },
            { id: "eid154", tween: [ "transform", "${_Euro-2008-ball}", "translateY", '-89.03px', { fromValue: '-89.03px'}], position: 1370, duration: 0, easing: "easeOutQuad" },
            { id: "eid70", tween: [ "transform", "${_Euro-2008-ball}", "translateY", '-253.79px', { fromValue: '-89.03px'}], position: 1805, duration: 609, easing: "easeOutQuad" },
            { id: "eid71", tween: [ "transform", "${_Euro-2008-ball}", "translateY", '-234.79px', { fromValue: '-253.79px'}], position: 2414, duration: 335, easing: "easeOutQuad" },
            { id: "eid72", tween: [ "transform", "${_Euro-2008-ball}", "translateY", '-243.79px', { fromValue: '-234.79px'}], position: 2750, duration: 207, easing: "easeOutQuad" },
            { id: "eid73", tween: [ "transform", "${_Euro-2008-ball}", "translateY", '-234.79px', { fromValue: '-243.79px'}], position: 2957, duration: 327, easing: "easeOutQuad" },
            { id: "eid208", tween: [ "transform", "${_Euro-2008-ball}", "translateY", '67.98px', { fromValue: '-234.79px'}], position: 4160, duration: 1089, easing: "easeOutBounce" },
            { id: "eid231", tween: [ "transform", "${_Euro-2008-ball}", "translateY", '-112.62px', { fromValue: '67.98px'}], position: 6409, duration: 840, easing: "easeOutQuad" },
            { id: "eid243", tween: [ "transform", "${_Euro-2008-ball}", "translateY", '-89.96px', { fromValue: '-112.62px'}], position: 7250, duration: 250, easing: "easeOutQuad" },
            { id: "eid244", tween: [ "transform", "${_Euro-2008-ball}", "translateY", '-101.1px', { fromValue: '-89.96px'}], position: 7500, duration: 250, easing: "easeOutQuad" },
            { id: "eid245", tween: [ "transform", "${_Euro-2008-ball}", "translateY", '-89.96px', { fromValue: '-101.1px'}], position: 7750, duration: 250, easing: "easeOutQuad" },
            { id: "eid258", tween: [ "transform", "${_copa3}", "translateX", '-24px', { fromValue: '-24px'}], position: 2000, duration: 0, easing: "easeOutQuad" },
            { id: "eid261", tween: [ "transform", "${_copa3}", "translateX", '-24px', { fromValue: '-24px'}], position: 4273, duration: 0, easing: "easeOutQuad" },
            { id: "eid155", tween: [ "transform", "${_Euro-2008-ball}", "scaleX", '0.15678', { fromValue: '0.15678'}], position: 1370, duration: 0, easing: "easeOutQuad" },
            { id: "eid15", tween: [ "transform", "${_Euro-2008-ball}", "rotateZ", '0deg', { fromValue: '-121deg'}], position: 0, duration: 1370, easing: "easeOutQuad" },
            { id: "eid260", tween: [ "transform", "${_copa3}", "translateY", '-30px', { fromValue: '114.99px'}], position: 2000, duration: 749, easing: "easeOutQuad" },
            { id: "eid263", tween: [ "transform", "${_copa3}", "translateY", '266px', { fromValue: '-30px'}], position: 4273, duration: 681, easing: "easeOutQuad" },
            { id: "eid266", tween: [ "transform", "${_copa3}", "translateY", '112px', { fromValue: '266px'}], position: 6659, duration: 750, easing: "easeOutQuad" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-47503245");
