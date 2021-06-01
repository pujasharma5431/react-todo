import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {Button} from "@material-ui/core";

const ButtonComp = () => {
    return (

        <div className="btn">
            <Button
                style={{
                    color: "white",
                    fontSize: "18px"


                }}

                endIcon={<AddCircleOutlineIcon/>}
                variant="text"
            >ADD

            </Button>
        </div>


    )
};

export default ButtonComp;
