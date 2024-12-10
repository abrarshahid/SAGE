"use client"
export default function RetroGrid() {
  // Define the number of rows and columns dynamically based on screen size
  const numHorizontalLines = Math.floor(window.innerHeight / 20); // Adjust spacing here
  const numVerticalLines = Math.floor(window.innerWidth / 50); // Adjust spacing here

  return (
    <div className="absolute inset-0 z-0">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900 to-teal-800" />
      
      {/* Grid lines */}
      <div className="absolute inset-0 opacity-30">
        {/* Horizontal lines */}
        {[...Array(numHorizontalLines)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-px bg-teal-100"
            style={{ top: `${(i / numHorizontalLines) * 100}%` }}
          />
        ))}
        
        {/* Vertical lines */}
        {[...Array(numVerticalLines)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-px bg-teal-100"
            style={{ left: `${(i / numVerticalLines) * 100}%` }}
          />
        ))}
      </div>
    </div>
  );
}
