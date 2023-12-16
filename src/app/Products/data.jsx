import { promises as fs } from 'fs';
import Image from 'next/image';

export default async function Page() {

  const file = await fs.readFile(process.cwd() + '/src/app/products.json', 'utf8');
  const data = JSON.parse(file);

  console.log(data);

  // const [index, setIndex] = useState(0);
  const tabs = data.tabs;

  return (
    <div>
      <h1>Products</h1>
      {tabs.map((tab, i) => (
        <span
          key={i}
        // className="flex items-center text-[.8rem] md:text-base px-4 py-3 z-[1] hover:bg-black/20 w-full transition-all border-r border-gray/50 lg:border-0 duration-500 ease-in-out"
        // style={{ background: index === i ? "rgb(134 136 136 / 0.3)" : "none" }}
        // onClick={() => {
        //   setIndex(i);
        //   window.scrollTo(0, 0);
        // }}
        >
          {tab.name}
        </span>
      ))}


      {tabs[1].sections.map((section) => (
        <div key={section.title}>
          <h1 className=" font-clash uppercase font-semibold text-4xl py-4 tracking-wider">
            {section.title}
          </h1>
          <p className="md:text-[1.1rem]">
            {section.desc}
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-10 lg:gap-16 w-fit h-fit pt-6 rounded-sm">
            {section.product.map((pdt) => (
              <div
                key={pdt.name}
                className=" shadow-2xl hover:shadow-main_primary/75 transition-all duration-500 ease-in-out">
                <div>
                  <a href={pdt.link} target="_blank">
                    <Image
                      src={pdt.img}
                      alt={pdt.name}
                      width={300}
                      height={300}
                      className="object-contain w-[18rem] h-[18rem] lg:w-[12rem] lg:h-[12rem] bg-white"
                    />
                  </a>
                </div>
                <div className="flex flex-col p-2 bg-white/50 ">
                  <h1 className=" text-black font-chakra font-semibold text-[1.2rem] uppercase">
                    {pdt.name}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
