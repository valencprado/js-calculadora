// function criaCalc() {
    
//     return {
//         display: document.querySelector('.display'),
//         inicia(){
//             this.clique();
//             this.pressionaEnter();
//         },
//         pressionaEnter() {
//             this.display.addEventListener('keyup', (e) => {
//                 if(e.keyCode === 13) {
//                     this.realizaConta();
//                 }
//             })
//         },
//         realizaConta() {
//             let conta = this.display.value;
//             try{
//                 // função perigosa!! pode trazer falhas de segurança
//                 conta = eval(conta);

//                 if(!conta) {
//                     alert('Conta inválida');
//                     return;
//                 }

//                 this.display.value = String(conta);
//             } catch(e){
//                 alert('Conta inválida');
//                 return;

//             }

//         },
//         clearDisplay() {
//             this.display.value = '';
//         },
//         apagaUm() {
//             this.display.value = this.display.value.slice(0, -1);
//         },
//         clique(){
//             document.addEventListener('click', e => {
//             const el = e.target;
//             if( el.classList.contains('btn-num')) {
//                 this.btnParaDisplay(el.innerText);
//             } 
//             if(el.classList.contains('btn-clear')) {
//                 this.clearDisplay();
//             }
//             if(el.classList.contains('btn-del')) {
//                 this.apagaUm();
//             }
//              if(el.classList.contains('btn-eq')) {
//                 this.realizaConta();
//             }
//             });
//         },
//         btnParaDisplay(valor) {
//             this.display.value += valor;
//         },

//     };
// }
// const calculadora = criaCalc();
// calculadora.inicia();

function Calculadora() {
    this.display = document.querySelector('.display');
    this.inicia = () => {
    this.clique();
    this.pressionaEnter();
}
    this.pressionaEnter = () => {
    this.display.addEventListener('keyup', (e) => {
        if(e.keyCode === 13) {
            this.realizaConta();
        }
})}

    this.realizaConta = () => {
    let conta = this.display.value;
        try{
         // função perigosa!! pode trazer falhas de segurança
            conta = eval(conta);
            if(!conta) {
            alert('Conta inválida');
            return;
        }
        this.display.value = String(conta);
        } catch(e){
         alert('Conta inválida');
         return;
        }
}
    this.clearDisplay = () => {
    this.display.value = '';
}
    this.apagaUm = () => {
    this.display.value = this.display.value.slice(0, -1);
}
    this.clique = () => {
        document.addEventListener('click', e => {
         const el = e.target;
         if( el.classList.contains('btn-num')) {
             this.btnParaDisplay(el.innerText);
         } 
         if(el.classList.contains('btn-clear')) {
             this.clearDisplay();
         }
         if(el.classList.contains('btn-del')) {
             this.apagaUm();
         }
          if(el.classList.contains('btn-eq')) {
             this.realizaConta();
         }
         })
    }
    this.btnParaDisplay = function() {
        this.display.value += valor;
    }
}


const calculadora = new Calculadora();
calculadora.inicia();