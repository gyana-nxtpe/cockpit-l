import * as React from "react";
import { ChromePicker } from "react-color";

// type Props = {
//   title: string;
//   onChange: (val: string) => void;
// };
const ColorPicker = ({
  title,
  value,
  onChange,
}: {
  title: string;
  value: string;
  onChange: (val: string) => void;
}) => {
  const [hex, setHex] = React.useState(value);
  const [displayPicker, setDisplayPicker] = React.useState(false);

  const handleChange = (color) => {
    setHex(color.hex);
    onChange(color.hex); // Propagate the change up to the parent component.
  };

  const handleClick = () => setDisplayPicker((prev) => !prev);
  const handleClose = () => setDisplayPicker(false);

  // To ensure the color picker updates when the value prop changes (for controlled usage),
  // we use an effect hook to update the internal state when the value prop changes.
  React.useEffect(() => {
    setHex(value);
  }, [value]);

  // Prevent Enter keydown event from propagating
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        event.stopPropagation();
        handleClose();
      }
    };

    if (displayPicker) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [displayPicker]); // Effect runs when displayPicker changes

  return (
    <div className="">
      <div className="border rounded flex justify-between items-center p-2 max-w-xs ">
        <p className="font-medium">{title}</p>
        <div
          className="flex items-center gap-2 bg-slate-200 p-1 cursor-pointer rounded"
          onClick={handleClick}
        >
          <div
            style={{ backgroundColor: hex }}
            className="h-6 w-6 rounded"
          ></div>
          <div>{hex}</div>
        </div>
      </div>

      {displayPicker && (
        <div className="absolute z-10">
          <div className="fixed inset-0 " onClick={handleClose}></div>
          <ChromePicker
            onChange={handleChange}
            color={hex}
            className="ml-24"
            disableAlpha
          />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
