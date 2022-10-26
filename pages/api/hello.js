// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from "fs";

export default function handler(req, res) {
  const {query} = req.query;
  res.status(200).json({ name: 'John Doe', req:`${query}` })
}
