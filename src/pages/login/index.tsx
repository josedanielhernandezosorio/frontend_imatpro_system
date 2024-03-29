import React from 'react'
import type { ReactElement } from 'react'
import Head from 'next/head'
import BaseButton from '../../components/BaseButton'
import CardBox from '../../components/CardBox'
import SectionFullScreen from '../../components/SectionFullScreen'
import CenterComponent from '../../layouts/CenterComponent'
import { Field, Form, Formik } from 'formik'
import FormField from '../../components/FormField'
import FormCheckRadio from '../../components/FormCheckRadio'
import BaseDivider from '../../components/BaseDivider'
import BaseButtons from '../../components/BaseButtons'
import { useRouter } from 'next/router'
import { getPageTitle } from '../../layouts/config/properties'

export default function Login() {

  const router = useRouter()

  const handleSubmit = () => {
    router.push('/')
  }

  return (
    <>
      <Head>
        <title>{getPageTitle('Login')}</title>
      </Head>

      <SectionFullScreen bg="purplePink">
        <CardBox className="w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl">
          <Formik
            initialValues={{ login: 'josedaniel.hernandez.osorio', password: 'bG1sL9eQ1uD2sK3b', remember: true }}
            onSubmit={() => handleSubmit()}
          >
            <Form>
              <FormField label="Login" help="Please enter your login">
                <Field name="login" />
              </FormField>

              <FormField label="Password" help="Please enter your password">
                <Field name="password" type="password" />
              </FormField>

              <FormCheckRadio type="checkbox" label="Remember">
                <Field type="checkbox" name="remember" />
              </FormCheckRadio>

              <BaseDivider />

              <BaseButtons>
                <BaseButton type="submit" label="Login" color="info" />
                <BaseButton href="/" label="Home" color="info" outline />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionFullScreen>
    </>
  )
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <CenterComponent>{page}</CenterComponent>
}
