import PropTypes from 'prop-types'
import ButtonComp from "../Button/ButtonComp";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const Header = ({title,onAdd,showAdd}) => {


    return (

        <header className="header">
            <h1>{title}</h1>
            <ButtonComp color={showAdd ? '#2e7d32':'#c2185b'}
                        text={ showAdd ?'Close':'Add'}
                        onClick={onAdd}
                        endIcon={<AddCircleOutlineIcon/>}/>
        </header>

    )

}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.prototype = {
    title: PropTypes.string.isRequired,
}


export default Header
