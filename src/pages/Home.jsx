import React from 'react';
import { Button } from 'react-bootstrap';
import { FormProvider, useForm } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import CustomInputField from '../components/global/CustomInputField/CustomInputField';
import CustomDropzone from './../components/global/CustomInputField/CustomDropzone';

const Home = () => {

    const methods = useForm();


    const onSubmit = (data) => {
        console.log(data);

    }
    return (
        <div className='container-fluid'>
            <FormProvider {...methods}>
                <Form onSubmit={methods.handleSubmit(onSubmit)} className="login-form-container">

                    <CustomDropzone />
                    <div className="mb-4">
                        <CustomInputField
                            label="First name"
                            placeholder="first name"
                            name="firstName"
                            type="text"
                            required={true}
                        />
                    </div>

                    <Button type="submit" className="btn btn-primary text-white py-3 fs-4 fw-bold">Sign up</Button>
                </Form>
            </FormProvider>
        </div>
    )
}

export default Home