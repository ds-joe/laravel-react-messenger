// Dependencies
// import { useForm, Link } from "@inertiajs/react";

// Layout
import AuthLayout from "@/Layouts/Auth";

// Icons
// import { HiOutlineChatBubbleBottomCenter } from "react-icons/hi2";

// Types
// import type { FormEvent } from "react";

const Register: RP = () => {
  // const { data, setData, post, errors, processing } = useForm({
  //   name: "",
  //   email: "",
  //   password: "",
  //   confirm_password: ""
  // });

  // Handle form submit
  // const handleFormSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   post(route('auth.register'));
  // }

  return (
    <></>
  )
}

Register.layout = (page) => <AuthLayout children={page} title="Sign up" />

export default Register;
