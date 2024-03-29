import React from 'react'
import type { ReactElement } from 'react'
import Head from 'next/head'
import BaseButton from '../components/BaseButton'
import CardBox from '../components/CardBox'
import SectionFullScreen from '../components/SectionFullScreen'
import CenterComponent from '../layouts/CenterComponent'
import { getPageTitle } from '../layouts/config/properties'

export default function Error() {
    return (
        <>
            <Head>
                <title>{getPageTitle('Error')}</title>
            </Head>

            <SectionFullScreen bg="purplePink">
                <CardBox
                    className="w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl"
                    footer={<BaseButton href="/" label="Done" color="danger" />}
                >
                    <div className="space-y-3">
                        <h1 className="text-2xl">Unhandled exception</h1>

                        <p>An Error Occurred</p>
                    </div>
                </CardBox>
            </SectionFullScreen>
        </>
    )
}

Error.getLayout = function getLayout(page: ReactElement) {
    return <CenterComponent>{page}</CenterComponent>
}
