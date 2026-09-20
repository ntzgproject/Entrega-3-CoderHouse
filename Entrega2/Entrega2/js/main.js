const saldoInicial = 200;
let saldoActual = saldoInicial;
let opcion;
let movimientos = [];

do {
    opcion = parseInt(prompt("Seleccione una opción:\n1. Ingresar dinero\n2. Retirar dinero \n3. Consultar saldo \n4. Ver movimientos \n5 Salir"));

    switch (opcion) {
        case 1:
            let ingreso = parseInt(prompt("Ingrese la cantidad de dinero a ingresar:"));
            if(isNaN(ingreso)){
                alert("Por favor, ingrese un número válido.");
                break;
            } else {
                saldoActual += ingreso;
                alert("Saldo actual: $" + saldoActual);
                movimientos.push("Ingreso: $" + ingreso);
                break;
            }

        case 2:
            let retiro = parseInt(prompt("Ingrese la cantidad de dinero a retirar:"));
            if (isNaN(retiro)) {
                alert("Por favor, ingrese un número válido.");
            } else if (retiro > saldoActual) {
                alert("No tienes suficiente saldo para retirar esa cantidad.");
            } else if (retiro <= 0) {
                alert("La cantidad a retirar debe ser mayor a cero.");

            } else {
                saldoActual -= retiro;
                alert("Saldo actual: $" + saldoActual);
                movimientos.push("Retiro: $" + retiro);
            }
            break;

            case 3:
                alert("Tu saldo actual es de $" + saldoActual);
            break;

            case 4:
                for (let i = 0; i < movimientos.length; i++) {
                    alert("numero de movimiento " + (i + 1) + ": " + movimientos[i]);
                }
            break;

            case 5:
                alert("Gracias por usar nuestro servicio.");
            break;

            default:
            alert("Opción inválida. Por favor, seleccione una opción válida.");
            break;
    }


} while (opcion != 5);

