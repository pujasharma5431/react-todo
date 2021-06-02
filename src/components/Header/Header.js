import PropTypes from 'prop-types'
import ButtonComp from "../Button/ButtonComp";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const Header = ({title}) => {
    const onClick = () => {
        console.log('clicked')

    }


    return (

        <header className="header">
            <h1>{title}</h1>
            <ButtonComp color="rgb(175,175,175)" text="Add" click={onClick} endIcon={<AddCircleOutlineIcon/>}/>
        </header>

    )

}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.prototype = {
    title: PropTypes.string.isRequired,
}


export default Header;
