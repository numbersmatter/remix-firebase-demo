import { withZod } from "@remix-validated-form/with-zod";
import { z } from "zod";
import { QuestionProps, QuestionType } from "./interfaces";


const constructTextValidator = ( fieldName: string, minLength: number, minMessage: string| undefined) =>{

  return withZod(
    z.object({
      [fieldName]: z.string().min(minLength, { message: minMessage }),
    }));
};

const createZodValidator =(fieldName: string,  type: QuestionType, questionProps: QuestionProps,  ) => {

  if(type === 'text-input'){
    return constructTextValidator(fieldName, questionProps.responseMinimum, questionProps.responseMinimumText )
  }

  
}