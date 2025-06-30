
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const vapetoryBranches = [
  {
    name: 'Vapetory Kemangi',
    coordinates: [117.11250468003895, -0.5227019412369015] as [number, number],
  },
  {
    name: 'Vapetory Mas Penghulu',
    coordinates: [117.1521584560005, -0.5118877154842989] as [number, number],
  },
  {
    name: 'Vapetory Loa Janan',
    coordinates: [117.0864121521335, -0.5719665060254386] as [number, number],
  },
  {
    name: 'Vapetory Sambutan Pelita 2',
    coordinates: [117.17029181183219, -0.5033968419904546] as [number, number],
  },
  {
    name: 'Vapetory Anggi',
    coordinates: [117.12126987290354, -0.5014235153037983] as [number, number],
  },
];

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [mapInitialized, setMapInitialized] = useState(false);

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken.trim()) return;

    try {
      mapboxgl.accessToken = mapboxToken.trim();
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [117.14, -0.53], // Center of all branches
        zoom: 11,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      map.current.on('load', () => {
        // Add markers for each branch
        vapetoryBranches.forEach((branch) => {
          // Create custom marker element
          const markerElement = document.createElement('div');
          markerElement.className = 'custom-marker';
          markerElement.innerHTML = `
            <div style="
              background: linear-gradient(135deg, #0EA5E9, #D946EF);
              border-radius: 50%;
              width: 40px;
              height: 40px;
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0 0 15px rgba(14, 165, 233, 0.7);
              cursor: pointer;
              border: 2px solid white;
            ">
              <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
          `;

          // Create popup
          const popup = new mapboxgl.Popup({
            offset: 25,
            className: 'custom-popup'
          }).setHTML(`
            <div style="
              background: linear-gradient(135deg, #000, #1a1a1a);
              color: white;
              padding: 12px;
              border-radius: 8px;
              border: 1px solid #0EA5E9;
              box-shadow: 0 0 10px rgba(14, 165, 233, 0.5);
            ">
              <h3 style="margin: 0 0 8px 0; color: #0EA5E9; font-weight: bold;">${branch.name}</h3>
              <p style="margin: 0; font-size: 14px;">Premium Vaping Experience</p>
            </div>
          `);

          // Add marker to map
          new mapboxgl.Marker(markerElement)
            .setLngLat(branch.coordinates)
            .setPopup(popup)
            .addTo(map.current!);
        });

        setMapInitialized(true);
      });

    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <section className="section-container" id="locations" data-aos="fade-up">
      <div className="text-center mb-12">
        <h2 className="section-title neon-text">
          Find Your Nearest <span className="neon-text-pink">Vapetory</span>
        </h2>
        <p className="section-subtitle">
          Visit any of our premium locations across the city for expert guidance and quality products
        </p>
      </div>

      {!mapInitialized && (
        <Card className="card-glass mb-8 max-w-md mx-auto" data-aos="fade-up" data-aos-delay="100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-mogency-neon-blue">
              <MapPin className="h-5 w-5" />
              Enter Mapbox Token
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              To display the interactive map, please enter your Mapbox public token. 
              Get yours at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-mogency-neon-blue hover:underline">mapbox.com</a>
            </p>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="pk.eyJ1Ijoi..."
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                className="flex-1"
              />
              <Button 
                onClick={initializeMap}
                disabled={!mapboxToken.trim()}
                className="bg-mogency-neon-blue hover:bg-mogency-neon-blue/80"
              >
                Load Map
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {/* Map Container */}
        <div className="lg:col-span-2" data-aos="fade-right" data-aos-delay="200">
          <div className="relative rounded-xl overflow-hidden neon-border h-96 lg:h-[500px]">
            <div ref={mapContainer} className="absolute inset-0" />
            {!mapInitialized && mapboxToken && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/80">
                <div className="text-center">
                  <div className="animate-spin w-8 h-8 border-2 border-mogency-neon-blue border-t-transparent rounded-full mx-auto mb-4"></div>
                  <p className="text-mogency-neon-blue">Loading map...</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Branch List */}
        <div className="space-y-4" data-aos="fade-left" data-aos-delay="400">
          <h3 className="text-xl font-semibold neon-text-purple mb-4">Our Locations</h3>
          {vapetoryBranches.map((branch, index) => (
            <Card 
              key={index} 
              className="card-glass hover:neon-border-pink transition-all duration-300 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={500 + index * 100}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-mogency-neon-blue to-mogency-neon-pink flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">{branch.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      Premium vaping products & expert consultation
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Map;
