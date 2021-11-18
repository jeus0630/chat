const net = require('net');

const clients = [];

const server = net.createServer(socket=>{
    let nickName = '';

    console.log("새로운 유저가 연결되었습니다.");

    clients.push(socket);

    socket.on("data",buf=>{

        if(!nickName){
            nickName = buf.toString();
            return;
        }

        clients.forEach(el=>{

            if(el === socket){
                return;
            }

            el.write(`${nickName} : ${buf.toString()}`);
        })
    })

    socket.on("close",()=>{
        const idx = clients.indexOf(socket);
        clients.splice(idx,1);
    })

    socket.on("error",()=>{
        const idx = clients.indexOf(socket);
        clients.splice(idx,1);
    })

})

server.listen(4000);