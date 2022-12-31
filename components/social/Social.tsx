import social from 'data/social';
import Link from 'next/link';

export default function Social() {

  return (
    <div className="flex gap-5 mb-8 justify-center md:justify-start">
      {social.map(platform =>
        <Link href={platform.url} key={platform.name} target="_blank">
          <div className="rounded-full bg-pine-tree w-8 h-8">
            {platform.icon}
          </div>
        </Link>
      )}
    </div>
  )
}
