import { Form } from "@remix-run/react";


interface FormCardButtonProps {
  batchId: string
}

export default function FormCardButton(props: FormCardButtonProps){
  const {batchId } =props

  return (
    <Form method="post">
      <input type='hidden' name="batchId" value={batchId}/>
      <button
        type="submit"
        aria-label="request commission"
        name="_action"
        value="request"
        className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-gray-900"
      >
        Request Commission
      </button>

    </Form>
  )

}