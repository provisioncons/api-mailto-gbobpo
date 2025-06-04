export default function handler(req, res) {
  const { assunto, descricao } = req.query;

  const mailto = `mailto:provision@provision.com.br?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(descricao)}`;

  res.status(200).json({
    link: mailto,
    message: `Clique no link para enviar sua sugestão: ${mailto}`
  });
}


