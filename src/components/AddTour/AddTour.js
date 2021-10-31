import React from 'react';
import { useForm } from "react-hook-form";
import './AddTour.css'

const AddTour = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data);
        fetch(`https://fierce-temple-41087.herokuapp.com/services`, {
            method: "POST",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((result) => {
            // console.log(result);
            if(result.insertedId){
                reset();
            }
        })
    };
    return (
        <div className="bg-dark text-light my-5 py-3 add-tour m-auto">
            <h2 className="mt-5">Add Tour</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input className="p-2 m-2 form-control w-50 m-auto"  {...register("name")} placeholder="name" />
                <br />
                <input className="p-2 m-2 form-control w-50 m-auto" type= "url"  {...register("img")} placeholder="image" />
                <br />
                <input className="p-2 m-2 form-control w-50 m-auto" {...register("cost", { required: true })} placeholder="cost" />
                <br />
                <input className="p-2 m-2 form-control w-50 m-auto" {...register("description", { required: true })} placeholder="description" />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <br />
                <input className="btn btn-danger mt-4" type="submit" />
            </form>
        </div>
    );
};

export default AddTour;