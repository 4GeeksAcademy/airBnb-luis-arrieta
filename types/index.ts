export interface Host {
  name: string;
  experienceYears: number;
  avatarUrl: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  type: string; // e.g. "Apartamento", "Habitación de hotel compartida"
  location: string; // e.g. "Alicante", "Madrid, España"
  pricePerNight: number;
  totalPrice: number;
  rating: number;
  reviewsCount: number;
  images: string[];
  host: Host;
  amenities: string[];
  coordinates: Coordinates;
  isTravellerChoice?: boolean; // Badge "Recomendación del viajero"
  freeCancellation?: boolean; // Badge "Cancelación gratuita"
}

