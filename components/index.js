import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  init: async (app) => {
    const components = fs.readdirSync(__dirname)
      .filter((file) => {
        return file.indexOf('.') !== 0 && file !== 'index.js';
      })
      .map(async (file) => {
        const module = await import(path.join(__dirname, `${file}/index.js`));
        return module.default;
      });

      const resolvedComponents = await Promise.all(components);

      resolvedComponents.forEach((component) => {
        component.init(app);
      });
  },
};
