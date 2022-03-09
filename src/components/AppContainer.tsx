import '../style/objects/container.scss'


const AppContainer = ({ 
    children 
}: { 
    children: JSX.Element | JSX.Element[] 
}) => (
    <div className="o-container">{children}</div>
)

export default AppContainer

