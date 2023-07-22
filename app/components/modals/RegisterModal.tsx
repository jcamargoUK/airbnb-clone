"use client";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import {
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";

import useRegisterModal from "../hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Inputs";
import { toast } from "react-hot-toast";

// define the RegisterModal component
const RegisterModal = () => {
  // define the state for the register modal
  const registerModal = useRegisterModal()
  // define the state for the loading
  const [isLoading, setIsLoading] = useState(false)

  // define the useForm hook to handle the form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    }
  })

  // define the onSubmit function to handle the submit event
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)
    axios.post("/api/register", data)
      .then(() => {
        registerModal.onClose()
      })
      .catch((err) => {
        toast.error("Something went wrong")
      })
      .finally(() => {
        setIsLoading(false)
      })

  }

  // define the body content for the modal
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading 
        title= "Wecome to Airbnb"
        subtitle= "Create an account"
      />
      <Input 
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      {/* <Input 
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input 
        id="password"
        type="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      /> */}
    </div>
  )
  return ( 
    <Modal
      disable={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLable="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent} secondaryActionLabel={""}    />
   );
}
 
export default RegisterModal;