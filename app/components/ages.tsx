export default function Ages() {
  return (
    <div className="p-4">
      <h2 className="text-2xl text-center">My Real Ages Are</h2>
      <div className="grid grid-cols-2 gap-4 p-2">
        <p className="text-right">My earth age is:</p>
        <p className="text-left">years, months, days</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <p className="text-right">My heaven age is:</p>
        <p className="text-left">hours, minutes, seconds</p>
      </div>
    </div>
  );
}
