import { useField } from "remix-validated-form";

/* eslint-disable-next-line */
export interface QuestionTextInputFormProps {
  name: string;
  label: string;
}

export function QuestionTextInputForm(props: QuestionTextInputFormProps) {
  const { name, label} =props;
  const { error, getInputProps } = useField(name);
  return (
    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
      >
        {label}
      </label>
      <div className="mt-1 sm:col-span-2 sm:mt-0">
        <input
          type="text"
          name="first-name"
          id="first-name"
          autoComplete="given-name"
          className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
          {...getInputProps({ id: name })}
        />
      </div>
      {error && <span className="mt-2 text-sm text-red-600">{error}</span>}
    </div>
  );
}

export default QuestionTextInputForm;
