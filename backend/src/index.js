
/* rotas/ recursos
*/ 

/*  metados 
    get = buscas
    post = criar informação 
    put = alertar  uma  informação 
    delete = deletar   
*/ 



/* 
tipos  de  parametros:

query params: parametros  enviados na  rotas   apos "?" ( Filtros , paginação) 
Route params: parametros utilizados para  indetificar  recursos  
Request Body:  corpo da  requesição  utilizado pra  criar recusos 
*/

/* 
SQL: MySQL , PostreSQL,oracle
NoSQL: mongoDB

DRive  : selcet from users 
Query builder: table('user)

*/

const express = require('express'); 
const cors =require('cors');
const routes = require('./routes');
 
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
