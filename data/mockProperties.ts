import { Property } from "@/types";

export const MOCK_PROPERTIES: Property[] = [
  {
    id: "1",
    title: "Apartamento en Centro Ciudad Alicante",
    description: "Acogedor apartamento de 2 habitaciones en pleno centro de Alicante, a pasos de la playa del Postiguet.",
    type: "Apartamento",
    location: "Alicante, España",
    pricePerNight: 146,
    totalPrice: 292,
    rating: 4.9,
    reviewsCount: 128,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80"
    ],
    host: {
      name: "Maria Ruiz",
      experienceYears: 4,
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    amenities: ["Wifi", "Aire acondicionado", "Cocina", "Lavadora", "TV"],
    coordinates: { lat: 38.3452, lng: -0.4815 },
    isTravellerChoice: true,
    freeCancellation: true
  },
  {
    id: "2",
    title: "Loft moderno cerca del mar",
    description: "Espacioso loft con diseño industrial y vistas al puerto marítimo.",
    type: "Loft",
    location: "Alicante, España",
    pricePerNight: 154,
    totalPrice: 308,
    rating: 5.0,
    reviewsCount: 95,
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
    ],
    host: {
      name: "Carlos Gómez",
      experienceYears: 2,
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    amenities: ["Wifi", "Cocina", "Aparcamiento gratuito", "Admite mascotas"],
    coordinates: { lat: 38.348, lng: -0.485 },
    isTravellerChoice: true,
    freeCancellation: false
  },
  {
    id: "3",
    title: "Hostelfly. Cama en Habitación mixta 10 pax",
    description: "Cama confortable en habitación compartida mixta con desayuno e instalaciones modernas cerca del aeropuerto de Barajas.",
    type: "Habitación de hotel compartida",
    location: "Madrid, España",
    pricePerNight: 30,
    totalPrice: 180,
    rating: 4.7,
    reviewsCount: 920,
    images: [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540518614846-7ede433c5173?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"
    ],
    host: {
      name: "Hostel Barajas",
      experienceYears: 3,
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    amenities: ["Wifi", "Aire acondicionado", "Llegada autónoma", "1 baño o más"],
    coordinates: { lat: 40.4168, lng: -3.7038 },
    isTravellerChoice: true,
    freeCancellation: true
  },
  {
    id: "4",
    title: "Villa con Piscina Privada y Vistas al Mar",
    description: "Espectacular villa de lujo con jardín mediterráneo y piscina infinity.",
    type: "Mansiones",
    location: "Sant Vicent del Raspeig, Alicante",
    pricePerNight: 130,
    totalPrice: 260,
    rating: 5.0,
    reviewsCount: 42,
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80"
    ],
    host: {
      name: "Elena Torres",
      experienceYears: 5,
      avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
    },
    amenities: ["Wifi", "Piscina", "Aparcamiento gratuito", "Aire acondicionado", "Cocina"],
    coordinates: { lat: 38.3965, lng: -0.5255 },
    isTravellerChoice: false,
    freeCancellation: true
  }
];

