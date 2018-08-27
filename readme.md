# Lista de Tarefas

Criar um programa de terminal que permite o gerenciamento de uma lista de tarefas. O programa aceita os seguintes comandos:

- inserir
- listar
- fazer
- limpar

## Inserir
Insere uma nova tarefa na lista

`node index.js inserir "Fazer compras"`

```
A tarefa foi inserida com sucesso.
```


## Listar
Lista todas as tarefas na lista e seu status.

`node index.js listar`

```
  1- Fazer compras - pendente
  2- Limpar quarto - feita
  3- Estudar JS - feita
```

## Fazer
Marca uma tarefa como feita

`node index.js fazer "Listar compras"`

```
A tarefa foi marcada como feita.
```

### limpar 
Limpa a lista de tarefas


`node index.js limpar`

```
A lista de tarefas foi excluída.
```