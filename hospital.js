class Fila {
    constructor() {
        this.pacientes = []; //Fila de pacientes
    }

    adicionarPaciente(paciente) { //Adiciona um paciente à fila
        this.pacientes.push(paciente); //Adiciona o paciente no final da fila
        console.log(`📥 ${paciente} adicionado à fila`); //Mostra que o paciente foi adicionado
    }

    proximoPaciente() { //Metodo para mostrar o proximo paciente
        return this.pacientes[0]; //Mostra o primeiro paciente da fila
    }

    removerPaciente() { //Metodo para remover o paciente da fila(atender)
        if(this.estaVazia()) { //Verifica se a fila está vazia
            console.log(`⚠️ A fila está vazia. Nenhum paciente para remover.`); //Caso esteja vazia, mostra mensagem
            return null;
        }

        const removido = this.pacientes.shift(); //Primeiro remove o paciente da fila
        console.log(`🚪 ${removido} saiu da fila.`); //Mostra que o paciente saiu da fila
        return removido; 
    }

    estaVazia() { //Metodo para verificar se a fila está vazia
        return this.pacientes.length === 0; //Verifica se o tamanho da fila é 0
    }

    todosPacientes() { //Metodo para mostrar todos os pacientes da fila
        console.log('🚶‍♂️ Fila atual:', this.pacientes.join(' -> ') || 'vazia'); 
    }
}

class Pilha {
    constructor() {
        this.prontuarios = []; //Pilha dos prontuários
    }

    adicionarProntuario(paciente){ //Adiciona o prontuário do paciente que foi removido da fila
        this.prontuarios.push(paciente); //Adiciona o prontuário no final da pilha
        console.log(`✔️ ${paciente} adicionado ao prontuário`); //Mostra que o prontuário foi adcionado
    }

    todosProntuarios() { //Metodo para mostrar todos os prontuários
        console.log('📋 Prontuários:', this.prontuarios.slice().reverse().join(' <- ') || 'vazia'); //Mostra os prontuários
    }
}

// Cria instâncias de Fila e Pilha
const filaPacientes = new Fila();
const pilhaProntuarios = new Pilha();

console.log('------------------------------------');

//Adiciona os pacientes na fila
const pacientes = ['Marcela', 'Arthur', 'Rogerio', 'Rose', 'Marcelo'];
pacientes.forEach(p => filaPacientes.adicionarPaciente(p));

console.log('------------------------------------');

//Mostra o próximo paciente
console.log(`🔍 Próximo paciente: ${filaPacientes.proximoPaciente()}`);

console.log('------------------------------------');

//Atende os dois primeiros pacientes e adiciona os prontuários deles na pilha
for (let i = 0; i < 2; i++) {
    const atendido = filaPacientes.removerPaciente();
    if(atendido) {
        pilhaProntuarios.adicionarProntuario(atendido);
    }
}

console.log('------------------------------------');

//Mostra a fila de pacientes e os prontuários
filaPacientes.todosPacientes();
pilhaProntuarios.todosProntuarios();

console.log('------------------------------------');

