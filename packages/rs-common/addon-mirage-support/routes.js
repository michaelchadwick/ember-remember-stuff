import { getAll } from './get-all';
import { postAll } from './post-all';

export default function (server) {
  const models = [
    { route: 'music/', name: 'song' },
    { route: 'users/', name: 'user' },
  ];

  models.forEach((obj) => {
    server.get(`api/${obj.route}`, getAll);
    server.get(`api/${obj.route}/:id`, obj.name);
    server.patch(`api/${obj.route}/:id`, obj.name);
    server.del(`api/${obj.route}/:id`, obj.name);
    server.post(`api/${obj.route}`, postAll);
  });

  server.post('upload', function () {
    let hash = '';
    const allowedChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < 32; i++) {
      hash += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
    }

    return {
      filename: 'bogus.txt',
      fileHash: hash,
    };
  });
}
