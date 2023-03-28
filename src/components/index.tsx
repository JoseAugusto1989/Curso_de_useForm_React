import * as React from "react";
import { useForm } from "react-hook-form";

let renderCount = 0;

type FormValues = {
  firstName: string,
  lastName: string,
  age: number,
}

export const Initial = () => {
  renderCount++;
  const { register, handleSubmit, watch, formState: {errors} } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: 0,
    }
  });

  const firstName = watch("firstName")

  return (
    <div>
      <form onSubmit={handleSubmit((data) => { console.log(data) })}>
        <input 
          {...register("firstName", { 
            required: {
              value: true,
              message: "This is required" 
            },
            validate: async (value) => {
              return value == 'bill' // example
            }
          })}
          placeholder="Nome" 
        />
            
        <p>{firstName ? firstName : "Valor padrão"}</p>
        <p>{errors.firstName?.message}</p>

        <input  
        {...register("lastName", { 
            required: "This is required.",
            minLength: {
                value: 4,
                message: "Min length is 4"
            } 
            }
        )}
        placeholder="Sobrenome" 
        />
        
        <p>{errors.lastName?.message}</p>

        <input 
        type="number" 
        {...register('age', { valueAsNumber: true })} 
        placeholder="Idade"
        />

        <input type="submit" />
      </form>
    </div>
  )
}