import { FC, useContext, useState } from 'react'
import Image from 'next/image';
import { cn } from '@/utils/merge';
import Link from 'next/link';
import MenuContext from '@/context/MenuContext';

const Products: FC = () => {
  const useMenu = useContext(MenuContext)
  const [bgWall, setBgWall] = useState<string>("bg-classic-blue");
  return (
    <div id="products" className="w-full flex flex-col pb-5 bg text-black bg-product">
      <div className="relative w-full h-[100vh]">
        <Image src="https://res.cloudinary.com/dhu6ayhdj/image/upload/f_auto,q_auto/v1/pallete/rdmqwvatv5fn1sqvvcdm" 
          width={8192} height={5464} alt="photo by curtis adam"
          className="absolute w-full h-full object-cover object-right" />
        <div className="absolute text-3xl md:text-6xl font-bold top-16 left-1/2 translate-x-[-50%]">
          Products & Services
        </div>
        <Link href={"/#paints"}
          className={cn("absolute top-[40%] right-[55%] md:right-[25%] bg-gray-500 bg-opacity-30", 
          "p-3 md:p-5 text-lg font-bold rounded-xl text-gray-30")}>
          Paints
        </Link>
        <Link href={"/#ceramics"}
          className={cn("absolute top-[50%] right-[5%] md:right-[5%] bg-gray-500 bg-opacity-30", 
          "p-3 md:p-5 text-lg font-bold rounded-xl")}>
          Ceramics
        </Link>
        <Link href={"/#granites"}
          className={cn("absolute top-[65%] right-[55%] md:right-[25%] bg-gray-500 bg-opacity-30", 
          "p-3 md:p-5 text-lg font-bold rounded-xl")}>
          Granites
        </Link>
      </div>
      <div className="w-full flex flex-col min-h-[100vh] relative">
        <div id="paints" className="w-full flex flex-col min-h-[100vh]">
            <div className="w-full flex h-5 md:h-8">
              <div className="w-[30%] text-center text-black md:w-[15%] text-lg md:text-2xl h-full 
                border-t border-r border-gray-500 rounded-t-xl bg-product font-bold">
                Paints
              </div>
              <div className="w-[70%] md:w-[85%] h-full border-b border-b-gray-500"></div>
            </div>
            <div className="w-full flex flex-col md:flex-col-reverse px-3 pt-2 md:pt-7">
              <div className="w-full grid grid-cols-5 md:grid-cols-8 gap-5 text-center justify-center mt-5 mb-2 md:mb-0">
                <div onClick={()=>setBgWall("bg-classic-blue")} className="flex flex-col gap-1 items-center"><div className="bg-classic-blue rounded-full w-7 h-7"></div><div className="text-sm">Classic Blue</div></div>
                <div onClick={()=>setBgWall("bg-ultimate-gray")} className="flex flex-col gap-1 items-center"><div className="bg-ultimate-gray rounded-full w-7 h-7"></div><div className="text-sm">Ultimate Gray</div></div>
                <div onClick={()=>setBgWall("bg-illuminating-yellow")} className="flex flex-col gap-1 items-center"><div className="bg-illuminating-yellow rounded-full w-7 h-7"></div><div className="text-sm">Illuminating Yellow</div></div>
                <div onClick={()=>setBgWall("bg-burnt-coral")} className="flex flex-col gap-1 items-center"><div className="bg-burnt-coral rounded-full w-7 h-7"></div><div className="text-sm">Burnt Coral</div></div>
                <div onClick={()=>setBgWall("bg-mint-green")} className="flex flex-col gap-1 items-center"><div className="bg-mint-green rounded-full w-7 h-7"></div><div className="text-sm">Mint Green</div></div>
                <div onClick={()=>setBgWall("bg-cerulean")} className="flex flex-col gap-1 items-center"><div className="bg-cerulean rounded-full w-7 h-7"></div><div className="text-sm">Cerulean</div></div>
                <div onClick={()=>setBgWall("bg-raspberry-sorbet")} className="flex flex-col gap-1 items-center"><div className="bg-raspberry-sorbet rounded-full w-7 h-7"></div><div className="text-sm">Raspberry Sorbet</div></div>
                <div onClick={()=>setBgWall("bg-french-blue")} className="flex flex-col gap-1 items-center"><div className="bg-french-blue rounded-full w-7 h-7"></div><div className="text-sm">French Blue</div></div>
                <div onClick={()=>setBgWall("bg-green-ash")} className="flex flex-col gap-1 items-center"><div className="bg-green-ash rounded-full w-7 h-7"></div><div className="text-sm">Green Ash</div></div>
                <div onClick={()=>setBgWall("bg-amethyst-orchid")} className="flex flex-col gap-1 items-center"><div className="bg-amethyst-orchid rounded-full w-7 h-7"></div><div className="text-sm">Amethyst Orchid</div></div>
                <div onClick={()=>setBgWall("bg-marigold")} className="flex flex-col gap-1 items-center"><div className="bg-marigold rounded-full w-7 h-7"></div><div className="text-sm">Marigold</div></div>
                <div onClick={()=>setBgWall("bg-sky-blue")} className="flex flex-col gap-1 items-center"><div className="bg-sky-blue rounded-full w-7 h-7"></div><div className="text-sm">Sky Blue</div></div>
                <div onClick={()=>setBgWall("bg-lavender")} className="flex flex-col gap-1 items-center"><div className="bg-lavender rounded-full w-7 h-7"></div><div className="text-sm">Lavender</div></div>
                <div onClick={()=>setBgWall("bg-sand-dollar")} className="flex flex-col gap-1 items-center"><div className="bg-sand-dollar rounded-full w-7 h-7"></div><div className="text-sm">Sand Dollar</div></div>
                <div onClick={()=>setBgWall("bg-rose-quartz")} className="flex flex-col gap-1 items-center"><div className="bg-rose-quartz rounded-full w-7 h-7"></div><div className="text-sm">Rose Quartz</div></div>
              </div>
              <div className="w-full flex flex-col md:flex-row px-5 gap-5">
                <div className="w-full md:w-[55%] h-auto flex">
                  <div className={cn("w-full h-auto flex justify-end rounded-xl", 
                      bgWall)}>
                    <Image src="https://res.cloudinary.com/dhu6ayhdj/image/upload/f_auto,q_auto/v1/pallete/rwlrd6qcbp0zazvhn2dn" 
                      width={2022} height={1349} alt="photo by cats coming"
                      className="w-full h-auto object-cover" />
                  </div>
                </div>
                <div className="w-full md:w-[45%] flex flex-col gap-3 mb-2 md:mb-0">
                  <div>
                    <div className="text-black text-medium font-medium">Interior Paints (per gallon)</div>
                  </div>
                  <div>
                    <div className="text-black text-sm">Standard: $25 - $35</div>
                    <div className="text-black text-sm">Premium: $40 - $50</div>
                    <div className="text-black text-sm">Special Finishes (e.g., Metallic, Chalkboard): $55 - $65</div>
                  </div>
                  <div>
                    <div className="text-black text-medium font-medium">Exterior Paints (per gallon):</div>
                  </div>
                  <div>
                    <div className="text-black text-sm">Standard: $30 - $40.</div>
                    <div className="text-black text-sm">Premium: $45 - $60.</div>
                    <div className="text-black text-sm">Weather-resistant & UV-resistant Finishes: $65 - $80.</div>
                  </div>
                  <div>
                    <div className="text-black text-medium font-medium">Home Makeover Bundle (for residential customers):</div>
                  </div>
                  <div>
                    <div className="text-black text-sm">Includes: 10 gallons of interior paint, 5 gallons of exterior paint.</div>
                    <div className="text-black text-sm">Price: $375 - $500 (depending on the finishes).</div>
                    <div className="text-black text-sm">Bonus: Free color consultation and 10% off ceramic tiles.</div>
                  </div>
                  <div>
                    <div className="text-black text-medium font-medium">Commercial Package (for offices/stores):</div>
                  </div>
                  <div>
                    <div className="text-black text-sm">Includes: 20 gallons of paint (interior and exterior mix).</div>
                    <div className="text-black text-sm">Price: $800 - $1000.</div>
                    <div className="text-black text-sm">Bonus: Free custom color matching and free sample paint.</div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div id="ceramics" className="w-full flex flex-col min-h-[100vh]">
          <div className="w-full flex h-6 md:h-8">
            <div className="w-[30%] md:w-[15%] h-full border-b border-b-gray-500 bg-transparent"></div>
            <div className="w-[30%] text-center text-black md:w-[15%] text-lg md:text-2xl h-full 
              border-t border-r border-gray-500 rounded-t-xl bg-product font-bold">
              Ceramics
            </div>
            <div className="w-[40%] md:w-[70%] h-full border-b border-b-gray-500 bg-transparent"></div>
          </div>
          <div className="w-full min-h-[100vh] flex flex-col md:flex-row px-3 pt-7 bg-product">
            <div className="w-full md:w-1/2 min-h-[30rem] relative">
              <div className="absolute top-2 left-[30%] z-20">
                <div className="w-52 h-52">
                  <Image src="https://res.cloudinary.com/dhu6ayhdj/image/upload/f_auto,q_auto/v1/pallete/vr2rjvw7dwfmficbzyp6"
                    width={4480} height={6720} alt="by enginakyurt"
                    className="w-full h-full object-cover rounded-2xl" />
                </div>
              </div>
              <div className="absolute top-44 left-[20%] md:left-[50%] z-10">
                <div className="w-52 h-52">
                  <Image src="https://res.cloudinary.com/dhu6ayhdj/image/upload/f_auto,q_auto/v1/pallete/vnka08ld4izr9wh1lbws"
                    width={6126} height={4084} alt="by cotton bro"
                    className="w-full h-full object-cover rounded-2xl" />
                </div>
              </div>
              <div className="absolute top-80 left-[30%]">
                <div className="w-52 h-52">
                  <Image src="https://res.cloudinary.com/dhu6ayhdj/image/upload/f_auto,q_auto/v1/pallete/u1famdvkd8bcz55yx43c"
                    width={3468} height={4624} alt="by czapp arpad"
                    className="w-full h-full object-cover rounded-2xl" />
                </div>
              </div>
            </div>
            <div className="flex w-full md:w-1/2 h-full justify-center items-center">
              <div className="flex flex-col gap-3 mt-20">
                <div className="text-black">
                  <span className="text-black font-medium">Finishes</span>: Smooth, Glossy, Textured, Matte
                  <br/>
                  <span className="text-black font-medium">Features</span>: Scratch-resistant, heat-resistant, water-resistant
                  <br/>
                  <span className="text-black font-medium">Applications</span>: Kitchens, bathrooms, backsplashes, flooring, wall accents
                  <br/>
                  <span className="text-black font-medium">Custom Mosaics</span>: Personalized mosaic designs with high precision and artistic appeal
                </div>
                <div className="text-xl text-black font-bold mt-5">Ceramic Customization</div>
                <div className="text-black">
                  Endless possibilities for tiling solutions for kitchens, bathrooms, and outdoor areas. 
                  Our ceramics are known for strength, durability, and design versatility.
                </div>
                <div>
                  <div className="text-xl text-black text-medium font-bold mt-5">Ceramic Installation Package:</div>
                </div>
                <div>
                  <div className="text-black text-sm">Includes: Custom ceramic tiles for 500 sq. ft.</div>
                  <div className="text-black text-sm">Price: $5000 - $7500 (depending on material and complexity).</div>
                  <div className="text-black text-sm">Bonus: Free design consultation.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="granites" className="w-full flex flex-col min-h-[100vh]">
          <div className="w-full flex h-6 md:h-8">
            <div className="w-[60%] md:w-[30%] h-full border-b border-b-gray-500 bg-transparent"></div>
            <div className="w-[30%] text-center text-black md:w-[15%] text-lg md:text-2xl h-full 
              border-t border-r border-gray-500 rounded-t-xl bg-product font-bold">
              Granites
            </div>
            <div className="w-[10%] md:w-[55%] h-full border-b border-b-gray-500 bg-transparent"></div>
          </div>
          <div className="w-full min-h-[100vh] flex flex-col-reverse md:flex-row px-5 pt-7 bg-product relative x-10">
            <div className="relative flex w-full md:w-1/2 h-full justify-center items-center mb-5 md:mb-0">
              <div className="flex flex-col gap-3 mt-20">
                <div className="text-black">
                  <span className="text-black font-medium">Finishes</span>: Polished, Honed, Flamed for perfect aesthetic
                  <br/>
                  <span className="text-black font-medium">Features</span>: Heat-resistant, scratch-resistant, stain-resistant
                </div>
                <div className="text-xl text-black font-bold mt-5">Granite Customization</div>
                <div className="text-black">
                  Combining natural elegance with durable craftsmanship, 
                  our granite slabs and tiles are perfect for countertops, floors, and walls.
                </div>
                <div>
                  <div className="text-xl text-black text-medium font-bold mt-5">Granite Installation Package:</div>
                </div>
                <div>
                  <div className="text-black text-sm">Includes: Custom Granite tiles for 500 sq. ft.</div>
                  <div className="text-black text-sm">Price: $5000 - $7500 (depending on material and complexity).</div>
                  <div className="text-black text-sm">Bonus: Free design consultation.</div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 min-h-[50vh]">
              <div className="w-full min-h-[35rem] relative">
                <div className="absolute top-2 left-[30%] z-20">
                  <div className="w-52 h-52">
                    <Image src="https://res.cloudinary.com/dhu6ayhdj/image/upload/f_auto,q_auto/v1/pallete/b0mjfvt2mm3hr85svvwy"
                      width={4480} height={6720} alt="by karolina grabowska"
                      className="w-full h-full object-cover rounded-2xl" />
                  </div>
                </div>
                <div className="absolute top-44 left-[20%] md:left-[50%] z-10">
                  <div className="w-52 h-52">
                    <Image src="https://res.cloudinary.com/dhu6ayhdj/image/upload/f_auto,q_auto/v1/pallete/qkobmt2o7ba8cmm4rgda"
                      width={3024} height={4032} alt="by cisse vandeweyer"
                      className="w-full h-full object-cover rounded-2xl" />
                  </div>
                </div>
                <div className="absolute top-80 left-[30%]">
                  <div className="w-52 h-52">
                    <Image src="https://res.cloudinary.com/dhu6ayhdj/image/upload/f_auto,q_auto/v1/pallete/sqqjsrfqswsly6mgpnw9" 
                      width={5461} height={8192} alt="by gana jp"
                      className="w-full h-full object-cover rounded-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Color Consultation Services */}
      <div className="flex flex-col md:flex-row w-full min-h-[100vh] justify-center">
        <div className="w-full md:w-3/5 h-full">
          <Image src="https://res.cloudinary.com/dhu6ayhdj/image/upload/f_auto,q_auto/v1/pallete/ket89quyvuiaxve9mp1l" 
            width={4480} height={6720} alt="by curtis adams"
            className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-2/5 h-full bg-white flex flex-col justify-center items-center p-10 gap-10">
          <div className="text-xl text-black font-bold">Color Consultation Services</div>
          <div className="text-black">
            Work with our experts to create perfect color solutions for your project, 
            whether it&apos;s a bold accent wall or a granite finish that complements your design.
          </div>
          <Link href={"/contact"} onClick={() => useMenu?.setCurrentMenu(4)}
            className="text-base font-bold mt-20 py-5 px-10 bg-black rounded-xl cursor-pointer">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="flex flex-col w-full h-[100vh] gap-5 justify-center items-center p-10">
        <div className="text-xl text-black font-bold">Why Choose Us?</div>
        <div className="text-black text-left flex flex-col gap-2">
          <div className="text-black"><b className="text-black">Quality Materials:</b> We use the finest materials for long-lasting beauty and durability.</div>
          <div className="text-black"><b className="text-black">Customization:</b> Personalize your space with custom colors, patterns, and finishes.</div>
          <div className="text-black"><b className="text-black">Eco-Friendly Options:</b> Many of our products are environmentally friendly.</div>
          <div className="text-black"><b className="text-black">Expert Team:</b> Our team will guide you through the entire process, ensuring satisfaction.</div>
        </div>
      </div>
    </div>
  )
}

export default Products;