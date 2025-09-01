import React from "react";

type Props = {
  label: string;
  hoveredLink: string | null;
  active?: any;
  setHoveredLink?: React.Dispatch<React.SetStateAction<string | null>>;
};

const Navlink = ({ label, hoveredLink, active, setHoveredLink }: Props) => {
  return (
    <div>
      <div
        onMouseEnter={() => setHoveredLink?.(label)}
        // onMouseLeave={() => setHoveredLink!(null)}
        className={`relative px-4 py-3 cursor-pointer text-lg ${
          hoveredLink
            ? hoveredLink === label
              ? "text-color-1"
              : "text-gray-400"
            : "text-color-1"
        }`}
      >
        {label}

        {active && (
          <div className="bg-color-1 w-3 h-3 rotate-45 z-40 absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2"></div>
        )}
      </div>
    </div>
  );
};

export default Navlink;
