import { useField } from "remix-validated-form";

type HiddenInputProps = {
  name: string;
};

export const HiddenInput = ({ name,  }: HiddenInputProps) => {
  const { getInputProps } = useField(name);
  return (
    <input
      type="text"
      name={name}
      id={name}
      className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
      {...getInputProps({ id: name })}
    />
  );
};
