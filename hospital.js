class Fila {
    constructor() {
        this.pacientes = [];
    }

    adicionarPaciente(paciente) {
        this.pacientes.push(paciente);
        console.log(`📥 ${paciente} adicionado à fila`);
    }

    proximoPaciente() {
        return this.pacientes[0];
    }

    removerPaciente() {
        if(this.estaVazia()) {
            console.log(`⚠️ A fila está vazia. Nenhum paciente para remover.`);
            return null;
        }

        const removido = this.pacientes.shift();
        console.log(`🚪 ${removido} saiu da fila.`);
        return removido;
    }

    estaVazia() {
        return this.pacientes.length === 0;
    }

    todosPacientes() {
        console.log('🚶‍♂️ Fila atual:', this.pacientes.join(' -> ') || 'vazia');
    }
}

class Pilha {
    constructor() {
        this.prontuarios = [];
    }

    adicionarProntuario(paciente){
        this.prontuarios.push(paciente);
        console.log(`✔️ ${paciente} adicionado ao prontuário`);
    }

    todosProntuarios() {
        console.log('📋 Prontuários:', this.prontuarios.slice().reverse().join(' <- ') || 'vazia');
    }
}

// DEMONSTRAÇÃO

const filaPacientes = new Fila();
const pilhaProntuarios = new Pilha();

console.log('------------------------------------');

const pacientes = ['Marcela', 'Arthur', 'Rogerio', 'Rose', 'Marcelo'];
pacientes.forEach(p => filaPacientes.adicionarPaciente(p));

console.log('------------------------------------');

console.log(`🔍 Próximo paciente: ${filaPacientes.proximoPaciente()}`);

console.log('------------------------------------');

for (let i = 0; i < 2; i++) {
    const atendido = filaPacientes.removerPaciente();
    if(atendido) {
        pilhaProntuarios.adicionarProntuario(atendido);
    }
}

console.log('------------------------------------');

filaPacientes.todosPacientes();
pilhaProntuarios.todosProntuarios();

console.log('------------------------------------');

