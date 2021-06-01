import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {Button} from "@material-ui/core";
import * as PropTypes from "prop-types";

const ButtonComp = ({color, text, endIcon,click}) => {

    return (
        <>
            <Button
                onClick={click}
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
    color:"#c2185b",
    endIcon:<AddCircleOutlineIcon/>
}

ButtonComp.prototype={
    text:PropTypes.string,
    color: PropTypes.string,
    onClick:PropTypes.func,
}

export default ButtonComp;
