import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { AnyZodObject, ZodEffects } from "zod";

const useZodForm = <T extends FieldValues>(
  schema: AnyZodObject | ZodEffects<AnyZodObject>,
) => {
  return useForm<T>({ resolver: zodResolver(schema) });
};

export default useZodForm;
