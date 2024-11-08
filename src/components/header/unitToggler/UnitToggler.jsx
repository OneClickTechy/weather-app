import { useGeoContext } from "../../../context/geoContext";

const UnitToggler = () => {
  const { unit, handleUnit } = useGeoContext()
  return (
    <div className="flex justify-center items-center gap-2 lg:row-start-1 lg:row-end-1 lg:col-span-2">
      <button className={`${unit === "Metric" ? "bg-btn-primary-bg text-btn-primary-text" : "bg-btn-secondary-bg text-btn-secondary-text" }  border border-shadow p-1 px-2 rounded-2xl`} onClick={() => handleUnit("Metric")}>°C, m/s</button>
      <button className={`${unit === "Imperial" ? "bg-btn-primary-bg text-btn-primary-text" : "bg-btn-secondary-bg text-btn-secondary-text" }  border border-shadow p-1 px-2 rounded-2xl`} onClick={() => handleUnit("Imperial")}>°F, mph</button>
    </div>
  );
};

export default UnitToggler;
