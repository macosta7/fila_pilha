class Fila {
    constructor() {
        this.alunos = [];
    }

    adicionarAluno(aluno) {
        this.alunos.push(aluno);
        console.log(`📥 ${aluno} adicionado à fila`);
    }

    removerAluno() {
        if(this.estaVazia()) {
            console.log(`⚠️ A fila está vazia. Nenhum aluno para remover.`);
            return null;
        }
        const removido = this.alunos.shift();
        console.log(`🚪 ${removido} saiu da fila.`);
        return removido;
    }

    proximoAluno() {
        return this.alunos[0];
    }

    estaVazia() {
        return this.alunos.length === 0;
    }

    todosAlunos() {
        console.log('🚶‍♂️ Fila atual:', this.alunos.join(' -> ') || 'vazia');
    }
}

// Demonstração

const alunos = new Fila();
alunos.adicionarAluno('Aluno 1');
alunos.adicionarAluno('Aluno 2');
alunos.adicionarAluno('Aluno 3');
alunos.adicionarAluno('Aluno 4');
alunos.adicionarAluno('Aluno 5');
alunos.removerAluno();
console.log(`🔍 Próximo aluno: ${alunos.proximoAluno()}`);
alunos.todosAlunos();


// Pilha

class Pilha {
    constructor() {
        this.documentos = [];
    }

    adicionarDocumento(documento) {
        this.documentos.push(documento);
        console.log(`✔️ ${documento} adicionado à pilha`);
    }

    removerDocumento() {
        if(this.estaVazia()) {
            console.log(`⚠️ A pilha está vazia. Nenhum documento para remover.`);
            return null;
        }
        const removido = this.documentos.pop();
        console.log(`❌ ${removido} removido da pilha.`);
        return removido;
    }

    documentoTopo() {
        return this.documentos[this.documentos.length - 1];
    }

    estaVazia() {
        return this.documentos.length === 0;
    }

    todosDocumentos() {
        console.log('📦 Pilha atual:', this.documentos.slice().reverse().join(' <- topo') || 'vazia');
    }
}

console.log('-----------------------------------------');

// DEMONSTRAÇÃO

const documentos = new Pilha();
documentos.adicionarDocumento('Documento 1');
documentos.adicionarDocumento('Documento 2');
documentos.adicionarDocumento('Documento 3');
documentos.adicionarDocumento('Documento 4');
documentos.adicionarDocumento('Documento 5');
documentos.removerDocumento();
console.log(`🔍 Documento no topo: ${documentos.documentoTopo()}`);
documentos.todosDocumentos();