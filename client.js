const net = require('net');

const socket = net.createConnection(4000,"127.0.0.1",()=>{
    console.log("닉네임을 입력해주세요");

    process.stdin.on("data",buf=>{
        // new line 제거
        buf = buf.toString().replace(/\r?\n|\r/g, " ");

        socket.write(buf);
    })

    socket.on("data",(buf)=>{
        console.log(buf.toString());
    })
});