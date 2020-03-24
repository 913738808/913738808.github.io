window.onload = function () {
    var app = new Vue({
        el: "#app",
        data() {
            return {
                keyboard: keyboard,
                mainData:'',
                code:'',
                strIndex:0,
                strTimer:null
            }
        },
        methods: {
            clickKey: function (i, j) {
                var _this = this
                _this.keyboard[i][j].style = true;
                setTimeout(function () {
                    _this.keyboard[i][j].style = false;
                }, 500)
            },
            autoClick:function(str){
                var code = str.charCodeAt(0)
                // console.log(code)
                if(!codeMap[code]){
                    code = keyboard[Math.floor(Math.random()*keyboard.length)];   
                    code = code[Math.floor(Math.random()*code.length)].keyCody;
                }
                var i = codeMap[code].i
                var j = codeMap[code].j
                app.clickKey(i,j)
            },
            showList:function(i,j){
                setTimeout(function(){
                    var x = codeMap[keyboard[j][i].keyCody].i
                    var y = codeMap[keyboard[j][i].keyCody].j
                    app.clickKey(x,y)
                },i*100)
            }
        },
        created:function() {
            var _this = this
            _this.strTimer = setInterval(function(){
                app.code += str[app.strIndex]
                app.autoClick(str[app.strIndex])
                if(app.strIndex<str.length-1){
                    app.strIndex++
                }else{
                    clearInterval(_this.strTimer)
                    _this.strTimer = null
                }
            },100)
        },
    })
    window.onkeydown = function (e) {
        if(codeMap[e.keyCode]){
            var i = codeMap[e.keyCode].i
            var j = codeMap[e.keyCode].j
            
            if (app.keyboard[i][j].keyCody == e.keyCode) {
                if(e.keyCode == 16){
                    app.clickKey(3,0)
                }
                app.clickKey(i,j)
            }
            if(e.keyCode == 8){
                app.mainData = app.mainData.substring(0,app.mainData.length-1)
            }else if(e.keyCode == 13){
                app.mainData += '<br />'
            }else{
                app.mainData += String.fromCharCode(e.keyCode)
            }
            console.log(e.keyCode)
            if(e.keyCode == 13 || e.keyCode == 9){
                for(var i=0;i<keyboard[1].length;i++){
                    app.showList(i,1)
                }
            }
            if(e.keyCode == 8){
                for(var i=0;i<keyboard[0].length;i++){
                    app.showList(i,0)
                }
            }
            if(e.keyCode == 20){
                for(var i=0;i<keyboard[2].length;i++){
                    app.showList(i,2)
                }
            }
            if(e.keyCode == 16){
                for(var i=0;i<keyboard[3].length;i++){
                    app.showList(i,3)
                }
            }
        }
        return false;
    }
}

/**
 * 
 */
