import * as dotenv from 'dotenv'
import fastify from 'fastify'

const server = fastify()
dotenv.config()

// Declare a route  
server.get('/', function (request, reply) {  
	reply.send({ Fastify: 'run !!!' })  
})  
  
// Run the server!
let portObject = { port: Number(process.env.SERVER_PORT) }
server.listen(portObject, (error, address) => {
    if (error) {
        server.log.error(error);
        process.exit(1);
    }
	console.log(`Server is now listening on ${address}`)	
});
