## Comandos do Node

npm i -g typescript
tsc [nome-arquivo].ts --w
tsc --w (todos os arquivos ts)

## WORKFLW

tsc --init

tsconfig.json
"target": "es6",
"module": "es2015",
"outDir": "./public",
"rootDir": "./src",
}"include":["src"]


interface é um tipo de typagem para a classe, faz com que a classe PRECISE ter esse aspecto.

para implementar...

class [NomeClass] implements [nomeInterface]

ex:

interface dados {
nome:string,
idade: number,
idioma():string
}

class Person implements dados {
constructor({
nome:string,
idade:number,
idioma():string
}){
this.nome = nome;
this.idade = idade;
}

idioma(lingua) {
return lingua;
}
}

## Webpack Typescript
command line: npm install webpack wepack-cli ts-loader -D

npm install webpack-dev-server -D