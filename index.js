const fs = require('fs');

let comando = process.argv[2];
let entrada = process.argv[3];
let listaTarefas = [];


fs.readFile("tarefas.json", {encoding: "UTF-8"}, function(erro,dados){
    if(!erro){
        listaTarefas = JSON.parse(dados);
    }
    
    if(comando === 'inserir'){
        let tarefa = {
            conteudo: entrada,
            feita: false
    }

    listaTarefas.push(tarefa);

    console.log("Tarefa inserida com sucesso");

    let listaTarefasString = JSON.stringify(listaTarefas);

    fs.writeFile('tarefas.json', listaTarefasString, function(erro){
        console.log(erro);
    });


    } else if(comando === 'listar'){

        for(let i = 0; i <listaTarefas.length; i++){
            let tarefa = listaTarefas[i];
            let status = tarefa.feita ? "feita" : "pendente";
            //é um if: confere a tarefa.feita. Se for true, dá feita. Se for false, dá pendente;
            listaTarefas[i] = `${i+1} - ${tarefa.conteudo} - ${status}`;
        }
        let listaTarefasString = JSON.stringify(listaTarefas);
        console.log(listaTarefasString);
        console.log('O comando foi listar');


    } else if(comando === 'fazer'){
        
        let tarefa;
        for(let i = 0; i<listaTarefas.length; i++){
            tarefa = listaTarefas[i];
            if (tarefa.conteudo === entrada){
                tarefa.feita = true;
            }
        }
        console.log('O comando foi fazer');

        let listaTarefasString = JSON.stringify(listaTarefas);
        fs.writeFile('tarefas.json', listaTarefasString, function(erro){
            console.log(erro);
        });


    } else if(comando === 'limpar'){
        listaTarefas = [];
        console.log('O comando foi limpar');

        let listaTarefasString = JSON.stringify(listaTarefas);
        fs.writeFile('tarefas.json', listaTarefasString, function(erro){
            console.log(erro);
        });
        
    } else {
        console.log('Comando inválido.');
    }



});