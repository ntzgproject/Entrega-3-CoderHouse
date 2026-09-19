const saldoInicial = 200;
let saldoActual = saldoInicial;
let opcion;
let movimientos = [];
let limite;

const trasferir = (valor, destinatario) => {
    if(valor > saldoActual){
        alert("No tienes suficiente saldo para realizar la transferencia.");
    } else {
        alert("Transferencia realizada con éxito. Transferiste $" + valor + " a " + destinatario);
        saldoActual -= valor;
        alert("Saldo actual: $" + saldoActual);
        movimientos.push("Transferencia a " + destinatario + ": $" + valor);
    }
}

const retirarDinero = (limite, retiro) => {
    if (limite === null) {
        saldoActual -= retiro;
        alert("Saldo actual: $" + saldoActual);
        movimientos.push("Retiro: $" + retiro);
    }else if (retiro > limite) {
        alert("El límite de retiro es de $" + limite);
    }else if (retiro <= limite){ 
        saldoActual -= retiro;
        alert("Saldo actual: $" + saldoActual);
        movimientos.push("Retiro: $" + retiro);
    }
}

const gestionarLimite = (elecion) => {                                            
    if (elecion == 1) {
    let limiteElegido = parseInt(prompt("Ingrese el límite de retiro:"));
        if(isNaN(limiteElegido)){
            alert("Por favor, ingrese un número válido.");
        }else if (limiteElegido <= 0) {
            alert("El límite de retiro debe ser mayor a cero.");
        }else{
        limite = limiteElegido;
        alert("Límite de retiro establecido a $" + limite);
        }
    } else if (elecion == 2) {
        limite = null;
        alert("Límite de retiro eliminado.");
    }
}

const validarMonto = (monto) => {
    if (isNaN(monto) || monto <= 0) {
        return false;
    }

    return true;
}




do {
    opcion = parseInt(prompt(`Seleccione una opción:\n1. Ingresar dinero\n2. Retirar dinero \n3. Transferir dinero\n4. Consultar saldo \n5. Ver movimientos \n6 Gestionar Limite \n7. Salir`));
    
    switch (opcion) {

        //ingresar dinero
        case 1:
            let ingreso = parseInt(prompt("Ingrese la cantidad de dinero a ingresar:"));
            if (!validarMonto(ingreso)) {
                alert("Por favor, ingrese un monto válido.");
            } else {
                saldoActual += ingreso;
                alert("Saldo actual: $" + saldoActual);
                movimientos.push("Ingreso: $" + ingreso);
            }
            break;

        // Retirar dinero
        case 2:
            case 2:
                let retiro = parseInt(prompt("Ingrese la cantidad de dinero a retirar:"));
                if (!validarMonto(retiro)) {
                    alert("La cantidad a retirar es incorrecta.");
                } else if (retiro > saldoActual) {
                    alert("No tienes suficiente saldo para retirar esa cantidad.");
                } else {
                    retirarDinero(limite, retiro);
                }
                break;

        // Transferir dinero
        case 3:
            let transferencia = parseInt(prompt("Ingrese la cantidad de dinero a transferir:"));
            let destinatario = prompt("Ingrese el nombre del destinatario:");
            if (!validarMonto(transferencia)) {
                alert("La cantidad a transferir es incorrecta.");
            } else if (transferencia > saldoActual) {
                alert("No tienes suficiente saldo para transferir esa cantidad.");
            } else {
                trasferir(transferencia, destinatario);
            }
        
            break;
            
        // Consultar saldo
            case 4:
                alert("Tu saldo actual es de $" + saldoActual);
            break;
        
        // Ver movimientos
            case 5:
                for (let i = 0; i < movimientos.length; i++) {
                    alert("numero de movimiento " + (i + 1) + ": " + movimientos[i]);
                }
            break;
        
        // Gestionar Limite
            case 6:
                let elecion = prompt("Deseas poner limite a tus retiros? preciona 1. para gestionarlo. Si deseas eliminarlo preciona 2.");
                if (isNaN(elecion)) {
                    alert("Por favor, ingrese un número válido.");
                }else {
                    gestionarLimite(elecion);
                }
            break;
        
        // Salir
            case 7:
                alert("Gracias por usar nuestro servicio.");
                break;
        
            default:
            alert("Opción inválida. Por favor, seleccione una opción válida.");
            break;
    }

} while (opcion != 7);



