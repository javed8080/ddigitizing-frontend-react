import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FormProvider, useForm } from 'react-hook-form';
import CustomInputField from '../../components/global/CustomInputField/CustomInputField';

const Home = () => {

    const methods = useForm();


    const onSubmit = (data) => {
        console.log(data);

    }
    return (
        <div className='container-fluid'>
            <FormProvider {...methods}>
                <Form onSubmit={methods.handleSubmit(onSubmit)} className="mt-2 container">
                    <div className='row'>
                        <div className='com-md-12 col-lg-6 mb-2'>
                            <CustomInputField
                                label="First name"
                                placeholder="first name"
                                name="firstName"
                                type="text"
                                required={true}
                            />
                        </div>
                        <div className='com-md-12 col-lg-6 mb-2'>
                            <CustomInputField
                                label="First name"
                                placeholder="first name"
                                name="firstName"
                                type="text"
                                required={true}
                            />
                        </div>

                        <div className='com-md-12 col-lg-6 mb-2'>
                            <CustomInputField
                                label="First name"
                                placeholder="first name"
                                name="firstName"
                                type="text"
                                required={true}
                            />
                        </div>

                        <div className='com-md-12 col-lg-6 mb-2'>
                            <CustomInputField
                                label="First name"
                                placeholder="first name"
                                name="firstName"
                                type="text"
                                required={true}
                            />
                        </div>
                        <div className='com-md-12 col-lg-6 mb-2'>
                            <CustomInputField
                                label="First name"
                                placeholder="first name"
                                name="firstName"
                                type="text"
                                required={true}
                            />
                        </div>

                        <div className='com-md-12 col-lg-6 mb-2'>
                            <CustomInputField
                                label="First name"
                                placeholder="first name"
                                name="firstName"
                                type="text"
                                required={true}
                            />
                        </div>
                    </div>


                    <div className='col-12'>
                        <Button type="submit" className="btn btn-Secondary text-white py-3 fs-4 fw-bold">Sign up</Button>
                    </div>
                </Form>
            </FormProvider>
        </div>
    )
}

export default Home