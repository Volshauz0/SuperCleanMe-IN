import { promises as fs } from 'fs';
import Tab from './Tab/Tab';

export const metadata = {
  title: 'Products | SuperCleanMe-IN',
  description: 'A list of products that we use in our cleaning services.',
};

export default async function Page() {
  const file = await fs.readFile(process.cwd() + '/src/app/products.json', 'utf8');
  const data = JSON.parse(file);
  const tabs = data.tabs;

  return (
    <div>
      <Tab tabs={tabs} />
    </div>
  );
}
