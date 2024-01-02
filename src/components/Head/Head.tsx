import { Helmet } from 'react-helmet-async'
import { APP_TITLE } from '@/config'

type HeadProps = {
  title?: string
  description?: string
}

const defaultMeta = {
  title: APP_TITLE,
  description: ''
}

export const Head = ({
  title = defaultMeta.title,
  description = defaultMeta.description
}: HeadProps) => {
  return (
    <Helmet title={`${title ? title + ' |' : ''}${APP_TITLE}`}>
      <meta name="description" content={description} />
    </Helmet>
  )
}
