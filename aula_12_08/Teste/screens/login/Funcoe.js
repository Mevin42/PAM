const usuarios = [];

export function cadastrarUsuario(usuario, senha, confirmarSenha) {
  usuario = usuario.trim();

  if (usuario === '' || senha === '' || confirmarSenha === '') {
    return {
      sucesso: false,
      mensagem: 'Preencha todos os campos.'
    };
  }

  if (senha !== confirmarSenha) {
    return {
      sucesso: false,
      mensagem: 'As senhas não são iguais.'
    };
  }

  const usuarioJaExiste = usuarios.some(
    (item) => item.usuario.toLowerCase() === usuario.toLowerCase()
  );

  if (usuarioJaExiste) {
    return {
      sucesso: false,
      mensagem: 'Esse usuário já está cadastrado.'
    };
  }

  usuarios.push({
    usuario: usuario,
    senha: senha
  });

  return {
    sucesso: true,
    mensagem: 'Usuário cadastrado com sucesso.'
  };
}

export function verificarLogin(usuario, senha) {
  return usuarios.some(
    (item) => item.usuario === usuario && item.senha === senha
  );
}
