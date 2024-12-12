import { generateStaticParams } from "./genParams";
import ProductPage from "./ProductPage";
import fs from 'fs';
import path from 'path';

export { generateStaticParams };

export default async function Page({ params }) {
  const { id } = params;
  const filePath = path.join(process.cwd(), 'public', 'mini-card', 'product.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const productData = data.find((item) => item.id === parseInt(id));

  return <ProductPage productData={productData} />;
}
