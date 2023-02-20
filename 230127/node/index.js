const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const port = 5000;

// express에서 react build 폴더까지 static으로 경로설정
app.use(express.static(path.join(__dirname, '../react-ex/build')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  //서버에서 5000포트로 접속하면 static 폴더의 index.html를 화면에 내보냄
  res.sendFile(path.join(__dirname, '../react-ex/build/index.html'));
});

app.listen(port, () => {
  mongoose
    .connect('cluster0.qpfqlop.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
      console.log('Connecting MongoDB...');
    })
    .catch(err => {
      console.log(err);
    });
});

// 어떤 url 에서 새로고침 하더라도 화면에 뜰 수 있게 설정
app.get('*', () => {});

//react로부터 받은 요청처리
app.post('/api/send', (req, res) => {
  console.log(req.body);
  res.status(200).json({ success: true, result: req.body.name + '2' });
});
