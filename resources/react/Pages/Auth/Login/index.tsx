// Dependencies
import { useForm, Link, usePage } from "@inertiajs/react";

// Layout
import AuthLayout from "@/Layouts/Auth";

// Components
import Card, { CardBody, CardSubtitle, CardTitle } from "@/Components/Global/Cards";
import Form, { FormErrors, FormGroup, FormInput, FormCheck } from "@/Components/Global/Forms";

// Icons
import { HiLockOpen } from "react-icons/hi2";

// Types
import type { FormEvent } from "react";

// Assets
import authImage from "~/images/auth/auth-network.svg";

const Login: RP = () => {
  const { page_words } = usePage().props as PageProps;
  const { data, setData, post, errors, processing } = useForm({
    email: "",
    password: "",
    remember: false
  });

  // Handle form submit
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    post(route('auth.login'));
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
          <CardSubtitle >{page_words?.welcome_back}, <Link disabled={processing} href={route('register')} className="text-primary hover:underline">{page_words?.create_new_account}</Link></CardSubtitle>
        </div>
        <Form className="mt-12" onSubmit={handleFormSubmit}>
          <CardTitle className="mb-2">{page_words?.sign_in}</CardTitle>
          <FormErrors errors={errors} />
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
              type="password"
              label={page_words?.password}
              error={errors.password}
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormCheck
              label={page_words?.remember_me}
              className=" checkbox-sm checkbox-primary"
              checked={data.remember}
              onChange={(e) => setData('remember', e.target.checked)}
            />
          </FormGroup>
          <FormGroup className="mt-2">
            <button disabled={processing} className="btn btn-primary"><HiLockOpen />{page_words?.sign_in}</button>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  )
}

Login.layout = (page) => <AuthLayout children={page} title={page.props.page_words?.sign_in} />

export default Login;
