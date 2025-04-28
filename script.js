document.getElementById('reveal-btn').addEventListener('click', function() {
    const secretCode = document.getElementById('secret-code').value;
    
    if (secretCode === 'pituchinha') {
      // Se o código estiver correto, mostra a mensagem
      document.getElementById('message').classList.remove('hidden');
    } else {
      alert("Ops, esse não é o código certo! Tente novamente!");
    }
  });
  