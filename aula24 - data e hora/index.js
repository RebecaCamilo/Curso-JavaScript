try {
    //É executado quando não há erros.
} catch (e) {
    //É executado quando há erros.
} finally {
    //É executado semprpe.
}

// try {
//     console.log(varA);
// } catch(err) {
//     console.log('Erro');
//     console.log(err);
// }

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser numbers');
    }
    return x + y;
}

// try {
//     console.log(soma(1, 2));
//     console.log(soma('1', 2));
// } catch(error) {
//     // console.log(error);
//     console.log('Msg de erro amigável');
// }


// try {
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo');

//     try {
//         console.log(b);
//     } catch {
//         console.log('Deu erro');
//     } finally {
//         console.log('Também sou executado');
//     }
// } catch (e) {
//     console.log('Tratando o erro');
// } finally {
//     console.log('FINALLY: Fechei o arquivo');
// }


function retornaHora(data) {
    if(data && !(data instanceof Date)) {
        throw new TypeError('Esperando instancia de Date.');
    }

    if(!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    
    console.log(retornaHora(data));
    console.log(hora);
    retornaHora('x');
} catch(e) {
    // Tratar erro
    console.log(e);
} finally {
    console.log('Tenha um bom dia.')
}


