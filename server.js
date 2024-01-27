// express 라이브러리 사용 설정
const express = require('express')
const app = express()

// 서버 생성 코드
app.listen(8080, () => {
    console.log('http://localhost:8080 에서 서버 실행중');
})

// 서버 기능 시작
app.get('/', (request, respond) => {
    respond.sendFile(__dirname + '/index.html')
})

app.get('/path', (request, respond) => {
    respond.send("path에오")
})

