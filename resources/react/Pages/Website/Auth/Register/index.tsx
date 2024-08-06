// Dependencies
import { useForm, Link, usePage } from "@inertiajs/react";

// Layout
import AuthLayout from "@/Layouts/Auth";

// Components
import Card, { CardBody, CardSubtitle, CardTitle } from "@/Components/Global/Cards";
import Form, { FormErrors, FormGroup, FormInput, FormGroupDouble } from "@/Components/Global/Forms";

// Icons
import { HiUserPlus } from "react-icons/hi2";

// Types
import type { FormEvent } from "react";

// Assets
import authImage from "~/images/auth/auth-register.svg";

const Register: RP = () => {
  const { page_words } = usePage().props as PageProps;
  const { data, setData, post, errors, processing } = useForm({
    full_name: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: ""
  });

  // Handle form submit
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    post(route('auth.register'));
  }

  return (
    <Card className="grid lg:grid-cols-2 min-h-[38rem]">
      <img
        src={authImage}
        className="w-full h-full bg-base-200"
      />
      <CardBody >
        <div>
          <h1 className="text-2xl font-semibold h-fit">{import.meta.env.VITE_APP_NAME}</h1>
          <CardSubtitle >{page_words?.welcome_back}, <Link disabled={processing} href={route('login')} className="text-primary hover:underline">{page_words?.already_have_an_account}.</Link></CardSubtitle>
        </div>
        <Form className="mt-12" onSubmit={handleFormSubmit}>
          <CardTitle className="mb-2">{page_words?.sign_up}</CardTitle>
          <FormErrors errors={errors} />
          <FormGroup>
            <FormInput
              type="text"
              label={page_words?.full_name}
              error={errors.full_name}
              value={data.full_name}
              onChange={(e) => setData('full_name', e.target.value)}
              required
            />

          </FormGroup>
          <FormGroup>
            <FormInput
              type="email"
              label={page_words?.email}
              error={errors.email}
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormInput
              type="number"
              label={page_words?.phone}
              error={errors.phone}
              value={data.phone}
              onChange={(e) => setData('phone', e.target.value)}
              required
            />
          </FormGroup>
          <FormGroupDouble>
            <FormInput
              type="password"
              label={page_words?.password}
              error={errors.password}
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              required
            />
            <FormInput
              type="password"
              label={page_words?.confirm_password}
              error={errors.confirm_password}
              value={data.confirm_password}
              onChange={(e) => setData('confirm_password', e.target.value)}
              required
            />
          </FormGroupDouble>
          <FormGroup className="mt-4">
            <button disabled={processing} className="btn btn-primary"><HiUserPlus />{page_words?.sign_up}</button>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  )
}

Register.layout = (page) => <AuthLayout children={page} title={page.props.page_words?.sign_up} />

export default Register;
