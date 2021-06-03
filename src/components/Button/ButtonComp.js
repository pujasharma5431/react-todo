import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {Button} from "@material-ui/core";
import * as PropTypes from "prop-types";

const ButtonComp = ({color, text, endIcon,onClick}) => {

    return (
        <>
            <Button
                onClick={onClick}
                style={{
                backgroundColor: color
            }}
                  endIcon={endIcon}


                    className='btn'>


                {text}

            </Button>

        </>
    )
}
ButtonComp.defaultProps={
    color:"rgb(175,175,175)",
    endIcon:<AddCircleOutlineIcon/>
}

ButtonComp.prototype={
    text:PropTypes.string,
    color: PropTypes.string,
    onClick:PropTypes.func,
}

export default ButtonComp;
