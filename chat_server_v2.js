const net = require('net');

const clients = [];
const server = net.createServer(socket=>{
    console.log("새로운 유저가 연결되었습니다.");

    clients.push(socket);

    socket.on("data",buf=>{
        clients.forEach(el=>{
            if(el === socket){
                return;
            }

            el.write(buf);
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