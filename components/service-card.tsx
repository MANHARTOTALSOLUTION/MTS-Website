type ServiceCardProps = {
  name: string
  Icon?: any
  accent?: string
  image?: string
  documents?: string[]
  timeline?: string | string[]
  information?: string[]
  fees?: string[]
}

export default function ServiceCard({ name, Icon, accent = "text-[#1E73BE]", image, documents = [], timeline, information = [], fees = [] }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      {image && (
        <div className="mb-4 overflow-hidden rounded-md">
          <img src={image} alt={`${name} image`} className="w-full h-36 object-cover" />
        </div>
      )}
      <div className="flex items-start gap-4 mb-2">
        {Icon && <Icon className={`w-8 h-8 ${accent} flex-shrink-0`} />}
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
      </div>
      {timeline && (
        <p className="text-sm text-gray-600 mb-3">{Array.isArray(timeline) ? timeline.join(" • ") : timeline}</p>
      )}

      {information.length > 0 && (
        <div className="mb-3">
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
            {information.map((info, idx) => (
              <li key={idx}>{info}</li>
            ))}
          </ul>
        </div>
      )}

      {fees.length > 0 && (
        <div className="mb-3">
          <p className="font-semibold text-gray-800">Fees</p>
          <ul className="text-gray-700 text-sm list-disc list-inside mt-1">
            {fees.map((f, idx) => (
              <li key={idx}>{f}</li>
            ))}
          </ul>
        </div>
      )}

      {documents.length > 0 && (
        <div className="mt-4">
          <p className="font-semibold text-gray-800">Required Documents</p>
          <ul className="text-gray-700 text-sm list-disc list-inside mt-1">
            {documents.map((d, idx) => (
              <li key={idx}>{d}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
