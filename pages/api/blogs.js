import * as fs from "fs";

export default function handler(req, res) {
  fs.readdir("Blogs",(err, data)=>{
    res.status(200).json(data);
  })
}
