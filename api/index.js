export default function handler(req, res) {
  const { assunto, descricao } = req.query;

  const mailto = `mailto:provision@provision.com.br?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(descricao)}`;

  res.writeHead(302, { Location: mailto });
  res.end();
}
