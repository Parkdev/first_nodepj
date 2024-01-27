// express 라이브러리 사용 설정
const express = require('express');
const app = express();
const path = require('path');

//static파일을 사용하려고할때 설정
// app.use(express.static(__dirname + '/public'));

app.use(express.static(path.join(__dirname, 'shop/build')));

// 서버 생성 코드
app.listen(8080, () => {
    console.log('listening on 8080');
})

// 서버 기능 시작
// app.get('/', (request, respond) => {
//     respond.sendFile(__dirname + '/index.html')
// })

// app.get('/path', (request, respond) => {
//     respond.send("path에오")
// })

// app.get('/', (request, respond)=>{
//     respond.sendFile(path.join(__dirname + '/shop/build/index.html'));
// });


// 리엑트와 node js의 파일 전송을 원할히 하려면 아래설정을 하는게 좋다.
// 1. express.json
app.use(express.json()); // 유저가 보낸 array/object 데이터를 파싱하여 js객체로 변환해주는 미들웨어

// 2. CORS (Cross-Origin Resource Sharing) 
var cors= require('cors'); 
app.use(cors());// 다른 도메인주소끼리 ajax 요청을 주고 받을때 사용하는 미들웨어
// 나중에 로컬에서 각각 연결해서 개발을 진행할때 유용하다.

//참고: restful api 는 다음과같이 만들면된다.
app.get('/product', function(request, respond) {
    respond.json({name : 'black shoes'}); //해당중에 DB query를 해와 보내주면된다.
})

//프론트를 출력하는경우 (리엑트 라우터 사용)
app.get('*', (request, respond)=> {
    respond.sendFile(path.join(__dirname, 'shop/build/index.html'));
})

// 로컬환경에서 테스트할때는 build할필요없고 올리기전에 build하면된다.
// 서버에서 리엑트말고 일반 Html을 올리려면