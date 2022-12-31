import FigmaIcon from 'public/svg/figma.svg';
import NextIcon from 'public/svg/next.svg';
import NodeIcon from 'public/svg/node.svg';
import RailsIcon from 'public/svg/rails.svg';
import ReactIcon from 'public/svg/react.svg';
import ShopifyIcon from 'public/svg/shopify.svg';

export default function Technologies() {

  return (
    <>
      <div className="flex justify-center mb-8">
        <ShopifyIcon className="h-auto max-w-full w-60" />
      </div>
      <div className="flex justify-between items-center mb-8">
        <NextIcon className="h-auto max-w-full w-40" />
        <ReactIcon className="h-auto max-w-full w-48" />
      </div>
      <div className="flex justify-between items-center mb-12">
        <NodeIcon className="h-auto max-w-full w-52" />
        <RailsIcon className="h-auto max-w-full w-44" />
      </div>
      <div className="flex justify-center">
        <FigmaIcon className="h-auto max-w-full w-48" />
      </div>
    </>
  )
}
