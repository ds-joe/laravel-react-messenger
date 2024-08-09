// Dependencies
import { usePage, useForm } from "@inertiajs/react";

// Components
import { CardTitle } from "@/Components/Global/Cards";
import Form, { FormInput, FormGroup, FormGroupDouble, FormErrors } from "@/Components/Global/Forms";
import { FormEvent } from "react";

const PersonalInformationTab: RC = () => {
  const { page_words, auth } = usePage().props as PageProps;
  const { data, setData, errors, post, processing } = useForm(Object.assign(auth.user, {
    password: "",
    confirm_password: "",
    avatar: null
  }));

  // Handle submit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    post(route('dashboard.settings.update.userInformation'));
  }

  return (
    <>
      <CardTitle>{page_words?.personal_information}</CardTitle>
      <Form className="mt-4" onSubmit={handleSubmit}>
        <FormErrors errors={errors} />
        <FormGroupDouble>
          <FormInput
            label={`${page_words?.full_name} *`}
            type="text"
            error={errors.full_name}
            value={data.full_name}
            onChange={(e) => setData('full_name', e.target.value)}
            required
          />
          <FormInput
            label={`${page_words?.email} *`}
            type="email"
            error={errors.email}
            value={data.email}
            onChange={(e) => setData('email', e.target.value)}
            required
          />
        </FormGroupDouble>
        <FormGroup>
          <FormInput
            label={`${page_words?.phone} *`}
            type="text"
            error={errors.phone}
            value={data.phone}
            onChange={(e) => setData('phone', e.target.value)}
            required
          />
        </FormGroup>
        <FormGroupDouble>
          <FormInput
            label={`${page_words?.password}`}
            type="password"
            error={errors.password}
            value={data.password}
            onChange={(e) => setData('password', e.target.value)}
          />
          <FormInput
            label={`${page_words?.confirm_password}`}
            type="password"
            error={errors.confirm_password}
            value={data.confirm_password}
            onChange={(e) => setData('confirm_password', e.target.value)}
          />
        </FormGroupDouble>
        <FormGroup className="mt-4">
          <button disabled={processing} className="btn btn-success btn-md w-fit">{page_words?.update}</button>
        </FormGroup>
      </Form>

    </>
  )
}


export default PersonalInformationTab;