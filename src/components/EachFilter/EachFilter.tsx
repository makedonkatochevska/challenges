import style from "../Filters/Filters.module.scss";

interface Prop {
  label: string;
  count: number;
  onClick: () => void;
  isActive: boolean;
}

export default function EachFilter({ label, count, onClick, isActive }: Prop) {
  return (
    <li>
      <div
        className={`${style.filterListInner} ${
          isActive ? style.activeFilter : ""
        }`}
        onClick={onClick}
      >
        <p>{label}</p>
        <button
          className={`${style.filterNumberBtn}  ${
            isActive ? style.activeButton : ""
          }`}
        >
          {count}
        </button>
      </div>
    </li>
  );
}
