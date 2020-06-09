import { Application } from 'https://deno.land/x/oak/mod.ts';

import { config } from 'https://deno.land/x/dotenv/mod.ts';

import router from './config/routes.ts';
import notFound from './resources/errors/404.ts';

const env = config();
const app = new Application();

/*Set Evnvironment Host & Port  */
const HOST = env.APP_HOST || 'http://localhost';
const PORT = +env.APP_PORT || 4000;
/*end Environment */

/* we need to tell app to use router (Bring to top )*/
app.use(router.routes());
app.use(notFound);

console.log(`Server is started at ${HOST}:${PORT}`);
/*change this to dynamix port and host*/

// await app.listen({ port: 4000 });
await app.listen({ port: PORT });
