// Dependencies
// import { useForm, Link } from "@inertiajs/react";

// Layout
import AuthLayout from "@/Layouts/Auth";

// Icons
// import { HiOutlineChatBubbleBottomCenter } from "react-icons/hi2";

// Types
// import type { FormEvent } from "react";

const Login: RP = () => {
  // const { data, setData, post, errors, processing } = useForm({
  //   email: "",
  //   password: "",
  //   remember: false
  // });

  // Handle form submit
  // const handleFormSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   post(route('auth.login'));
  // }

  return (
    <>

    </>
  )
}

Login.layout = (page) => <AuthLayout children={page} title="Sign in" />

export default Login;
