import { ValidatedForm, Validator } from "remix-validated-form";
import { FormSubmitButton } from "../FormSubmitButton";
import { TextFormInput } from "../TextFormInputs";


export interface QuestionFormProps {
  validator: Validator<unknown>
}


export default function QuestionForm(props: QuestionFormProps){
  const {validator} = props;

  return (
    <ValidatedForm
    validator={validator}
    method="post"
    >
        <div className="space-y-6 sm:space-y-5">
          <TextFormInput name="title" label="Title" />
        </div>

        <FormSubmitButton />
  </ValidatedForm>

  )

}