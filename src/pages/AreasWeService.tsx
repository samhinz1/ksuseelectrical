import { useEffect } from "react";
import { MapPin, Zap, Clock, ThumbsUp, Phone } from "lucide-react";
import CallToAction from "@/components/CallToAction";

interface ServiceAreaProps {
  name: string;
  description: string;
  image?: string;
  suburbs: string[];
}

const ServiceArea = ({ name, description, image, suburbs }: ServiceAreaProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-brand-orange/20 hover:-translate-y-1 h-full flex flex-col">
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-start mb-4">
          <div className="text-brand-orange shrink-0 mr-3 p-2 rounded-lg bg-orange-50">
            <MapPin className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold">{name}</h3>
        </div>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        
        <div className="mt-4">
          <h4 className="font-semibold text-sm mb-2">Suburbs Serviced:</h4>
          <div className="text-xs text-gray-600 max-h-48 overflow-y-auto pr-2 custom-scrollbar bg-gray-50 p-2 rounded border border-gray-100">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-1">
              {suburbs.map((suburb, index) => (
                <div key={index} className="truncate px-1 py-0.5 hover:bg-gray-100 rounded-sm">
                  {suburb}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AreasWeServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceAreas = [
    {
      name: "Gold Coast",
      description: "Providing comprehensive electrical services across the Gold Coast region, from Coolangatta to Ormeau and everywhere in between.",
      image: `${import.meta.env.BASE_URL}lovable-uploads/gc.webp`,
      suburbs: [
        "Arundel", "Ashmore", "Benowa", "Biggera Waters", "Bilinga", "Broadbeach", "Broadbeach Waters", 
        "Burleigh Heads", "Burleigh Waters", "Carrara", "Clear Island Waters", "Coolangatta", "Coombabah", 
        "Coomera", "Currumbin", "Currumbin Waters", "Currumbin Valley", "Elanora", "Gilston", "Helensvale", 
        "Highland Park", "Hope Island", "Jacobs Well", "Labrador", "Main Beach", "Maudsland", "Mermaid Beach", 
        "Mermaid Waters", "Merrimac", "Miami", "Molendinar", "Mudgeeraba", "Nerang", "Ormeau", "Oxenford", 
        "Pacific Pines", "Palm Beach", "Paradise Point", "Parkwood", "Pimpama", "Reedy Creek", "Robina", 
        "Runaway Bay", "Southport", "Surfers Paradise", "Tallai", "Tallebudgera", "Tallebudgera Valley", 
        "Tugun", "Upper Coomera", "Varsity Lakes", "Worongary", "Yatala"
      ]
    },
    {
      name: "Brisbane",
      description: "Servicing all Brisbane suburbs with reliable electrical solutions for residential, commercial, and industrial needs.",
      image: `${import.meta.env.BASE_URL}lovable-uploads/brisbaneriver.webp`,
      suburbs: [
        "Acacia Ridge", "Albion", "Alderley", "Algester", "Annerley", "Anstead", "Archerfield", "Ascot", 
        "Ashgrove", "Aspley", "Auchenflower", "Bald Hills", "Balmoral", "Banyo", "Bardon", "Bellbowrie", 
        "Belmont", "Boondall", "Bowen Hills", "Bracken Ridge", "Bridgeman Downs", "Brighton", "Brookfield", 
        "Bulimba", "Burbank", "Calamvale", "Camp Hill", "Carina", "Carina Heights", "Carindale", "Carole Park", 
        "Carseldine", "Chandler", "Chapel Hill", "Chermside", "Chermside West", "Chuwar", "Clayfield", "Coopers Plains", 
        "Coorparoo", "Corinda", "Darra", "Deagon", "Doolandella", "Drewvale", "Durack", "Dutton Park", "Eagle Farm", 
        "East Brisbane", "Eight Mile Plains", "Ellen Grove", "Enoggera", "Everton Park", "Fairfield", "Ferny Grove", 
        "Fig Tree Pocket", "Fitzgibbon", "Forest Lake", "Fortitude Valley", "Gaythorne", "Geebung", "Gordon Park", 
        "Graceville", "Grange", "Greenslopes", "Gumdale", "Hamilton", "Hawthorne", "Heathwood", "Hemmant", "Hendra", 
        "Herston", "Highgate Hill", "Holland Park", "Holland Park West", "Inala", "Indooroopilly", "Jamboree Heights", 
        "Jindalee", "Kangaroo Point", "Karana Downs", "Kedron", "Kelvin Grove", "Kenmore", "Kenmore Hills", "Keperra", 
        "Kingsford Smith Drive", "Kuraby", "Lota", "Lutwyche", "Macgregor", "Mackenzie", "Manly", "Manly West", 
        "Mansfield", "Middle Park", "Milton", "Mitchelton", "Moggill", "Moorooka", "Morningside", "Mount Coot-tha", 
        "Mount Gravatt", "Mount Gravatt East", "Mount Ommaney", "Murarrie", "Nathan", "New Farm", "Newmarket", 
        "Newstead", "Norman Park", "Northgate", "Nudgee", "Nudgee Beach", "Nundah", "Oxley", "Paddington", "Pallara", 
        "Parkinson", "Petrie Terrace", "Pinjarra Hills", "Pinkenba", "Port of Brisbane", "Pullenvale", "Ransome", 
        "Red Hill", "Richlands", "Riverhills", "Robertson", "Rochedale", "Rocklea", "Runcorn", "Salisbury", "Sandgate", 
        "Seven Hills", "Sherwood", "Shorncliffe", "Seventeen Mile Rocks", "South Brisbane", "Spring Hill", "St Lucia", 
        "Stafford", "Stafford Heights", "Stretton", "Sumner", "Sunnybank", "Sunnybank Hills", "Taigum", "Taringa", 
        "Tarragindi", "Tennyson", "The Gap", "Tingalpa", "Toowong", "Upper Kedron", "Upper Mount Gravatt", "Virginia", 
        "Wacol", "Wakerley", "Wavell Heights", "West End", "Westlake", "Willawong", "Wilston", "Windsor", "Wishart", 
        "Woolloongabba", "Wooloowin", "Wynnum", "Wynnum West", "Yeerongpilly", "Yeronga", "Zillmere"
      ]
    },
    {
      name: "Northern NSW",
      description: "Extending our expert electrical services to Northern NSW regions including Tweed Heads, Byron Bay, and surrounding areas.",
      image: `${import.meta.env.BASE_URL}lovable-uploads/byron.webp`,
      suburbs: [
        "Tweed Heads", "Tweed Heads South", "Tweed Heads West", "Banora Point", "Terranora", "Bilambil Heights", 
        "Bilambil", "Cobaki", "Cobaki Lakes", "Piggabeen", "Carool", "Tumbulgum", "Chinderah", "Fingal Head", 
        "Kingscliff", "Casuarina", "Cudgen", "Duranbah", "Bogangar", "Cabarita Beach", "Hastings Point", "Pottsville", 
        "Mooball", "Crabbes Creek", "Wooyung", "Burringbar", "Uki", "Murwillumbah", "South Murwillumbah", "Condong", 
        "Eungella", "Byangum", "Kynnumboon", "Bray Park", "North Arm", "Stokers Siding", "Dunbible", "Fernvale", 
        "Crystal Creek", "Numinbah", "Tyalgum", "Tyalgum Creek", "Eviron", "Cudgera Creek", "Round Mountain", 
        "Byron Bay", "Suffolk Park", "Broken Head", "Ewingsdale", "Skinners Shoot", "Hayters Hill", "Coopers Shoot", 
        "Bangalow", "Possum Creek", "Coorabell", "Federal", "Nashua", "Eureka", "Clunes", "Bexhill", "Teven", 
        "Tintenbar", "Knockrow", "Newrybar", "Brooklet", "Fernleigh", "Pearces Creek", "McLeans Ridges", "Wollongbar", 
        "Alstonville", "Rous", "Rous Mill", "Tregeagle", "Lynwood", "Richmond Hill", "Ballina", "East Ballina", 
        "West Ballina", "South Ballina", "Cumbalum", "Lennox Head", "Skennars Head", "Patchs Beach", "Coolgardie", 
        "Wardell", "Meerschaum Vale", "Bagotville", "Broadwater", "Rileys Hill", "Woodburn", "Evans Head", 
        "South Evans Head", "Doonbah", "New Italy", "Coraki", "Codrington", "Lismore", "East Lismore", "Lismore Heights", 
        "North Lismore", "South Lismore", "Girards Hill", "Goonellabah", "Chilcotts Grass", "Monaltrie", "Wyrallah"
      ]
    },
    {
      name: "Sunshine Coast",
      description: "Providing quality electrical work throughout the Sunshine Coast, from Caloundra to Noosa and the hinterland areas.",
      image: `${import.meta.env.BASE_URL}lovable-uploads/sunshine.webp`,
      suburbs: [
        "Caloundra", "Golden Beach", "Pelican Waters", "Kings Beach", "Moffat Beach", "Shelly Beach", "Dicky Beach", 
        "Currimundi", "Aroona", "Battery Hill", "Little Mountain", "Meridan Plains", "Bells Creek", "Palmview", 
        "Sippy Downs", "Buderim", "Mountain Creek", "Minyama", "Buddina", "Parrearra", "Warana", "Bokarina", "Wurtulla", 
        "Birtinya", "Kawana", "Kawana Waters", "Alexandra Headland", "Mooloolaba", "Maroochydore", "Cotton Tree", 
        "Kuluin", "Kunda Park", "Forest Glen", "Mons", "Tanawha", "Diddillibah", "Twin Waters", "Pacific Paradise", 
        "Mudjimba", "Marcoola", "Mount Coolum", "Yaroomba", "Coolum Beach", "Point Arkwright", "Peregian Beach", 
        "Peregian Springs", "Marcus Beach", "Castaways Beach", "Sunrise Beach", "Sunshine Beach", "Noosa Heads", 
        "Noosa Junction", "Noosaville", "Noosa Sound", "Tewantin", "Cooroibah", "Tinbeerwah", "Doonan", "Weyba Downs", 
        "Verrierdale", "Eumundi", "Belli Park", "Cooloolabin", "Yandina", "Yandina Creek", "North Arm", "Maroochy River", 
        "Bli Bli", "Rosemount", "Ninderry", "Valdora", "Coolum", "Kenilworth", "Gheerulla", "Cambroon", "Conondale", 
        "Witta", "Maleny", "Balmoral Ridge", "Reesville", "Curramore", "Wootha", "North Maleny", "Montville", "Flaxton", 
        "Mapleton", "Obi Obi", "Kidaman Creek", "Dulong", "Kureelpa", "Hunchy", "Palmwoods", "Chevallum", "Ilkley", 
        "Eudlo", "Diamond Valley", "Mooloolah Valley", "Glenview", "Landsborough", "Mount Mellum", "Peachester", 
        "Crohamhurst", "Booroobin", "Beerwah", "Glass House Mountains", "Beerburrum", "Elimbah", "Coochin Creek", 
        "Bribie Island", "Woorim", "Banksia Beach", "Bellara", "Bongaree", "White Patch", "Welsby", "Bellmere", 
        "Caboolture", "Upper Caboolture", "Morayfield", "Burpengary", "Narangba", "Deception Bay", "North Lakes", 
        "Mango Hill", "Griffin", "Rothwell", "Murrumba Downs", "Kallangur", "Dakabin", "Kurwongbah", "Petrie", 
        "Joyner", "Whiteside", "Lawnton", "Bray Park", "Strathpine", "Brendale", "Warner", "Cashmere", "Eatons Hill", 
        "Albany Creek", "Bridgeman Downs", "Samford", "Samford Valley", "Samford Village", "Camp Mountain", "Yugar", 
        "Draper", "Clear Mountain", "Closeburn", "Jollys Lookout", "Mount Nebo", "Mount Glorious", "Ocean View", 
        "Dayboro", "Mount Pleasant", "Mount Mee", "Woodford", "D'Aguilar", "Bellthorpe", "Wamuran", "Bracalba", 
        "Rocksberg", "Moorina", "King Scrub", "Rush Creek", "Armstrong Creek", "Kobble Creek", "Cedar Creek", 
        "Laceys Creek", "Samsonvale", "Mount Samson", "Highvale", "Wights Mountain", "Ferny Hills", "Bunya", "Arana Hills", 
        "Everton Hills", "Keperra", "Ferny Grove", "Upper Kedron", "Mitchelton", "Enoggera Reservoir", "The Gap"
      ]
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-brand-blue to-brand-green overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Areas We Service</h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              K Skuse Electrical provides expert electrical services across Southeast Queensland and Northern NSW.
            </p>
          </div>
        </div>
                  <div className="absolute inset-0 z-0">
            <img 
              src={`${import.meta.env.BASE_URL}lovable-uploads/wiring.webp`} 
              alt="Map of service areas" 
              className="w-full h-full object-cover"
            />
          </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Where We Work</h2>
            <p className="text-gray-600 max-w-3xl">
              Our team of licensed electricians provides reliable service throughout Southeast Queensland and Northern NSW regions. No matter where you're located, we're ready to deliver quality electrical solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {serviceAreas.map((area, index) => (
              <ServiceArea key={index} {...area} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us For Your Area</h2>
            <p className="text-gray-600 max-w-3xl">
              When you choose K Skuse Electrical, you're getting more than just an electrician – you're getting a local expert who understands your area's specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-14 h-14 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-7 w-7 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quick Response</h3>
              <p className="text-gray-600 text-sm">
                With our team located throughout the region, we can respond quickly to your electrical needs.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-14 h-14 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-7 w-7 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3">Local Expertise</h3>
              <p className="text-gray-600 text-sm">
                We understand the unique electrical requirements of properties in your specific area.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-14 h-14 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="h-7 w-7 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Service</h3>
              <p className="text-gray-600 text-sm">
                No matter which area you're in, you'll receive the same high-quality service and workmanship.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-14 h-14 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-7 w-7 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3">Always Available</h3>
              <p className="text-gray-600 text-sm">
                We're just a phone call away for any electrical service you need in your area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction />
    </div>
  );
};

export default AreasWeServicePage; 