import Image from "next/image";
import Link from "next/link";

export default function Grid({ title, list }: { title: String, list: any[] }) {

  return (
    <div className="uppercase w-full max-w-4xl mx-auto px-4 mb-10">
      <div className="bg-pine-tree p-8">
        <h2 className="mb-5 text-center">{title}</h2>

        <div className="grid grid-cols-3 gap-5">
          {list.map(element => 
          <div key={element.name}>
            <div className="relative w-full pb-full" style={{backgroundColor: element.background}}>
              {/* <Link href={element.url || '/'}> */}
                <Image src={element.logo} alt={element.name + ' logo'} loading="lazy" fill={true} />
              {/* </Link> */}
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  )
}
