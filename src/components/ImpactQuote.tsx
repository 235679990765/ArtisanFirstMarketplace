export default function ImpactQuote() {
  return (
    <section className="py-16 bg-gradient-to-b from-emerald-900 to-teal-900">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mb-8">
            <div className="bg-emerald-900 rounded-full p-1">
              <div className="text-5xl">"</div>
            </div>
          </div>
          
          <blockquote className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl lg:text-4xl text-white font-light leading-relaxed mb-8">
              This platform is not just a marketplace — it is a livelihood bridge 
              between tradition and opportunity, where every craft sold sustains 
              a family and preserves a cultural legacy.
            </p>
            
            <footer className="text-emerald-200">
              <p className="text-lg font-medium">
                — The ArtisanMarket Vision
              </p>
              <p className="text-sm mt-2">
                Empowering artisans, preserving heritage, building communities
              </p>
            </footer>
          </blockquote>
          
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-emerald-100 font-medium">Fair Trade</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-emerald-100 font-medium">Direct Selling</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-emerald-100 font-medium">Cultural Preservation</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-emerald-100 font-medium">Community Led</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}