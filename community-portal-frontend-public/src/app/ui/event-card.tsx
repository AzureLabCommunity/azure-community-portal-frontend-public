import Image from "next/image";
export default function EventCard() {
  return (
    <div className="flex flex-col justify-between bg-white w-360 h-400 p-3 shadow-event mx-auto">
      <Image src="/invalid-image.svg" alt="invalid-image.svg" width={360} height={400}/>
      <p className="font-medium text-24">National Forum "AI-the future today"</p>
      <div>
        <div className="flex flex-row justify-between">
        <div className="flex gap-1">
          <Image className="text-16" src="/time-icon.svg" alt="time-icon.svg" width={16} height={16}/>
            <p>JUNE 5, 2024</p>
        </div>
          <a className="text-blue" href="#">More info &gt;</a>
        </div>
       
      </div>
    </div>
  );
}