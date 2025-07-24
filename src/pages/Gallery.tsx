import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-daycare.jpg";
import classroomSensory from "@/assets/classroom-sensory.jpg";
import outdoorPlayground from "@/assets/outdoor-playground.jpg";
import readingCorner from "@/assets/reading-corner.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Gallery images with descriptions
  const images = [
    {
      src: heroImage,
      alt: "Happy children and teachers in our main classroom",
      category: "Classroom Activities"
    },
    {
      src: classroomSensory,
      alt: "Sensory play activities with colorful materials",
      category: "Learning Centers"
    },
    {
      src: outdoorPlayground,
      alt: "Safe outdoor playground for active learning",
      category: "Outdoor Play"
    },
    {
      src: readingCorner,
      alt: "Cozy reading corner during story time",
      category: "Quiet Learning"
    },
    {
      src: heroImage,
      alt: "Art and creativity session in progress",
      category: "Creative Arts"
    },
    {
      src: classroomSensory,
      alt: "Meal time with healthy, nutritious food",
      category: "Meal Time"
    },
    {
      src: outdoorPlayground,
      alt: "Music and movement activities",
      category: "Music & Movement"
    },
    {
      src: readingCorner,
      alt: "Science exploration and discovery",
      category: "STEM Learning"
    },
    {
      src: heroImage,
      alt: "Individual attention and care",
      category: "Personalized Care"
    },
    {
      src: classroomSensory,
      alt: "Group learning and social interaction",
      category: "Social Skills"
    },
    {
      src: outdoorPlayground,
      alt: "Physical development activities",
      category: "Physical Development"
    },
    {
      src: readingCorner,
      alt: "Quiet rest and nap time",
      category: "Rest & Relaxation"
    }
  ];

  const categories = [...new Set(images.map(img => img.category))];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-light/40 to-secondary/60 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Photo Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a glimpse into daily life at Little Sprouts – where learning, laughter, and growth happen every day.
          </p>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Button 
                key={index} 
                variant="secondary" 
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div 
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full mb-2">
                      {image.category}
                    </span>
                    <p className="text-white text-sm font-medium leading-tight">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-full object-contain"
            />

            {/* Image info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm text-white p-4 rounded-lg">
              <span className="inline-block bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full mb-2">
                {images[selectedImage].category}
              </span>
              <p className="text-sm font-medium">
                {images[selectedImage].alt}
              </p>
              <p className="text-xs text-white/70 mt-1">
                Image {selectedImage + 1} of {images.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-light/40 to-secondary/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            See Our Facility in Person
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Photos can only show so much. Schedule a tour to experience the Little Sprouts difference firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="cta">
              Schedule a Tour
            </Button>
            <Button size="xl" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;