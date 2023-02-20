const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const port = 5000;

// build 폴더 경로를 static으로 설정
app.use(express.static(path.join(__dirname, '../client/build/')));

app.get('/', (req, res) => {
  //서버에서 5000 포트로 접속시 static 퐇더로 지정되어 있는 build 폴더 안의 index.html 화면으로 보냄
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// 어떤 url으로 접속해도 화면이 뜸
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(port, () => {
  mongoose
    .connect('mongodb+srv://nayoon<tjswn0923@>@cluster0.qpfqlop.mongodb.net/?retryWrites=true&w=majority')
    .then(console.log(`Example app listening on port ${port}`))
    .catch(err => console.log(err));
});
