import Container from '@/components/Container'
import BLOG from '@/blog.config'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'
import Map from '../components/Map'

export const Address = () => {
  const { locale } = useRouter()
  const t = lang[locale]
  const latitude = 36.88248668482869
  const longitude = 30.706879821630107
  const zoom = 16
  return (
    <Container title={BLOG.title} description={BLOG.description}>
      <div className='mb-8 md:mb-16 text-gray-600 dark:text-gray-200'>
        <h2 className='text-xl lg:text-3xl font-light text-center mb-4'>
          {t.WHERE.TITLE}
        </h2>
        <p className='max-w-screen-md font-light md:text-lg text-center mx-auto'>
          {t.WHERE.DESCRIPTION}
        </p>
        <p className='max-w-screen-md font-light md:text-lg text-center mx-auto'>
          {t.WHERE.TG_DESCRIPTION}
        </p>
      </div>
      <div className='mb-8 md:mb-16 text-gray-600 dark:text-gray-200'>
      <Map latitude={latitude} longitude={longitude} zoom={zoom} />
      </div>
    </Container>
  )
}

export default Address
