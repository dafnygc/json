JSON
[{
    "nome":"Kirby",
    "email":"kcoard8@squidoo.com",
    "telefone":[
        "9291767581",
        "92991767581"
    ],
    "endereco":{
        "logradouro":"Rua Valley Edge",
        "numero":"5",
        "cep":"20195",
        "apartamento":false,
        "completamento":"venda da tia Zezé"
    }
}]

FIND1 JAVA

const clientes=("./clientes.json");
function encontrar(lista,chaves,valor){
    return lista.find((item)=>item[chaves]===valor);
}

const encontrado=encontrar(clientes,"nome","Kirby");

console.log(encontrado);

FIND2

const clientes = require("./cliente.json");

function encontrar(lista,chave,valor){
    return lista.find((item)=>item[chave].includes(valor));
}
const encontrado = encontrar(clientes,"nome","Kirby");
const encontrado2 = (clientes,"telefone","1918820860");
console.log(encontrado);

const usuarios=[
    {nome:"Carlos",idade:32},
    {nome:"Ana",idade:28},
    {nome:"Felipe,idade:40"}
];

//Encontrando um objeto
const ana=usuarios.find(usuario=>usuario.nome==="Ana");
console.log(ana);

//Filtrando objetos

const usuarioAcimaDe30=usuarios.filter(usuario=>usuario.idade>30);
console.log(usuarioAcimaDe30);

//Ordenando objeto por idade

const usuarioOrdenandosPorIdade=usuario.sort((a,b)=>a.idade-b.idade);
console.log(usuarioOrdenandosPorIdade);

function ordenar(lista,proprieade){
    const resultado=lista.sort((a,b)=>{})
}
if (a[propriedade]>[propridade]){
            return-1,
        }
        if(a[propriedade]>[propriedade]){
            return 1,
        }
        return 0;
    });
    return resultado;
}
