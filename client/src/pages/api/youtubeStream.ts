// @ts-ignore
import Youtube from 'youtube-stream-url';

export default async function handler(req:any, res:any) {
 const  {url}  = req.query;
    console.log(url)
 if (!url) {
    return res.status(400).json({ error: 'YouTube URL is required' });
 }

 try {
    const video = await Youtube.getInfo({ url: url.toString() });
    res.status(200).json(video);
   
 } catch (error) {
    res.status(500).json({ error: 'Failed to fetch YouTube stream URL' });
 }
}