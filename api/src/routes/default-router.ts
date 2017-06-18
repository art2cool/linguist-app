import {Request, Response} from 'express';
import {createReadStream} from 'fs';
import {join} from 'path';

export default (req: Request, res: Response) => {
  let fileStream = createReadStream(join(process.cwd(), 'api/src/public', 'index.html'))

  fileStream.pipe(res)
            .on('data', data => res.write(data))
            .on('end', () => res.end())

}
