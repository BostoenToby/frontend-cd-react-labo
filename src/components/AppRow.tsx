import '../style/objects/row.scss' //can be accessed elsewhere

const AppRow = ({ 
    children 
}: { 
    children: JSX.Element | JSX.Element[] 
}) => (
<div className="o-row">{ children }</div>

)

// door ( ) te gebruiken idpv { } return je alles direct

export default AppRow

