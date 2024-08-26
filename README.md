=> DOTENV

Dotenv é um método de dependência zero que carrega variáveis de 
ambiente de um `.env` arquivo em `process.env`. Armazenar a 
configuração no ambiente separada docódigo é baseada na 
metodologia The Twelve-Factor App.

Onde buscar?
www.npmjs.com/package/dotenv

=> INSTALAR

npm install dotenv --save

=> USO

Importe e configure o dotenv:
require ('dotenv').confg()
    ou usando ES6
import 'dotenv/config'    


crie um .env arquivo na raiz do seu projeto:
ex: USER = "Ricardo"
    PASSWORD = "1234"

package.json
"scripts": {
    "start": "node --env-file=.env src/index.js"
},    
