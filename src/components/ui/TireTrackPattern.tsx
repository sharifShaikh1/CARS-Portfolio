const TireTrackPattern = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-16 opacity-10">
      <div
        className="w-full h-full"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #000000 0, #000000 1px, transparent 1px, transparent 5px)",
        }}
      />
    </div>
  );
};

export default TireTrackPattern;