// var str =  `
// /** 姓名:周恩义   
//  * 年龄:23     
//  * 职业:前端开发工程师  
//  * 期望薪资：8k - 10k  
//  * 工作时间：1年半
//  */
// `
var str =  `
/** 欢迎来到程序员的世界！！  
 * 我是一位前端开发工程师！！
 * 我的联系方式
 *     QQ:913738808
 * 如果有需要外包的项目请找我~~
 * 有同学愿意一起交流的也可以尽情找我~~
 */


/**
 * 按下TAB BACK CAPS SHIFT 有惊喜哟！
*/
`
var codeMap = {27:{i:0,j:0},49:{i:0,j:1},50:{i:0,j:2},51:{i:0,j:3},52:{i:0,j:4},53:{i:0,j:5},54:{i:0,j:6},55:{i:0,j:7},56:{i:0,j:8},57:{i:0,j:9},48:{i:0,j:10},189:{i:0,j:11},8:{i:0,j:12},9:{i:1,j:0},81:{i:1,j:1},87:{i:1,j:2},69:{i:1,j:3},82:{i:1,j:4},84:{i:1,j:5},89:{i:1,j:6},85:{i:1,j:7},73:{i:1,j:8},79:{i:1,j:9},80:{i:1,j:10},219:{i:1,j:11},20:{i:2,j:0},65:{i:2,j:1},83:{i:2,j:2},68:{i:2,j:3},70:{i:2,j:4},71:{i:2,j:5},72:{i:2,j:6},74:{i:2,j:7},75:{i:2,j:8},76:{i:2,j:9},186:{i:2,j:10},13:{i:2,j:11},16:{i:3,j:0},90:{i:3,j:1},88:{i:3,j:2},67:{i:3,j:3},86:{i:3,j:4},66:{i:3,j:5},78:{i:3,j:6},77:{i:3,j:7},188:{i:3,j:8},190:{i:3,j:9},191:{i:3,j:10},16:{i:3,j:11},32:{i:4,j:0}}
var keyboard = [
    [{
            info: 'ESC',
            keyCody: 27,
            style: false
        },
        {
            info: '1',
            keyCody: 49,
            style: false
        },
        {
            info: '2',
            keyCody: 50,
            style: false
        },
        {
            info: '3',
            keyCody: 51,
            style: false
        },
        {
            info: '4',
            keyCody: 52,
            style: false
        },
        {
            info: '5',
            keyCody: 53,
            style: false
        },
        {
            info: '6',
            keyCody: 54,
            style: false
        },
        {
            info: '7',
            keyCody: 55,
            style: false
        },
        {
            info: '8',
            keyCody: 56,
            style: false
        },
        {
            info: '9',
            keyCody: 57,
            style: false
        },
        {
            info: '0',
            keyCody: 48,
            style: false
        },
        {
            info: '-',
            keyCody: 189,
            style: false
        },
        {
            info: 'back',
            keyCody: 8,
            style: false
        },
    ],
    [{
            info: 'TAB',
            keyCody: 9,
            style: false
        },
        {
            info: 'Q',
            keyCody: 81,
            style: false
        },
        {
            info: 'W',
            keyCody: 87,
            style: false
        },
        {
            info: 'E',
            keyCody: 69,
            style: false
        },
        {
            info: 'R',
            keyCody: 82,
            style: false
        },
        {
            info: 'T',
            keyCody: 84,
            style: false
        },
        {
            info: 'Y',
            keyCody: 89,
            style: false
        },
        {
            info: 'U',
            keyCody: 85,
            style: false
        },
        {
            info: 'I',
            keyCody: 73,
            style: false
        },
        {
            info: 'O',
            keyCody: 79,
            style: false
        },
        {
            info: 'P',
            keyCody: 80,
            style: false
        },
        {
            info: '{ }',
            keyCody: 219,
            style: false
        },
    ],
    [{
            info: 'CAPS',
            keyCody: 20,
            style: false
        },
        {
            info: 'A',
            keyCody: 65,
            style: false
        },
        {
            info: 'S',
            keyCody: 83,
            style: false
        },
        {
            info: 'D',
            keyCody: 68,
            style: false
        },
        {
            info: 'F',
            keyCody: 70,
            style: false
        },
        {
            info: 'G',
            keyCody: 71,
            style: false
        },
        {
            info: 'H',
            keyCody: 72,
            style: false
        },
        {
            info: 'J',
            keyCody: 74,
            style: false
        },
        {
            info: 'K',
            keyCody: 75,
            style: false
        },
        {
            info: 'L',
            keyCody: 76,
            style: false
        },
        {
            info: ';',
            keyCody: 186,
            style: false
        },
        {
            info: 'ENTER',
            keyCody: 13,
            style: false
        },
    ],
    [{
            info: 'SHIFT',
            keyCody: 16,
            style: false
        },
        {
            info: 'Z',
            keyCody: 90,
            style: false
        },
        {
            info: 'X',
            keyCody: 88,
            style: false
        },
        {
            info: 'C',
            keyCody: 67,
            style: false
        },
        {
            info: 'V',
            keyCody: 86,
            style: false
        },
        {
            info: 'B',
            keyCody: 66,
            style: false
        },
        {
            info: 'N',
            keyCody: 78,
            style: false
        },
        {
            info: 'M',
            keyCody: 77,
            style: false
        },
        {
            info: ',',
            keyCody: 188,
            style: false
        },
        {
            info: '.',
            keyCody: 190,
            style: false
        },
        {
            info: '/',
            keyCody: 191,
            style: false
        },
        {
            info: 'SHIFT',
            keyCody: 16,
            style: false
        },
    ],
    [{
        info: 'speace',
        keyCody: 32,
        style: false
    }]
]