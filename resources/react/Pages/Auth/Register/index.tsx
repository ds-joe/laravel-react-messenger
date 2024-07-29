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
import { Row, Col, Form, FormGroup, FormControl, Alert } from "react-bootstrap";

// Icons
import { HiOutlineChatBubbleBottomCenter } from "react-icons/hi2";

// Types
import type { FormEvent } from "react";

const Register: RP = () => {
  const { data, setData, post, errors, processing } = useForm({
    name: "",
    email: "",
    password: "",
    confirm_password: ""
  });

  // Handle form submit
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    post(route('auth.register'));
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

              <h5 className="fw-normal my-4 pb-3">Sign up</h5>
              <Form className="d-flex flex-column gap-4" onSubmit={handleFormSubmit}>
                {Object.values(errors).length > 0 && (
                  <Alert variant="danger" >
                    {Object.values(errors)[0]}
                  </Alert>
                )}
                <Row className="gap-4 gap-lg-0">
                  <Col lg="6">
                    <FormGroup>
                      <FormControl
                        type='text'
                        placeholder="Full Name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        className={errors.name ? 'is-invalid' : ''}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <FormControl
                        type='email'
                        placeholder="Email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        className={errors.email ? 'is-invalid' : ''}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <FormControl
                    id='formControlLg'
                    type='password'
                    value={data.password}
                    placeholder="Password"
                    onChange={(e) => setData('password', e.target.value)}
                    className={errors.password ? 'is-invalid' : ''}
                  />
                </FormGroup>
                <FormGroup>
                  <FormControl
                    type='password'
                    placeholder="Confirm Password"
                    value={data.confirm_password}
                    onChange={(e) => setData('confirm_password', e.target.value)}
                    className={errors.confirm_password ? 'is-invalid' : ''}
                  />
                </FormGroup>

                <MDBBtn disabled={processing} className="mb-4 px-5 text-capitalize" color='dark' size='lg'>Register</MDBBtn>
              </Form>

              <p className="mb-5 pb-lg-2 d-flex align-items-center gap-1">
                Already have an account?
                <Link href={route("login")} className="text-primary">Login here</Link>
              </p>

            </MDBCardBody>
          </Col>

        </Row>
      </MDBCard>
    </MDBContainer>
  )
}

Register.layout = (page) => <AuthLayout children={page} title="Sign up" />

export default Register;
