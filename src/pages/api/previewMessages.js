import previewMessages from '../../samples/PreviewMessages.json'

export default function handler(req, res) {
  res.status(200).json({ previewMessages: previewMessages })
}
