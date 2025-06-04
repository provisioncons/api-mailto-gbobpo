export default function handler(req, res) {
  const { assunto, descricao } = req.query;

  const assuntoFormatado = `Assistente XPTO – ${assunto}`;
  const mailto = `mailto:provision@provision.com.br?subject=${encodeURIComponent(assuntoFormatado)}`;

  res.status(200).json({
    link: mailto,
    mensagem: "Clique no botão abaixo para abrir o e-mail com o assunto preenchido. Depois, cole o texto abaixo no corpo da mensagem antes de enviar.",
    descricao: descricao
  });
}



