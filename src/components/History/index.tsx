import { cn } from '@/utils/merge';
import { FC } from 'react'
import Icon from '@/components/Icon';

interface HistoryProps {
  toggleHistory: () => void;
}

const History: FC<HistoryProps> = ({toggleHistory}) => {
  return (
    <div className={cn(
      "fixed w-full h-[100vh] overflow-hidden flex flex-col justify-center z-50 bg-product")}>
      <div className="relative flex w-full h-[10%] justify-end pr-10">
        <div onClick={toggleHistory} className="mt-5 cursor-pointer"><Icon icon="cross" /></div>
      </div>
      <div className="relative w-full h-[90%] flex flex-col gap-5 px-10 pb-10 overflow-y-auto">
        <p className="text-black text-justify mt-10">
          Founded in 1999, Pallete began with a simple mission: 
          to bring vibrant, high-quality paints to homes and businesses across the region. 
          Our founder, Nadhif Haryadi, saw a need for paint solutions 
          that not only offered a wide range of colors but also prioritized durability, 
          eco-friendliness, and artistic expression. With this vision, Pallete was born.
          Over the years, we expanded our offerings to meet the growing demand for customized, 
          high-quality surfaces. Recognizing the evolving trends in interior and exterior design, 
          we introduced ceramic and granite customization services. 
          This allowed us to offer our clients the ability to not only paint their walls with the perfect shade 
          but also choose premium ceramic and granite surfaces that matched their personal style, creating cohesive, 
          beautiful spaces.
        </p>

        <p className="text-black text-justify">
          Our dedication to quality and customer satisfaction has remained at the core of everything we do. 
          From humble beginnings as a local paint provider, we&apos;ve grown into a trusted name, 
          known for our commitment to innovation and craftsmanship. 
          Today, we continue to push the boundaries of what&apos;s possible, 
          offering color customization that goes beyond paint—transforming walls, 
          floors, and surfaces with creativity and precision.
        </p>

        <div className="text-black">Milestones:</div>
        <div className="flex gap-1">
          <div className="text-black font-medium">1999:</div>
          <div className="text-black">Launch of our flagship paint product line, 
        introducing eco-friendly options for both residential and commercial projects.</div>
        </div>
        <div className="flex gap-1">
          <div className="text-black font-medium">2001:</div>
          <div className="text-black">Expanded into ceramic and granite surface customization, 
        allowing clients to select unique textures and colors.</div>
        </div>
        <div className="flex gap-1">
          <div className="text-black font-medium">2002:</div>
          <div className="text-black">
            Opening of our first color studio, where customers can experiment with paints, 
          ceramics, and granite finishes. </div>
        </div>
        <div className="flex gap-1">
          <div className="text-black font-medium">2003:</div>
          <div className="text-black">Launched virtual design consultations, offering customers the opportunity to 
        work with our team remotely to design their dream spaces.</div>
        </div>
        <p className="text-black text-justify">
          Our journey has been shaped by our customers&apos; trust and our passion for creativity. 
          Whether it&apos;s a vibrant paint color for a family&apos;s living room or 
          a sleek granite finish for a modern kitchen, 
          Expert Color Solutions continues to elevate everyday spaces with thoughtful design and quality materials.</p>
      </div>
    </div>
  )
}

export default History;