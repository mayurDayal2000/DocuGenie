interface StepProps {
  number: number;
  title: string;
  description: string;
}

export function Step({ number, title, description }: StepProps) {
  return (
    <div className="flex items-start mb-8">
      <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}
