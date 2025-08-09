export default function validateUrl(req, res, next) {
    const { originalUrl } = req.body;
    try {
        new URL(originalUrl);
        next();
    } catch (err) {
        return res.status(400).json({ error: 'Invalid URL format' });
    }
}
