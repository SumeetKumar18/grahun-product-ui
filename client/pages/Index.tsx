import React, { useState, useEffect, useRef } from 'react';
import { Heart, Plus, Mic, RotateCcw, Maximize, RefreshCw, Camera, Info } from 'lucide-react';

const Index = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [leftScrollPosition, setLeftScrollPosition] = useState(0);
  const [rightScrollPosition, setRightScrollPosition] = useState(0);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);

  // Joint scrolling behavior
  const handleScroll = (source: 'left' | 'right', scrollTop: number) => {
    if (source === 'left' && rightColumnRef.current) {
      rightColumnRef.current.scrollTop = scrollTop;
      setRightScrollPosition(scrollTop);
    } else if (source === 'right' && leftColumnRef.current) {
      leftColumnRef.current.scrollTop = scrollTop;
      setLeftScrollPosition(scrollTop);
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const UserQuerySection = () => (
    <div className="space-y-8 animate-fade-in">
      <div>
        <p className="text-grahun-white-40 text-lg mb-5">You came in looking for...</p>
        <div className="relative border-2 border-grahun-white-70 bg-grahun-white-20 rounded-2xl p-6 backdrop-blur-sm">
          <div className="absolute bottom-4 left-4">
            <button className="p-3 hover:bg-grahun-white-20 rounded-lg transition-colors">
              <Plus className="w-6 h-6 text-gray-400" />
            </button>
          </div>
          <div className="absolute bottom-4 right-4">
            <button className="p-3 hover:bg-grahun-white-20 rounded-lg transition-colors">
              <Mic className="w-6 h-6 text-gray-400" />
            </button>
          </div>
          <p className="text-white text-lg leading-relaxed pr-16 pb-16">
            I'm looking for a ring that feels{' '}
            <span className="font-bold text-grahun-pink">refined</span>{' '}
            but still a bit bold. Something that's{' '}
            <span className="font-bold text-grahun-coral">durable</span>{' '}
            enough for daily wear, I don't want to worry about scratches or tarnish. I really like the idea of{' '}
            <span className="font-bold text-grahun-coral">stacking</span>{' '}
            rings or a design that feels layered or modular. Oh, and I prefer{' '}
            <span className="font-bold text-grahun-yellow">sterling silver</span>{' '}
            over gold, it just matches my vibe better.
          </p>
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex justify-between gap-4">
          <button className="px-4 py-3 bg-grahun-white-20 rounded-xl text-white text-lg font-light hover:bg-grahun-white-30 transition-colors">
            Perfect Fit
          </button>
          <button className="px-4 py-3 bg-grahun-yellow rounded-xl text-black text-lg font-light hover:bg-yellow-400 transition-colors">
            Decent Fit
          </button>
          <button className="px-4 py-3 bg-grahun-white-20 rounded-xl text-white text-lg font-light hover:bg-grahun-white-30 transition-colors">
            Low Fit
          </button>
        </div>
      </div>

      <div className="space-y-5">
        <p className="text-grahun-white-40 text-lg">Why this is the one for you</p>
        <div className="space-y-5">
          {[
            { icon: '💎', text: 'Crafted in premium sterling silver — a timeless, tarnish-resistant choice that aligns with your material preference.' },
            { icon: '💪', text: 'Built to last — its durable construction means you can wear it daily without worrying about scratches or wear.' },
            { icon: '✨', text: 'Designed for expression — the modular format allows for stacking, so you can mix and match to reflect your mood or outfit.' },
            { icon: '📈', text: 'Elegantly refined — minimal yet bold, the clean lines and polished finish add a sophisticated touch to any look.' }
          ].map((item, index) => (
            <div key={index} className="flex gap-3 items-start">
              <div className="text-2xl">{item.icon}</div>
              <p className="text-white text-lg leading-relaxed font-light lowercase">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ProductViewer3D = () => (
    <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-grahun-dark' : 'h-full'}`}>
      <div className="flex flex-col h-full">
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-full max-w-lg aspect-square">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/79e899e6a64cc1d3cf3f16ddc85a962385344142?width=1320"
              alt="Six piece band ring"
              className="w-full h-full object-contain animate-scale-in"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-grahun-dark/20 pointer-events-none" />
          </div>
          {isFullscreen && (
            <button
              onClick={toggleFullscreen}
              className="absolute top-8 right-8 p-3 bg-grahun-white-20 rounded-lg hover:bg-grahun-white-30 transition-colors"
              aria-label="Exit fullscreen"
            >
              <span className="text-white text-xl">✕</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );

  const ProductDetails = () => (
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-4">
        <p className="text-white text-lg uppercase tracking-wide">STOLENGIRLFRIENDCLUB</p>
        <h1 className="text-white text-4xl font-bold leading-tight">Six piece band ring</h1>
        <div className="flex items-center justify-between">
          <p className="text-grahun-white-50 text-xl uppercase">Reviews</p>
          <div className="flex gap-1">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-4 h-4 text-grahun-yellow fill-current">⭐</div>
            ))}
            <div className="w-4 h-4 text-grahun-white-20 fill-current">⭐</div>
          </div>
        </div>
      </div>

      <div className="p-6 border border-grahun-white-20 rounded-2xl bg-grahun-white-20/50 backdrop-blur-sm">
        <p className="text-white text-xl leading-relaxed">
          This six piece band ring delivers the{' '}
          <span className="text-grahun-yellow">sterling silver</span>{' '}
          quality you're looking for, ensuring a{' '}
          <span className="text-grahun-coral">durable</span>{' '}
          piece that will stand the test of time. Its design allows for elegant stacking options, and the overall look is decidedly{' '}
          <span className="text-grahun-pink">refined</span>.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <p className="text-grahun-white-50 text-xl uppercase">Additional Information</p>
          <div className="text-white text-xl leading-relaxed">
            <p>DIMENSIONS</p>
            <p>6.5 inches x 8 mm</p>
            <p>WEIGHT</p>
            <p>0.75 lbs</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-grahun-white-50 text-xl uppercase">Price</p>
          <p className="text-white text-xl font-medium">$ 23.99 USD</p>
        </div>

        <div className="flex items-center gap-1">
          <Info className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );

  const BottomControlBar = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-grahun-dark/90 backdrop-blur-lg border-t border-grahun-white-20 p-8 z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-4 px-6 py-3 bg-grahun-yellow rounded-xl text-black text-xl font-medium hover:bg-yellow-400 transition-colors">
            <RotateCcw className="w-8 h-8" />
            Rematch
          </button>
        </div>

        <div className="flex items-center gap-5">
          <button 
            onClick={toggleFullscreen}
            className="p-4 bg-grahun-white-20 rounded-full hover:bg-grahun-white-30 transition-colors"
            aria-label="Toggle fullscreen"
          >
            <Maximize className="w-6 h-6 text-white" />
          </button>
          <button className="p-4 bg-grahun-white-20 rounded-full hover:bg-grahun-white-30 transition-colors">
            <RefreshCw className="w-6 h-6 text-white" />
          </button>
          <button className="p-4 bg-grahun-white-20 rounded-full hover:bg-grahun-white-30 transition-colors">
            <Camera className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="flex items-center gap-5">
          <button className="px-16 py-5 bg-grahun-yellow rounded-xl text-black text-xl uppercase hover:bg-yellow-400 transition-colors">
            Add to cart
          </button>
          <button className="p-4 hover:bg-grahun-white-20 rounded-lg transition-colors">
            <Heart className="w-8 h-8 text-grahun-white-50" />
          </button>
        </div>
      </div>
    </div>
  );

  const Header = () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-grahun-dark/90 backdrop-blur-lg border-b border-grahun-white-20">
      <div className="max-w-7xl mx-auto px-8 py-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-r from-grahun-purple to-grahun-pink rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">G</span>
          </div>
          <h1 className="text-white text-3xl font-bold">Grahun</h1>
        </div>
        <button className="w-11 h-11 bg-black border border-white rounded-full flex items-center justify-center hover:bg-grahun-white-10 transition-colors">
          <div className="w-8 h-8 bg-grahun-purple rounded-full flex items-center justify-center transform rotate-45">
            <span className="text-white transform -rotate-45">🌙</span>
          </div>
        </button>
      </div>
    </header>
  );

  return (
    <div className="min-h-screen grahun-bg text-white font-nunito">
      <Header />
      
      <main className="pt-32 pb-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-screen max-h-[calc(100vh-8rem)]">
            {/* Left Column - Scrollable */}
            <div 
              ref={leftColumnRef}
              className="lg:col-span-3 joint-scroll pr-4"
              onScroll={(e) => handleScroll('left', e.currentTarget.scrollTop)}
            >
              <div className="pb-8">
                <UserQuerySection />
              </div>
            </div>

            {/* Center Column - Fixed */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
              <ProductViewer3D />
            </div>

            {/* Right Column - Scrollable */}
            <div 
              ref={rightColumnRef}
              className="lg:col-span-3 joint-scroll pl-4"
              onScroll={(e) => handleScroll('right', e.currentTarget.scrollTop)}
            >
              <div className="pb-8">
                <ProductDetails />
              </div>
            </div>
          </div>
        </div>
      </main>

      <BottomControlBar />
    </div>
  );
};

export default Index;
