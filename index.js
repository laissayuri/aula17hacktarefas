const comando = process.argv[2];

if(comando === 'inserir'){
    console.log('O comando foi inserir');
} else if(comando === 'listar'){
    console.log('O comando foi listar');
} else if(comando === 'fazer'){
    console.log('O comando foi fazer');
} else if(comando === 'limpar'){
    console.log('O comando foi limpar');
} else {
    console.log('Comando inválido.');
}