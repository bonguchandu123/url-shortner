import shortid from 'shortid';
import Url from '../models/Url.js';
import dotenv from 'dotenv';

dotenv.config();

export const shortenUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;

    const shortCode = shortid.generate();
    const newUrl = await Url.create({ originalUrl, shortCode });
    if (!newUrl) return res.status(500).json({ error: 'Failed to create short URL' });

    if (!process.env.BASE_URL) {
      return res.status(500).json({ error: 'BASE_URL is not defined in environment variables' });
    }

    
    res.json({ 
      shortUrl: `${process.env.BASE_URL}/${shortCode}`, 
      shortCode 
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const redirectUrl = async (req, res) => {
  try {
    const { shortcode } = req.params;
    const url = await Url.findOne({ shortCode: shortcode });

    if (!url) return res.status(404).json({ error: 'Short URL not found' });

    url.visitCount = (url.visitCount || 0) + 1;
    await url.save();

    res.redirect(url.originalUrl);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};


export const listUrls = async (req, res) => {
  try {
    const urls = await Url.find({}, 'originalUrl shortCode visitCount').sort({ createdAt: -1 });

    const formattedUrls = urls.map(url => ({
      _id: url._id,
      originalUrl: url.originalUrl,
      shortCode: url.shortCode,
      visits: url.visitCount,
      shortUrl: `${process.env.BASE_URL}/${url.shortCode}`
    }));

    res.json(formattedUrls);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};


export const deleteUrlById = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Url.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'URL not found' });
    return res.json({ message: 'Deleted successfully' });
  } catch (err) {
    console.error('Error deleting URL:', err);
    return res.status(500).json({ message: 'Server error' });
  }
};