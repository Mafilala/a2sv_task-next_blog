import {readFile, writeFile} from 'fs/promises';

export default async function handler(req, res) {
  const newData = await req.body;
  
  // Read existing data from data.json
  const data = await readFile('./content/data.json', 'utf8')
  const prevData = JSON.parse(data)
  // Create a new object with user-submitted data

  prevData.push(JSON.parse(newData));

  // Write updated data back to data.json
  await writeFile('./content/data.json', JSON.stringify(prevData))

  res.status(200).json({ message: 'Data updated successfully' });
}