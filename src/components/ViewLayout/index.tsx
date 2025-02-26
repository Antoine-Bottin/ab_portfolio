import { PropsWithChildren } from 'react'

import './styles.scss'

const ViewLayout = ({ children }: PropsWithChildren) => {
    return <div className="view-layout-component">{children}</div>
}

export default ViewLayout
