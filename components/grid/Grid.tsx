import Image from "next/image";
import Link from "next/link";

export default function Grid({ title, list }: { title: String, list: any[] }) {

  return (
    <div className="work-grid">
      <div className="bg-pine-tree p-4 sm:p-8 rounded-lg">
        <h2 className="mb-5 text-center">{title}</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5">
          {list.map(element => 
          <div key={element.name}>
            <div className="relative w-full pb-full rounded-lg" style={{backgroundColor: element.background}}>
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
