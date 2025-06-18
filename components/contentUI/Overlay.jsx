const Overlay = ({ opacity }) => {
  return (
    <span
      id="blackOverlay"
      className={`w-full h-full absolute bg-black/${opacity}`}
    />
  );
};

export default Overlay;
