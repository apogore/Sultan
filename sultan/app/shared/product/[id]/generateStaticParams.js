import fs from 'fs';
import path from 'path';

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'public', 'mini-card', 'product.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return data.map((product) => ({
    id: product.id.toString(),
  }));
}
