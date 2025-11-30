"use client"

interface TechItemProps {
  name: string
  icon: string
}

export default function TechItem({ name, icon }: TechItemProps) {
  return (
    <div
      className="flex flex-col items-center justify-center p-3 rounded-lg border-2 text-center transition-all duration-200 hover:scale-105 hover:shadow-md min-h-[80px]"
      style={{
        backgroundColor: "#FFF4A4",
        borderColor: "#F97A00",
      }}
    >
      <div className="text-xl mb-2">{icon}</div>
      <div className="text-[10px] font-bold leading-tight text-center break-words" style={{ color: "#16610E" }}>
        {name}
      </div>
    </div>
  )
}
