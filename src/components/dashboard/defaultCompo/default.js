import React from 'react';
import { Button, Form } from 'react-bootstrap';

import { FormProvider, useForm } from 'react-hook-form';

const Default = () => {

    const methods = useForm();


    const onSubmit = (data) => {
        console.log(data);
    }

    return (

        <FormProvider {...methods}>
           
           <Form   onSubmit={methods.handleSubmit(onSubmit)} className="login-form-container">
           <div className="mb-4">

            dsadasd asdasddsa dasd asd dsa dasdasdasd asd asdasdas
                                {/* <CustomInputField
                                    label="First name"
                                    placeholder="first name"
                                    name="firstName"
                                    type="text"
                                    required={true}
                                /> */}
                            </div>


           <Button
            type="submit" className="btn btn-primary text-white py-3 fs-4 fw-bold">Sign up</Button>
                        </Form>
                        </FormProvider>

    );
};

export default Default;