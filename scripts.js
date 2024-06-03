document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const matricula = document.getElementById('matricula').value;
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const media = (nota1 + nota2) / 2;
    const situacao = media > 5 ? 'Aprovado' : 'Reprovado';

    const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();

    novaLinha.insertCell(0).innerText = nome;
    novaLinha.insertCell(1).innerText = matricula;
    novaLinha.insertCell(2).innerText = nota1.toFixed(1);
    novaLinha.insertCell(3).innerText = nota2.toFixed(1);
    novaLinha.insertCell(4).innerText = media.toFixed(1);
    const situacaoCell = novaLinha.insertCell(5);
    situacaoCell.innerText = situacao;
    situacaoCell.className = media > 5 ? 'approved' : 'rejected';

    document.getElementById('formulario').reset();
});
