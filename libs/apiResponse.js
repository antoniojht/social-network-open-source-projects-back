import { PassThrough } from 'stream';
import logger from './logger.js';

function send(res, status, body) {
  res.status(status || 200).json(body);
  return Promise.resolve();
}
function sendError(res, status, error) {
  logger.error('API error', error);
  res.status(status || 500).json({ message: error });
  return Promise.resolve();
}
function download(res, { fileData, fileFullname, mimeType }) {
  const fileContents = Buffer.from(fileData, 'base64');

  const readStream = new PassThrough();
  readStream.end(fileContents);

  res.set('Content-disposition', `attachment; filename=${fileFullname}`);
  res.set('Content-Type', mimeType);

  readStream.pipe(res);
  return Promise.resolve();
}
function view(res, { fileData, mimeType }) {
  const fileContents = Buffer.from(fileData, 'base64');

  const readStream = new PassThrough();
  readStream.end(fileContents);

  res.set('Content-Type', mimeType);

  readStream.pipe(res);
  return Promise.resolve();
}


export default {
  send,
  sendError,
  download,
  view,
};
