// Dependencies
import { useForm, Link } from "@inertiajs/react";

// Layout
import AuthLayout from "@/Layouts/Auth";

// Components
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage
} from 'mdb-react-ui-kit';
import { Row, Col, Form, FormGroup, FormControl, Alert, FormCheck, FormLabel } from "react-bootstrap";

// Icons
import { HiOutlineChatBubbleBottomCenter } from "react-icons/hi2";

// Types
import type { FormEvent } from "react";

const Login: RP = () => {
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
    <MDBContainer className="py-4">
      <MDBCard className="shadow-none">
        <Row className='g-0'>

          <Col md='6' className="d-none d-lg-inline-block">
            <MDBCardImage src='https://images.pexels.com/photos/7129718/pexels-photo-7129718.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="login form" className='rounded-start w-100' />
          </Col>

          <Col md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2 h1 text-dark fw-medium d-flex align-items-center gap-2 text-primary'>
                <HiOutlineChatBubbleBottomCenter />
                <span className="mb-0">Messenger</span>
              </div>

              <h5 className="fw-normal my-4 pb-3">Sign in</h5>
              <Form className="d-flex flex-column gap-4" onSubmit={handleFormSubmit}>
                {Object.values(errors).length > 0 && (
                  <Alert variant="danger" >
                    {Object.values(errors)[0]}
                  </Alert>
                )}
                <FormGroup>
                  <FormControl
                    type='email'
                    placeholder="Email"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    className={errors.email ? 'is-invalid' : ''}
                  />
                </FormGroup>
                <FormGroup>
                  <FormControl
                    type='password'
                    value={data.password}
                    placeholder="Password"
                    onChange={(e) => setData('password', e.target.value)}
                    className={errors.password ? 'is-invalid' : ''}
                  />
                </FormGroup>
                <FormGroup className="d-flex align-items-center">
                  <FormCheck
                    onChange={(e) => setData('remember', e.target.checked)}
                    checked={data.remember}
                    id="remember"
                    className={errors.password ? 'is-invalid' : ''}
                  />
                  <FormLabel className="m-0 p-0 user-select-none" htmlFor="remember">
                    Remember me
                  </FormLabel>
                </FormGroup>
                <MDBBtn disabled={processing} className="mb-4 px-5 text-capitalize" color='dark' size='lg'>Sign in</MDBBtn>
              </Form>

              <p className="mb-5 pb-lg-2 d-flex align-items-center gap-1">
                You don't have an account ?
                <Link href={route("register")} className="text-primary">Register here</Link>
              </p>

            </MDBCardBody>
          </Col>

        </Row>
      </MDBCard>
    </MDBContainer>
  )
}

Login.layout = (page) => <AuthLayout children={page} title="Sign in" />

export default Login;
