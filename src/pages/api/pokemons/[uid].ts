import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../services/db.json';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { uid }
  } = req;
  res.statusCode = 200;
  res.json(db.pokemon.filter(pokemon => pokemon.num === uid));
};
