let tarefas = [];

function adicionarTarefa(descricao) {
    if (!descricao) {
        console.log("Erro: A descrição da tarefa não pode estar vazia.");
        return;
    }

    tarefas.push({
        descricao: descricao,
        concluida: false
    });

    console.log("Tarefa adicionada com sucesso!");
}

function listarTarefas() {
    if (tarefas.length === 0) {
        console.log("Nenhuma tarefa cadastrada.");
        return;
    }

    console.log("Tarefas cadastradas:");
    tarefas.forEach((tarefa, index) => {
        console.log(`${index + 1}. ${tarefa.descricao} - Status: ${tarefa.concluida ? "Concluída" : "Não Concluída"}`);
    });
}

function removerTarefa(indice) {
    if (indice < 0 || indice >= tarefas.length) {
        console.log("Erro: Índice inválido.");
        return;
    }

    tarefas.splice(indice, 1);
    console.log("Tarefa removida com sucesso!");
}

function concluirTarefa(indice) {
    if (indice < 0 || indice >= tarefas.length) {
        console.log("Erro: Índice inválido.");
        return;
    }

    tarefas[indice].concluida = true;
    console.log("Tarefa marcada como concluída!");
}

adicionarTarefa("Comprar leite");
adicionarTarefa("Estudar JavaScript");
listarTarefas();
concluirTarefa(1);
listarTarefas();
removerTarefa(0);
listarTarefas();