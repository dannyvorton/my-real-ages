export default function Dates() {
  return (
    <div className="p-4">
      <h2 className="text-2xl text-center">Enter Dates For Real Ages</h2>
      <div className="grid grid-cols-2 gap-4 p-2">
        <p className="text-right">Enter birth date:</p>
        <span><input type="date"/></span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <p className="text-right">Enter death or current date:</p>
        <span><input type="date"/></span>
      </div>
    </div>
  );
}
