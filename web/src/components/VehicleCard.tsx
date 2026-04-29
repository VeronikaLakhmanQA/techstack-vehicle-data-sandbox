import type { Vehicle } from '../types/vehicle'

export type VehicleCardProps = {
  vehicle: Vehicle
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <article
      data-testid="vehicle-card"
      className="bg-white border border-[#DDE3EA] rounded-xl overflow-hidden shadow-soft-navy-sm flex flex-col"
    >
      <div className="h-48 overflow-hidden relative bg-surface-container">
        <img
          src={vehicle.imageSrc}
          alt={vehicle.imageAlt}
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.12em] border border-neutral-200">
            {vehicle.status}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="min-h-[56px] flex items-start mb-2">
          <h3 className="text-[20px] font-semibold leading-[1.25] text-primary">
            {vehicle.year} {vehicle.make} {vehicle.model}
          </h3>
        </div>

        <div className="flex items-center justify-between mb-4">
          <span
            data-testid="vehicle-price"
            className="text-[20px] font-semibold leading-[1.25] text-[#123A6F]"
          >
            {vehicle.priceText}
          </span>
          <span
            data-testid="vehicle-mileage"
            className="text-[14px] text-on-surface-variant/90"
          >
            {vehicle.mileageText}
          </span>
        </div>

        <div className="bg-slate-50 p-4 rounded-lg mb-6 border border-[#DDE3EA]">
          <label className="text-[11px] font-semibold tracking-[0.12em] text-on-surface-variant/80 block mb-1">
            VIN
          </label>
          <code
            data-testid="vehicle-vin"
            className="font-mono text-[14px] font-medium leading-[1.5] text-primary tracking-[0.12em] select-all"
          >
            {vehicle.vin}
          </code>
        </div>

        <div className="mt-auto flex flex-col gap-2">
          <button
            type="button"
            className="w-full h-11 rounded-lg bg-blue-600 text-white font-semibold shadow-sm hover:bg-blue-700 hover:shadow-md transition-colors"
          >
            View Test Listing
          </button>
          <button
            type="button"
            className="w-full h-11 rounded-lg bg-white border border-[#DDE3EA] text-primary font-semibold hover:bg-slate-50 transition-colors"
          >
            Inspect VIN
          </button>
        </div>
      </div>
    </article>
  )
}

